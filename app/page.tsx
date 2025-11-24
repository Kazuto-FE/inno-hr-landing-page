"use client"

import { ChevronRight, Users, Zap, BarChart3, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">I</span>
            </div>
            <span className="font-bold text-lg">InnoHR AI</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">
              Features
            </a>
            <a href="#benefits" className="text-sm text-muted-foreground hover:text-foreground transition">
              Benefits
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition">
              Pricing
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-medium text-primary">Powered by AI</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
            Revolutionize Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
              HR Operations
            </span>{" "}
            with AI
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto">
            Streamline recruitment, automate employee management, and unlock data-driven insights with InnoHR AI's
            intelligent platform designed for modern HR teams.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
              Start Free Trial <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-12 border-t border-border/20">
            <div className="py-4">
              <div className="text-2xl sm:text-3xl font-bold">98%</div>
              <p className="text-sm text-muted-foreground mt-1">Time Saved</p>
            </div>
            <div className="py-4">
              <div className="text-2xl sm:text-3xl font-bold">50K+</div>
              <p className="text-sm text-muted-foreground mt-1">Companies Trust Us</p>
            </div>
            <div className="py-4">
              <div className="text-2xl sm:text-3xl font-bold">24/7</div>
              <p className="text-sm text-muted-foreground mt-1">AI Support</p>
            </div>
            <div className="py-4">
              <div className="text-2xl sm:text-3xl font-bold">99.9%</div>
              <p className="text-sm text-muted-foreground mt-1">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Powerful AI-Driven Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to transform your HR department into a strategic advantage.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Cards */}
            {[
              {
                icon: Brain,
                title: "Intelligent Recruitment",
                description: "AI-powered candidate screening and matching to find perfect fits 10x faster",
              },
              {
                icon: Users,
                title: "Employee Analytics",
                description: "Real-time insights into employee performance, engagement, and retention risks",
              },
              {
                icon: Zap,
                title: "Workflow Automation",
                description: "Automate repetitive HR tasks and free up your team for strategic work",
              },
              {
                icon: BarChart3,
                title: "Advanced Reporting",
                description: "Comprehensive dashboards and predictive analytics for data-driven decisions",
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Streamlined communication tools for seamless HR team coordination",
              },
              {
                icon: Zap,
                title: "Integration Ready",
                description: "Connect with your existing HR tools and systems effortlessly",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Transform Your HR Operations</h2>

              <div className="space-y-6">
                {[
                  { title: "Reduce Hiring Time", desc: "From weeks to days with intelligent candidate matching" },
                  { title: "Improve Retention", desc: "Identify and address turnover risks before they happen" },
                  { title: "Cut Costs", desc: "Automate manual processes and eliminate redundancy" },
                  { title: "Make Better Decisions", desc: "AI-powered insights drive strategic HR initiatives" },
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <ChevronRight className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90">
                Explore More <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 via-accent/10 to-background rounded-2xl p-8 border border-border/30 h-96 flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 text-primary/40 mx-auto mb-4" />
                  <p className="text-muted-foreground">Dashboard Preview Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground">Choose the plan that fits your organization</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                name: "Starter",
                price: "$299",
                period: "/month",
                features: ["Up to 50 employees", "Basic analytics", "Email support", "Core features"],
              },
              {
                name: "Professional",
                price: "$799",
                period: "/month",
                popular: true,
                features: [
                  "Up to 500 employees",
                  "Advanced analytics",
                  "Priority support",
                  "All features",
                  "Custom workflows",
                ],
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "pricing",
                features: [
                  "Unlimited employees",
                  "Premium analytics",
                  "Dedicated support",
                  "Custom integrations",
                  "SLA guarantee",
                ],
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-xl border transition-all ${plan.popular ? "border-primary bg-primary/5 shadow-lg scale-105" : "border-border/50 bg-card"} p-8`}
              >
                {plan.popular && (
                  <div className="mb-4 inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
                <Button className="w-full mb-6" variant={plan.popular ? "default" : "outline"}>
                  Get Started
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-y border-border/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Transform Your HR?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of companies using InnoHR AI to revolutionize their HR operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Your Free Trial <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/20 bg-muted/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-xs font-bold text-primary-foreground">I</span>
                </div>
                <span className="font-bold">InnoHR AI</span>
              </div>
              <p className="text-sm text-muted-foreground">Transforming HR with AI intelligence</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/20 pt-8">
            <p className="text-sm text-muted-foreground text-center">© 2025 InnoHR AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
