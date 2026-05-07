import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border/70 px-5 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-foreground">{siteConfig.name}</p>
          <p>{siteConfig.role}</p>
        </div>
        <div className="flex flex-col gap-2 sm:items-end">
          <a className="font-medium text-primary underline-offset-4 hover:underline" href={`mailto:${siteConfig.email}`}>
            Email
          </a>
          <a className="underline-offset-4 hover:text-foreground hover:underline" href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
