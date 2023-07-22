import React from 'react'

function Hero() {
        return (
            <div className="hero min-h-screen w-screen " style={{backgroundImage: 'url(../src/img/img1.jpg)'}}>
            <section id='About-me'>

        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold text-slate-50">Hello, i'm Francisco<span> and i'm a Front-end Developer</span></h1>
        <p className="mb-5 text-2xl text-zinc-50">I’m a self-taught Front-end Developer based in Baja California. I have a passion for Front-end development, Throughout my career, I've gained a strong understanding of modern web technologies such as HTML, CSS, JavaScript, as well as frameworks like React.js  I have less than a year of experience programming, I also enjoy learning more of programing.</p>
        <button className="btn text-slate-300 bg-slate-900 hover:bg-black animate-bounce"><a href='https://api.whatsapp.com/send/?phone=+526674121015&text&type=phone_number&app_absent=0'>Contact Me!</a></button>
        </div>
    </div>
            </section>
</div>   
    );
}

export default Hero