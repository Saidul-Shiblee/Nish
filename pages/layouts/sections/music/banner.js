
import React from 'react'
import Tilt from 'react-parallax-tilt';

const Banner = () => {

    return (
        <section className="music header" id="header">
            <div className="music-content">
                
                <div className="music-bg bg bg-shadow-top">
                    <Tilt perspective="20000" transitionSpeed="3000">
                        <div className="text-center w-100">
                            <div className="img-height">
                                <img alt="" className="img-fluid" src="/assets/images/music/man.png" />
                            </div>
                        </div>
                    </Tilt>
                </div>
            </div>
          
            <div className="left-side">
                <h6 className="follow-text mb-0">follow us</h6>
                <ul>
                    <li><a href="https://www.instagram.com/"><img alt="" className="img-fluid" src="/assets/images/music/icons/insta.png" /></a></li>
                    <li><a href="https://twitter.com/"><img alt="" className="img-fluid" src="/assets/images/music/icons/twitter.png" /></a></li>
                    <li><a href="https://www.facebook.com/"><img alt="" className="img-fluid" src="/assets/images/music/icons/facebook.png" /></a></li>
                </ul>
            </div>
        </section>
    )
}



export default Banner;



