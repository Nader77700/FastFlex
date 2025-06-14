import React from 'react';

export default function Settings() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">⚙️ صلاحيات المستخدمين</h2>
      <div className="bg-white p-4 rounded shadow space-y-2">
        <label><input type="checkbox" defaultChecked /> الوصول للباقات</label><br />
        <label><input type="checkbox" /> إرسال تقييم</label><br />
        <label><input type="checkbox" defaultChecked /> الوصول للطلبات</label>
      </div>
    </div>
  );
}
