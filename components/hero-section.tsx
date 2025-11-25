import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import dashboardPreview from "@/public/images/dashboard.png"
import HRM_Dashboard from "@/public/images/HRM_Dashboard.png"
import IconCheck from "@/public/Icons/check.png"
import Shield from "@/public/Icons/shield_green.png"
import Support from "@/public/Icons/support.png"

export function HeroSection() {
  return (
    <section className="relative pt-16 lg:pt-20 min-h-screen overflow-hidden bg-linear-to-br from-blue-50 via-white to-blue-50">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -left-1/4 top-0 w-3/4 h-full opacity-30 lg:opacity-40"
          style={{
            background: "radial-gradient(circle at 30% 50%, #3b82f6 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -right-1/4 bottom-0 w-3/4 h-full opacity-30 lg:opacity-40"
          style={{
            background: "radial-gradient(circle at 70% 50%, #2C8AEA 0%, transparent 90%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Tiêu đề - responsive font */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            InnoHR AI – Nền tảng HRM{" "}
            <span className="text-yellow-500 relative inline-block">
              "May đo"
              <span className="absolute -inset-1 bg-yellow-200/30 blur-xl -z-10"></span>
            </span>
            <br className="hidden sm:block" />
            <span className="block sm:inline"> trên mô hình SaaS</span>
          </h1>

          {/* Mô tả */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Thoát khỏi sự gò bó của phần mềm đóng gói. Hệ thống quản trị nhân sự duy nhất cho phép{" "}
            <strong className="font-bold">Tùy chỉnh 100%</strong>, tích hợp Trợ lý AI và trao lại{" "}
            <strong className="font-bold">Quyền làm chủ dữ liệu trọn vẹn</strong> cho doanh nghiệp.
          </p>

          {/* 3 lợi ích - đẹp trên mobile */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 max-w-3xl mx-auto text-sm sm:text-base text-gray-700">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <Image
                src={IconCheck}
                alt="check"
                width={24}
                height={24}
                className="w-6 h-6 shrink-0"
              />
              <span>Chi phí ban đầu thấp</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <Image
                src={Shield}
                alt="shield"
                width={24}
                height={24}
                className="w-6 h-6 shrink-0"
              />
              <span>Bảo mật cấp ngân hàng</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <Image
                src={Support}
                alt="support"
                width={24}
                height={24}
                className="w-6 h-6 shrink-0"
              />
              <span>Hỗ trợ 24/7</span>
            </div>
          </div>

          {/* Ảnh Dashboard - responsive & không bị méo */}
          <div className="relative mt-12 sm:mt-16 lg:mt-20 max-w-6xl mx-auto px-4 sm:px-0">
            <div className="relative mx-auto w-full max-w-[340px] xs:max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <Image
                  src={HRM_Dashboard}
                  alt="InnoHR AI Dashboard Preview"
                  width={2400}
                  height={1400}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 1200px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}