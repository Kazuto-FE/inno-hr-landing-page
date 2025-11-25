export function DataSecurity() {
  return (
    <section id="security" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Cơ sở dữ liệu riêng biệt & Tự do sao lưu</h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-2">
                  Private Database: Mỗi khách hàng sở hữu một Database riêng biệt, mà hóa chuẩn ngân hàng, không dùng
                  chung "nồi lẩu" dữ liệu.
                </h4>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">
                  Easy Backup: Không giới hạn các bên khác, chúng tôi cung cấp công cụ để bạn Tải xuống (Export) trọn
                  vẹn dữ liệu lịch sử bất cứ lúc nào. Dữ liệu là của bạn, vĩnh viễn.
                </h4>
              </div>
            </div>
          </div>

          <div className="">
            <img src="/images/product2.jpg" alt="Data Security" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
