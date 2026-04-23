import type { Metadata } from "next";
import Link from "next/link";
import { getAllNewsletters } from "@/lib/newsletters";

export const metadata: Metadata = {
  title: "Newsletters — 206 Candlewood Cres",
  description: "Resident newsletters for 206 Candlewood Cres, Waterloo, ON.",
};

export default function NewslettersPage() {
  const newsletters = getAllNewsletters();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold text-gray-900 tracking-tight mb-2">
        Newsletters
      </h1>
      <p className="text-gray-500 mb-10">
        Official communications from building management.
      </p>

      {newsletters.length === 0 ? (
        <p className="text-gray-500">No newsletters yet.</p>
      ) : (
        <ul className="space-y-3">
          {newsletters.map((n) => (
            <li key={n.slug}>
              <Link
                href={`/newsletters/${n.slug}`}
                className="block p-5 rounded-lg border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all"
              >
                <p className="text-xs text-gray-400 mb-1">
                  {new Date(n.date).toLocaleDateString("en-CA", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC",
                  })}
                </p>
                <p className="font-semibold text-gray-900 mb-1">{n.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {n.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
