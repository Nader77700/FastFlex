import React from 'react';

export default function Permissions() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">🔐 صلاحيات الأدوار</h2>
      <div className="bg-white p-4 rounded shadow space-y-3">
        <div>
          <strong>مشرف</strong> - وصول كامل
        </div>
        <div>
          <strong>دعم فني</strong> - تذاكر فقط
        </div>
        <div>
          <strong>مستخدم عادي</strong> - طلبات + تقييمات
        </div>
      </div>
    </div>
  );
}
