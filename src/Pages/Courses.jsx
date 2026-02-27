import React from 'react'
import { NavLink } from 'react-router-dom';
import { Clock, SquareLibraryIcon, ChessQueen, BookCheck, Users, ArrowRight } from "lucide-react";

const Courses = () => {

  const courses = [
    {
      title: "SSC GD Preparation Program",
      duration: "6 Months",
      mode: "Offline + Online",
      desc: "Complete written, physical and medical preparation for SSC General Duty constable recruitment."
    },
    {
      title: "Agniveer Defence Training",
      duration: "12 Months",
      mode: "Offline",
      desc: "Structured training for Agniveer Army recruitment including physical endurance and written exam guidance."
    },
    {
      title: "Delhi & Assam Police Coaching",
      duration: "12 Months",
      mode: "Online",
      desc: "Special coaching for Delhi and Assam Police constable written and physical tests."
    },
    {
      title: "Tripura Police Recruitment Training",
      duration: "6 Months",
      mode: "Offline",
      desc: "Comprehensive preparation for Tripura Police exams with fitness and syllabus coverage."
    },
    {
      title: "TSR Battalion Entry Coaching",
      duration: "3 Months",
      mode: "Offline",
      desc: "Targeted coaching for Tripura State Rifles physical standards and written examination."
    },
    {
      title: "Railway Group D Preparation",
      duration: "4 Months",
      mode: "Offline",
      desc: "Full syllabus preparation for Railway Group D and NTPC competitive examinations."
    },
    {
      title: "RPF Constable Exam Training",
      duration: "3 Months",
      mode: "Offline",
      desc: "Dedicated preparation for Railway Protection Force written and physical efficiency tests.."
    },
    {
      title: "Defence Tradesman Course",
      duration: "6 Months",
      mode: "Offline",
      desc: "Technical and non-technical tradesman recruitment preparation with practical skill development."
    },
    {
      title: "CISF Recruitment Coaching",
      duration: "12 Months",
      mode: "Offline",
      desc: "Intensive training for CISF constable and head constable written and PET exams."
    },
    {
      title: "SSB Defence Selection Training",
      duration: "6 Months",
      mode: "Offline",
      desc: "Focused preparation for Sashastra Seema Bal recruitment including endurance and theory."
    },
    {
      title: "BSF Border Force Coaching",
      duration: "12 Months",
      mode: "Offline",
      desc: "Complete preparation for Border Security Force selection with physical and written training."
    },
    {
      title: "CRPF Constable Preparation Course",
      duration: "3 Months",
      mode: "Offline",
      desc: "Structured guidance for CRPF recruitment including fitness drills and exam strategy."
    },
    {
      title: "Assam Rifles Entry Program",
      duration: "6 Months",
      mode: "Offline",
      desc: "Intensive preparation for Assam Rifles recruitment including physical standards and written syllabus."
    },
    {
      title: "ITBP Recruitment Coaching",
      duration: "6 Months",
      mode: "Offline",
      desc: "Specialized training for Indo Tibetan Border Police physical and competitive examinations."
    },
    {
      title: "State Government Job Preparation",
      duration: "6 Months",
      mode: "Offline",
      desc: "Preparation for various state government recruitment exams with structured academic guidance."
    },
    {
      title: "Central Government Job Training",
      duration: "6 Months",
      mode: "Offline",
      desc: "Comprehensive coaching for multiple central government competitive recruitment examinations."
    },
  ];


  return (
    <main className="bg-gray-50 text-gray-900">

      {/* OVERVIEW */}
      <section className="bg-gray-50 pt-40 px-4">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-2 transition duration-300 text-center">
              <div className="flex justify-center mb-4 text-green-600">
                <SquareLibraryIcon size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">My Courses</h3>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-2 transition duration-300 text-center">
              <div className="flex justify-center mb-4 text-yellow-500">
                <Clock size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Assignment Overdue</h3>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-2 transition duration-300 text-center">
              <div className="flex justify-center mb-4 text-red-500">
                <ChessQueen size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Quiz Overdue</h3>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-2 transition duration-300 text-center">
              <div className="flex justify-center mb-4 text-green-500">
                <BookCheck size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Completed Courses</h3>
            </div>

          </div>

        </div>
      </section>


      {/* Course List */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-600">
              Available Courses
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Structured programs designed to help you succeed in defence examinations.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {course.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4">
                    {course.desc}
                  </p>

                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      {course.duration}
                    </div>

                    <div className="flex items-center gap-2">
                      <Users size={16} />
                      {course.mode}
                    </div>
                  </div>
                </div>

                <NavLink to="/register">
                  <button className="mt-6 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-xl shadow-md hover:shadow-lg transition duration-300 w-full">
                    Enroll Now <ArrowRight size={16} />
                  </button>
                </NavLink>

              </div>
            ))}

          </div>

        </div>
      </section>

    </main>
  )
}

export default Courses;
