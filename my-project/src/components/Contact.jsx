import React from 'react'

function Contact() {
    return (
        <div className="hero min-h-screen w-screen" style={{backgroundImage: 'url(../src/img/img3.jpg)'}}>
        <section id='Contact'>
        <div className="hero-content flex flex-col lg:flex-row items-center justify-between space-y-10 bg-slate-900 rounded-xl">
        <img src="../src/img/img2.jpg" className="max-w-sm rounded-lg shadow-2xl" />
        <div className="items-center justify-between space-y-5">
        <h1 className="pt-px text-5xl font-bold text-slate-300">Contact</h1>
        <p className="pt-32 py-6 text-slate-300 text-2xl"> Thank you for visiting my website! If you'd like to get in touch with me, I'm excited to hear from you. Whether it's to discuss an exciting new project, collaborate on an initiative, or just chat about front-end development, I'd be happy to connect with you. <span>If you prefer a more direct contact, you can also write to my social networks I will leave the links here</span></p>
        <a role="button" className="btn text-slate-300 bg-slate-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-black active:bg-black" href='https://www.linkedin.com/in/jose-francisco-mendivil-gutierrez-996610231/'>Linkedin</a>
        <a role="button" className="btn ml-24 text-slate-300 bg-slate-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-black active:bg-black" href='https://api.whatsapp.com/send/?phone=+526674121015&text&type=phone_number&app_absent=0'>whatssapp</a>
        <a role="button" className="btn ml-24 text-slate-300 bg-slate-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-black active:bg-black" href='https://github.com/JFMendivilGutierrez'>github</a>
        <a role="button" className="btn ml-24 text-slate-300 bg-slate-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-black active:bg-black">facebook</a>
        </div>
        </div>
        </section>
    </div>
    );
}

export default Contact