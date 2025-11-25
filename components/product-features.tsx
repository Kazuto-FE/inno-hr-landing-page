"use client"
import Image from "next/image"

export function ProductFeatures() {
  return (
    <section id="benefits" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-end">
            <img src="/images/product1.jpg" alt="Dashboard Features" className="w-full max-w-[520px] h-auto" />
          </div>
          <div className="flex flex-col justify-center lg:pl-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-left ">
              Phần mềm theo bạn, không phải bạn theo phần mềm
            </h2>
            <ul className="space-y-5 mt-2">
              <li className="flex items-start gap-3">
                <Image
                  src="/Icons/check.png"
                  alt="tick"
                  width={20}
                  height={20}
                  unoptimized
                />
                <span className="text-base sm:text-lg text-gray-700">Tùy chỉnh mọi nghiệp vụ HR theo quy trình riêng</span>
              </li>
              <li className="flex items-start gap-3">
                <Image
                  src="/Icons/check.png"
                  alt="tick"
                  width={20}
                  height={20}
                  unoptimized
                />
                <span className="text-base sm:text-lg text-gray-700">Không giới hạn template, workflow tự do</span>
              </li>
              <li className="flex items-start gap-3">
                <Image
                  src="/Icons/check.png"
                  alt="tick"
                  width={20}
                  height={20}
                  className="mb-20"
                  unoptimized
                />
                <span className="text-base sm:text-lg text-gray-700">Thêm/sửa/xóa tính năng theo nhu cầu</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
