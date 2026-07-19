import React from 'react';
import Link from 'next/link'; // استيراد Link من Next.js

export default function Header() {
  return (
    <div>
      <header className='w-full flex gap-3 items-center justify-center p-3'>
        {/* تم تعديل المسار إلى '/' واستخدام Link بدلاً من a و button */}
        <Link href='/' className='btn btn-primary w-[8rem] text-center'>
          Home
        </Link>
        
        <Link href='/about' className='btn btn-primary w-[8rem] text-center'>
          About
        </Link>
        
        <Link href='/products' className='btn btn-primary w-[8rem] text-center'>
          Products
        </Link>
        
        <Link href='/settings' className='btn btn-primary w-[8rem] text-center'>
          Settings
        </Link>
        
        <Link href='/profile' className='btn btn-primary w-[8rem] text-center'>
          Profile
        </Link>
      </header>
    </div>
  );
}