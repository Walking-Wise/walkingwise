import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const guideUrl =
  "https://walking-wise-assets.s3.amazonaws.com/wp-content/uploads/20250305211440/Walking_Wise_Education_Guide-Child_Sex_Trafficking-3-5-2025.pdf";

async function fetchPresentation(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/presentations/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) return null;
  return res.json();
}

export default async function PresentationPage({
  params,
}: {
  params: { id: string };
}) {
  const presentation = await fetchPresentation(params.id);
  if (!presentation) notFound();

  return (
    <section className="flex-1 p-4 lg:p-8 max-w-5xl mx-auto">
      <Tabs defaultValue="presentation" className="w-full">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-lg lg:text-2xl font-medium text-gray-900">
            {presentation.name}
          </h1>
          <TabsList className="flex border rounded-md overflow-hidden">
            <TabsTrigger
              value="presentation"
              className="px-4 py-2 text-sm font-medium border-r last:border-r-0 data-[state=active]:bg-blue-100"
            >
              Presentation
            </TabsTrigger>
            <TabsTrigger
              value="tools"
              className="px-4 py-2 text-sm font-medium data-[state=active]:bg-blue-100"
            >
              Teacher Tools
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Student-facing Presentation (forceMount to persist iframe) */}
        <TabsContent value="presentation" className="space-y-4" forceMount>
          {presentation.powerpoint?.fileUrl ? (
            <>
              <iframe
                src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
                  presentation.powerpoint.fileUrl
                )}`}
                className="w-full aspect-video border rounded-md"
                title={presentation.name}
              />
              <a
                href={presentation.powerpoint.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                Download PowerPoint
              </a>
            </>
          ) : (
            <p className="text-gray-600">Presentation file not available.</p>
          )}
        </TabsContent>

        {/* Teacher Tools */}
        <TabsContent value="tools" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Teacher Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-sm text-gray-700">
              {presentation.courseUrl && (
                <div>
                  <strong className="block mb-1">📘 Online Course</strong>
                  <a
                    href={presentation.courseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Take the online course for this module
                  </a>
                </div>
              )}

              {(presentation.speakerNotes || presentation.handouts?.length) && (
                <div>
                  <strong className="block mb-1">
                    🗒️ Speaker Notes & Handouts
                  </strong>
                  <ul className="list-disc list-inside space-y-1">
                    {presentation.speakerNotes?.fileUrl && (
                      <li>
                        <a
                          href={presentation.speakerNotes.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Speaker Notes (PDF)
                        </a>
                      </li>
                    )}
                    {presentation.handouts?.map((handout: any) => (
                      <li key={handout.id}>
                        <a
                          href={handout.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {handout.title} (PDF)
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <strong className="block mb-1">📄 Education Guide</strong>
                <a
                  href={guideUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Download Education Guide (PDF)
                </a>
              </div>

              {presentation.video?.id && (
                <div>
                  <strong className="block mb-1">🎥 Accompanying Video</strong>
                  <a
                    href={`/dashboard/videos?id=${presentation.video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Watch Video in New Tab
                  </a>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
}
