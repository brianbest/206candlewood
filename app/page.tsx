import Link from "next/link";
import { getAllNewsletters } from "@/lib/newsletters";

export default function Home() {
  const newsletters = getAllNewsletters().slice(0, 2);

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="mb-16">
        <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-4">
          Waterloo, Ontario
        </p>
        <h1 className="text-4xl font-semibold text-gray-900 tracking-tight mb-4">
          206 Candlewood Cres
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
          Welcome, residents. This is your building&apos;s home for official
          newsletters, notices, and community updates.
        </p>
      </section>

      {/* Divider */}
      <hr className="border-gray-200 mb-12" />

      {/* Recent newsletters */}
      <section>
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Recent Newsletters
          </h2>
          <Link
            href="/newsletters"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            View all &rarr;
          </Link>
        </div>

        <ul className="space-y-4">
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

        {newsletters.length === 0 && (
          <p className="text-gray-500 text-sm">No newsletters yet.</p>
        )}
      </section>
    </div>
  );
}
