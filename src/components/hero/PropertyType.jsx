import React from 'react'

const PropertyType = () => {

    const properties = [
        'Room Self Contain',
        'Room and Parlour',
        '1 Bedroom Flat',
        '2 Bedroom Flat',
        '3 Bedroom Flat',
        'Duplex',
        'Bungalow',
        'terrace',
        'short-let',
        'land'
      ];
    
      const range = [
        '250,000-500,000',
        '600,000-1m',
        '1m-5m',
        '6m-10m',
        '10m-100m',
        '100m and above'
      ]
    
  return (
    <div className='flex gap-10'>
        
        <div>
            <p className='text-gray-400'>Property Type</p>

            <select className='border-0 border-b border-black border-solid' >
                <option value="">Select Property Type</option>
                {
                    properties.map((type)=>(
                        <option value={type} key={type}>
                            {type}
                        </option>
                    ))
                }
            </select>
        </div>


        <div>
            <p className='text-gray-400'>Price Range</p>

            <select className='border-0 border-b border-black border-solid'>
                <option value="">Choose Price range</option>
                {
                    range.map((price)=> (
                        <option key={price} value={price}>
                            {price}
                        </option>
                    ))
                }
            </select>
        </div>

    </div>
  )
}

export default PropertyType