import React from 'react';
import { assets } from '../../assets/assets';

const AppDownload = () => {
    return (
        <div className='m-auto mt-24 text-2xl md:text-4xl font-bold text-center'>
            <p>For Better Experience Download <br/> Tomato App</p>
            <div className='flex justify-center items-center gap-3 mx-4 mt-6 md:mt-12'>
                <img className='w-[50%] md:w-67 cursor-pointer hover:scale-110 duration-300' src={assets.play_store} alt="" />
                <img className='w-[50%] md:w-67 cursor-pointer hover:scale-110 duration-300' src={assets.app_store} alt="" />
            </div>
        </div>
    );
};

export default AppDownload;