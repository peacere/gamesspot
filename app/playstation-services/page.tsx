import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PlayStationServices } from "@/components/playstation-services"

export const metadata = {
  title: "PlayStation Services - Game Company",
  description: "Professional PlayStation customization and modification services",
}

export default function PlayStationServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">PlayStation Services</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Professional PlayStation customization services including custom firmware installation and system
                  modifications.
                </p>
              </div>
            </div>
          </div>
        </section>
        <PlayStationServices />
      </main>
      <Footer />
    </div>
  )
}
