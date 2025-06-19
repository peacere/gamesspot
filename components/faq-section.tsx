"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { isBrowser } from "@/lib/browser-utils"

export function FAQSection() {
  const [activeTab, setActiveTab] = useState("general")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Simple version for server-side rendering
  if (!mounted && !isBrowser()) {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="text-center">Loading FAQ content...</div>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="games">Games</TabsTrigger>
            <TabsTrigger value="playstation">PlayStation</TabsTrigger>
            <TabsTrigger value="installation">Installation</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="mt-0">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What are your business hours?</AccordionTrigger>
                <AccordionContent>
                  We are open Monday to Friday from 9:00 AM to 6:00 PM, and Saturday from 10:00 AM to 4:00 PM. We are
                  closed on Sundays and public holidays.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Do you offer delivery services?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer delivery services for all our products. Delivery fees vary depending on your location.
                  Local deliveries are typically completed within 1-2 business days, while national deliveries may take
                  3-5 business days.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                <AccordionContent>
                  We accept various payment methods including cash, credit/debit cards (Visa, MasterCard, American
                  Express), PayPal, and bank transfers. For online purchases, we offer secure payment processing through
                  our website.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Do you have a physical store?</AccordionTrigger>
                <AccordionContent>
                  Yes, we have a physical store where you can browse our products and services. You can find our address
                  in the Contact section of our website. We welcome walk-ins during our business hours.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
                <AccordionContent>
                  You can contact our customer support team through various channels: by phone during business hours,
                  via email, or by filling out the contact form on our website. We typically respond to inquiries within
                  24 hours on business days.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="games" className="mt-0">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What types of games do you sell?</AccordionTrigger>
                <AccordionContent>
                  We sell a wide variety of games for all major platforms including PlayStation, Xbox, Nintendo Switch,
                  and PC. Our collection includes the latest releases, popular titles, and classic games across various
                  genres.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Do you buy used games?</AccordionTrigger>
                <AccordionContent>
                  Yes, we do buy used games in good condition. The price we offer depends on the game's popularity,
                  condition, and current market value. Please bring your games to our store for evaluation, or contact
                  us for more information.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I pre-order upcoming games?</AccordionTrigger>
                <AccordionContent>
                  We offer pre-orders for upcoming game releases. You can place a pre-order in our store or through our
                  website. We typically require a small deposit, and we'll notify you when your game is available for
                  pickup or delivery.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What is your return policy for games?</AccordionTrigger>
                <AccordionContent>
                  We accept returns of unopened games within 14 days of purchase with a valid receipt. For opened games,
                  we can offer an exchange for the same title if the game is defective. Digital game codes and
                  subscriptions are non-refundable once the code has been revealed or used.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Do you sell digital game codes?</AccordionTrigger>
                <AccordionContent>
                  Yes, we sell digital game codes for various platforms. These codes can be purchased in-store or
                  online, and they will be delivered to you electronically or provided on a printed receipt, depending
                  on your preference.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="playstation" className="mt-0">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What PlayStation services do you offer?</AccordionTrigger>
                <AccordionContent>
                  We offer a range of PlayStation services including custom firmware installation, system modifications,
                  hardware repairs, performance optimization, and controller customization. Our technicians are
                  experienced with all PlayStation models from PS1 to PS5.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is custom firmware installation legal?</AccordionTrigger>
                <AccordionContent>
                  Custom firmware installation is legal for personal use and allows you to run homebrew applications and
                  make backups of your games. However, it may void your console's warranty and using it to play pirated
                  games is illegal. We only provide these services for legitimate purposes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How long does PlayStation modification take?</AccordionTrigger>
                <AccordionContent>
                  The time required for PlayStation modifications depends on the specific service. Basic firmware
                  installations typically take 1-2 hours, while more complex hardware modifications might take 1-2 days.
                  We'll provide you with an estimated timeframe when you bring in your console.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Will modifying my PlayStation void the warranty?</AccordionTrigger>
                <AccordionContent>
                  Yes, most modifications will void the manufacturer's warranty on your PlayStation console. We
                  recommend considering this factor before proceeding with any modifications, especially for newer
                  consoles that are still under warranty.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Can you repair my PlayStation if it's not working?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer repair services for various PlayStation issues including HDMI port problems, disc drive
                  failures, overheating, power supply issues, and controller malfunctions. Our technicians will diagnose
                  the problem and provide you with a quote before proceeding with repairs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="installation" className="mt-0">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What does your game installation service include?</AccordionTrigger>
                <AccordionContent>
                  Our game installation service includes installing the game on your preferred device, configuring
                  optimal settings, installing any necessary updates or patches, and ensuring the game runs smoothly. We
                  can also install additional content like DLCs and mods if requested.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How long does game installation take?</AccordionTrigger>
                <AccordionContent>
                  The installation time varies depending on the game size, your device's specifications, and internet
                  speed (for updates). Most installations take between 30 minutes to 2 hours. For larger games or
                  multiple installations, it may take longer. We'll provide you with an estimated timeframe before
                  starting.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Do I need to provide anything for the installation?</AccordionTrigger>
                <AccordionContent>
                  You'll need to provide the game (physical or digital purchase), the device on which you want the game
                  installed, and any account credentials necessary for digital purchases. If you're requesting
                  installation of a game you've already purchased digitally, we'll need temporary access to your
                  account.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Can you install games on any device?</AccordionTrigger>
                <AccordionContent>
                  We can install games on most gaming platforms including PlayStation, Xbox, Nintendo Switch, PC, and
                  mobile devices. However, the device must meet the minimum system requirements for the game. We'll
                  check compatibility before proceeding with the installation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Do you offer remote installation services?</AccordionTrigger>
                <AccordionContent>
                  Yes, for PC games, we offer remote installation services where our technicians can connect to your
                  computer securely over the internet to install and configure your games. For console games, you'll
                  need to bring your device to our store or arrange for a home visit service.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
