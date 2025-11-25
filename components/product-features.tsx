export function ProductFeatures() {
  return (
    <section id="benefits" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Phần mềm theo bạn, không phải bạn theo phần mềm</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="">
            <img src="/images/product1.jpg" alt="Dashboard Features" className="w-full h-auto" />
          </div>

          <div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <div>
                  <h4 className="font-semibold">Tùy chỉnh mọi nghiệp vụ HR theo quy trình riêng</h4>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <div>
                  <h4 className="font-semibold">Không giới hạn template, workflow tự do</h4>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <div>
                  <h4 className="font-semibold">Thêm/sửa/xóa tính năng theo nhu cầu</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
