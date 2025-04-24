import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { getClassroomPresentations } from "@/lib/db/queries";

export default async function PresentationsPage() {
  const presentations = await getClassroomPresentations();

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

      <div className="grid gap-6 md:grid-cols-2">
        {presentations.map((presentation) => (
          <Link
            key={presentation.id}
            href={`/dashboard/presentations/${presentation.id}`}
          >
            <Card className="pt-0 pb-4 hover:shadow-md transition-shadow cursor-pointer h-full overflow-hidden">
              {presentation.imageUrl && (
                <img
                  src={presentation.imageUrl}
                  alt={presentation.name}
                  className="w-full object-cover"
                />
              )}
              <CardHeader>
                <CardTitle>{presentation.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 line-clamp-4">
                  {presentation.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
