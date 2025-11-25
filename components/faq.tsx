import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

const faqs = [
    {
        q: "Dữ liệu có an toàn không?",
        a: `Chúng tôi sử dụng mã hóa cấp ngân hàng và tuân thủ các tiêu chuẩn bảo mật quốc tế như ISO 27001. Dữ liệu của bạn được lưu trữ an toàn tại các data center được chứng nhận.`,
    },
    {
        q: "Có tùy chỉnh theo quy trình riêng không?",
        a: `Hoàn toàn có thể. InnoHR AI được thiết kế linh hoạt với workflow tùy chỉnh, cho phép bạn cấu hình theo đúng quy trình làm việc hiện tại của công ty.`,
    },
    {
        q: "Chuyển đổi từ phần mềm cũ có khó không?",
        a: `Chúng tôi hỗ trợ migration từ MISA, BASE và các phần mềm HR phổ biến khác. Đội ngũ kỹ thuật sẽ đồng hành cùng bạn trong toàn bộ quá trình chuyển đổi.`,
    },
    {
        q: "AI có chính xác không?",
        a: `AI của chúng tôi đạt độ chính xác trên 98% trong nhận diện khuôn mặt và 95% trong phân tích CV. Hệ thống được huấn luyện với hàng triệu dữ liệu thực tế từ doanh nghiệp Việt Nam.`,
    },
    {
        q: "Hệ thống có mở rộng theo doanh nghiệp không?",
        a: `Kiến trúc cloud-native cho phép scale từ 10 đến 10,000+ nhân viên. Bạn chỉ trả phí theo số lượng user thực tế sử dụng.`,
    },
    {
        q: "Có bị khóa dữ liệu khi muốn rời đi không?",
        a: `Không. Dữ liệu thuộc về bạn 100%. Chúng tôi cam kết export toàn bộ dữ liệu theo format chuẩn khi bạn có nhu cầu chuyển đổi.`,
    },
]

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section id="faq" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-5xl font-bold">Câu Hỏi Thường Gặp</h2>
                    <p className="text-gray-600 mt-3 text-xl">Giải đáp mọi thắc mắc của bạn về InnoHR AI</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((item, idx) => {
                        const isOpen = openIndex === idx
                        return (
                            <Card key={idx} className="border border-gray-100">
                                <CardHeader className="px-4 py-3 flex items-center justify-between gap-4 cursor-pointer" onClick={() => setOpenIndex(isOpen ? null : idx)}>
                                    <div>
                                        <CardTitle className="text-base">{item.q}</CardTitle>
                                    </div>
                                    <div className={`transform transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}>
                                        <ChevronDown className="w-5 h-5 text-gray-400" />
                                    </div>
                                </CardHeader>
                                {isOpen && (
                                    <CardContent className="px-4 pb-4 pt-0">
                                        <CardDescription className="text-sm text-gray-700">{item.a}</CardDescription>
                                    </CardContent>
                                )}
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default FAQ
