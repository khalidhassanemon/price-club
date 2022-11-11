import React from 'react';
import PriceOption from '../priceOption/priceOption';
const pricing = () => {
    const pricingOptions = [
        { id: 1, name: 'Free', price: 0,features:[
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'Hudai Feature',
            'Ajaira Feature'
        ] },
        { id: 2, name: 'medium', price: 9.94,features:[
            'Everything On Free',
            'Extra Feature',
            'Unnecessary Feature',
            'Hudai Feature',
            'Ajaira Feature'
        ] },
        { id: 3, name: 'premium', price: 19.99,features:[
            'Everything On Premium',
            'Extra Feature',
            'Unnecessary Feature',
            'Hudai Feature',
            'Ajaira Feature'
        ] }
    ]
    return (
        <div >
            <h2 className='text-5xl font-bold bg-indigo-300 p-12 text-white'>Best Deal Of the town</h2>
            <div className='grid md:grid-cols-3 gap-3 mt-4'>
            {
                pricingOptions.map(Option =>
                    <PriceOption
                        key={Option.id}
                        Option={Option}
                    ></PriceOption>)
            }
            </div>
         
        </div>
    );
};

export default pricing;