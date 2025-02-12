import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
}from 'react-icons/fa';

const Footer = () => {

  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React</h1>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non aspernatur 
            veniam quas voluptate explicabo eos? Minima corrupti quo praesentium architecto
             natus, aut quod delectus vel nihil nulla itaque nemo distinctio.</p>
             <div className='flex justify-between md:w-[75%] my-6'>
                < FaFacebookSquare size={30}/>
                < FaInstagram      size={30} />
                < FaTwitterSquare  size={30}/>
                <FaGithubSquare    size={30}/>
                < FaDribbbleSquare  size={30}/>
             </div>
             </div>
             <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h4 className='font-medium text-gray-400'>Solutions</h4>
                    <ul>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm' >Marketing</li>
                        <li className='py-2 text-sm'>Commerce</li>
                        <li className='py-2 text-sm'>Insight</li>
                    </ul>
                </div>

                <div>
                    <h4 className='font-medium text-gray-400'>Support</h4>
                    <ul>
                        <li className='py-2 text-sm'>About</li>
                        <li className='py-2 text-sm' >Blog</li>
                        <li className='py-2 text-sm'>Press</li>
                        <li className='py-2 text-sm'>Careers</li>
                        </ul>
                        </div>


                <div>
                    <h4 className='font-medium text-gray-400'>Company</h4>
                    <ul>
                        <li className='py-2 text-sm'>About</li>
                        <li className='py-2 text-sm' >Blog</li>
                        <li className='py-2 text-sm'>Press</li>
                        <li className='py-2 text-sm'>Careers</li>
                        </ul>
                        </div>

                        <div>
                            <h4 className='font-medium text-gray-400'>legals</h4>
                            <ul>
                                <li className='py-2 text-sm'>Claim</li>
                                <li className='py-2 text-sm' >Policy</li>
                                <li className='py-2 text-sm'>Terms</li>
                                <li className='py-2 text-sm'>Insight</li>
                                </ul>
                                </div>
        

                        </div>
                         </div>
  )
}

export default Footer