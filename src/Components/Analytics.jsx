import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4' >
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2' >
            <img  className='w-[500px] mx-auto my-4' src={Laptop} alt="" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a]'>DATA ANALYTICS DASHBOARD</p> 
                <h1 className='md:text-4xl sm:text-3xl font-bold py-2' >Manage Data Analytics Centrally</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto quos dicta est, officia nobis optio odio unde, 
                    veritatis voluptates cupiditate et quasi assumenda minima voluptatum tenetur aliquam omnis nisi ut.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita facere, reiciendis sint magnam voluptatibus,
                     amet enim dolor ipsum voluptatum iure consequatur exercitationem id eveniet sed hic, non neque nulla recusandae!
                </p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 md:mx-0  mx-auto py-3 ' >Get Started</button>
            </div>

        </div>

    </div>
  )
}

export default Analytics