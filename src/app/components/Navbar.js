import React from 'react'

function Navbar() {
    const links = ['home', 'about', 'work', 'contact']
    return (
        <div className='fixed top-0 left-0 z-[999999] flex flex-row items-start justify-between w-full p-8'>
            <h2 className='font-thin uppercase'>Ismail Bayoussef&apos;s <span className='bg-[#A72582]'>Portfolio</span></h2>
            <ul className='flex flex-col gap-2 font-thin uppercase'>
                {links.map(link => <li key={link} className='relative group'>
                    <p className='relative z-50 transition-all group-hover:font-normal'>{link}</p>
                    <div className='absolute top-0  left-0 transition-all w-0 group-hover:w-full  h-full bg-[#A72582]'>
                    </div>
                </li>)}

            </ul>
        </div>
    )
}

export default Navbar