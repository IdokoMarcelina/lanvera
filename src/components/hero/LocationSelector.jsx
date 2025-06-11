import React, { useState } from 'react'
import Location from './Location'

const LocationSelector = () => {
    const [region, setRegion] = useState('')
    const [lga, setLga] = useState('')

  return (
    <div className='flex gap-15 lg:gap-10 items-center'>

        <div className='lg:grid'>
            <p className='font-meduim mb-1 text-[13px] text-gray-400'>Loaction</p>
            
            <select value={region}
                    onChange={(e)=> {
                        setRegion(e.target.value);
                        setLga('')
                    }}
                    className='lg:w-[190px] w-[140px] text-[12px]  lg:text-[15px] border-0 border-b border-black border-solid '
            >

                <option value="">Select your Loaction</option>
                {
                   Object.keys(Location).map( (state)=> (
                    <option key={state} value={state}>
                        {state}
                    </option>
                   ))
                }
                
            </select>
        </div>


        <div>
            <p className='text-gray-400 text-[13px]'>Sub Location</p>

            <select value={lga}
                    onChange={(e)=>setLga(e.target.value)}
                    disabled={!region}
                    className={`lg:w-[190px] w-[140px] text-[12px] lg:text-[15px] border-0 border-b border-black border-solid  ${ !region? ' text-gray-400'  : 'text-black' }`}
            
            >
                <option value="">{region? 'Select your city' : 'Select a State first'}</option>
                {
                    region && 
                        Location[region].map((area)=> (
                            <option key={area} value={area}>
                                {area}
                            </option>
                        ))
                }

            </select>
        </div>
        
    </div>
  )
}

export default LocationSelector