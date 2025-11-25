import Image from "next/image"
import Icon1 from "@/public/Icons/brain.png"
import Icon2 from "@/public/Icons/add.png"
import Icon3 from "@/public/Icons/folder.png"
import Icon4 from "@/public/Icons/caculator.png"
import Icon5 from "@/public/Icons/trending.png"
import Icon6 from "@/public/Icons/setting_pink.png"

export function UniqueFeatures() {
  const features = [
    {
      icon: Icon1,
      title: "Chấm Công AI",
      description:
        "Nhân diện khuôn mặt thông minh, phát hiện gian lận và tự động tính toán thời gian làm việc chính xác",
    },
    {
      icon: Icon2,
      title: "Tuyển Dụng & Trích Xuất CV",
      description: "AI phân tích CV tự động, đánh giá ứng viên, gợi ý phù hợp với vị trí tuyển dụng",
    },
    {
      icon: Icon3,
      title: "Quản Lý Hồ Sơ",
      description: "Lưu trữ và quản lý thông tin nhân viên một cách an toàn, để dàng truy xuất và cập nhật",
    },
    {
      icon: Icon4,
      title: "Chấm Công - Tính Lương Linh Hoạt",
      description: "Tự động tính lương theo nhiều công thức phức tạp, hỗ trợ đa dạng chế độ làm việc",
    },
    {
      icon: Icon5,
      title: "Báo Cáo & Dự Báo AI",
      description: "Phân tích dữ liệu thông minh, dự báo xu hướng nhân sự",
    },
    {
      icon: Icon6,
      title: "Workflow Tùy Chỉnh",
      description: "Thiết kế quy trình làm việc theo nhu cầu riêng, tự động hóa các tác vụ phức tạp",
    },
  ]

  return (
    <section id="features" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">Tính Năng Đột Phá</h2>
          <p className="text-xl text-muted-foreground">
            Giải pháp cho HR toàn diện với AI tiên tiến, tối ưu hóa mọi quy trình nhân sự của doanh nghiệp
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 bg-[#FFF9F9] rounded-xl">
              <Image
                src={feature.icon}
                alt={`${feature.title} icon`}
                width={25}
                height={25}
                className="mb-12"
                unoptimized
              />
              <h3 className="font-bold mb-2 text-2xl">{feature.title}</h3>
              <p className="text-base text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
