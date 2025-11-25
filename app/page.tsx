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
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <EnterpriseSolutions />
      <ProductFeatures />
      <DataSecurity />
      <AIIntelligence />
      <KeyFeatures />
      <UniqueFeatures />
      <Customers />
      <CTASection />
      <Footer />
    </main>
  )
}
