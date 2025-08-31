import React, {Fragment} from 'react'
import logo from '../../images/headerback.jpg';

function LandingPage(){

  return(
    <Fragment>
      <nav className="w-full bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-14">
          <a className="text-xl font-semibold" href="#">Home</a>
          <ul className="flex items-center gap-6 text-sm">
            <li><a className="text-gray-700 hover:text-gray-900" data-value="about" href="#about">About</a></li>
            <li><a className="text-gray-700 hover:text-gray-900" data-value="portfolio" href="#portfolio">Portfolio</a></li>
            <li><a className="text-gray-700 hover:text-gray-900" data-value="blog" href="#blog">Blog</a></li>
            <li><a className="text-gray-700 hover:text-gray-900" data-value="team" href="#team">Team</a></li>
            <li><a className="text-gray-700 hover:text-gray-900" data-value="contact" href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <header className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${logo})` }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative mx-auto max-w-7xl px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Hello, Welcome To My official Website</h1>
            <p className="text-white/90 mb-6">cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className="btn btn-outline">See more</button>
          </div>
        </div>
      </header>

      <div className="about py-16" id="about">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-center text-3xl font-semibold mb-10">About Me</h1>
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12 md:col-span-4">
              <img src="/images/team-3.jpg" className="max-w-full h-auto rounded"/>
              <span className="block mt-2 text-gray-600">S.Web Developer</span>
            </div>
            <div className="col-span-12 md:col-span-8">
              <h3 className="text-2xl font-semibold mb-2">D.John</h3>
              <p className="text-gray-700">
                ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio py-16" id="portfolio">
        <h1 className="text-center text-3xl font-semibold mb-10">Portfolio</h1>
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4"><img src="/images/portfolio/port13.png" className="max-w-full h-auto rounded"/></div>
            <div className="col-span-12 md:col-span-4"><img src="/images/portfolio/port1.png" className="max-w-full h-auto rounded"/></div>
            <div className="col-span-12 md:col-span-4"><img src="/images/portfolio/port6.png" className="max-w-full h-auto rounded"/></div>

            <div className="col-span-12 md:col-span-4"><img src="/images/portfolio/port3.png" className="max-w-full h-auto rounded"/></div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src="/images/portfolio/port11.png" className="img-fluid"/>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src="/images/portfolio/electric.png" className="img-fluid"/>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src="/images/portfolio/classic.jpg" className="img-fluid"/>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src="/images/portfolio/port1.png" className="img-fluid"/>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src="/images/portfolio/port8.png" className="img-fluid"/>
            </div>
          </div>
        </div>
      </div>


      <div className="blog py-16" id="blog">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-center text-3xl font-semibold mb-10">Blog</h1>
          <div className="grid grid-cols-12 gap-6">
            {[{img:'/images/posts/polit.jpg'},{img:'/images/posts/images.jpg'},{img:'/images/posts/imag2.jpg'}].map((p,idx)=> (
              <div key={idx} className="col-span-12 md:col-span-4">
                <div className="bg-white rounded shadow overflow-hidden">
                  <div className="w-full"><img src={p.img} className="max-w-full h-auto"/></div>
                  <div className="p-4">
                    <h4 className="text-xl font-semibold">Post Title</h4>
                    <p className="text-gray-700">proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                  <div className="border-t p-4">
                    <a href="" className="link">Read more</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="team py-16" id="team">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-center text-3xl font-semibold mb-10">Our Team</h1>
          <div className="grid grid-cols-12 gap-6">
            {[
              {img:'/images/team-2.jpg', name:'Sara', role:'Manager'},
              {img:'/images/team-3.jpg', name:'Chris', role:'S.enginner'},
              {img:'/images/team-2.jpg', name:'Layla', role:'Front End Developer'},
              {img:'/images/team-3.jpg', name:'J.Jirard', role:'Team Manger'},
            ].map((m)=> (
              <div key={m.name} className="col-span-12 md:col-span-3 text-center">
                <img src={m.img} className="mx-auto max-w-full h-auto rounded" alt="team"/>
                <div className="mt-2 font-medium">{m.name}</div>
                <span className="text-gray-500">{m.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="contact-form py-16" id="contact">
        <div className="mx-auto max-w-7xl px-4">
          <form>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-4">
                <h1 className="text-2xl font-semibold">Get in Touch</h1>
              </div>
              <div className="col-span-12 md:col-span-8">
                <div className="mb-4">
                  <input type="text" className="w-full rounded border border-gray-300 px-3 py-2 text-base" placeholder="Your Name" name="name" />
                </div>
                <div className="mb-4">
                  <input type="email" className="w-full rounded border border-gray-300 px-3 py-2 text-base" placeholder="YourEmail@email.com"
                         name="email"/>
                </div>
                <div className="mb-4">
				   	      <textarea className="w-full rounded border border-gray-300 px-3 py-2 text-base min-h-[120px]"/>
                </div>
                <input type="submit" className="w-full bg-gray-600 text-white hover:bg-gray-700 px-4 py-2 rounded cursor-pointer" value="Send" name="send"/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default LandingPage
