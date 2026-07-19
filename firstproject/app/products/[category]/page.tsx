import React from 'react';

// Next.js بيمرر الـ params كخاصية (prop) للكمبوننت
export default async function CategoryPage({ params }) {
  // بنستخرج اسم القسم من الرابط (نفس الاسم اللي سميناه للمجلد)
  const categoryName = await params;
  const truename = categoryName.category; 

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">أنت الآن داخل قسم: {truename}</h1>
    </div>
  );
}