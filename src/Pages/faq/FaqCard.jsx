import React from 'react'

const FaqCard = ({text, Icon}) => {
  return (
    <div className='bg-white flex items-center justify-between mb-4 shadow-lg font-bold w-[700px] px-6 py-4'>
        {text && <p>{text}</p> }
        {Icon && <Icon/>}
    </div>
  )
}

export default FaqCard