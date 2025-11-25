"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, Loader2 } from "lucide-react"
import Camera from "@/public/Icons/camera.png"
import Chat from "@/public/Icons/chat.png"
import Image from "next/image"

export function CTASection() {
  const [selectedOption, setSelectedOption] = useState("demo")
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    phone: "",
    industry: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({})

  // 
  const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyrjtEFjZim5AYCznzRF2kR6a2sXtO1GEnsoCYOUiIAXg_z2yRfieUjNtFhpcWnB1qu/exec"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})

    // Validate before sending
    const email = formData.email.trim()
    const phone = formData.phone.trim()

    const newErrors: { email?: string; phone?: string } = {}

    // simple email regex
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email) {
      newErrors.email = "Vui lòng nhập email"
    } else if (!emailRe.test(email)) {
      newErrors.email = "Email không đúng định dạng"
    }

    // vietnam phone regex: starts with +84 or 0, followed by 9-10 digits
    const phoneRe = /^(?:\+84|0)\d{9,10}$/
    if (!phone) {
      newErrors.phone = "Vui lòng nhập số điện thoại"
    } else if (!phoneRe.test(phone)) {
      newErrors.phone = "Số điện thoại không đúng định dạng (VD: 0912345678 hoặc +84912345678)"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsLoading(true)
    setSuccess(false)

    const payload = {
      option: selectedOption,
      company: formData.company.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      industry: formData.industry.trim(),

      utm_source: new URLSearchParams(window.location.search).get("utm_source") || "",
      utm_medium: new URLSearchParams(window.location.search).get("utm_medium") || "",
      utm_campaign: new URLSearchParams(window.location.search).get("utm_campaign") || "",
    }

    try {
      await fetch(WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain", // bắt buộc với Google Apps Script
        },
        body: JSON.stringify(payload),
      })

      setSuccess(true)

      // Reset form
      setFormData({ company: "", email: "", phone: "", industry: "" })
      setSelectedOption("demo")

    } catch (err) {
      alert("Có lỗi mạng, bạn vui lòng thử lại hoặc liên hệ qua Fanpage nhé!")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="support" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-4">
            Đừng để phần mềm giới hạn tiềm năng doanh nghiệp bạn
          </h2>
          <p className="text-xl text-gray-300 mb-2">
            Đăng ký ngay hôm nay để nhận bản Demo hệ thống HRM được thiết kế riêng
          </p>
          <p className="text-lg text-gray-300">cho quy trình của bạn.</p>
        </div>

        <div className="bg-[#191D32] rounded-lg p-8 sm:p-12">
          {success && (
            <div className="mb-6 p-4 bg-green-900/50 border border-green-500 rounded-lg text-green-200 text-center font-medium">
              Cảm ơn bạn! Thông tin đã được gửi thành công. Chúng tôi sẽ liên hệ sớm nhất
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Radio options */}
            <div className="mb-8">
              <p className="text-gray-300 font-medium mb-4">Tôi muốn:</p>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-3 border border-slate-600 rounded-lg cursor-pointer hover:bg-slate-700/50 transition">
                  <input type="radio" name="option" value="demo" checked={selectedOption === "demo"}
                    onChange={(e) => setSelectedOption(e.target.value)} className="w-4 h-4"
                  />
                  <Image src={Camera} alt="book-demo" width={25} height={25} unoptimized />
                  <span className="text-gray-200">Đặt lịch Demo (30 phút)</span>
                </label>
                <label className="flex items-center gap-3 p-3 border border-slate-600 rounded-lg cursor-pointer hover:bg-slate-700/50 transition">
                  <input type="radio" name="option" value="selfhost" checked={selectedOption === "selfhost"}
                    onChange={(e) => setSelectedOption(e.target.value)} className="w-4 h-4"
                  />
                  <Image src={Chat} alt="demo-Self-Host" width={25} height={25} unoptimized />
                  <span className="text-gray-200">Nhận tư vấn về AI Self-Host</span>
                </label>
              </div>
            </div>

            {/* Form fields */}
            <div className="space-y-4 mb-8">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Tên công ty *</label>
                  <input type="text" required placeholder="Nhập tên công ty" value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Email doanh nghiệp *</label>
                  <input type="email" required placeholder="Nhập email doanh nghiệp" value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-slate-900/50 border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition ${errors.email ? 'border-red-500' : 'border-slate-600'}`}
                  />
                  {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Số điện thoại *</label>
                  <input type="tel" required placeholder="Nhập số điện thoại" value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full bg-slate-900/50 border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition ${errors.phone ? 'border-red-500' : 'border-slate-600'}`}
                  />
                  {errors.phone && <p className="mt-2 text-sm text-red-400">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Ngành nghề</label>
                  <input type="text" placeholder="Nhập ngành nghề" value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-end">
              <Button
                type="submit"
                size="lg"
                disabled={isLoading}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium flex items-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Đang gửi...
                  </>
                ) : (
                  <>
                    Đặt lịch ngay
                    <ChevronRight className="w-5 h-5" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}