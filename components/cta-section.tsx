import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-blue-600">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Sẵn sàng biến đổi HR của bạn?</h2>
        <p className="text-xl text-blue-100 mb-8">
          Hãy để InnoHR AI giúp bạn xây dựng quy trình HR hiệu quả, an toàn và thông minh.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto">
            Đặt lịch Demo ngay <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
