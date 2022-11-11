import React from 'react';
import Feature from '../Feature/Feature';

const priceOption = ({Option}) => {
    const {features}=Option;
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-6'>
            <div>
            <h1>
                <span className='text-6xl font-bold text-white'>{Option.price}</span>
                <span className='text-2xl text-gray-100'>/month</span>
                </h1>
            <h3 className='text-3xl my-4'>{Option.name}</h3>
            </div>
             {
              features.map((feature,idx)=>
              <Feature 
              key={idx} 
              feature={feature}>
              </Feature>)
             }
             <button className='bg-green-500 px-5 py-2 w-full rounded-md text-white font-bold mt-4'>Buy Now</button>
        </div>
      
    );
};

export default priceOption; 