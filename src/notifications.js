import React from 'react';

export default function Notifications() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">🔔 إرسال الإشعارات</h2>
      <textarea className="w-full border p-2 rounded" placeholder="اكتب الإشعار هنا..."></textarea>
      <div className="mt-2">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">إرسال للجميع</button>
      </div>
    </div>
  );
}
