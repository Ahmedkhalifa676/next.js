import React from 'react';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      
      {/* عنوان الصفحة */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">أقسام المتجر</h1>
        <p className="text-gray-500">اختر القسم الذي تريده لتصفح المنتجات</p>
      </div>

      {/* عرض الأقسام باستخدام Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* 1. قسم المأكولات */}
        <Link href="/products/food">
          <div className="flex flex-col items-center p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 bg-white group">
            <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-4 bg-orange-100 transition-transform duration-300 group-hover:scale-110">
              🍔
            </div>
            <h2 className="text-2xl font-bold mb-2 text-orange-600">مأكولات</h2>
            <p className="text-center text-gray-500 text-sm">أشهى المأكولات والوجبات السريعة</p>
          </div>
        </Link>

        {/* 2. قسم المشروبات */}
        <Link href="/products/drinks">
          <div className="flex flex-col items-center p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 bg-white group">
            <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-4 bg-blue-100 transition-transform duration-300 group-hover:scale-110">
              🥤
            </div>
            <h2 className="text-2xl font-bold mb-2 text-blue-600">مشروبات</h2>
            <p className="text-center text-gray-500 text-sm">عصائر طازجة، قهوة، ومشروبات غازية</p>
          </div>
        </Link>

        {/* 3. قسم السناكس */}
        <Link href="/products/snacks">
          <div className="flex flex-col items-center p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 bg-white group">
            <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-4 bg-yellow-100 transition-transform duration-300 group-hover:scale-110">
              🍟
            </div>
            <h2 className="text-2xl font-bold mb-2 text-yellow-700">سناكس</h2>
            <p className="text-center text-gray-500 text-sm">تسالي خفيفة، مقرمشات، وحلويات</p>
          </div>
        </Link>

        {/* 4. قسم الألعاب */}
        <Link href="/products/toys">
          <div className="flex flex-col items-center p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 bg-white group">
            <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-4 bg-purple-100 transition-transform duration-300 group-hover:scale-110">
              🎮
            </div>
            <h2 className="text-2xl font-bold mb-2 text-purple-600">ألعاب</h2>
            <p className="text-center text-gray-500 text-sm">ألعاب مسلية وهدايا للأطفال</p>
          </div>
        </Link>

      </div>
    </div>
  );
}