import { FadeIn } from "@/components/motion";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <section id="contact" className="px-5 pb-20 sm:px-6 lg:pb-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <Card className="relative overflow-hidden p-7 sm:p-9 lg:p-10">
            <div className="scientific-grid absolute inset-0 opacity-50" />
            <div className="relative mx-auto max-w-2xl text-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Contact</p>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-muted-foreground">{siteConfig.cta.emailIntro}</p>
                <div className="mt-6 flex flex-col items-center gap-3 text-sm font-semibold sm:text-base">
                  <a className="break-all text-primary underline-offset-4 hover:underline" href={`mailto:${siteConfig.email}`}>
                    {siteConfig.email}
                  </a>
                  <a
                    className="break-all text-primary underline-offset-4 hover:underline"
                    href={siteConfig.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {siteConfig.socials.linkedin}
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
