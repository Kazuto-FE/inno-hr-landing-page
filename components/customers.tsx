import Image from "next/image"
import Partner1 from "@/public/images/partner/partner1.png"
import Partner2 from "@/public/images/partner/partner2.png"
import Partner3 from "@/public/images/partner/partner3.png"
import Partner4 from "@/public/images/partner/partner4.png"
import Partner5 from "@/public/images/partner/partner5.png"
import Partner6 from "@/public/images/partner/partner6.png"
import Partner7 from "@/public/images/partner/partner7.png"
import Partner8 from "@/public/images/partner/partner8.png"
import Partner9 from "@/public/images/partner/partner9.png"
import Partner10 from "@/public/images/partner/partner10.png"
import Partner11 from "@/public/images/partner/partner11.png"
import Partner12 from "@/public/images/partner/partner12.png"
import Partner13 from "@/public/images/partner/partner13.png"
import Partner14 from "@/public/images/partner/partner14.png"
import Partner15 from "@/public/images/partner/partner15.png"
import Partner16 from "@/public/images/partner/partner16.png"
import Partner17 from "@/public/images/partner/partner17.png"

const partnerLogos = [
  { src: Partner1, alt: "VN Resource" },
  { src: Partner2, alt: "Human Next" },
  { src: Partner3, alt: "Gumac" },
  { src: Partner4, alt: "PROPCOM" },
  { src: Partner5, alt: "Aiking" },
  { src: Partner6, alt: "EAGLE Ventures" },
  { src: Partner7, alt: "Phu Hung" },
  { src: Partner8, alt: "PCG" },
  { src: Partner9, alt: "Phương anh Interior" },
  { src: Partner10, alt: "Thắng Lợi" },
  { src: Partner11, alt: "HVC" },
  { src: Partner12, alt: "Colina" },
  { src: Partner13, alt: "Pacisoft" },
  { src: Partner14, alt: "NNI" },
  { src: Partner15, alt: "Kiwooza planet" },
  { src: Partner16, alt: "APAC" },
  { src: Partner17, alt: "Grandemy" },
]

const duplicatedLogos = [...partnerLogos, ...partnerLogos]

export function Customers() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pb-12">
          <p className="text-3xl sm:text-4xl md:text-5xl   font-semibold uppercase tracking-wider">
            Khách hàng & Đối tác
          </p>
        </div>
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {duplicatedLogos.map((partner, index) => (
              <div
                key={`${partner.alt}-${index}`}
                className="mx-10 sm:mx-16 shrink-0 flex items-center justify-center"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={262}
                  height={162}
                  sizes="100vw"
                  className="w-auto h-auto max-h-32 object-contain"
                  unoptimized // rất quan trọng: tắt tối ưu của Next.js để hiển thị đúng kích thước gốc
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
