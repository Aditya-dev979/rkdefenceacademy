import React from 'react'
import { Clock, SquareLibraryIcon, ChessQueen, BookCheck, Users, ArrowRight } from "lucide-react";

const Courses = () => {

  const courses = [
    {
      title: "NDA Foundation Course",
      duration: "12 Months",
      mode: "Offline + Online",
      desc: "Comprehensive preparation for NDA written exam and SSB interview."
    },
    {
      title: "CDS Preparation Batch",
      duration: "6 Months",
      mode: "Offline",
      desc: "Focused preparation for CDS written examination with mock practice."
    },
    {
      title: "AFCAT Target Batch",
      duration: "4 Months",
      mode: "Online",
      desc: "Strategic preparation for AFCAT technical and non-technical entries."
    },
    {
      title: "Army GD & Technical",
      duration: "3 Months",
      mode: "Offline",
      desc: "Physical, written and medical preparation guidance for Army recruitment."
    }
  ];


  return (
    <main className="bg-gray-50 text-gray-900">

      {/* OVERVIEW */}
      <section className="bg-gray-50 py-20 px-4">
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

                <button className="mt-6 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                  Enroll Now <ArrowRight size={16} />
                </button>
              </div>
            ))}

          </div>

        </div>
      </section>

    </main>
  )
}

export default Courses;
