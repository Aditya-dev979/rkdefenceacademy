import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/rk.webp"


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-white p-2 rounded-[50%]">
            <img src={logo} alt="logo" className="h-10 w-10 rounded-[50%] " />
          </div>
          <div>
            <h1 className="font-bold text-lg">RK Defence Academy</h1>
            <p className="text-xs text-gray-500">
              Excellence in Defence Training
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <NavLink to="/"><li className="hover:text-green-600 cursor-pointer">Home</li></NavLink>
          <NavLink to="/about"><li className="hover:text-green-600 cursor-pointer">About</li></NavLink>
          <NavLink to="/courses"><li className="hover:text-green-600 cursor-pointer">Courses</li></NavLink>
          <NavLink to="/gallery"><li className="hover:text-green-600 cursor-pointer">Gallery</li></NavLink>
          <NavLink to="/contact"><li className="hover:text-green-600 cursor-pointer">Contact</li></NavLink>
        </ul>

        {/* Desktop Button */}
        <NavLink to="/register">
          <button className="hidden md:block bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
            Student Registration
          </button>
        </NavLink>


        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col gap-4 p-4">
            <NavLink to="/" onClick={() => setIsOpen(false)}><li>Home</li></NavLink>
            <NavLink to="/about" onClick={() => setIsOpen(false)}><li>About</li></NavLink>
            <NavLink to="/courses" onClick={() => setIsOpen(false)}><li>Courses</li></NavLink>
            <NavLink to="/gallery" onClick={() => setIsOpen(false)}><li>Gallery</li></NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}><li>Contact Us</li></NavLink>

            <NavLink to="/register" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                Student Registration
              </button>
            </NavLink>
          </ul>
        </div>
      )}

    </nav>
  );
}
