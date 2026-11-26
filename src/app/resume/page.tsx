import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";

export const metadata: Metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <PagePlaceholder
      title="Resume"
      description="Placeholder for the Resume page."
    />
  );
}
