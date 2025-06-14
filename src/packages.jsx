import React from 'react';

export default function Packages() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">📦 إدارة الباقات</h2>
      <button className="bg-blue-600 text-white px-4 py-2 rounded mb-4">➕ إضافة باقة جديدة</button>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold">باقة إنترنت 5GB</h3>
        <p>السعر: 20 ريال | الصلاحية: 7 أيام</p>
        <div className="mt-2 flex gap-2">
          <button className="bg-yellow-500 text-white px-3 py-1 rounded">تعديل</button>
          <button className="bg-red-500 text-white px-3 py-1 rounded">حذف</button>
        </div>
      </div>
    </div>
  );
}
