import React from 'react'

import img from "../assets/t1.webp"
import img1 from "../assets/t2.webp"
import img2 from "../assets/t3.webp"
import img3 from "../assets/t4.webp"
import img4 from "../assets/t5.webp"
import img5 from "../assets/t6.webp"
import img6 from "../assets/t7.webp"
import img7 from "../assets/t8.webp"
import img8 from "../assets/t16.webp"
import img9 from "../assets/t17.webp"
import img10 from "../assets/t18.webp"
import img11 from "../assets/t19.webp"

const trainingImages = [
  {
    image: img,
  },
  {
    image: img1,
  },
  {
    image: img2,
  },
  {
    image: img3,
  },
  {
    image: img4,
  },
  {
    image: img5,
  },
  {
    image: img6,
  },
  {
    image: img7,
  },
  {
    image: img8,
  },
  {
    image: img9,
  },
  {
    image: img10,
  },
  {
    image: img11,
  },
 
];


const Gallery = () => {
  return (
    <main>
      {/* our training */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-green-600 mb-4">
              Training Moments
            </h2>
            <p className="text-gray-600">
              Glimpses of discipline, dedication and focused preparation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...trainingImages].map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300"
              >
                <img
                  src={img.image}
                  alt="training"
                  className="w-full h-64 object-cover hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>

        </div>
      </section>


      {/*  */}

    </main>
  )
}

export default Gallery;