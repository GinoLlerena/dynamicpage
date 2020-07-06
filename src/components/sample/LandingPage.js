import React, {Fragment} from 'react'
import logo from '../../images/headerback.jpg';

function LandingPage(){

  return(
    <Fragment>
      <nav className="navbar navbar-expand-lg "> /{/*/fixed-top*/}
        <a className="navbar-brand" href="#">Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav mr-4">

            <li className="nav-item">
              <a className="nav-link" data-value="about" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " data-value="portfolio" href="#">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " data-value="blog" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " data-value="team" href="#">
                Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " data-value="contact" href="#">Contact</a>
            </li>
          </ul>

        </div>
      </nav>
      <header className="header ">
        <div className="overlay"></div>
        <div className="container">
          <div className="description ">
            <h1>
              Hello ,Welcome To My official Website
              <p>
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <button className="btn btn-outline-secondary btn-lg">See more</button>
            </h1>
          </div>
        </div>

      </header>

      <div className="about" id="about">
        <div className="container">
          <h1 className="text-center">About Me</h1>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src="images/team-3.jpg" className="img-fluid"/>
                <span className="text-justify">S.Web Developer</span>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 desc">

              <h3>D.John</h3>
              <p>
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

      <div className="portfolio" id="portfolio">
        <h1 className="text-center">Portfolio</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src="images/portfolio/port13.png" className="img-fluid"/>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src="images/portfolio/port1.png" className="img-fluid"/>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src="images/portfolio/port6.png" className="img-fluid"/>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src="images/portfolio/port3.png" className="img-fluid"/>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src="images/portfolio/port11.png" className="img-fluid"/>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src="images/portfolio/electric.png" className="img-fluid"/>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src="images/portfolio/classic.jpg" className="img-fluid"/>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src="images/portfolio/port1.png" className="img-fluid"/>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src="images/portfolio/port8.png" className="img-fluid"/>
            </div>
          </div>
        </div>
      </div>


      <div className="blog" id="blog">
        <div className="container">
          <h1 className="text-center">Blog</h1>
          <div className="row">
            <div className="col-md-4 col-lg-4 col-sm-12">
              <div className="card">
                <div className="card-img">
                  <img src="images/posts/polit.jpg" className="img-fluid"/>
                </div>

                <div className="card-body">
                  <h4 className="card-title">Post Title</h4>
                  <p className="card-text">

                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="" className="card-link">Read more</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12">
              <div className="card">
                <div className="card-img">
                  <img src="images/posts/images.jpg" className="img-fluid"/>
                </div>

                <div className="card-body">
                  <h4 className="card-title">Post Title</h4>
                  <p className="card-text">

                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="" className="card-link">Read more</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12">
              <div className="card">
                <div className="card-img">
                  <img src="images/posts/imag2.jpg" className="img-fluid"/>
                </div>

                <div className="card-body">
                  <h4 className="card-title">Post Title</h4>
                  <p className="card-text">

                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="" className="card-link">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="team" id="team">
        <div className="container">
          <h1 className="text-center">Our Team</h1>
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 item">
              <img src="images/team-2.jpg" className="img-fluid" alt="team"/>
              <div className="des">
                Sara
              </div>
              <span className="text-muted">Manager</span>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 item">
              <img src="images/team-3.jpg" className="img-fluid" alt="team"/>
                <div className="des">
                  Chris
                </div>
                <span className="text-muted">S.enginner</span>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 item">
              <img src="images/team-2.jpg" className="img-fluid" alt="team"/>
                <div className="des">
                  Layla
                </div>
                <span className="text-muted">Front End Developer</span>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 item">
              <img src="images/team-3.jpg" className="img-fluid" alt="team"/>
                <div className="des">
                  J.Jirard
                </div>
                <span className="text-muted">Team Manger</span>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form" id="contact">
        <div className="container">
          <form>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <h1>Get in Touch</h1>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 right">
                <div className="form-group">
                  <input type="text" className="form-control form-control-lg" placeholder="Your Name" name="" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control form-control-lg" placeholder="YourEmail@email.com"
                         name="email"/>
                </div>
                <div className="form-group">
				   	      <textarea className="form-control form-control-lg"/>
                </div>
                <input type="submit" className="btn btn-secondary btn-block" value="Send" name=""/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default LandingPage
