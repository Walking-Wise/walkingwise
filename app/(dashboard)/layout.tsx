// app/layout.tsx (Server Component)
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.walkingwise.com"),
  title: "Walking Wise",
  description: "Build an Anti-trafficking culture with Walking Wise",
  openGraph: {
    type: "website",
    url: "https://your-domain.com",
    title: "Walking Wise",
    description: "Build an Anti-trafficking culture with Walking Wise",
    images: [
      "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website+Hero+Banners+300dpi/HOME_300dpi_1200x511_TEXT.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Walking Wise",
    description: "Build an Anti-trafficking culture with Walking Wise",
    images: [
      "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website+Hero+Banners+300dpi/HOME_300dpi_1200x511_TEXT.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
