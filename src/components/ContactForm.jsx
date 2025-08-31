import React from 'react'

function ContactForm() {

  return(
    <div className="contact-form py-12" id="contact">
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
              <input type="button" className="w-full btn btn-primary" value="Send" name="send"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
