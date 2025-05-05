import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Eliminada la variable siteUrl

export const metadata: Metadata = {
  // Título: Conciso, con palabras clave principales y marca
  title: 'Abogados Laborales y Médico Legista | Aiello, Argenio & Asoc.',
  // Descripción: Atractiva, clara, con llamado a la acción implícito (longitud ideal < 160 caracteres)
  description: 'Estudio jurídico Aiello, Argenio & Asoc. +20 años defendiendo tus derechos en accidentes laborales y despidos. Asesoramiento integral legal y médico. Consulta ahora.',
  // Palabras clave relevantes para SEO
  keywords: ['abogados laborales', 'médico legista', 'accidentes de trabajo', 'ART', 'despidos', 'derecho laboral', 'Buenos Aires', 'CABA', 'estudio jurídico', 'buenos aires' , 'caba' , 'gba' ,'Aiello Argenio'],
  // Iconos
  icons: [
    { rel: 'icon', url: '/favicon.ico', sizes: 'any' },
    { rel: 'icon', url: '/favicon.png', type: 'image/png' },
  ],
  // Metadatos Open Graph (para WhatsApp, Facebook, etc.) - Simplificado
  openGraph: {
    title: 'Abogados Laborales y Médico Legista | Aiello, Argenio & Asoc.',
    description: 'Defendemos tus derechos en accidentes laborales y despidos. Asesoramiento integral legal y médico con +20 años de experiencia. Consulta ahora.',
    // url: siteUrl, // Eliminado
    siteName: 'Aiello, Argenio & Asociados',
    // images: [ ... ], // Eliminado
    locale: 'es_AR',
    type: 'website',
  },
  // Metadatos Twitter Card (para compartir en Twitter) - Simplificado
  twitter: {
    card: 'summary', // Cambiado a 'summary' ya que no hay imagen grande
    title: 'Abogados Laborales y Médico Legista | Aiello, Argenio & Asoc.',
    description: 'Defendemos tus derechos en accidentes laborales y despidos. Asesoramiento integral legal y médico con +20 años de experiencia. Consulta ahora.',
    // images: [ ... ], // Eliminado
  },
  // Opcional: Especificar el autor o publicador
  authors: [{ name: 'Aiello, Argenio & Asociados' }],
  publisher: 'Aiello, Argenio & Asociados',
  // Robots: Controla cómo los motores de búsqueda rastrean e indexan
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // alternates: { canonical: siteUrl }, // Eliminado
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}