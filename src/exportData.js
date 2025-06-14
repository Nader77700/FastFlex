import React from 'react';

export default function ExportData() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">📤 تصدير البيانات</h2>
      <div className="space-x-2">
        <button className="bg-green-600 text-white px-4 py-2 rounded">تصدير كـ CSV</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">تصدير كـ PDF</button>
      </div>
    </div>
  );
}
