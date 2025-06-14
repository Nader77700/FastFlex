import React from 'react';

export default function AuditAutoLog() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">🧠 سجل العمليات التلقائي</h2>
      <ul className="bg-white p-4 rounded shadow space-y-1">
        <li>[14-6-2025] تسجيل دخول - المستخدم: أحمد</li>
        <li>[14-6-2025] إرسال إشعار - المالك</li>
        <li>[14-6-2025] إنشاء طلب جديد - المستخدم: سارة</li>
      </ul>
    </div>
  );
}
