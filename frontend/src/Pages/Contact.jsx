import React from 'react'
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <main className="bg-gray-50 text-gray-900">

      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
              Contact RK Defence Academy
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about NDA, CDS, AFCAT or Army recruitment?
              Get in touch with us today and start your journey towards the uniform.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <div className="bg-white p-10 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-semibold mb-6 text-green-600">
                Send Us a Message
              </h3>

              <form className="space-y-6">

                <div>
                  <label className="block mb-2 text-sm text-gray-600">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:border-green-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:border-green-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600">Phone Number</label>
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:border-green-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600">Message</label>
                  <textarea
                    rows="4"
                    placeholder="Write your message..."
                    className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:border-green-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 transition duration-300 py-3 rounded-xl shadow-md hover:shadow-lg text-white font-semibold"
                >
                  Submit Enquiry
                </button>

              </form>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">

              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-semibold mb-6 text-green-600">
                  Contact Information
                </h3>

                <div className="space-y-5 text-gray-600">

                  <div className="flex items-start gap-4">
                    <Phone className="text-green-600" />
                    <p>+91 98765 43210</p>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="text-green-600" />
                    <p>rkdefenceacademy@gmail.com</p>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="text-green-600" />
                    <p>Near Main Market, Jaipur, Rajasthan</p>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="text-green-600" />
                    <p>Monday - Saturday | 8:00 AM - 6:00 PM</p>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  )
}

export default Contact;
