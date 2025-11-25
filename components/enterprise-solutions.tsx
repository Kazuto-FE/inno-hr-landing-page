import Image from "next/image"
import Icon1 from "@/public/Icons/lock.png"
import Icon2 from "@/public/Icons/refesh.png"
import Icon3 from "@/public/Icons/database.png"
import Icon4 from "@/public/Icons/shield.png"
import Icon5 from "@/public/Icons/robot.png"
import Icon6 from "@/public/Icons/dashboard.png"

export function EnterpriseSolutions() {
  const solutions = [
    {
      icon: Icon1,
      title: "Phần mềm cứng nhắc",
      description: "Không tùy chỉnh được quy trình, buộc phải làm theo template có sẵn",
    },
    {
      icon: Icon2,
      title: "Thay đổi quy trình",
      description: "Phải điều chỉnh cách làm việc để phù hợp với phần mềm",
    },
    {
      icon: Icon3,
      title: "Dữ liệu bị giữ lại",
      description: "Khó xuất dữ liệu, bị ràng buộc với nhà cung cấp, không chuyển đổi",
    },
    {
      icon: Icon4,
      title: "Bảo mật thấp",
      description: "Chia sẻ cơ sở dữ liệu với nhiều công ty khác, rủi ro bảo mật cao",
    },
    {
      icon: Icon5,
      title: "Thiếu AI hỗ trợ",
      description: "Không có AI tự động hóa, HR tốn nhiều thời gian cho các tác vụ lặp lại.",
    },
    {
      icon: Icon6,
      title: "Khó mở rộng",
      description: "Khi doanh nghiệp lớn lên, phần mềm, không theo kịp nhu cầu phát triển",
    },
  ]

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Doanh nghiệp đã lớn, nhưng phần mềm HRM vẫn mặc "chiếc áo chật"?
          </h2>
          <p className="text-xl text-[#4B5563]">
            Hầu hết doanh nghiệp SME đang phải thích nghi với phần mềm thay vì phần mềm phục vụ họ
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, idx) => (
            <div key={idx} className="p-6 bg-[#FDFAFA] ">
              <Image
                src={solution.icon}
                alt={`${solution.title} icon`}
                width={25}
                height={25}
                className="mb-8"
                unoptimized
              />
              <h3 className="font-bold mb-2 text-2xl">{solution.title}</h3>
              <p className="text-base text-muted-foreground">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
