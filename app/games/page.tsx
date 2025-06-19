import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GamesList } from "@/components/games-list"

export const metadata = {
  title: "Games - Game Company",
  description: "Browse our extensive collection of games for all platforms",
}

export default function GamesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Games Collection</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse our extensive collection of games for all platforms. From the latest releases to classic
                  titles.
                </p>
              </div>
            </div>
          </div>
        </section>
        <GamesList />
      </main>
      <Footer />
    </div>
  )
}
