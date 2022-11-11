import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Tooltip, XAxis, YAxis } from 'recharts';
import axios from 'axios';
const PhoneBar = () => {
    const [Phones, setPhones] = useState([]);
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res=>res.json())
        // .then(data=>{})

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phones = data.data.data;
                console.log(phones);
                const phoneData = phones.map(phone => {
                    const parts = phone.slug.split('-');
                    const price = parseInt(parts[1]);
                    const singlePhone = {
                        name: phone.phone_name,
                        price: price
                    }
                    return singlePhone;
                })
                console.log(phoneData);
                setPhones(phoneData);
            });
    }, [])
    return (
        <BarChart width={500} height={200} data={Phones}>
            <Bar dataKey="price" fill="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
        </BarChart>
    );
};

export default PhoneBar;