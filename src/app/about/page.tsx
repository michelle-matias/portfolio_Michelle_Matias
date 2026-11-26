import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";

export const metadata: Metadata = {
  title: "About Me",
};

export default function AboutPage() {
  return (
    <PagePlaceholder
      title="About Me"
      description="Placeholder for the About Me page."
    />
  );
}
