import React from 'react';

const Discount = () => {
    return (
        <div className="bg-[url('https://digital.ihg.com/is/image/ihg/ihg-homepg-refresh-homepg-mktg-mod-imea-1440x720?fit=crop,1&wid=1440&hei=720')] mt-24 h-[500px] bg-cover bg-center">
            <div className='pt-24 text-white'>
                <h3 className='font-semibold text-xl text-center'>TRAVELTRAILZ HOLIDAY OFFER</h3>
                <h1 className='lobster-regular font-bold text-4xl'>WINTER SPECIAL 35% OFF !</h1>
                <p className=' text-lg font-semibold text-center'>Enter you email to receive hot special offers and information about the <br /> best tour packages, updates and discounts !!</p>
                <div className='mt-5 flex justify-center'>
                    <form className='w-[300px] md:w-[500px] outline flex justify-between'>
                        <input
                            className='bg-transparent md:px-3 py-3 text-white'
                            type="email" name="email" placeholder='Your Email' id="" />
                        <button className='bg-[#E8604C] px-2 md:px-10 py-3 text-xl font-semibold rounded-md text-white' type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Discount;
