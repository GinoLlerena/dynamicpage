import React from 'react'

function ContactForm() {

  return(
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
              <input type="button" className="btn btn-secondary btn-block" value="Send" name=""/>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
