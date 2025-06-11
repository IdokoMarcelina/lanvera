import React from 'react'
import Trending from './Trending'
import Card from '../Card'
import { IoMdHeartEmpty } from "react-icons/io";
import house1 from '../../assets/house1.png'
import house2 from '../../assets/house2.png'
import house3 from '../../assets/house3.png'
import house4 from '../../assets/house4.png'
import house5 from '../../assets/house5.png'
import house6 from '../../assets/house6.png'
import house7 from '../../assets/house7.png'
import house8 from '../../assets/house8.png'
import house9 from '../../assets/house9.png'

const Trendpage = () => {
  return (
    <div className='bg-[#fefefe]'>
        <Trending/>

        <div className="cards flex flex-col lg:flex-row justify-center">
            <Card
            
            image={house1}
            title="Modern 3-Bedroom Apartment"
            saveIcon={IoMdHeartEmpty}
            company="Prime Estates Ltd"
            address="123 Lekki Phase 1, Lagos"
            addressIcon={IoMdHeartEmpty}
            price="₦85,000,000"
            footerText1="3 Beds"
            Text1Icon={IoMdHeartEmpty}
            footerText2="2 Baths"
            Text2Icon={IoMdHeartEmpty}
            footerText3="1 Garage"
            Text3Icon={IoMdHeartEmpty}
            />
            <Card
            
            image={house2}
            title="Modern 3-Bedroom Apartment"
            saveIcon={IoMdHeartEmpty}
            company="Prime Estates Ltd"
            address="123 Lekki Phase 1, Lagos"
            addressIcon={IoMdHeartEmpty}
            price="₦85,000,000"
            footerText1="3 Beds"
            Text1Icon={IoMdHeartEmpty}
            footerText2="2 Baths"
            Text2Icon={IoMdHeartEmpty}
            footerText3="1 Garage"
            Text3Icon={IoMdHeartEmpty}
            />
            <Card
            
            image={house3}
            title="Modern 3-Bedroom Apartment"
            saveIcon={IoMdHeartEmpty}
            company="Prime Estates Ltd"
            address="123 Lekki Phase 1, Lagos"
            addressIcon={IoMdHeartEmpty}
            price="₦85,000,000"
            footerText1="3 Beds"
            Text1Icon={IoMdHeartEmpty}
            footerText2="2 Baths"
            Text2Icon={IoMdHeartEmpty}
            footerText3="1 Garage"
            Text3Icon={IoMdHeartEmpty}
            />
        </div>
        
            

        <div className="cards flex flex-col lg:flex-row justify-center">
            <Card
            
            image={house4}
            title="Modern 3-Bedroom Apartment"
            saveIcon={IoMdHeartEmpty}
            company="Prime Estates Ltd"
            address="123 Lekki Phase 1, Lagos"
            addressIcon={IoMdHeartEmpty}
            price="₦85,000,000"
            footerText1="3 Beds"
            Text1Icon={IoMdHeartEmpty}
            footerText2="2 Baths"
            Text2Icon={IoMdHeartEmpty}
            footerText3="1 Garage"
            Text3Icon={IoMdHeartEmpty}
            />
            <Card
            
            image={house5}
            title="Modern 3-Bedroom Apartment"
            saveIcon={IoMdHeartEmpty}
            company="Prime Estates Ltd"
            address="123 Lekki Phase 1, Lagos"
            addressIcon={IoMdHeartEmpty}
            price="₦85,000,000"
            footerText1="3 Beds"
            Text1Icon={IoMdHeartEmpty}
            footerText2="2 Baths"
            Text2Icon={IoMdHeartEmpty}
            footerText3="1 Garage"
            Text3Icon={IoMdHeartEmpty}
            />
            <Card
            
            image={house6}
            title="Modern 3-Bedroom Apartment"
            saveIcon={IoMdHeartEmpty}
            company="Prime Estates Ltd"
            address="123 Lekki Phase 1, Lagos"
            addressIcon={IoMdHeartEmpty}
            price="₦85,000,000"
            footerText1="3 Beds"
            Text1Icon={IoMdHeartEmpty}
            footerText2="2 Baths"
            Text2Icon={IoMdHeartEmpty}
            footerText3="1 Garage"
            Text3Icon={IoMdHeartEmpty}
            />
        </div>
    

        <div className="cards flex flex-col lg:flex-row justify-center">
            <Card
            
            image={house7}
            title="Modern 3-Bedroom Apartment"
            saveIcon={IoMdHeartEmpty}
            company="Prime Estates Ltd"
            address="123 Lekki Phase 1, Lagos"
            addressIcon={IoMdHeartEmpty}
            price="₦85,000,000"
            footerText1="3 Beds"
            Text1Icon={IoMdHeartEmpty}
            footerText2="2 Baths"
            Text2Icon={IoMdHeartEmpty}
            footerText3="1 Garage"
            Text3Icon={IoMdHeartEmpty}
            />
            <Card
            
            image={house8}
            title="Modern 3-Bedroom Apartment"
            saveIcon={IoMdHeartEmpty}
            company="Prime Estates Ltd"
            address="123 Lekki Phase 1, Lagos"
            addressIcon={IoMdHeartEmpty}
            price="₦85,000,000"
            footerText1="3 Beds"
            Text1Icon={IoMdHeartEmpty}
            footerText2="2 Baths"
            Text2Icon={IoMdHeartEmpty}
            footerText3="1 Garage"
            Text3Icon={IoMdHeartEmpty}
            />
            <Card
            
            image={house9}
            title="Modern 3-Bedroom Apartment"
            saveIcon={IoMdHeartEmpty}
            company="Prime Estates Ltd"
            address="123 Lekki Phase 1, Lagos"
            addressIcon={IoMdHeartEmpty}
            price="₦85,000,000"
            footerText1="3 Beds"
            Text1Icon={IoMdHeartEmpty}
            footerText2="2 Baths"
            Text2Icon={IoMdHeartEmpty}
            footerText3="1 Garage"
            Text3Icon={IoMdHeartEmpty}
            />
        </div>
    
        
    </div>
  )
}

export default Trendpage