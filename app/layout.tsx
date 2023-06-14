import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Uncut Video | Film & Photography",
    template: "%s | uncut.video",
  },
  description:
    "Unleashing creativity through an uncut vision of film and photography. We're creating and sharing raw, unfiltered visual stories.",
  openGraph: {
    title: "Uncut Video | Film & Photography",
    description:
      "Specializing in unedited and unfiltered film and photography. We showcase raw talent and authentic visual narratives in their purest form.",
    url: "https://uncut.video",
    siteName: "Uncut Video",
    images: [
      {
        url: "https://uncut.video/og.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Uncut Video | Film & Photography",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.jpg",
  },
};

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
      </head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {children}
      </body>
    </html>
  );
}
 
