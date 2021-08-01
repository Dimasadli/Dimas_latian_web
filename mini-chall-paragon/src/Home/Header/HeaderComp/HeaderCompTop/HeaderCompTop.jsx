import React, { Component } from 'react';

class HeaderCompTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: 0
        };
    }
    render() {
        return (
            <div className="d-flex justify-content-between header-top align-items-center">
                <div className='header-left'></div>
                <div className='header-title'>
                    <p >NEW: Kahf Gentle Exfoliating Face Scrub</p>
                </div>
                <div className='header-cart'>
                    <div className='header-cart-trolley'>
                        <img src="https://www.kahfeveryday.com/wp-content/uploads/2021/07/group-1.png" alt="" />
                        <p>&#40;{this.state.order}&#41; |</p>
                    </div>
                    <div className='header-cart-heart'>
                        <img src="https://www.kahfeveryday.com/wp-content/uploads/2021/07/path-1.png" alt="" />
                        <p>&#40;{this.state.order}&#41; |</p>
                    </div>
                    <div className='header-cart-login'>
                        <img src="https://www.kahfeveryday.com/wp-content/uploads/2021/07/profile-1.png" alt="" />
                        <p>LOGIN</p>
                    </div>
                </div>
            </div>
        );
    }
}



export default HeaderCompTop;
