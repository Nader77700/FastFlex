import React from 'react';

export default function ResetPassword() {
  return (
    <div className="p-6 text-center">
      <h2 className="text-xl font-bold mb-4">🔐 استرجاع الحساب</h2>
      <input type="email" placeholder="أدخل بريدك الإلكتروني" className="border p-2 w-full rounded mb-4" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">إرسال رابط إعادة تعيين</button>
    </div>
  );
}
