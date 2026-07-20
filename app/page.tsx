import Image from "next/image";
import { Hero } from "@/components/hero";
import { SectionTitle } from "@/components/section-title";
import { DestinationCard } from "@/components/destination-card";
import { ExperienceCard } from "@/components/experience-card";
import { ProductCard } from "@/components/product-card";
import { JournalCard } from "@/components/journal-card";
import { ImageBanner } from "@/components/image-banner";
import { CTA } from "@/components/cta";
import { WaitlistForm } from "@/components/waitlist-form";
import { FadeIn } from "@/components/animations/fade-in";
import { destinations } from "@/lib/data/destinations";
import { experiences } from "@/lib/data/experiences";
import { products } from "@/lib/data/products";
import { journalArticles } from "@/lib/data/journal";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Featured Destinations */}
      <section id="discover" className="scroll-mt-20 bg-cream px-6 py-24 md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <SectionTitle
              eyebrow="Where To Go"
              title="Featured Destinations"
              description="Four corners of Kumaon, each with its own light, altitude and story."
            />
          </FadeIn>
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((destination, i) => (
              <FadeIn key={destination.slug} delay={i * 0.1}>
                <DestinationCard destination={destination} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Experiences */}
      <section className="bg-stone/10 px-6 py-24 md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <SectionTitle
              eyebrow="What You'll Do"
              title="Signature Experiences"
              description="Ways to spend time in the valley, each shaped by the people and land around it."
            />
          </FadeIn>
          <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2">
            {experiences.map((experience, i) => (
              <FadeIn key={experience.slug} delay={i * 0.1}>
                <ExperienceCard experience={experience} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Local Products */}
      <section className="bg-cream px-6 py-24 md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <SectionTitle
              eyebrow="From The Valley"
              title="Local Products"
              description="Thoughtfully sourced goods from Kumaon, arriving soon."
            />
          </FadeIn>
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, i) => (
              <FadeIn key={product.slug} delay={i * 0.1}>
                <ProductCard product={product} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-forest-dark px-6 py-24 text-cream md:py-32 lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn direction="none" className="relative aspect-[4/5] overflow-hidden rounded-sm lg:order-2">
            {/* Replace /public/images/village.jpg with a real photograph of
                a Kumaoni village. */}
            <Image
              src="/images/village.jpg"
              alt="A Kumaoni village in the Himalayan foothills"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </FadeIn>
          <FadeIn className="lg:order-1">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-gold">
              Our Story
            </p>
            <h2 className="font-serif text-4xl leading-[1.1] md:text-5xl">
              More Than A Destination
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/75 md:text-lg">
              Gori Valley is being built to celebrate Himalayan travel as it deserves to be
              experienced — through hidden villages, mountain trails and the people who call
              this valley home. Alongside it, we&apos;re gathering the stories behind the craft,
              food and traditions of Kumaon, and the local products that carry them.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-cream/75 md:text-lg">
              We&apos;re early. This is the beginning of something we&apos;re building
              carefully, one valley at a time.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Journal Preview */}
      <section className="bg-cream px-6 py-24 md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <SectionTitle
              eyebrow="From The Journal"
              title="Stories From Kumaon"
              description="Field notes on trails, traditions and the villages of the Gori Valley."
            />
          </FadeIn>
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {journalArticles.map((article, i) => (
              <FadeIn key={article.slug} delay={i * 0.1}>
                <JournalCard article={article} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      {/* Replace /public/images/waitlist-bg.jpg with a real, high-resolution
          Himalayan photograph — this is the site's final, most important frame. */}
      <ImageBanner
        image="/images/waitlist-bg.jpg"
        imageAlt="Golden hour light over the Himalayan range, Kumaon"
        minHeight="min-h-[85vh]"
        id="waitlist"
      >
        <CTA
          eyebrow="Join The Journey"
          headline="Be Among The First Explorers"
          description="We're building Gori Valley to bring together authentic Himalayan travel, local stories and thoughtfully curated products from Kumaon. Join our waitlist to hear about our launch, new experiences and future collections."
          align="center"
        >
          <div className="mx-auto">
            <WaitlistForm source="waitlist-section" variant="full" />
          </div>
        </CTA>
      </ImageBanner>
    </>
  );
}
