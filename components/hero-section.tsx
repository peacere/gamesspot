import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              {/* ✅ LOGO + GAME */}
              <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                <img
                  src="/images/Backup_of_FOR LINK.svg" // or your actual path
                  alt="Logo"
                  width={80}
                  height={80}
                  className="inline-block"
                />
                Game
              </h1>

              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Your ultimate destination for all gaming needs. We sell all
                types of games, PlayStation consoles (PS3 to PS5), provide
                PlayStation customization services, and offer professional game
                installation.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/games">Browse Games</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[300px] w-full md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <video
                src="/8764795-uhd_2160_3840_25fps.mp4"
                className="w-full h-full object-cover rounded-lg"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
