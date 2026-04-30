import Link from 'next/link';
import React from 'react';
// import '../app/globals.css';
const NotFound = () => {
    return (
        <div className='h-[88vh] flex justify-center items-center flex-col gap-6'>
            <h2 className='font-bold text-5xl text-orange-500'>Page Not Found !!</h2>
            <Link href='/'>
                <button className='btn bg-violet-500 text-white'>Back to Home</button>
            </Link>
        </div>
    );
};
export default NotFound;