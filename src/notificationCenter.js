import React from 'react';

export default function NotificationCenter() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">📬 مركز الإشعارات</h2>
      <ul className="bg-white p-4 rounded shadow space-y-1">
        <li className="text-sm">📣 تم إضافة باقة جديدة</li>
        <li className="text-sm">🧾 طلبك #105 تم بنجاح</li>
      </ul>
    </div>
  );
}
