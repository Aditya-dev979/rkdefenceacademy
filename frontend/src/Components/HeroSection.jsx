import heroImg from "../assets/h2.webp"; // apni image yaha import karo
import img1 from "../assets/s1.webp"
import img2 from "../assets/s2.webp"
import img3 from "../assets/dipankar.webp"
import img5 from "../assets/s6.webp"
import img6 from "../assets/s7.webp"
import img7 from "../assets/s8.webp"
import img4 from "../assets/director.webp";
import preparation from "../assets/preparation.webp";
import { NavLink } from 'react-router-dom'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Trophy, Users, Medal, GraduationCap, CheckCircle, BadgeCheck } from "lucide-react";

export default function HeroSection() {

    // SECTION 2

    const students = [
        {
            id: 1,
            name: "Joudul",
            selectedIn: "Commando",
            image: img1,
        },
        {
            id: 2,
            name: "Kishan",
            selectedIn: "CISF",
            image: img2,
        },
        {
            id: 3,
            name: "Dipankar",
            selectedIn: "BFS",
            image: img3,
        },
        {
            id: 4,
            name: "Dipankar",
            selectedIn: "TSR",
            image: img5,
        },
        {
            id: 5,
            name: "Ajay",
            selectedIn: "Army",
            image: img6,
        },
        {
            id: 6,
            name: "Maman",
            selectedIn: "TSR",
            image: img7,
        },
    ];

    // SECTION 3

    const stats = [
        {
            id: 1,
            icon: <Trophy className="text-green-600 w-8 h-8" />,
            value: "12+",
            label: "Years of Training",
            color: "text-green-600",
            bg: "bg-green-100",
        },
        {
            id: 2,
            icon: <Users className="text-blue-600 w-8 h-8" />,
            value: "5000+",
            label: "Trainees",
            color: "text-blue-600",
            bg: "bg-blue-100",
        },
        {
            id: 3,
            icon: <Medal className="text-orange-600 w-8 h-8" />,
            value: "850+",
            label: "Defence Selections",
            color: "text-orange-600",
            bg: "bg-orange-100",
        },
        {
            id: 4,
            icon: <GraduationCap className="text-purple-600 w-8 h-8" />,
            value: "1,00,000+",
            label: "Students Enrolled",
            color: "text-purple-600",
            bg: "bg-purple-100",
        },
    ];

    // SECTION 4

    const features = [
        "Expert faculty with defence background",
        "Comprehensive study material",
        "Regular mock tests and assessments",
        "Physical fitness training included",
    ];

    // SECTION 5

    const trainers = [
        {
            id: 1,
            name: "Col. Rajesh Kumar",
            role: "Ex-Indian Army Officer",
            expertise: "NDA & SSB Expert",
            image: img1,
        },
        {
            id: 2,
            name: "Wg Cdr. Sanjay Verma",
            role: "Ex-Air Force Officer",
            expertise: "AFCAT & EKT Specialist",
            image: img2,
        },
        {
            id: 3,
            name: "Cdr. Amit Sharma",
            role: "Ex-Navy Officer",
            expertise: "CDS & Maritime Studies",
            image: img3,
        },
    ];

    return (
        <main className="bg-gray-100">
            {/* SECTION 1 */}

            <section className="pt-32 pb-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

                    {/* Left Content */}
                    <div className="order-2 md:order-1">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                            Start Your Defence Journey with <span className="text-green-600">RK Defence Academy</span>
                        </h1>

                        <p className="mt-6 text-gray-600 text-lg">
                            Join RK Defence Academy and prepare for SSC GD, AGNIVEER,
                            and RPF with disciplined training, expert guidance,
                            and proven results.
                        </p>

                        {/* Search Box */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="Search Training Programs"
                                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
                                Search
                            </button>
                        </div>

                        {/* Buttons */}
                        <div className="mt-6 flex flex-wrap gap-4">
                            <NavLink to="/courses">
                                <button className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition">
                                    View All Programs
                                </button>
                            </NavLink>
                            <NavLink to="/register">
                                <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-black transition">
                                    Join Academy
                                </button>
                            </NavLink>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="order-1 md:order-2">
                        <img
                            src={heroImg}
                            alt="Defence Training"
                            className="rounded-2xl shadow-lg w-full object-cover"
                        />
                    </div>

                </div>
            </section>



            {/* SECTION 2 */}

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">

                    {/* ===== Heading ===== */}
                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center justify-center gap-2">
                            🏅 Our Proud Selections
                        </h2>
                        <p className="text-gray-600 mt-4 text-lg">
                            Our students have achieved success in the Indian Army,
                            Air Force, and Navy
                        </p>
                    </div>

                    {/* slider */}
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={24}
                        navigation
                        loop={false}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {students.map((student) => (
                            <SwiperSlide key={student.id}>
                                <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">

                                    {/* Image */}
                                    <div className="relative">
                                        <img
                                            src={student.image}
                                            alt={student.name}
                                            className="w-full h-64 object-cover"
                                        />

                                        <span className="absolute top-4 right-4 bg-green-600 text-white text-sm px-4 py-1 rounded-full shadow">
                                            ⭐ Selected
                                        </span>
                                    </div>

                                    {/* Info */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900">
                                            {student.name}
                                        </h3>

                                        <div className="mt-5">
                                                <p className="text-gray-500">Selected In:</p>
                                                <p className="font-medium text-gray-800">
                                                    {student.selectedIn}
                                                </p>
                                            </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </section>


            {/* SECTION 3 */}

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">

                    {/* ===== Heading ===== */}
                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-bold text-gray-900">
                            Proven Record of Excellence
                        </h2>
                        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
                            RK Defence Academy has consistently delivered outstanding
                            results in defence exam preparations
                        </p>
                    </div>

                    {/* ===== Stats Cards ===== */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        {stats.map((stat) => (
                            <div
                                key={stat.id}
                                className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition duration-300"
                            >
                                <div
                                    className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full ${stat.bg}`}
                                >
                                    {stat.icon}
                                </div>

                                <h3
                                    className={`text-4xl font-bold mt-6 ${stat.color}`}
                                >
                                    {stat.value}
                                </h3>

                                <p className="text-gray-600 mt-2">
                                    {stat.label}
                                </p>
                            </div>
                        ))}

                    </div>

                    {/* ===== Bottom Line Text ===== */}
                    <p className="text-center mt-12 text-gray-700 font-medium">
                        Trusted by thousands of defence aspirants across India
                    </p>

                </div>
            </section>


            {/* SECTION 4 */}

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

                    {/* ===== Left Content ===== */}
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                            For Preparation, Please Register
                        </h2>

                        <p className="text-gray-600 mt-6 text-lg">
                            RK Defence Academy provides disciplined training for SSC GD,
                            AGNIVEER, and RPF with experienced trainers and structured programs.
                        </p>

                        {/* Feature List */}
                        <div className="mt-8 space-y-4">
                            {features.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle className="text-green-600 w-6 h-6" />
                                    <p className="text-gray-700">{item}</p>
                                </div>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="mt-10 flex flex-wrap gap-4">
                            <NavLink to="/register">
                                <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition">
                                    Student Registration
                                </button>
                            </NavLink>

                            <NavLink to="/courses">
                                <button className="border border-gray-400 px-6 py-3 rounded-lg text-gray-700 hover:bg-gray-200 transition">
                                    View Training Programs
                                </button>
                            </NavLink>
                        </div>
                    </div>

                    {/* ===== Right Image ===== */}
                    <div className="relative">
                        <img
                            src={preparation}
                            alt="Defence Training"
                            className="rounded-2xl shadow-lg w-full object-cover"
                        />

                        {/* Floating Badge */}
                        <div className="absolute bottom-6 left-6 bg-white shadow-lg rounded-xl p-5 flex items-center gap-4">
                            <div className="bg-green-100 p-3 rounded-full">
                                <CheckCircle className="text-green-600 w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900">
                                    100% Job Oriented
                                </h4>
                                <p className="text-sm text-gray-600">
                                    Structured Training
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>


            {/* SECTION 5 */}

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">

                    {/* ===== Section Heading (NO CHANGE) ===== */}
                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-bold text-gray-900 flex justify-center items-center gap-3">
                            🎓 Our Certified Trainers
                        </h2>
                        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
                            RK Defence Academy trains you with certified trainers from Army,
                            Navy, and Air Force
                        </p>
                        <h3 className="text-3xl font-bold text-gray-900 mb-6 mt-10">
                            Meet Our Director – Rakesh Baskar
                        </h3>
                    </div>

                    {/* ===== 2 Column Layout ===== */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* ===== Left Side Image ===== */}
                        <div className="relative">
                            <img
                                src={img4}
                                alt="Rakesh Baskar - Director RK Defence Academy"
                                className="w-full rounded-2xl shadow-xl"
                            />

                            <div className="absolute bottom-6 left-6 bg-black/70 text-white px-6 py-3 rounded-xl">
                                <h3 className="text-lg font-semibold">Rakesh Baskar</h3>
                                <p className="text-sm">Director, RK Defence Academy</p>
                            </div>
                        </div>

                        {/* ===== Right Side Content ===== */}
                        <div>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Rakesh Baskar, Director of RK Defence Academy, is dedicated to shaping
                                disciplined and confident defence aspirants. Under his leadership,
                                the academy provides structured and result-oriented training programs
                                for SSC GD, AGNIVEER, CISF, CRPF, and RPF examinations.
                            </p>

                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                With a strong focus on physical fitness, written examination preparation,
                                and personality development, he ensures that every student receives
                                comprehensive guidance from experienced and certified trainers.
                                His disciplined approach and strategic training methods help students
                                achieve their dream of serving the nation.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* SECTION 6 */}

            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">

                    {/* Section Heading (Optional – Remove if not needed) */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Why Choose RK Defence Academy?
                        </h2>
                        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                            Comprehensive and disciplined training approach designed for defence aspirants.
                        </p>
                    </div>

                    {/* Highlights Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {/* Card 1 */}
                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 h-full">
                            <h4 className="font-semibold text-green-600 mb-3 text-lg">
                                ✔ Structured Programs
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Well-planned syllabus coverage, mock tests, and regular performance tracking.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 h-full">
                            <h4 className="font-semibold text-green-600 mb-3 text-lg">
                                ✔ Experienced Trainers
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Guidance from ex-defence professionals with real-field experience.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 h-full">
                            <h4 className="font-semibold text-green-600 mb-3 text-lg">
                                ✔ Physical + Written Training
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Balanced focus on fitness, endurance, and competitive exam preparation.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 h-full">
                            <h4 className="font-semibold text-green-600 mb-3 text-lg">
                                ✔ Mission-Oriented Vision
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Building discipline, confidence, and commitment to serve the nation.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

        </main>
    );
}
