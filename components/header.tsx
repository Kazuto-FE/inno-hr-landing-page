import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
            <span className="text-sm font-bold text-white">I</span>
          </div>
          <span className="font-bold text-lg">InnoVerse</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">
            Tính năng
          </a>
          <a href="#benefits" className="text-sm text-muted-foreground hover:text-foreground transition">
            Case Study
          </a>
          <a href="#security" className="text-sm text-muted-foreground hover:text-foreground transition">
            Hỗ trợ
          </a>
          <a href="#footer" className="text-sm text-muted-foreground hover:text-foreground transition">
            Về chúng tôi
          </a>
        </div>

        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
          Đặt lịch Demo
        </Button>
      </div>
    </nav>
  )
}
