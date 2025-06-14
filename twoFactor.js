import React from 'react';

export default function TwoFactor() {
  return (
    <div className="p-6 text-center">
      <h2 className="text-xl font-bold mb-4">🔐 التحقق بخطوتين</h2>
      <p className="mb-2">أدخل رمز التحقق المرسل:</p>
      <input type="text" className="border p-2 rounded mb-4" />
      <br />
      <button className="bg-green-600 text-white px-4 py-2 rounded">تحقق</button>
    </div>
  );
}
