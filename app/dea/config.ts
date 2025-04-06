import { siteConfig } from "@/config";
import { Metadata } from "next";

// Content folder
export const contentForlder = "/content/dea";

// Blog Config
export const blog = {
  title: "Guías integrales sobre DEA",
  description:
    "Guías integrales sobre discalculia, dislexia, disgrafía y disortografía. Estrategias prácticas para docentes y familias.",
  keywords: [
    "discalculia",
    "dislexia",
    "disgrafía",
    "disortografía",
    "educación",
    "estrategias de aprendizaje",
    "apoyo escolar",
  ],
  url: `${siteConfig.url}/dea`,
  pageSize: 10,
};

// Metadata for SEO
export const metadata: Metadata = {
  title: `${siteConfig.title}: ${blog.title}`,
  description: blog.description,
  keywords: blog.keywords,
  openGraph: {
    title: `${siteConfig.title}: ${blog.title}`,
    description: blog.description,
    url: "/dea",
    type: "website",
  },
  twitter: {
    title: `${siteConfig.title}: ${blog.title}`,
    description: blog.description,
  },
};
