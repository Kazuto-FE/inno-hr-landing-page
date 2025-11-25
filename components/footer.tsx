export function Footer() {
  return (
    <footer id="footer" className="border-t border-border/20 bg-muted/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-xs font-bold text-white">I</span>
              </div>
              <span className="font-bold">InnoVerse</span>
            </div>
            <p className="text-sm text-muted-foreground">Nền tảng HR AI thông minh cho doanh nghiệp</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Tính năng</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Chấm Công AI
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Tuyển Dụng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Báo Cáo AI
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Công ty</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Tuyển dụng
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Pháp lý</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Điều khoản dịch vụ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/20 pt-8">
          <p className="text-sm text-muted-foreground text-center">© 2025 InnoVerse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
