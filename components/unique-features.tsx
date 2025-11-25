import { Brain, Users, Zap, BarChart3, TrendingUp, Settings } from "lucide-react"

export function UniqueFeatures() {
  const features = [
    {
      icon: Brain,
      title: "Chấm Công AI",
      description:
        "Nhân diện khuôn mặt thông minh, phát hiện gian lận và tự động tính toán thời gian làm việc chính xác",
    },
    {
      icon: Users,
      title: "Tuyển Dụng & Trích Xuất CV",
      description: "AI phân tích CV tự động, đánh giá ứng viên, gợi ý phù hợp với vị trí tuyển dụng",
    },
    {
      icon: Zap,
      title: "Quản Lý Hồ Sơ",
      description: "Lưu trữ và quản lý thông tin nhân viên một cách an toàn, để dàng truy xuất và cập nhật",
    },
    {
      icon: BarChart3,
      title: "Chấm Công - Tính Lương Linh Hoạt",
      description: "Tự động tính lương theo nhiều công thức phức tạp, hỗ trợ đa dạng chế độ làm việc",
    },
    {
      icon: TrendingUp,
      title: "Báo Cáo & Dự Báo AI",
      description: "Phân tích dữ liệu thông minh, dự báo xu hướng nhân sự",
    },
    {
      icon: Settings,
      title: "Workflow Tùy Chỉnh",
      description: "Thiết kế quy trình làm việc theo nhu cầu riêng, tự động hóa các tác vụ phức tạp",
    },
  ]

  return (
    <section id="features" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tính Năng Độc Phá</h2>
          <p className="text-lg text-muted-foreground">
            Giải pháp cho HR toàn diện với AI tiên tiến, tối ưu hóa mọi quy trình nhân sự của doanh nghiệp
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 bg-gray-50 rounded-xl border border-border/50">
              <feature.icon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
