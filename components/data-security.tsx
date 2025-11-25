"use client"
import Image from "next/image"
import Iconcheck from "@/public/icons/check.png"
import Product from "@/public/images/product2.png"

export function DataSecurity() {
  return (
    <section id="security" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center lg:pr-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              Cơ sở dữ liệu riêng biệt & Tự do sao lưu
            </h2>
            <ul className="space-y-6 mt-2">
              <li className="flex items-start gap-3">
                <Image
                  src={Iconcheck}
                  alt="tick"
                  width={20}
                  height={20}
                  unoptimized
                  className="pt-2"
                />
                <span className="text-base sm:text-lg text-gray-700">
                  <span className="font-bold">Private Database:</span> Mỗi khách hàng sở hữu một Database riêng biệt, mã hóa chuẩn ngân hàng, không dùng chung "nồi lẩu" dữ liệu.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Image
                  src={Iconcheck}
                  alt="tick"
                  width={20}
                  height={20}
                  unoptimized
                  className="pt-2"
                />
                <span className="text-base sm:text-lg text-gray-700">
                  <span className="font-bold">Easy Backup:</span> Không giống các bên khác, chúng tôi cung cấp công cụ để bạn Tải xuống (Export) trọn vẹn dữ liệu lịch sử bất cứ lúc nào. Dữ liệu là của bạn, vĩnh viễn.
                </span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center lg:justif-center">
            {/* <img
              src="/images/product2-1.png"
              alt="Data Security"
              className="w-full max-w-[520px] h-auto rounded-[20px]"
            /> */}
            <Image
              src={Product}
              alt="tick"
              width={550}
              height={350}
              className="rounded-2xl border-4 border-gray-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
