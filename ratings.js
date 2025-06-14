import React from 'react';

export default function Ratings() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">⭐ التقييمات</h2>
      <div className="bg-white p-4 rounded shadow space-y-2">
        <div>
          <strong>أحمد:</strong> خدمة ممتازة ⭐⭐⭐⭐⭐
          <button className="text-red-500 text-sm ml-2">حذف</button>
        </div>
        <div>
          <strong>ليلى:</strong> جيدة لكن السعر مرتفع ⭐⭐⭐
          <button className="text-red-500 text-sm ml-2">حذف</button>
        </div>
      </div>
    </div>
  );
}
