import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:
      "Sadman Sobhan - Senior Software Engineer | Backend & Full-Stack Developer",
    template: "%s | Sadman Sobhan",
  },
  description:
    "Senior Software Engineer with 9+ years of experience building resilient, scalable backend systems. Expert in Java, Spring Boot, React, PostgreSQL, and cloud technologies. Available for opportunities.",
  keywords: [
    "Senior Software Engineer",
    "Backend Developer",
    "Full-Stack Developer",
    "Java Developer",
    "Spring Boot",
    "React",
    "PostgreSQL",
    "Microservices",
    "Cloud Architecture",
    "Bangladesh Software Engineer",
  ],
  authors: [{ name: "Sadman Sobhan" }],
  creator: "Sadman Sobhan",
  publisher: "Sadman Sobhan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sadmansobhan.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sadman Sobhan - Senior Software Engineer",
    description:
      "I build resilient backend systems that scale. 9+ years of experience in Java, Spring Boot, and full-stack development.",
    url: "https://sadmansobhan.com",
    siteName: "Sadman Sobhan Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sadman Sobhan - Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sadman Sobhan - Senior Software Engineer",
    description:
      "I build resilient backend systems that scale. 9+ years of experience in Java, Spring Boot, and full-stack development.",
    images: ["/og-image.jpg"],
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
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VSQQQDSJXV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VSQQQDSJXV');
          `}
        </Script>

        {/* Structured Data - Person Schema */}
        <Script id="structured-data" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Sadman Sobhan",
            jobTitle: "Senior Software Engineer",
            description:
              "Senior Software Engineer with 9+ years of experience building resilient, scalable backend systems",
            url: "https://sadmansobhan.com",
            image: "https://sadmansobhan.com/profile.jpg",
            sameAs: [
              "https://github.com/imran110219",
              "https://medium.com/@imran110219",
              "https://www.hackerrank.com/profile/imran110219",
            ],
            knowsAbout: [
              "Java",
              "Spring Boot",
              "React",
              "PostgreSQL",
              "Microservices Architecture",
              "Cloud Computing",
              "Backend Development",
              "Full-Stack Development",
            ],
            email: "imran110219@gmail.com",
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "Educational Institution",
            },
            worksFor: {
              "@type": "Organization",
              name: "Independent Software Engineer",
            },
          })}
        </Script>
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
