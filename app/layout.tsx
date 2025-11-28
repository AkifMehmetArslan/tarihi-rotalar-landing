import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Tarihi Rotalar - Türkiye'nin Tarihi Sokaklarında Rehberli Geziler",
    description: "Türkiye'nin tarihi sokaklarında, kendi rehberinizle gezer gibi dolaşın. Küratörlü tarihi yürüyüş rotaları, hikayeler ve tarihi bilgiler ile iOS ve Android'de.",
    keywords: ["tarihi rotalar", "tarihi geziler", "türkiye", "yürüyüş rotaları", "tarihi mekanlar", "gezi rehberi"],
    authors: [{ name: "Tarihi Rotalar" }],
    openGraph: {
        title: "Tarihi Rotalar - Türkiye'nin Tarihi Sokaklarında Rehberli Geziler",
        description: "Türkiye'nin tarihi sokaklarında, kendi rehberinizle gezer gibi dolaşın.",
        type: "website",
        locale: "tr_TR",
    },
    twitter: {
        card: "summary_large_image",
        title: "Tarihi Rotalar",
        description: "Türkiye'nin tarihi sokaklarında, kendi rehberinizle gezer gibi dolaşın.",
    },
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 1,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="tr">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
