import React, { useState } from 'react';

export default function Search() {
  const [query, setQuery] = useState('');
  const users = ['أحمد محمد', 'سارة يوسف', 'ليلى عماد'];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">🔎 البحث في المستخدمين</h2>
      <input
        type="text"
        placeholder="اكتب اسم المستخدم..."
        className="border p-2 w-full rounded mb-4"
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="space-y-2">
        {users.filter(name => name.includes(query)).map((name, i) => (
          <li key={i} className="bg-white p-2 rounded shadow">{name}</li>
        ))}
      </ul>
    </div>
  );
}
