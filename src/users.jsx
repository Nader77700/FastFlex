import React from 'react';

export default function Users() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">👥 إدارة المستخدمين</h2>
      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">المستخدم</th>
            <th className="p-2">الحالة</th>
            <th className="p-2">إجراءات</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">أحمد محمد</td>
            <td className="p-2 text-green-600">نشط</td>
            <td className="p-2">
              <button className="bg-yellow-500 text-white px-2 py-1 rounded mx-1">تعديل</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">حذف</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
