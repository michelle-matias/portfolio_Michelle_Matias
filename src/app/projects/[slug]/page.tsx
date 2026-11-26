import { PagePlaceholder } from "@/components/ui/PagePlaceholder";

/**
 * Reusable case study route. Project content will be loaded from
 * `src/content` in the issue that implements the case study template.
 */
export default async function ProjectCaseStudyPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;

  return (
    <PagePlaceholder
      title="Project Case Study"
      description={`Placeholder for the case study with slug "${slug}".`}
    />
  );
}
