import { motion } from "framer-motion";
import { ChevronRight, Phone, MessageCircle } from "lucide-react";
import useInViewOnce from "./InView";
import {
  company_name,
  person_name,
  phone_number,
  website_url,
  whatsapp_number,
} from "./secrete";

export default function Footer() {
  const [ref, inView] = useInViewOnce(0.2);

  const services = [
    "Astrology Consultation",
    "Love & Relationship Guidance",
    "Marriage Advisory",
    "Career & Life Direction",
    "Horoscope Reading",
  ];

  const whyChoose = [
    "Experienced Astrologer",
    "Confidential Consultation",
    "Trusted by Thousands",
    "Online & Offline Support",
    "Personalized Guidance",
  ];

  return (
    <motion.footer className="z-99 mt-2 relative text-white pt-20 w-full overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-3xl animate-ping"></div>

      <motion.div
        ref={ref}
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto px-6 py-5 grid grid-cols-1 md:grid-cols-4 gap-10"
      >
        {/* About */}
        <div className="space-y-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl shadow-pink-400/40 transition">
          <h2 className="font-extrabold text-2xl montserrat text-pink-400 tracking-wide">
            About {company_name}
          </h2>
          {/* ✅ Fixed */}
          <p className="text-sm open-sans text-gray-200 leading-relaxed">
            <b className="text-yellow-400">{company_name}</b> is a trusted
            astrology consultation service based in Kerala.{" "}
            <span className="font-semibold">{person_name}</span> guides clients
            with clarity in love, career, marriage and family life.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl shadow-purple-400/40 transition">
          <h2 className="font-bold text-2xl montserrat text-yellow-400 tracking-wide">
            Contact Us
          </h2>
          <div className="text-white open-sans text-sm leading-relaxed">
            03, Jyothirdevi, Chottanikkara, Bhagavathi Kaanda Street, Ernakulam,
            Kerala 682312
          </div>
          <p className="flex items-center gap-2 text-gray-200">
            <Phone className="w-5 h-5 text-pink-400" />
            {phone_number}
          </p>
          <p className="flex items-center gap-2 text-gray-200">
            <MessageCircle className="w-5 h-5 text-green-400" />
            {whatsapp_number}
          </p>
          {/* ✅ Fixed */}
          <p className="text-xs text-gray-300 tracking-wider uppercase">
            Authentic | Reliable | Confidential
          </p>
        </div>

        {/* Services */}
        <div className="space-y-3 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl shadow-yellow-400/40 transition">
          <h2 className="font-bold text-2xl montserrat text-pink-400 tracking-wide">
            Our Services
          </h2>
          <ul className="text-sm space-y-2 open-sans">
            {services.map((service, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 hover:text-yellow-400 transition-colors duration-300"
              >
                <ChevronRight className="w-4 h-4 text-pink-400 flex-shrink-0" />
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="space-y-3 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl shadow-red-400/40 transition">
          <h2 className="font-bold text-2xl montserrat text-yellow-400 tracking-wide">
            Why Choose Us
          </h2>
          <ul className="text-sm space-y-2 open-sans">
            {whyChoose.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 hover:text-pink-400 transition-colors duration-300"
              >
                <ChevronRight className="w-4 h-4 text-yellow-300 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <CopyRightAndContact />
    </motion.footer>
  );
}

const CopyRightAndContact = () => {
  return (
    <div
      className="bottom-0 left-0 right-0 py-6 shadow-inner"
      style={{
        background:
          "linear-gradient(135deg, #7c0000 0%, #b5179e 25%, #7209b7 50%, #3a0ca3 75%, #023e8a 100%)",
        borderTop: "2px solid rgba(255,200,0,0.4)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left — Legal Links */}
        <div className="flex items-center gap-4 text-xs font-semibold">
          <a
            href="/privacy-policy"
            className="text-yellow-300 text-xl hover:text-white transition px-3 py-1 rounded-full border border-yellow-400/40 hover:border-yellow-300"
          >
            Privacy Policy
          </a>
          <span className="text-pink-300">|</span>
          <a
            href="/terms"
            className="text-yellow-300 text-xl hover:text-white transition px-3 py-1 rounded-full border border-yellow-400/40 hover:border-yellow-300"
          >
            Terms & Conditions
          </a>
        </div>

        {/* Center — Credit */}
        <div className="text-center flex flex-col md:flex-row gap-3 items-center">
          <p className="font-montserrat text-sm text-pink-200 font-semibold">
            Designed with by
          </p>
          <a href="https://wa.me/918886921826">
            <button
              className="font-bold py-2 px-6 rounded-full shadow-lg transition-all hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #f9c423, #f97316)",
                color: "#0a0a0a",
                boxShadow: "0 0 20px rgba(249,196,35,0.5)",
              }}
            >
              Eswar — Binary Icon Tech
            </button>
          </a>
        </div>

        {/* Right — Copyright */}
        <div className="text-center md:text-right text-sm text-pink-100 font-medium">
          © {new Date().getFullYear()}{" "}
          <a
            href={website_url}
            target="_blank"
            className="font-bold text-yellow-300 hover:text-white transition"
          >
            {company_name}
          </a>{" "}
          — All Rights Reserved.
        </div>
      </div>
    </div>
  );
};
