import React from 'react';

export default function Support() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">🎫 نظام التذاكر</h2>
      <div className="bg-white p-4 rounded shadow space-y-2">
        <div>
          <strong>أحمد:</strong> لم تصلني الباقة<br />
          <button className="text-blue-600 text-sm">رد</button>
        </div>
        <div>
          <strong>سارة:</strong> أحتاج فاتورة<br />
          <button className="text-blue-600 text-sm">رد</button>
        </div>
      </div>
    </div>
  );
}
