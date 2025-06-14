import React from 'react';

export default function Features() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">🔧 التحكم في المميزات</h2>
      <div className="space-y-3">
        <div className="bg-white p-3 rounded shadow">
          التقييمات <button className="bg-red-600 text-white px-3 py-1 rounded ml-2">تعطيل</button>
        </div>
        <div className="bg-white p-3 rounded shadow">
          كوبونات الخصم <button className="bg-green-600 text-white px-3 py-1 rounded ml-2">تفعيل</button>
        </div>
      </div>
    </div>
  );
}
