"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function CTASection() {
  const [selectedOption, setSelectedOption] = useState("demo")
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    phone: "",
    industry: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", { selectedOption, ...formData })
  }

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Đừng để phần mềm giới hạn tiềm năng doanh nghiệp bạn
          </h2>
          <p className="text-lg text-gray-300 mb-2">
            Đăng ký ngay hôm nay để nhận bản Demo hệ thống HRM được thiết kế riêng
          </p>
          <p className="text-lg text-gray-300">cho quy trình của bạn.</p>
        </div>

        {/* Form Container */}
        <div className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-lg p-8 sm:p-12">
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <p className="text-gray-300 font-medium mb-4">Tôi muốn:</p>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-3 border border-slate-600 rounded-lg cursor-pointer hover:bg-slate-700/50 transition">
                  <input
                    type="radio"
                    name="option"
                    value="demo"
                    checked={selectedOption === "demo"}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="w-4 h-4"
                  />
                  <span className="text-blue-400">💼</span>
                  <span className="text-gray-200">Đặt lịch Demo (30 phút)</span>
                </label>
                <label className="flex items-center gap-3 p-3 border border-slate-600 rounded-lg cursor-pointer hover:bg-slate-700/50 transition">
                  <input
                    type="radio"
                    name="option"
                    value="selfhost"
                    checked={selectedOption === "selfhost"}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="w-4 h-4"
                  />
                  <span className="text-blue-400">🖥️</span>
                  <span className="text-gray-200">Nhận tư vấn về Self-Host</span>
                </label>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-4 mb-8">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Tên công ty *</label>
                  <input
                    type="text"
                    placeholder="Nhập tên công ty"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Email doanh nghiệp *</label>
                  <input
                    type="email"
                    placeholder="Nhập email doanh nghiệp"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Số điện thoại *</label>
                  <input
                    type="tel"
                    placeholder="Nhập số điện thoại"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Ngành nghề</label>
                  <input
                    type="text"
                    placeholder="Nhập ngành nghề"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button
                type="submit"
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium flex items-center gap-2"
              >
                Đặt lịch ngay
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
