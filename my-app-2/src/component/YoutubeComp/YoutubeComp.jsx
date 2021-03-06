import React, { Component } from 'react';
import './YoutubeComp.css'
const YoutubeComp = (props) => {
    return (
        <div className='youtube-wrapper'>
            <div className='img-thumb-yt'>
                <img src="https://images.tokopedia.net/img/cache/700/VqbcmM/2020/8/31/b015a79c-75e4-47a4-b0ae-83334410d7ec.jpg" alt="" />
                <p className='time'>{props.time}</p>
            </div>
            <p className='title'>{props.title}</p>
            <p className='desc'>{props.desc}</p>
        </div>
    )
}

YoutubeComp.defaultProps = {
    time: '00:00',
    title: 'Title Here',
    desc: 'di upload 1 bulan yang lalu'
}


export default YoutubeComp;
