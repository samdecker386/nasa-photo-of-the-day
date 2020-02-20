import React from 'react';
import './PicOfTheDay.css';

const PicOfTheDay = ({date, title, url, explanation}) => {
    return (
        <div className ='image'>
            <div>
                <img src ={url} alt ='Nasa' />
            </div>
            <div className='h2'>Date: {date}</div>
            {/* <span className='textBottom'>By: {copyright}</span> */}
            <div className='title'>{title}</div>
            <div>
                <p className='exp'>{explanation}</p>
            </div>
        </div>
    );
};

export default PicOfTheDay; 