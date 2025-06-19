import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PlayStationConsoles } from "@/components/playstation-consoles"

export const metadata = {
  title: "PlayStation Consoles - Game Company",
  description: "Buy PlayStation consoles from PS3 to PS5 with warranty and professional setup",
}

export default function ConsolesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">PlayStation Consoles</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Shop our collection of PlayStation consoles from PS3 to PS5. New and refurbished units available with
                  warranty.
                </p>
              </div>
            </div>
          </div>
        </section>
        <PlayStationConsoles />
      </main>
      <Footer />
    </div>
  )
}
