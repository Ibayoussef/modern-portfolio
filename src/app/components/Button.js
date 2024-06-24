import React from 'react';

function Button({ children, onClick }) {
    return (
        <div onClick={onClick} className="relative w-fit group">
            <button
                style={{ backgroundColor: 'rgba(167, 37, 130, 0.6)' }}
                className="relative  z-50 group-hover:scale-[1.05] group-hover:translate-x-2 group-hover:-translate-y-2 transition-all border px-4 py-2 border-[#A72582] text-white"
            >
                {children}
            </button>
            <div
                style={{ backgroundColor: 'rgba(167, 37, 130, 0.3)' }}
                className="absolute top-0 left-0 z-40 w-full h-full "
            ></div>
        </div>
    );
}

export default Button;
