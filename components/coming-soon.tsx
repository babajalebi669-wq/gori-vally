import { ImageBanner } from "@/components/image-banner";
import { CTA } from "@/components/cta";
import { WaitlistForm } from "@/components/waitlist-form";

interface ComingSoonProps {
  image: string;
  imageAlt: string;
  headline: string;
  description: string;
  source: string;
}

/** Full-bleed placeholder for nav destinations that don't have a built page
 *  yet (Explore, Experiences, Shop, Journal, About). Keeps the nav honest
 *  about what exists today while still converting interest into an email. */
export function ComingSoon({ image, imageAlt, headline, description, source }: ComingSoonProps) {
  return (
    <ImageBanner image={image} imageAlt={imageAlt} minHeight="min-h-[92vh]" id="waitlist">
      <CTA eyebrow="Coming Soon" headline={headline} description={description} align="center">
        <div className="mx-auto">
          <WaitlistForm source={source} variant="full" />
        </div>
      </CTA>
    </ImageBanner>
  );
}
