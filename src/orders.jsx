import React from 'react';

export default function Orders() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">🧾 الطلبات</h2>
      <ul className="space-y-3">
        <li className="bg-white p-3 rounded shadow">
          طلب #101 - المستخدم: أحمد - الباقة: 5GB - الحالة: <span className="text-yellow-600">قيد الانتظار</span>
        </li>
        <li className="bg-white p-3 rounded shadow">
          طلب #102 - المستخدم: سارة - الباقة: 10GB - الحالة: <span className="text-green-600">تم</span>
        </li>
      </ul>
    </div>
  );
}
