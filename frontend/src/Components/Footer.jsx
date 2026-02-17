import { NavLink } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import logo from "../assets/rk.webp";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-20 border-t border-gray-200">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Academy Info + Logo */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img 
              src={logo} 
              alt="RK Defence Academy Logo" 
              className="h-12 w-12 rounded-full shadow-md object-cover"
            />
            <h2 className="text-xl font-bold text-gray-900">
              RK Defence Academy
            </h2>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed">
            Committed to excellence in defence training and career preparation.
            We build disciplined, confident and successful candidates.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/" className="hover:text-gray-900 transition">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:text-gray-900 transition">About</NavLink></li>
            <li><NavLink to="/courses" className="hover:text-gray-900 transition">Courses</NavLink></li>
            <li><NavLink to="/gallery" className="hover:text-gray-900 transition">Gallery</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-gray-900 transition">Contact</NavLink></li>
            <li><NavLink to="/register" className="hover:text-gray-900 transition">Student Registration</NavLink></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Contact Us
          </h3>

          <div className="flex items-start gap-3 mb-3 text-gray-600">
            <MapPin size={18} />
            <p className="text-sm">
              Badharghat, Near Ramthakur College,<br />
              Agartala, Tripura
            </p>
          </div>

          <div className="flex items-center gap-3 mb-3 text-gray-600">
            <Phone size={18} />
            <p className="text-sm">+91 6009432543</p>
          </div>

          <div className="flex items-center gap-3 text-gray-600">
            <Mail size={18} />
            <p className="text-sm">contact@rkdefenceacademy.in</p>
          </div>
        </div>

        {/* Social + CTA */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Connect With Us
          </h3>

          <div className="flex gap-4 mb-6 text-gray-600">
            <Facebook className="hover:text-gray-900 cursor-pointer transition" />
            <Instagram className="hover:text-gray-900 cursor-pointer transition" />
            <Youtube className="hover:text-gray-900 cursor-pointer transition" />
          </div>

          <NavLink to="/register">
            <button className="w-full bg-gray-800 text-white py-2 rounded-lg font-semibold hover:bg-gray-900 transition shadow-md">
              Apply Now
            </button>
          </NavLink>
        </div>

      </div>

      {/* Bottom Strip */}
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500 bg-white">
        © {new Date().getFullYear()} RK Defence Academy. All Rights Reserved. <br />
        <span className="text-gray-700 font-medium">
          Made with ❤️ by Cloudspireinfotech Pvt Ltd
        </span>
      </div>

    </footer>
  );
}
