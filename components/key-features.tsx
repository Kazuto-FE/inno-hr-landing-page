import Image from "next/image"

export function KeyFeatures() {
  const features = [
    {
      icon: "/Icons/settings.png",
      title: "Tùy chỉnh 100%",
      description: "Theo quy trình riêng của bạn",
      bg: "bg-blue-100",
      fg: "text-blue-600",
    },
    {
      icon: "/Icons/shield_green.png",
      title: "Database riêng tư",
      description: "Bảo mật cấp độ ngân hàng",
      bg: "bg-green-100",
      fg: "text-green-600",
    },
    {
      icon: "/Icons/brain_purple.png",
      title: "AI thông minh",
      description: "Hỗ trợ văn hành hàng ngày",
      bg: "bg-purple-100",
      fg: "text-purple-600",
    },
    {
      icon: "/Icons/download.png",
      title: "Xuất dữ liệu tự do",
      description: "Không ràng buộc nhà cung cấp",
      bg: "bg-orange-100",
      fg: "text-orange-600",
    },
  ]

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">InnoHR AI thiết kế cho sự tăng trưởng của bạn</h2>
          <p className="text-xl text-muted-foreground">
            Linh hoạt hoàn toàn theo quy trình riêng, bảo mật tuyệt đối và AI thông minh
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center p-6 bg-transparent">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto ${feature.bg}`}>
                <Image
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  width={32}
                  height={32}
                  className="object-contain"
                  unoptimized
                />
              </div>
              <h3 className="font-semibold mb-2 text-2xl">{feature.title}</h3>
              <p className="text-base text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
