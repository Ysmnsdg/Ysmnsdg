import { dentist, fullName } from "@/data/dentist";
import type { Metadata } from "next";

const siteName = dentist.practiceName;

export function createMetadata({
  title,
  description,
  path = "",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const pageTitle = title ? `${title} · ${fullName}` : `${fullName} · ${dentist.tagline}`;
  const desc =
    description ??
    `${fullName} — ${dentist.specialty}. Private aesthetic and restorative dentistry.`;
  const url = `${dentist.siteUrl}${path}`;

  return {
    title: pageTitle,
    description: desc,
    metadataBase: new URL(dentist.siteUrl),
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: pageTitle,
      description: desc,
      url,
      siteName,
      locale: dentist.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: desc,
    },
  };
}

export function dentistJsonLd() {
  const hasAddress =
    dentist.address.line1 &&
    dentist.address.city &&
    !dentist.address.city.includes("Your City");

  const person = {
    "@type": "Person",
    name: fullName,
    jobTitle: dentist.specialty,
    url: dentist.siteUrl,
    image: `${dentist.siteUrl}${dentist.portrait.src}`,
    telephone: dentist.phone.includes("000") ? undefined : dentist.phone,
    email: dentist.email.includes("example") ? undefined : dentist.email,
  };

  const business = {
    "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
    name: dentist.practiceName,
    url: dentist.siteUrl,
    description: dentist.tagline,
    telephone: dentist.phone.includes("000") ? undefined : dentist.phone,
    email: dentist.email.includes("example") ? undefined : dentist.email,
    founder: person,
    ...(hasAddress
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: dentist.address.line1,
            addressLocality: dentist.address.city,
            addressRegion: dentist.address.region,
            postalCode: dentist.address.postalCode,
            addressCountry: dentist.address.country,
          },
        }
      : {}),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [person, business].map(stripUndefined),
  };
}

function stripUndefined<T extends Record<string, unknown>>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  if (!items.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleJsonLd(article: {
  title: string;
  description: string;
  date: string;
  author: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: { "@type": "Person", name: article.author },
    mainEntityOfPage: `${dentist.siteUrl}/journal/${article.slug}`,
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${dentist.siteUrl}${item.path}`,
    })),
  };
}
