import { Lock, Users, Shield, TrendingUp, Zap, Settings } from "lucide-react"

export function EnterpriseSolutions() {
  const solutions = [
    {
      icon: Lock,
      title: "Phần mềm cung cấp",
      description: "Không tùy chỉnh được quy trình, buộc phải làm theo template có sẵn",
    },
    {
      icon: Users,
      title: "Thay đổi quy trình",
      description: "Phải điều chỉnh cách làm việc để phù hợp với phần mềm",
    },
    {
      icon: Shield,
      title: "Dữ liệu bị giữ lại",
      description: "Khó xuất dữ liệu, bị ràng buộc với nhà cung cấp, không chuyển đổi",
    },
    {
      icon: TrendingUp,
      title: "Bảo mật thấp",
      description: "Chia sẻ cơ sở dữ liệu với nhiều công ty khác, rủi ro bảo mật cao",
    },
    {
      icon: Zap,
      title: "Thiếu AI hỗ trợ",
      description: "Không có AI tự động hóa, HR tốn nhiều thời gian cho các tác vụ lặp lại.",
    },
    {
      icon: Settings,
      title: "Khó mở rộng",
      description: "Khi doanh nghiệp lớn lên, phần mềm, không theo kịp nhu cầu phát triển",
    },
  ]

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Doanh nghiệp đã lớn, nhưng phần mềm HRM vẫn mặc "chiếc áo chật"?
          </h2>
          <p className="text-lg text-muted-foreground">
            Hầu hết doanh nghiệp SME đang phải thích nghi với phần mềm thay vì phần mềm phục vụ họ
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, idx) => (
            <div key={idx} className="p-6 bg-gray-50 rounded-xl border border-border/50">
              <solution.icon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold mb-2">{solution.title}</h3>
              <p className="text-sm text-muted-foreground">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
