import { useState } from "react";

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
    alert("Form Submitted Successfully ✅");

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
    <div className="min-h-screen pt-24 bg-gradient-to-br from-green-800 via-green-600 to-green-500 flex items-center justify-center px-4 py-10">
      
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-lg p-8">

        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
          Student Registration Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block font-semibold text-gray-700">
              1. Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition"
            />
          </div>

          {/* Course */}
          <div>
            <label className="block font-semibold text-gray-700">
              2. Course Name
            </label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              placeholder="Enter course name"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold text-gray-700">
              3. Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition"
            />
          </div>

          {/* Village */}
          <div>
            <label className="block font-semibold text-gray-700">
              4. Village
            </label>
            <input
              type="text"
              name="village"
              value={formData.village}
              onChange={handleChange}
              required
              placeholder="Enter your village name"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition"
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block font-semibold text-gray-700">
              5. Contact No.
            </label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              placeholder="Enter your contact number"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block font-semibold text-gray-700">
              6. Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Write your message (optional)"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition duration-300 shadow-md"
          >
            Submit Registration
          </button>

        </form>
      </div>
    </div>
  );
}
