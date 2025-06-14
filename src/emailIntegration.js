import React from 'react';

export default function EmailIntegration() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">📧 إعدادات البريد الإلكتروني</h2>
      <input type="email" placeholder="example@domain.com" className="border p-2 w-full rounded mb-2" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">حفظ</button>
    </div>
  );
}
