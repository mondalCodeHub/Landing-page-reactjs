import React from "react";
import phoneImg from './assets/phone.svg'
import { useGlobalContext } from "./Context";

const Hero = () => {
    const { closeSubmenu } = useGlobalContext();
    return (
        <>
            <section className="hero" onMouseOver={closeSubmenu}>
                <div className="hero-center">
                    <article className="hero-info">
                        <h1>Random Responsive landing page </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero qui alias tempora facilis distinctio odit nostrum at magni doloremque eum iste saepe, velit nobis ut.</p>
                        <button className="btn">Start Now</button>
                    </article>
                    <article className="hero-images">
                        <img src={phoneImg} className='phone-img' alt="phone" />
                    </article>
                </div>
            </section>
        </>
    )
}

export default Hero;