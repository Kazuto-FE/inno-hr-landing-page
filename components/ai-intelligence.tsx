import { Card } from "@/components/ui/card"
import Image from "next/image"

export function AIIntelligence() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-center">
            <img
              src="/images/product3.jpg"
              alt="AI Features"
              className="w-full max-w-[420px] h-auto rounded-[20px] object-cover border border-gray-200"
            />
          </div>
          <div className="flex flex-col justify-center lg:pl-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-left leading-tight">
              AI thông minh – Từ bóc tách CV đến dự báo nhân sự
            </h2>
            <ul className="space-y-5 mt-2">
              <li className="flex items-start gap-3">
                <Image
                  src="/Icons/check.png"
                  alt="tick"
                  width={20}
                  height={20}
                  unoptimized
                  className="pt-2"
                />
                <span className="text-base sm:text-lg text-gray-700">Chấm công thông minh, nhận diện khuôn mặt</span>
              </li>
              <li className="flex items-start gap-3">
                <Image
                  src="/Icons/check.png"
                  alt="tick"
                  width={20}
                  height={20}
                  unoptimized
                  className="pt-2"
                />
                <span className="text-base sm:text-lg text-gray-700">Đọc và phân tích CV tự động</span>
              </li>
              <li className="flex items-start gap-3">
                <Image
                  src="/Icons/check.png"
                  alt="tick"
                  width={20}
                  height={20}
                  unoptimized
                  className="pt-2"
                />
                <span className="text-base sm:text-lg text-gray-700">Dự báo nhân sự và phân tích xu hướng</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
