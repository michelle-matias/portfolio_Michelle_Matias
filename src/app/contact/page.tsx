import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <PagePlaceholder
      title="Contact"
      description="Placeholder for the Contact page."
    />
  );
}
