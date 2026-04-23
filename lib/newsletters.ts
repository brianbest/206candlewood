import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const newslettersDir = path.join(process.cwd(), "content/newsletters");

export interface NewsletterMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
}

export interface Newsletter extends NewsletterMeta {
  contentHtml: string;
}

export function getAllNewsletters(): NewsletterMeta[] {
  const files = fs.readdirSync(newslettersDir).filter((f) => f.endsWith(".md"));

  const newsletters = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(newslettersDir, filename), "utf8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      summary: data.summary as string,
    };
  });

  return newsletters.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getNewsletter(slug: string): Promise<Newsletter> {
  const fullPath = path.join(newslettersDir, `${slug}.md`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  const processed = await remark().use(html).process(content);

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    summary: data.summary as string,
    contentHtml: processed.toString(),
  };
}
