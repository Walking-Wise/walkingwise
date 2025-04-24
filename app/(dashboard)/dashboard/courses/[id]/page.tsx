'use client';

export default function CoursePlayerPage() {
  return (
    <div className="flex-1 p-4 lg:p-8">
      <h1 className="text-lg lg:text-2xl font-medium text-gray-900 mb-6">
        Course Player
      </h1>
      <div className="aspect-video w-full max-w-5xl mx-auto shadow-lg border">
        <iframe
          src="/course-1/index.html"
          className="w-full h-full"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}




// 06f21d28-dc2b-448f-900a-f187ebafcec4.JbsfnBY5xCzrNPBiewZIHmek5YsL0pbxU0jeedSaRco4lp