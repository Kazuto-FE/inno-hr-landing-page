import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import dashboardPreview from "@/public/images/dashboard.png"

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden bg-linear-to-br from-blue-50 via-white to-blue-50">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -left-1/4 top-0 w-1/2 h-full opacity-40"
          style={{
            background: "radial-gradient(circle at 30% 50%, #3b82f6 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -right-1/4 bottom-0 w-1/2 h-full opacity-40"
          style={{
            background: "radial-gradient(circle at 70% 50%, #8b5cf6 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Tiêu đề */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            InnoHR AI – Nền tảng HRM{" "}
            <span className="text-yellow-500 relative">
              "May đo"
              <span className="absolute -inset-1 bg-yellow-200/30 blur-xl -z-10"></span>
            </span>
            <br />
            trên mô hình SaaS
          </h1>

          {/* Mô tả */}
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Thoát khỏi sự gò bó của phần mềm đóng gói. Hệ thống quản trị nhân sự duy nhất cho phép{" "}
            <strong>Tùy chỉnh 100%</strong>, tích hợp Trợ lý AI và trao lại{" "}
            <strong>Quyền làm chủ dữ liệu trọn vẹn</strong> cho doanh nghiệp.
          </p>

          {/* 3 lợi ích */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-base text-gray-700">
            <div className="flex items-center gap-3">
              <span className="text-green-500 text-2xl">✓</span>
              <span>Chi phí ban đầu thấp</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500 text-2xl">✓</span>
              <span>Bảo mật cấp ngân hàng</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500 text-2xl">✓</span>
              <span>Hỗ trợ 24/7</span>
            </div>
          </div>
          {/* <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <Image
                  src={dashboardPreview}
                  alt="InnoHR AI Dashboard Preview"
                  width={2400}
                  height={1400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
