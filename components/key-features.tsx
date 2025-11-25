import { Settings, Lock, Brain, Download } from "lucide-react"

export function KeyFeatures() {
  const features = [
    {
      icon: Settings,
      title: "Tùy chỉnh 100%",
      description: "Theo quy trình riêng của bạn",
    },
    {
      icon: Lock,
      title: "Database riêng tư",
      description: "Bảo mật cấp độ ngân hàng",
    },
    {
      icon: Brain,
      title: "AI thông minh",
      description: "Hỗ trợ văn hành hàng ngày",
    },
    {
      icon: Download,
      title: "Xuất dữ liệu tự do",
      description: "Không ràng buộc nhà cung cấp",
    },
  ]

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">InnoHR AI thiết kế cho sự tăng trưởng của bạn</h2>
          <p className="text-lg text-muted-foreground">
            Linh hoạt hoàn toàn theo quy trình riêng, bảo mật tuyệt đối và AI thông minh
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 bg-white rounded-xl border border-border/50 text-center">
              <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
