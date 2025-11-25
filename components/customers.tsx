import Image from "next/image"

const partnerLogos = [
  { src: "/images/partner/phuhunglogo.png", alt: "Phu Hung" },
  { src: "/images/partner/aiking.png", alt: "AI King" },
  { src: "/images/partner/phuonganh.jpg", alt: "Phương Anh" },
  { src: "/images/partner/thangloi.png", alt: "Thăng Lợi" },
  { src: "/images/partner/humanext.jpg", alt: "HumanExt" },
  { src: "/images/partner/hvc.png", alt: "HVC" },
  { src: "/images/partner/NNI.png", alt: "NNI" },
  { src: "/images/partner/Grandemy.png", alt: "Grandemy" },
  { src: "/images/partner/kiwooza.png", alt: "Kiwooza" },
  { src: "/images/partner/pacisoft.png", alt: "PaciSoft" },
  { src: "/images/partner/propcom.png", alt: "PropCom" },
  { src: "/images/partner/colina.png", alt: "Colina" },
]

const duplicatedLogos = [...partnerLogos, ...partnerLogos]

export function Customers() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tiêu đề */}
        <div className="text-center my-12">
          <p className="text-5xl font-semibold uppercase tracking-wider">
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
                {/* Giữ nguyên kích thước + tỷ lệ gốc */}
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={0}
                  height={0}
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
