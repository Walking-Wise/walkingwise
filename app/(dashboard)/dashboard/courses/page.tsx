import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getUser, getTeamForUser } from "@/lib/db/queries";
import styles from "@/app/styles/ResourceCard.module.css";
import CreateGroupForm from "./CreateGroupForm";

const courses = [
  {
    id: "course-1",
    name: "Part 1: The Groomers",
    description: "Learn the basics of something cool.",
    lessons: [],
    students: [],
    courseImage:
      "https://walking-wise-assets.s3.amazonaws.com/wp-content/uploads/20241217202646/eLearning-The-Groomers-1.jpg", // Dummy image
  },
  {
    id: "course-2",
    name: "Part 2: The Vulnerable",
    description: "Dive deeper into intermediate topics.",
    lessons: [],
    students: [],
    courseImage:
      "https://walking-wise-assets.s3.amazonaws.com/wp-content/uploads/20241217202651/eLearning-The-Vulnerable-1.jpg",
  },
  {
    id: "course-3",
    name: "Part 3: The Predators",
    description: "Master advanced concepts with hands-on examples.",
    lessons: [],
    students: [],
    courseImage:
      "https://walking-wise-assets.s3.amazonaws.com/wp-content/uploads/20241217201346/eLearning-The-Predators-1.jpg",
  },
];

export default async function CoursesPage() {
  const user = await getUser();
  if (!user) redirect("/sign-in");

  const teamData = await getTeamForUser(user.id);
  if (!teamData) throw new Error("Team not found");

  // Redirect to pricing if user is on free plan
  if (!teamData.planName) {
    redirect("/pricing");
  }

  const firstName = user.name?.split(" ")[0] || "";
  const lastName = user.name?.split(" ").slice(1).join(" ") || "";

  // If user doesn't have a group, show the group creation form
  if (!user.groupId) {
    return (
      <section className="flex-1 p-4 lg:p-8">
        <h1 className="text-lg lg:text-2xl font-medium text-gray-900 mb-6">
          Create Your Group
        </h1>
        <CreateGroupForm
          userId={user.id}
          email={user.email}
          firstName={firstName}
          lastName={lastName}
        />
      </section>
    );
  }

  return (
    <section className="flex-1 p-4 lg:p-8">
      <h1 className="text-lg lg:text-2xl font-medium text-gray-900 mb-6">
        All Courses
      </h1>
      <div className={styles.resourceGrid}>
        {courses.map((course) => (
          <Link key={course.id} href={`/dashboard/courses/${course.id}`}>
            <article className={styles.card}>
              <Image
                src={course.courseImage}
                alt={`${course.name} cover`}
                width={400}
                height={225}
                className={styles.cardImage}
              />
              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>{course.name}</h2>
                <p className={styles.cardText}>{course.description}</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
