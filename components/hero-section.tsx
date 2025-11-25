import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-background">
      <div className="mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          InnoHR AI – Nền tảng HRM <span className="text-yellow-500">"May đo"</span>
          <br />
          trên mô hình SaaS
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-8 mx-auto">
          Thoát khỏi sự gò bó của phần mềm đông gối. Hệ thống quản trị nhân sự duy nhất cho phép Tùy chỉnh 100%, tích
          hợp Trợ lý AI và trao lại Quyền làm chủ dữ liệu trọn vẹn cho doanh nghiệp.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>Chỉ phí ban đầu</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>Bảo mật cấp độ ngân hàng</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>Hỗ trợ 24/7</span>
          </div>
        </div>
        {/* Dashboard Preview */}
        <div className="mt-16 relative">
          <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden">
            <img src="/images/image.png" alt="InnoHR Dashboard" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
