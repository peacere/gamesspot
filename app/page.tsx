import { HeroSection } from "@/components/hero-section"
import { ServicesSummary } from "@/components/services-summary"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSummary />
      </main>
      <Footer />
    </div>
  )
}
