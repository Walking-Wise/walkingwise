import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const courses = [
  {
    id: "course-1",
    name: "Part 1: The Groomers",
    description: "Learn the basics of something cool.",
    lessons: [],
    students: [],
    courseImage: "https://walking-wise-assets.s3.amazonaws.com/wp-content/uploads/20241217202646/eLearning-The-Groomers-1.jpg", // Dummy image
  },
  {
    id: "course-2",
    name: "Part 2: The Vulnerable",
    description: "Dive deeper into intermediate topics.",
    lessons: [],
    students: [],
    courseImage: "https://walking-wise-assets.s3.amazonaws.com/wp-content/uploads/20241217202651/eLearning-The-Vulnerable-1.jpg",
  },
  {
    id: "course-3",
    name: "Part 3: The Predators",
    description: "Master advanced concepts with hands-on examples.",
    lessons: [],
    students: [],
    courseImage: "https://walking-wise-assets.s3.amazonaws.com/wp-content/uploads/20241217201346/eLearning-The-Predators-1.jpg",
  },
];

export default function CoursesPage() {
  return (
    <section className="flex-1 p-4 lg:p-8">
      <h1 className="text-lg lg:text-2xl font-medium text-gray-900 mb-6">
        All Courses
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Link key={course.id} href={`/dashboard/courses/${course.id}`}>
            <Card className="cursor-pointer transition-shadow hover:shadow-md overflow-hidden p-0">
              <CardHeader className="p-0">
                <Image
                  src={`${course.courseImage}`}
                  alt={`${course.name} cover`}
                  width={400}
                  height={200}
                  className="w-full object-cover rounded-t-md"
                />
              </CardHeader>
              <CardContent className="pt-0 px-4 pb-4">
                <CardTitle className="mb-2">{course.name}</CardTitle>
                <p className="text-sm text-gray-600 line-clamp-1">{course.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
