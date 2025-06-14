import React from 'react'

export default function Auth() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-center p-4">
      <h1 className="text-2xl font-bold mb-4">تسجيل الدخول إلى FastFlex</h1>
      <form className="space-y-4 w-full max-w-sm">
        <input type="text" placeholder="البريد الإلكتروني" className="w-full border p-2 rounded" />
        <input type="password" placeholder="كلمة المرور" className="w-full border p-2 rounded" />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded w-full">تسجيل الدخول</button>
      </form>
    </div>
  )
}
