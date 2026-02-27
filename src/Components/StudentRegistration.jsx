import { useState } from "react";
import { Mail, Phone, User, BookOpen, MapPin, MessageSquare } from "lucide-react";

export default function StudentRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    email: "",
    village: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Registration Submitted Successfully 🚀");

    setFormData({
      name: "",
      course: "",
      email: "",
      village: "",
      contact: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">

      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-3xl p-8 md:p-12">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Student Registration
          </h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Please fill the form carefully to secure your admission.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Name */}
          <div className="relative">
            <User className="absolute left-3 top-3.5 text-gray-400" size={18} />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Full Name"
              className="w-full pl-10 p-3 rounded-xl border border-gray-300 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
            />
          </div>

          {/* Course */}
          <div className="relative">
            <BookOpen className="absolute left-3 top-3.5 text-gray-400" size={18} />
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              placeholder="Course Name"
              className="w-full pl-10 p-3 rounded-xl border border-gray-300 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              className="w-full pl-10 p-3 rounded-xl border border-gray-300 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
            />
          </div>

          {/* Contact */}
          <div className="relative">
            <Phone className="absolute left-3 top-3.5 text-gray-400" size={18} />
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              placeholder="Contact Number"
              className="w-full pl-10 p-3 rounded-xl border border-gray-300 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
            />
          </div>

          {/* Village */}
          <div className="relative md:col-span-2">
            <MapPin className="absolute left-3 top-3.5 text-gray-400" size={18} />
            <input
              type="text"
              name="village"
              value={formData.village}
              onChange={handleChange}
              required
              placeholder="Village Name"
              className="w-full pl-10 p-3 rounded-xl border border-gray-300 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
            />
          </div>

          {/* Message */}
          <div className="relative md:col-span-2">
            <MessageSquare className="absolute left-3 top-3.5 text-gray-400" size={18} />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Optional Message"
              className="w-full pl-10 p-3 rounded-xl border border-gray-300 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 transition resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gray-800 text-white font-semibold hover:bg-gray-900 transition duration-300 shadow-lg"
            >
              Submit Registration
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
