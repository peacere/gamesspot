"use client"

import { useState, useEffect } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { isBrowser } from "@/lib/browser-utils"

interface FAQCompactProps {
  category?: "general" | "games" | "playstation" | "installation"
  limit?: number
}

export function FAQCompact({ category = "general", limit = 3 }: FAQCompactProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const faqs = {
    general: [
      {
        question: "What are your business hours?",
        answer:
          "We are open Monday to Friday from 9:00 AM to 6:00 PM, and Saturday from 10:00 AM to 4:00 PM. We are closed on Sundays and public holidays.",
      },
      {
        question: "Do you offer delivery services?",
        answer:
          "Yes, we offer delivery services for all our products. Delivery fees vary depending on your location. Local deliveries are typically completed within 1-2 business days.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept various payment methods including cash, credit/debit cards (Visa, MasterCard, American Express), PayPal, and bank transfers.",
      },
    ],
    games: [
      {
        question: "What types of games do you sell?",
        answer:
          "We sell a wide variety of games for all major platforms including PlayStation, Xbox, Nintendo Switch, and PC.",
      },
      {
        question: "Do you buy used games?",
        answer:
          "Yes, we do buy used games in good condition. The price we offer depends on the game's popularity, condition, and current market value.",
      },
      {
        question: "Can I pre-order upcoming games?",
        answer:
          "We offer pre-orders for upcoming game releases. You can place a pre-order in our store or through our website.",
      },
    ],
    playstation: [
      {
        question: "What PlayStation services do you offer?",
        answer:
          "We offer a range of PlayStation services including custom firmware installation, system modifications, hardware repairs, and more.",
      },
      {
        question: "How long does PlayStation modification take?",
        answer:
          "The time required for PlayStation modifications depends on the specific service. Basic firmware installations typically take 1-2 hours.",
      },
      {
        question: "Can you repair my PlayStation if it's not working?",
        answer:
          "Yes, we offer repair services for various PlayStation issues including HDMI port problems, disc drive failures, and more.",
      },
    ],
    installation: [
      {
        question: "What does your game installation service include?",
        answer:
          "Our game installation service includes installing the game, configuring optimal settings, installing updates, and ensuring the game runs smoothly.",
      },
      {
        question: "How long does game installation take?",
        answer:
          "Most installations take between 30 minutes to 2 hours, depending on the game size and your device's specifications.",
      },
      {
        question: "Can you install games on any device?",
        answer:
          "We can install games on most gaming platforms including PlayStation, Xbox, Nintendo Switch, PC, and mobile devices.",
      },
    ],
  }

  // Simple version for server-side rendering
  if (!mounted && !isBrowser()) {
    return (
      <div className="w-full space-y-6">
        <div className="text-center">Loading FAQ content...</div>
      </div>
    )
  }

  const selectedFaqs = faqs[category].slice(0, limit)

  return (
    <div className="w-full space-y-6">
      <Accordion type="single" collapsible className="w-full">
        {selectedFaqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="flex justify-center">
        <Button variant="outline" asChild>
          <Link href="/faq">View All FAQs</Link>
        </Button>
      </div>
    </div>
  )
}
