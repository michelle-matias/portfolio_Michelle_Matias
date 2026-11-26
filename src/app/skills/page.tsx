import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";

export const metadata: Metadata = {
  title: "Technical Skills",
};

export default function SkillsPage() {
  return (
    <PagePlaceholder
      title="Technical Skills"
      description="Placeholder for the Technical Skills page."
    />
  );
}
