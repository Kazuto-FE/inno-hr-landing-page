"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { KeyFeatures } from "@/components/key-features"
import { UniqueFeatures } from "@/components/unique-features"
import { ProductFeatures } from "@/components/product-features"
import { DataSecurity } from "@/components/data-security"
import { AIIntelligence } from "@/components/ai-intelligence"
import { EnterpriseSolutions } from "@/components/enterprise-solutions"
import { Customers } from "@/components/customers"
import { CTASection } from "@/components/cta-section"
import FAQ from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <EnterpriseSolutions />
      <KeyFeatures />
      <ProductFeatures />
      <DataSecurity />
      <AIIntelligence />
      <UniqueFeatures />
      <Customers />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  )
}
