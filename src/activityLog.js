import React from 'react';

export default function ActivityLog() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">🧾 سجل العمليات</h2>
      <ul className="bg-white p-4 rounded shadow space-y-1">
        <li>أحمد قام بتسجيل الدخول</li>
        <li>سارة قامت بشراء باقة 10GB</li>
        <li>تم إرسال إشعار لجميع المستخدمين</li>
      </ul>
    </div>
  );
}
