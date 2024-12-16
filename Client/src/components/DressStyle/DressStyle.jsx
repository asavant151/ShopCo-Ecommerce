import React from 'react'

const DressStyle = () => {
    return (
        <div className="container mx-auto px-4 pt-12 md:pt-16 rounded-[40px] bg-[#F0F0F0] md:mt-20 mt-12">
            <h2 className="font-['Merriweather'] text-black text-[32px] md:text-[48px] font-bold uppercase mb-8 md:mb-14 text-center">
                BROWSE BY dress STYLE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img src="/assets/style-1.png" alt="" />
                <img src="/assets/style-2.png" alt="" />
                <img src="/assets/style-3.png" alt="" />
                <img src="/assets/style-4.png" alt="" />
            </div>
        </div>
    )
}

export default DressStyle