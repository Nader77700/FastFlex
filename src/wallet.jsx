import React from 'react';

export default function Wallet() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">💰 إدارة الرصيد</h2>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded shadow">الرصيد الحالي: 1500 ريال</div>
        <div className="flex gap-2">
          <button className="bg-green-600 text-white py-2 px-4 rounded">إيداع</button>
          <button className="bg-red-600 text-white py-2 px-4 rounded">سحب</button>
        </div>
        <div className="mt-6">
          <h3 className="font-semibold mb-2">تاريخ المعاملات</h3>
          <ul className="bg-white p-2 rounded shadow space-y-1">
            <li>+500 ريال - إيداع</li>
            <li>-100 ريال - سحب</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
