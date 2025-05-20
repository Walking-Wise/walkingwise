import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { getTeamForUser, getUser } from "@/lib/db/queries";
import { redirect } from "next/navigation";
import styles from "@/app/styles/ResourceCard.module.css";

async function getPresentations() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/presentations`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch presentations');
  return res.json();
}

export default async function PresentationsPage() {
  const user = await getUser();
  if (!user) redirect("/sign-in");
  
  const teamData = await getTeamForUser(user.id);
  if (!teamData) throw new Error("Team not found");
  
  const presentations = await getPresentations();
  const isFreeUser = !teamData.planName;

  return (
    <section className="flex-1 p-4 lg:p-8">
      <h1 className="text-lg lg:text-2xl font-medium text-gray-900 mb-6">
        Classroom Presentations
      </h1>
      <p className="text-gray-700 mb-8 max-w-2xl">
        Each of these presentations covers a critical topic to help students
        understand, recognize, and prevent sex trafficking. Use them in your
        classroom to start important conversations.
      </p>

      <div className={styles.resourceGrid}>
        {presentations.map((presentation: any, index: number) => (
          <Link
            key={presentation.id}
            href={isFreeUser && index > 0 ? '/pricing' : `/dashboard/presentations/${presentation.id}`}
          >
            <article className={styles.card}>
              {presentation.imageUrl && (
                <img
                  src={presentation.imageUrl}
                  alt={presentation.name}
                  className={styles.cardImage}
                />
              )}
              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>
                  {presentation.name}
                  {isFreeUser && index > 0 && (
                    <span className="ml-2 text-sm text-orange-500">
                      (Upgrade to Access)
                    </span>
                  )}
                </h2>
                <p className={styles.cardText}>
                  {presentation.description}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
