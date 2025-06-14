import React from 'react';

export default function Statistics() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">📊 إحصائيات النظام</h2>
      <ul className="bg-white p-4 rounded shadow space-y-1">
        <li>عدد المستخدمين: 120</li>
        <li>عدد الطلبات: 85</li>
        <li>الباقات الفعالة: 4</li>
      </ul>
    </div>
  );
}
