import React from 'react'
import FaqCard from './FaqCard'
import { TiArrowSortedDown } from "react-icons/ti";
import frame1 from '../../assets/frame1.png'
import frame2 from '../../assets/frame2.png'
import frame3 from '../../assets/frame3.png'

const Others = () => {
  return (
    <div>

        <div className="flex justify-between mx-[40px] my-[50px]">
            <div className='w-[700px]'>
                <h5 className='font-bold text-3xl'>General FAQs</h5>
                <p className='text-gray-500 text-sm'>Every thing you need to 
                    know about lanvera, how it works</p>
            </div>

            <div className='w-[896px]'>
                <div className=" bg-[#f3f3f3] p-6 mb-6">
                    <h3 className='font-bold'>Is Lanvera available in other countries outside Nigeria?</h3>
                    <p className='text-sm'>Lanvera is available all over te world. agents from all 
                        over can list properties and have their clients use our platform to view property
                        . it is reliable, fast, easy. work and buy from the comfort of your 
                        home just in three steps: login list show, or login view ask to inspct
                    </p>
                </div>

                <div className="bottom">
                <FaqCard
                    text="Can i get help if i have an issue with the platform? "
                    Icon= {TiArrowSortedDown}
                />
                <FaqCard
                    text="Where can i get help with my account or listing?"
                    Icon= {TiArrowSortedDown}
                />
                <FaqCard
                    text="Can i access Lanvera on both desktop and mobile? "
                    Icon= {TiArrowSortedDown}
                />
                <FaqCard
                    text="Do i need an account to browse properties "
                    Icon= {TiArrowSortedDown}
                />
                <FaqCard
                    text="Can i trust the information shared on Lanvera? "
                    Icon= {TiArrowSortedDown}
                />
                </div>
            </div>

          
        </div>

        <div className="flex justify-between mx-[40px] my-[50px]">
            <div className='w-[700px]'>
                <h5 className='font-bold text-3xl'>For Buyers</h5>
                <p className='text-gray-500 text-sm'>Every thing you need to 
                    know about lanvera, how it works</p>
            </div>

            <div className='w-[896px]'>
                <div className=" bg-[#f3f3f3] p-6 mb-6">
                    <h3 className='font-bold'>Can i contact agents directly through Lanvera?</h3>
                    <p className='text-sm'>Yes, Lanvera has a built in chat that allows commmunication within the app 
                        other means of commuincation may include whatsapp, phone, twitter and other
                        social media platforms
                    </p>
                </div>

                <div className="bottom">
                <FaqCard
                    text="What types of properties are available on Lanvera? "
                    Icon= {TiArrowSortedDown}
                />
                <FaqCard
                    text="How do i save properties i'm interested in?"
                    Icon= {TiArrowSortedDown}
                />
                <FaqCard
                    text="is it possible to negotiate prices with agents? "
                    Icon= {TiArrowSortedDown}
                />
                <FaqCard
                    text="Are all property listings on Lanvera verified?"
                    Icon= {TiArrowSortedDown}
                />
                <FaqCard
                    text="What's the process for scheduling a property visit? "
                    Icon= {TiArrowSortedDown}
                />
                </div>
            </div>

          
        </div>


        <div className="flex justify-between mx-[40px] my-[50px]">
            <div className='w-[700px]'>
                <h5 className='font-bold text-3xl'>For Buyers</h5>
                <p className='text-gray-500 text-sm'>Every thing you need to 
                    know about lanvera, how it works</p>
            </div>

            <div className='w-[896px]'>
                <div className=" bg-[#f3f3f3] p-6 mb-6">
                    <h3 className='font-bold'>Can i contact agents directly through Lanvera?</h3>
                    <p className='text-sm'>Yes, Lanvera has a built in chat that allows commmunication within the app 
                        other means of commuincation may include whatsapp, phone, twitter and other
                        social media platforms
                    </p>
                </div>

                <div className="bottom">
                <FaqCard
                    text="What types of properties are available on Lanvera? "
                    Icon= {TiArrowSortedDown}
                />
                <FaqCard
                    text="How do i save properties i'm interested in?"
                    Icon= {TiArrowSortedDown}
                />
                <FaqCard
                    text="is it possible to negotiate prices with agents? "
                    Icon= {TiArrowSortedDown}
                />
                <FaqCard
                    text="Are all property listings on Lanvera verified?"
                    Icon= {TiArrowSortedDown}
                />
                <FaqCard
                    text="What's the process for scheduling a property visit? "
                    Icon= {TiArrowSortedDown}
                />
                </div>
            </div>

          
        </div>


        <div className="flex justify-between mx-[40px] my-[50px]">
            <div className='w-[700px]'>
                <h5 className='font-bold text-3xl'>For Agents</h5>
                <p className='text-gray-500 text-sm'>Every thing you need to 
                    know about lanvera, how it works</p>
            </div>

            <div className='w-[896px]'>
                <div className=" bg-[#f3f3f3] p-6 mb-6">
                    <h3 className='font-bold'>How do i list a property on Lanvera?</h3>
                    <p className='text-sm'>Clck on get started to register or login if you already have an 
                        account. when you login you would have access to list property button which
                        enables you to fill the form to post your property
                    </p>
                </div>

                <div className="bottom">
                <FaqCard
                    text="Are thre any fees for posting my listings? "
                    Icon= {TiArrowSortedDown}
                />
                <FaqCard
                    text="How do i rspond to message from buyers?"
                    Icon= {TiArrowSortedDown}
                />
                <FaqCard
                    text="What options are available to boost my listing's visibility? "
                    Icon= {TiArrowSortedDown}
                />
                <FaqCard
                    text="Are there any fees for posting my listing?"
                    Icon= {TiArrowSortedDown}
                />
                <FaqCard
                    text="What's the process for editing or removing a listing? "
                    Icon= {TiArrowSortedDown}
                />
                </div>
            </div>

          
        </div>


        {/* what we offer */}

        <div className='text-center  mt-30 mb-20'>
            <h4 className='font-bold text-4xl'>What we offer</h4>
            <p className='text-sm mt-4 mb-6'>Lanvera offers an approachable and trusted platform for property
                for property discovery. whether <br/> you're searching for land or your next home. we connect you with real agents
                 and <br/> verified listings across the market.
            </p>
            <button className='bg-[#d93e00] rounded-[4px] text-white p-2'>Explore Properties</button>
        </div>


        <div className='flex justify-center gap-5 mx-[20px] my-[10px]'>
            
            <div className='w-[300px]'>
                <div >
                <img src={frame3} alt="" />
                </div>

                <div className=''>
                    <h5 className='font-bold'>wide variety of properties</h5>
                    <p className='text-[10px]'>from budget friendly homes to premium land,
                        we provide options that suits every buyer.</p>
                </div>
            </div>
            
            <div className='w-[300px] mt-[20px]'>
                <div>
                <img src={frame1} alt="" />
                </div>

                <div>
                    <h5  className='font-bold'>Right Price & Authenticity</h5>
                    <p className='text-[10px]'>Our listings are verified for accuracy and value. 
                        so you can browse with confidence.</p>
                </div>
            </div>
            
            <div className='w-[300px] mt-[40px]'>
                <div>
                <img src={frame2} alt="" />
                </div>

                <div>
                    <h5  className='font-bold'>Responsibility & Accreditation</h5>
                    <p className='text-[10px]'>We work with trusted, verified agents to ensure 
                        transparency and trust across every interaction.</p>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default Others