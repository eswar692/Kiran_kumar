import {
  Briefcase,
  Heart,
  Phone,
  Scale,
  Users,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import Testimonials from "../Genaral/Testimonial";
import FAQ from "../Genaral/FAQ";
import CardCarousel from "../Genaral/CardsCarousel";
import {
  company_name,
  person_name,
  phone_number,
  whatsapp_number,
} from "../Genaral/secrete";
import VideoView from "../Genaral/VideoView";

const Home = () => {
  return (
    <div className="flex flex-col  bg-orange-200 w-full h-full">
      <VideoView />
      <CardCarousel />
      <Problems />
      <AboutAstrologer />
      <AstrologyServices />
      <AstrologyServicesModern />
      <AllServicesModern />
      <HomeLastDesign />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;

const Problems = () => {
  const problems = [
    {
      title: "Relationship Clarity Guidance",
      desc: "Available on WhatsApp and call. Speak directly with our astrologer for personalized guidance on relationship challenges and emotional clarity.",
      img: "https://i.pinimg.com/736x/4a/c8/aa/4ac8aaa977a4eef9bb1eac0041929380.jpg",
    },
    {
      title: "Marriage Problem Solution",
      desc: "Solve disputes and misunderstandings with trusted astrology consultation. Guidance for marital harmony and family balance.",
      img: "https://i.pinimg.com/1200x/c1/2b/fc/c12bfc17ac4630ade4f0e1e4a1f819e2.jpg",
    },
    {
      title: "Education Guidance",
      desc: "Personalized astrology consultation to support students in academic planning and decision making. Suitable for exam preparation and career direction.",
      img: "https://i.pinimg.com/736x/73/49/66/73496669119b34a1dd1ab91ffd626f68.jpg",
    },
    {
      title: "Vastu & Home Harmony",
      desc: "Vastu-based consultation to support positive energy flow at home and workplace. Traditional guidance for a balanced and peaceful living space.",
      img: "https://i.pinimg.com/1200x/22/7a/73/227a73ecafa7e4bc8f6b256083a0e7c2.jpg",
    },
    {
      title: "Career & Job Guidance",
      desc: "Astrology-based career consultation for job decisions, professional growth and business direction. Clarity and confidence for your next career move.",
      img: "https://i.pinimg.com/736x/1e/a3/1c/1ea31c29817c2b9435c0e29040497a47.jpg",
    },
    {
      title: "Health & Wellbeing Support",
      desc: "Horoscope-based wellness consultation for physical and mental clarity. Offered as complementary guidance alongside professional medical care.",
      img: "https://i.pinimg.com/1200x/30/05/93/300593ddfebda3597cfb52632ce93e4e.jpg",
    },
    {
      title: "Love & Relationship Harmony",
      desc: "Astrology consultation focused on emotional understanding and relationship clarity. Personalized guidance to restore trust and harmony between partners.",
      img: "https://i.pinimg.com/736x/8b/6e/e7/8b6ee78a6bcd242f1b916c5b5cf44025.jpg",
    },
    {
      title: "Family Dispute Resolution",
      desc: "Astrology-based consultation to ease family misunderstandings and restore harmony in household relationships. Respectful and confidential guidance.",
      img: "https://i.pinimg.com/736x/ad/7b/99/ad7b9936b889c3abaafe22c732867d86.jpg",
    },
  ];

  return (
    <motion.div
      className="grid md:grid-cols-3 gap-8 w-full px-2 md:max-w-7xl md:mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {problems.map((problem, index) => (
        <div
          key={index}
          className="flex flex-col items-center 
            bg-gray-900 border border-gray-700 rounded-3xl 
            shadow-xl overflow-hidden text-white 
            hover:scale-105 transition-transform duration-500 
            hover:shadow-indigo-500/50"
        >
          {/* Image */}
          <div className="relative w-full h-80 overflow-hidden">
            <img
              src={problem.img}
              alt={problem.title}
              className="h-full w-full object-cover transform hover:scale-110 transition duration-700 filter brightness-75"
            />
            {/* Overlay dark layer for better text visibility */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          {/* Text */}
          <div className="p-6 flex flex-col items-center text-center space-y-3">
            <h3 className="text-2xl font-extrabold montserrat drop-shadow-md tracking-wide text-white">
              {problem.title}
            </h3>
            <p className="text-base opacity-90 poppins leading-relaxed text-gray-200">
              {problem.desc}
            </p>
          </div>

          {/* Button */}
          <a
            href={`https://wa.me/${whatsapp_number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-6"
          >
            <button
              className="montserrat flex items-center gap-2 
                bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
                text-white font-semibold px-7 py-3 rounded-full shadow-lg 
                hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 
                hover:shadow-pink-400/50 hover:scale-105 
                transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Online Chatting
            </button>
          </a>
        </div>
      ))}
    </motion.div>
  );
};

const AboutAstrologer = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50 overflow-hidden">
      {/* Background Abstract Shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl animate-pulse pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side Content */}
        <div className="space-y-6 md:pr-6 text-center md:text-left">
          <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm md:text-base font-semibold montserrat shadow-lg hover:scale-105 transition-transform duration-300">
            ✨ Know the Astrologer
          </button>

          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 montserrat drop-shadow-lg">
            {company_name}
          </h2>

          <p className="text-gray-800 leading-relaxed text-lg md:text-xl open-sans">
            Meet{" "}
            <span className="font-bold text-purple-600">{company_name}</span>, a
            trusted astrologer whose knowledge in astrology is inherited through
            generations. His experience has guided countless individuals toward{" "}
            <span className="font-semibold text-indigo-600">
              peace, clarity, and confidence
            </span>
            .
          </p>

          <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
            With personalized consultations, thoughtful guidance, and deep
            understanding of life's challenges, {company_name} continues to
            support a global clientele seeking clarity and direction in love,
            marriage, career, and family.
          </p>
          {/* Call to Action */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href={`tel:${phone_number}`}
              className="flex items-center gap-2 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Call Now
            </a>
            <a
              href={`https://wa.me/${whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Chat Now
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center relative">
          <div className="relative w-full max-w-md">
            <img
              src="https://i.pinimg.com/736x/00/a3/73/00a373f84f5bb7778ab002feff728718.jpg"
              alt="Astrologer Banner"
              className="w-full h-[420px] rounded-3xl object-cover object-top shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
            {/* Neon Glow */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-300/40 blur-3xl rounded-full animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-pink-300/40 blur-3xl rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AstrologyServices = () => {
  const services = [
    {
      title: "Breakup Problem",
      desc: "Astrology consultation to gain clarity after a breakup. Thoughtful guidance to understand emotions and make confident decisions about relationships.",
      img: "https://i.pinimg.com/1200x/56/23/3a/56233a0caad6ac1136c682118ca138f8.jpg",
    },
    {
      title: "Gf/Bf Dispute",
      desc: "Astrology-based consultation to understand relationship conflicts and improve communication between partners for better harmony.",
      img: "https://i.pinimg.com/736x/da/1e/de/da1ede4ba8faa752488419d5a2802fd7.jpg",
    },
    {
      title: "Love Problem",
      desc: "Astrology guidance to bring clarity on love-related challenges and support better understanding and trust between partners.",
      img: "https://i.pinimg.com/736x/bc/49/b6/bc49b6e04d96e9d687ea1740e4cc93ed.jpg",
    },
    {
      title: "Family Problem",
      desc: "Astrology consultation to support family harmony and peaceful resolution of misunderstandings at home.",
      img: "https://i.pinimg.com/736x/e7/b3/63/e7b36387a8c950dbb340455e0fdbdb1e.jpg",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-purple-900 via-indigo-900 to-black overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* ✅ Fixed Title */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-300 to-red-400 drop-shadow-lg montserrat mb-14">
          Our Astrology Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-lg hover:shadow-pink-500/40 hover:scale-[1.03] transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>

              <div className="p-6 space-y-4 text-center">
                <h3 className="text-xl font-bold text-yellow-300 montserrat drop-shadow-md">
                  {service.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed open-sans">
                  {service.desc}
                </p>
                <a href={`tel:${phone_number}`}>
                  <button className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-white font-semibold shadow-lg hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300 montserrat">
                    <Phone className="w-5 h-5" /> Call Us Now
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AstrologyServicesModern = () => {
  const services = [
    {
      title: "Marriage Specialist",
      img: "https://i.pinimg.com/736x/be/96/4b/be964bb4f6d6e07752fc4b363859b048.jpg",
    },
    {
      title: "Husband Wife Dispute",
      img: "https://i.pinimg.com/736x/f5/b2/00/f5b200772b619765261b2a50b595ae72.jpg",
    },
    {
      // ✅ FIXED
      title: "Relationship Reconciliation",
      img: "https://i.pinimg.com/1200x/2f/5b/b3/2f5bb3dde2c5891188f1170b5d12260f.jpg",
    },
    {
      title: "Financial Problem",
      img: "https://i.pinimg.com/736x/40/99/9c/40999c10cdac6c327a1378c45be496b5.jpg",
    },
  ];

  return (
    <section className="mt-2 mb-2 relative py-20 px-6 overflow-hidden bg-gradient-to-br from-purple-900 via-pink-800 to-red-700">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-16 montserrat drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
        >
          ✨ Premium Astrology Services ✨
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-6 group hover:scale-105 transition-transform duration-500"
            >
              {/* Service Image */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-full border-4 border-pink-300 shadow-lg"
                />
                {/* Glow Ring */}
                <span className="absolute inset-0 rounded-full bg-pink-400/40 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4 montserrat tracking-wide">
                {service.title}
              </h3>

              {/* Call Button */}
              <a href={`tel:${phone_number}`}>
                <button className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-pink-400/50 hover:scale-105 transition-all duration-300">
                  <Phone className="w-5 h-5" /> Call Now
                </button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AllServicesModern = () => {
  const services = [
    {
      title: "Relationship Guidance",
      icon: Heart,
      desc: "Astrology consultation for relationship clarity, emotional understanding and rebuilding trust between partners.",
    },
    {
      title: "Court Case Consultation",
      icon: Scale,
      desc: "Astrology-based guidance for patience, mental clarity and confidence during legal and court-related situations.",
    },
    {
      title: "Family Harmony",
      icon: Users,
      desc: "Astrology consultation to support peaceful resolution of family misunderstandings and restore home harmony.",
    },
    {
      title: "Business Advisory",
      icon: Briefcase,
      desc: "Astrology-based consultation for career direction, business planning and professional stability.",
    },
    {
      title: "Couples Consultation",
      icon: Users,
      desc: "Supportive astrology guidance for couples seeking clarity on family planning and life decisions.",
    },
    {
      title: "Puja  Consultation",
      icon: Sparkles,
      desc: "Personalized Vedic puja and mantra-based consultations rooted in traditional spiritual practice.",
    },
  ];

  return (
    <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-purple-900 via-pink-800 to-red-700">
      {/* Sparkles / Cosmic effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-6xl font-extrabold text-white mb-16 montserrat drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]"
        >
          🌟 Premium Astrology Services 🌟
        </motion.h2>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, id) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: id * 0.15 }}
              viewport={{ once: true }}
              className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-[0_8px_32px_rgba(0,0,0,0.6)] hover:scale-105 hover:shadow-[0_0_35px_rgba(255,100,150,0.6)] transition-all duration-500 group"
            >
              {/* Icon Glow */}
              <div className="flex justify-center mb-6 relative">
                <service.icon className="w-16 h-16 text-pink-400 drop-shadow-[0_0_15px_rgba(255,100,150,0.8)] group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute inset-0 rounded-full bg-pink-400/40 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 montserrat">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-200 mb-8 text-sm open-sans">
                {service.desc}
              </p>

              {/* Button */}
              <a href={`tel:${phone_number}`}>
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="montserrat flex items-center justify-center gap-3 w-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(255,100,150,0.8)] transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Contact Now
                </motion.button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

function HomeLastDesign() {
  return (
    <section className="mt-2 mb-2 relative bg-gradient-to-br from-purple-900 via-indigo-900 to-black py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center relative"
        >
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-400 blur-3xl opacity-40 animate-pulse"></div>
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-yellow-400/60 backdrop-blur-xl">
            <img
              src="https://i.pinimg.com/1200x/3d/ef/55/3def558579612a517065a7c48310e918.jpg"
              alt={person_name}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 rounded-full border-4 border-pink-400/40 animate-spin-slow"></div>
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >
          {/* ✅ Fixed H2 — Sparkles icon removed */}
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 bg-clip-text text-transparent drop-shadow-lg montserrat">
            Astrologer {person_name}
          </h2>

          {/* ✅ Fixed H3 */}
          <h3 className="text-lg md:text-2xl font-semibold text-gray-200 montserrat">
            Trusted Astrology Consultant — Since 1950
          </h3>

          {/* ✅ Fixed Paragraph */}
          <p className="text-gray-300 leading-relaxed text-base open-sans">
            With deep knowledge in{" "}
            <span className="text-yellow-400">Vastu</span>,{" "}
            <span className="text-pink-400">horoscope reading</span>, and{" "}
            <span className="text-purple-300">
              Vedic astrology consultation
            </span>
            , {person_name} Ji guides individuals toward clarity, confidence,
            and better life decisions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-3">
            <a
              href={`tel:${phone_number}`}
              className="flex items-center gap-2 bg-gradient-to-r from-red-500 via-pink-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-pink-400/60 hover:scale-105 transition-all duration-300"
            >
              <Phone size={20} /> Call Now
            </a>
            <a
              href={`https://wa.me/${whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-green-400/60 hover:scale-105 transition-all duration-300"
            >
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>
          </div>

          {/* ✅ Fixed Special Note */}
          <p className="mt-5 text-yellow-300 font-bold tracking-wide text-sm md:text-base poppins">
            Personalized Guidance | Confidential Consultation | Trusted Since
            1950
          </p>
        </motion.div>
      </div>
    </section>
  );
}
