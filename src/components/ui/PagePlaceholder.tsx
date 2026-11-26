type PagePlaceholderProps = {
  title: string;
  description: string;
};

/**
 * Temporary content used to verify routing during project initialisation.
 * Remove it as each page is implemented in its own issue.
 */
export function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  return (
    <main>
      <h1 className="font-display">{title}</h1>
      <p>{description}</p>
    </main>
  );
}
