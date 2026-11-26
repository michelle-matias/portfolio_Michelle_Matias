import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <PagePlaceholder
      title="Projects"
      description="Placeholder for the Projects page."
    />
  );
}
