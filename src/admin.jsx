import React from 'react'

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-xl font-bold mb-6">لوحة تحكم المالك - FastFlex</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <div className="bg-white p-4 rounded shadow">👥 المستخدمين</div>
        <div className="bg-white p-4 rounded shadow">📦 الباقات</div>
        <div className="bg-white p-4 rounded shadow">💰 المحفظة</div>
        <div className="bg-white p-4 rounded shadow">🧾 الطلبات</div>
        <div className="bg-white p-4 rounded shadow">⭐ التقييمات</div>
        <div className="bg-white p-4 rounded shadow">🔔 الإشعارات</div>
        <div className="bg-white p-4 rounded shadow">⚙️ الصلاحيات</div>
        <div className="bg-white p-4 rounded shadow">🔧 المميزات</div>
        <div className="bg-white p-4 rounded shadow">📊 الإحصائيات</div>
      </div>
    </div>
  )
}
