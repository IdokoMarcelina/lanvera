import React, { useState } from 'react'
import Location from './Location'

const LocationSelector = () => {
    const [region, setRegion] = useState('')
    const [lga, setLga] = useState('')

  return (
    <div className='flex gap-10'>

        <div>
            <p className='font-meduim mb-1 text-gray-400'>Loaction</p>
            
            <select value={region}
                    onChange={(e)=> {
                        setRegion(e.target.value);
                        setLga('')
                    }}
                    className='border-0 border-b border-black border-solid'
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
            <p className='text-gray-400'>Sub Location</p>

            <select value={lga}
                    onChange={(e)=>setLga(e.target.value)}
                    disabled={!region}
                    className={`border-0 border-b border-black border-solid ${ !region? 'bg-gray-100 text-gray-400'  : 'text-gray-300' }`}
            
            >
                <option value="">{region? 'Select your LGA' : 'Select a State first'}</option>
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