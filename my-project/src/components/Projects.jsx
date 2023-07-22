import React from 'react'

function Projects() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center bg-gray-500 overflow-hidden w-screen min-h-screen" style={{backgroundImage: 'url(../src/img/img3.jpg)'}}>
        
        <div className="card ml-10 mr-10 my-10 mb-10 w-72 bg-slate-900 shadow-xl ">
    <figure className="px-2 pt-2">
        <img src="../src/img/CHONITOS LOGO.jpg" alt="Shoes" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center text-slate-300">
        <h2 className="card-title">Chonitos BarberShop</h2>
        <p>Developed and designed a user-friendly, clean, and intuitive website that effectively showcases the services of a BarberShop, leading to increased visibility and client engagement. Prioritized the work of the barbers with images for the visibility of the clients</p>
        <span>Tools Used: HTML, CSS, JS.</span>
        <div className="card-actions">
        <button className="btn text-slate-300 bg-slate-900 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-100 hover:bg-black active:bg-black"><a href="https://chonitosbarber.com/">LINK</a></button>
        </div>
    </div>
    </div>
    
    <div className="card ml-10 mr-10 my-10 mb-10 w-72 bg-slate-900 shadow-xl ">
    <figure className="px-2 pt-2">
        <img src="../src/img/CHONITOS LOGO.jpg" alt="Shoes" className=" text-slate-300 bg-slate-900 hover:bg-black active:bg-black" />
    </figure>
    <div className="card-body items-center text-center text-slate-300">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
        <button className="btn text-slate-300 bg-slate-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-black active:bg-black">Buy Now</button>
        </div>
    </div>
    </div>

    <div className="card ml-10 mr-10 my-10 mb-10 w-72 bg-slate-900 shadow-xl ">
    <figure className="px-2 pt-2">
        <img src="../src/img/CHONITOS LOGO.jpg" alt="Shoes" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center text-slate-300">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
        <button className="btn text-slate-300 bg-slate-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-black active:bg-black">Buy Now</button>
        </div>
        </div>
        </div>

        <div className="card ml-10 mr-10 my-10 mb-10 w-72 bg-slate-900 shadow-xl ">
    <figure className="px-2 pt-2">
        <img src="../src/img/CHONITOS LOGO.jpg" alt="Shoes" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center text-slate-300">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
        <button className="btn text-slate-300 bg-slate-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-black active:bg-black">Buy Now</button>
        </div>
        </div>
        </div>

    </div>
    
    
    );
}

export default Projects