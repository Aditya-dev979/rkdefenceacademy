import heroImg from "../assets/h2.webp"; // apni image yaha import karo
import img1 from "../assets/s1.webp"
import img2 from "../assets/s2.webp"
import img3 from "../assets/s3.webp"
import preparation from "../assets/preparation.webp";

import { Trophy, Users, Medal, GraduationCap, CheckCircle, BadgeCheck } from "lucide-react";

export default function HeroSection() {

    // SECTION 2

    const students = [
        {
            id: 1,
            name: "Rahul Sharma",
            exam: "NDA",
            selectedIn: "Indian Army",
            image: img1,
        },
        {
            id: 2,
            name: "Priya Singh",
            exam: "AFCAT",
            selectedIn: "Indian Air Force",
            image: img2,
        },
        {
            id: 3,
            name: "Vikram Patel",
            exam: "CDS",
            selectedIn: "Indian Navy",
            image: img3,
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
                            Train for the{" "}
                            <span className="text-green-600">
                                Indian Defence Forces
                            </span>
                        </h1>

                        <p className="mt-6 text-gray-600 text-lg">
                            Join RK Defence Academy and prepare for NDA, CDS,
                            and AFCAT with disciplined training, expert guidance,
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
                            <button className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition">
                                View All Programs
                            </button>
                            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-black transition">
                                Join Academy
                            </button>
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

                    {/* ===== Grid ===== */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {students.map((student) => (
                            <div
                                key={student.id}
                                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                            >
                                {/* Image */}
                                <div className="relative">
                                    <img
                                        src={student.image}
                                        alt={student.name}
                                        className="w-full h-64 object-cover"
                                    />

                                    {/* Selected Badge */}
                                    <span className="absolute top-4 right-4 bg-green-600 text-white text-sm px-4 py-1 rounded-full shadow">
                                        ⭐ Selected
                                    </span>
                                </div>

                                {/* Info */}
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        {student.name}
                                    </h3>

                                    <div className="flex justify-between items-center mt-4 text-sm">
                                        <div>
                                            <p className="text-gray-500">Exam:</p>
                                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                                                {student.exam}
                                            </span>
                                        </div>

                                        <div className="text-right">
                                            <p className="text-gray-500">Selected In:</p>
                                            <p className="font-medium text-gray-800">
                                                {student.selectedIn}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

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
                            RK Defence Academy provides disciplined training for NDA,
                            CDS, and AFCAT with experienced trainers and structured programs.
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
                            <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition">
                                Student Registration
                            </button>

                            <button className="border border-gray-400 px-6 py-3 rounded-lg text-gray-700 hover:bg-gray-200 transition">
                                View Training Programs
                            </button>
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

                    {/* ===== Section Heading ===== */}
                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-bold text-gray-900 flex justify-center items-center gap-3">
                            🎓 Our Certified Trainers
                        </h2>
                        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
                            RK Defence Academy trains you with certified trainers from Army,
                            Navy, and Air Force
                        </p>
                    </div>

                    {/* ===== Trainer Cards ===== */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {trainers.map((trainer) => (
                            <div
                                key={trainer.id}
                                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                            >
                                {/* Image */}
                                <div className="relative">
                                    <img
                                        src={trainer.image}
                                        alt={trainer.name}
                                        className="w-full h-72 object-cover"
                                    />

                                    {/* Certified Badge */}
                                    <span className="absolute top-4 right-4 bg-green-600 text-white text-sm px-4 py-1 rounded-full shadow flex items-center gap-1">
                                        <BadgeCheck size={16} /> Certified
                                    </span>
                                </div>

                                {/* Info */}
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        {trainer.name}
                                    </h3>

                                    <p className="text-green-600 font-medium mt-2">
                                        {trainer.role}
                                    </p>

                                    <p className="text-gray-600 mt-2">
                                        {trainer.expertise}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ===== Bottom Info Banner ===== */}
                    <div className="mt-16 bg-white rounded-2xl shadow-md p-8 text-center">
                        <p className="text-gray-700 text-lg">
                            All our trainers are{" "}
                            <span className="text-green-600 font-semibold">
                                ex-defence officers
                            </span>{" "}
                            with proven track records in training defence aspirants
                        </p>
                    </div>

                </div>
            </section>


        </main>
    );
}
