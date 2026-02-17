import React from 'react'
import { ShieldCheck, BookOpen, BarChart3, Users, Target, Award } from "lucide-react";
import { Shield, Flame, Scale, Flag } from "lucide-react";

const course = [
  {
    title: "NDA",
    desc: "National Defence Academy Examination (NDA)",
  },
  {
    title: "CDS",
    desc: "Combined Defence Services Examination (CDS)",
  },
  {
    title: "AFCAT",
    desc: "Air Force Common Admission Test (AFCAT)",
  },
  {
    title: "IAR",
    desc: "Indian Army Recruitment (IAR)",
  },
  {
    title: "INR",
    desc: "Indian Navy Recruitment (INR)",
  },
  {
    title: "IAFR",
    desc: "Indian Air Force Recruitment (IAFR)",
  },
]

const features = [
  {
    icon: <BookOpen size={32} />,
    title: "Structured Study Plan",
    desc: "Complete syllabus coverage with strategic topic planning and revision cycles."
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Regular Mock Tests",
    desc: "Performance-based mock exams with detailed analysis and improvement tracking."
  },
  {
    icon: <Users size={32} />,
    title: "Small Batch Size",
    desc: "Personal attention and individual mentoring for every aspirant."
  },
  {
    icon: <Target size={32} />,
    title: "SSB Guidance",
    desc: "Comprehensive personality and OLQ development training."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Discipline Environment",
    desc: "Officer-like atmosphere that builds confidence and leadership."
  },
  {
    icon: <Award size={32} />,
    title: "Result-Oriented Approach",
    desc: "Focused strategy aimed at maximum selections every year."
  }
];

const values = [
  {
    icon: <Shield size={30} />,
    title: "Discipline",
    desc: "We instill punctuality, structured routines and officer-like behavior in every aspirant."
  },
  {
    icon: <Flame size={30} />,
    title: "Dedication",
    desc: "Consistency and hard work form the foundation of every successful defence candidate."
  },
  {
    icon: <Scale size={30} />,
    title: "Integrity",
    desc: "Honesty, moral strength and responsibility define a true leader in uniform."
  },
  {
    icon: <Users size={30} />,
    title: "Leadership",
    desc: "We develop confidence and decision-making abilities under pressure."
  },
  {
    icon: <Flag size={30} />,
    title: "Patriotism",
    desc: "Service to the nation is our ultimate purpose and guiding principle."
  }
];


const About = () => {
  return (
    <main className='bg-gray-50 text-gray-900 py-16 px-4 space-y-16'>
      {/* WHO WE ARE */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Heading Section */}
          <div className="text-center mb-14">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-500 mb-4">
              Who We Are
            </h1>
            <p className="text-gray-700 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              RK Defence Academy is a premier institute dedicated to preparing aspirants
              for the Indian Defence Forces with discipline, strategy and excellence.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {course.map((item, index) => (
              <div
                key={index}
                className="bg-[#1b3659] rounded-2xl p-6 text-center shadow-lg 
                     hover:shadow-green-500/20 hover:scale-105 
                     transition duration-300 ease-in-out"
              >
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {item.desc}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* OUR MISSION */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-500">
              Our Mission & Vision
            </h2>
            <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
              Committed to building disciplined, confident and capable future officers.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-10 items-stretch">

            {/* Mission Block */}
            <div className="bg-white p-10 rounded-2xl shadow-md border border-gray-200">
              <h3 className="text-2xl font-semibold text-green-400 mb-6">
                🎖 Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our mission is to provide structured, result-oriented defence exam
                preparation that builds academic excellence, mental strength and
                leadership qualities in every aspirant.
              </p>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Concept clarity & syllabus coverage</li>
                <li>✔ Strategic mock test system</li>
                <li>✔ SSB personality enhancement</li>
                <li>✔ Physical fitness guidance</li>
                <li>✔ Individual performance monitoring</li>
              </ul>
            </div>

            {/* Vision Block */}
            <div className="bg-green-50 p-10 rounded-2xl shadow-md border border-green-200">
              <h3 className="text-2xl font-semibold text-green-400 mb-6">
                👁 Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our vision is to become a trusted and result-driven defence coaching
                institute, consistently producing successful candidates in NDA, CDS,
                AFCAT and Army recruitment.
              </p>

              <p className="text-gray-700 leading-relaxed">
                We aim to build officers who serve the nation with integrity, courage
                and responsibility — not just clear examinations.
              </p>

              <div className="mt-8 border-t border-green-700 pt-6">
                <p className="italic text-green-400 text-lg">
                  "We build Officers, not just candidates."
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* WHY CHOOSE US */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose RK Defence Academy?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine discipline, strategy and mentorship to help you achieve
              excellence in defence examinations.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md 
                         hover:shadow-xl hover:-translate-y-2 
                         transition duration-300 ease-in-out"
              >
                <div className="text-green-600 mb-4">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* OUR COMMITMENT */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              The principles that shape every aspirant into a disciplined and responsible officer.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {values.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md border border-gray-200"
              >
                <div className="text-green-400 mb-4">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-800">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

          {/* Commitment Quote */}
          <div className="mt-16 text-center border-t border-gray-700 pt-10">
            <p className="text-green-600 text-lg md:text-xl italic">
              "We prepare you to wear the uniform with pride, responsibility and honour."
            </p>
          </div>

        </div>
      </section>
    </main>
  )
}

export default About;

