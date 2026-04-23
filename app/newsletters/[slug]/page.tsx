import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllNewsletters, getNewsletter } from "@/lib/newsletters";

export async function generateStaticParams() {
  const newsletters = getAllNewsletters();
  return newsletters.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const newsletter = await getNewsletter(slug);
    return {
      title: `${newsletter.title} — 206 Candlewood Cres`,
      description: newsletter.summary,
    };
  } catch {
    return { title: "Newsletter — 206 Candlewood Cres" };
  }
}

export default async function NewsletterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let newsletter;
  try {
    newsletter = await getNewsletter(slug);
  } catch {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <Link
        href="/newsletters"
        className="text-sm text-gray-400 hover:text-gray-700 transition-colors mb-8 inline-block"
      >
        &larr; All newsletters
      </Link>

      <p className="text-xs text-gray-400 mb-2">
        {new Date(newsletter.date).toLocaleDateString("en-CA", {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC",
        })}
      </p>

      <h1 className="text-3xl font-semibold text-gray-900 tracking-tight mb-8">
        {newsletter.title}
      </h1>

      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: newsletter.contentHtml }}
      />
    </div>
  );
}
