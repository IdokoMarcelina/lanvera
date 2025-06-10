import React, { useState } from 'react'

const Status = () => {
    const [active, setActive] = useState("all")

  return (
    <div>
            <div className="status flex gap-4">
            <button className={`px-4 py-2 rounded-[12px] absolute top-[380px] left-[410px] ${active ==="all" ? 'bg-white text-black' : 'bg-black text-white'}`}
                    onClick={()=> setActive("all")} 
            >All Status</button>
           
           
            <button className={`px-4 py-2 rounded-[12px]  absolute top-[380px] left-[520px] ${active ==="sale" ? 'bg-white text-black' : 'bg-black text-white' }`}
                    onClick={()=> setActive("sale")}
            >For Sale</button>
                
                <button className={`px-4 py-2 rounded-[12px]  absolute top-[380px] left-[620px] ${active === "rent"? 'bg-white text-black' : 'bg-black text-white'}`}
                        onClick={()=> setActive("rent")}
                
                >For rent</button>
        </div>
    </div>
  )
}

export default Status