import React from 'react';

export default function Coupons() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">🎁 أكواد الخصم</h2>
      <button className="bg-blue-600 text-white px-4 py-2 rounded mb-3">➕ إضافة كود خصم</button>
      <div className="bg-white p-4 rounded shadow">
        <p>كود: FAST10 - خصم: 10%</p>
        <button className="bg-red-600 text-white px-3 py-1 rounded mt-2">حذف</button>
      </div>
    </div>
  );
}
