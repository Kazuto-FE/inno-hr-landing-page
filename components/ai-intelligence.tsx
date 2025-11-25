export function AIIntelligence() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">AI thông minh – Từ bộc tách CV đến dự báo nhân sự</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white border border-border rounded-2xl shadow-lg overflow-hidden">
            <img src="/images/image.png" alt="AI Features" className="w-full h-auto" />
          </div>

          <div className="space-y-6">
            <div className="flex gap-3">
              <span className="text-green-500 font-bold text-xl">✓</span>
              <div>
                <h4 className="font-semibold">Chấm công thông minh, nhân diện khuôn mặt</h4>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-green-500 font-bold text-xl">✓</span>
              <div>
                <h4 className="font-semibold">Độc lập phân tích CV tự động</h4>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-green-500 font-bold text-xl">✓</span>
              <div>
                <h4 className="font-semibold">Dự báo nhân sự và phân tích xu hướng</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
