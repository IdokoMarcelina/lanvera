import React, { useState } from 'react'

const Status = () => {
    const [active, setActive] = useState("all")

  return (
    <div className=''>
            <div className="status flex gap-4">
            <button className={`px-2 py-1.5 rounded-[4px] absolute top-[530px] left-[70px]  lg:top-[382px] lg:left-[510px] ${active ==="all" ? 'bg-white text-black' : 'bg-black text-white'}`}
                    onClick={()=> setActive("all")} 
            >All Status</button>
           
           
            <button className={`px-2 py-1.5 rounded-[4px]  absolute top-[530px] left-[168px] lg:top-[382px] lg:left-[600px] ${active ==="sale" ? 'bg-white text-black' : 'bg-black text-white' }`}
                    onClick={()=> setActive("sale")}
            >For Sale</button>
                
                <button className={`px-2 py-1.5 rounded-[4px]  absolute lg:top-[382px] top-[530px] left-[255px] lg:left-[680px] ${active === "rent"? 'bg-white text-black' : 'bg-black text-white'}`}
                        onClick={()=> setActive("rent")}
                
                >For rent</button>
        </div>
    </div>
  )
}

export default Status