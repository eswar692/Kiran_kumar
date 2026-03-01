import { MenuIcon, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { company_name, phone_number, whatsapp_number } from "./secrete";

const Header = () => {
  return (
    <header className="w-full bg-gray-900">
      <div className="w-full md:w-[85%] mx-auto flex flex-col gap-6">
        <Logo />
      </div>
    </header>
  );
};

export default Header;

const Logo = () => (
  <div className="relative w-full flex flex-row md:flex-row items-center justify-between gap-0 md:gap-2 bg-gray-900 p-1 py-3 md:p-6">
    <div className="w-[85%] flex items-center gap-1 md:gap-8">
      <div className="flex flex-col text-center md:text-left">
        <h1 className="px-2 montserrat font-extrabold text-2xl md:text-3xl drop-shadow-lg text-white">
          {company_name}
        </h1>
        <p className="open-sans text-sm md:text-base text-gray-300 italic -mt-1">
          Since 1950
        </p>
        <div className="text-white open-sans">
          <b>Contact Us</b>
          <div>
            03, Jyothirdevi, Chottanikkara, Bhagavathi Kaanda Street
            <br />
            Chottanikkara, Ernakulam, Kerala 682312
            <br />
            Phone: {phone_number} | WhatsApp: {whatsapp_number}
          </div>
        </div>
      </div>
    </div>

    <div className="w-[15%] flex justify-center items-center mt-4 md:mt-0">
      <Menu />
    </div>
  </div>
);

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <ul className="hidden lg:flex gap-8 font-medium text-gray-100 montserrat text-lg">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>

      <button
        className="lg:hidden p-2 border rounded bg-orange-500 transition duration-300"
        onClick={() => setOpen(!open)}
      >
        <MenuIcon className="w-6 h-6 text-white" strokeWidth={2} />
      </button>

      {open && <MobileMenu setOpen={setOpen} />}
    </div>
  );
};

const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <Link to={to} className="relative group cursor-pointer">
    <span className="transition-colors duration-300 group-hover:text-yellow-400">
      {children}
    </span>
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

const MobileMenu = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-gradient-to-tr from-red-900 via-pink-900 to-yellow-900 p-8 flex flex-col justify-between shadow-2xl overflow-y-auto">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="montserrat text-2xl font-bold text-yellow-400 drop-shadow-lg">
          {company_name} {/* ✅ Removed "Center" */}
        </h1>
        <button
          onClick={() => setOpen(false)}
          className="p-2 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          <X className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Navigation */}
      <ul className="flex flex-col gap-6 font-medium montserrat text-lg text-gray-100 mb-8">
        {["Home", "About", "Services", "Testimonials", "Contact"].map(
          (item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              <li className="hover:text-yellow-400 cursor-pointer transition-colors">
                {item}
              </li>
            </Link>
          ),
        )}
      </ul>

      {/* CTA Buttons */}
      <div className="flex flex-col gap-4 mb-8">
        <p className="text-gray-200 font-semibold text-center">
          Need Guidance? Contact Us Now! {/* ✅ Fixed */}
        </p>
        <div className="flex justify-center gap-4">
          <a
            href={`tel:${phone_number}`}
            className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform font-semibold"
          >
            <Phone size={18} /> Call
          </a>
          <a
            href={`https://wa.me/${whatsapp_number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform font-semibold"
          >
            <MessageCircle size={18} /> WhatsApp
          </a>
        </div>
      </div>

      {/* ✅ Fixed Bottom Text */}
      <p className="open-sans text-gray-300 text-sm text-center">
        <b className="text-yellow-400">{company_name}</b> — Trusted astrology
        consultation since 1950. Guidance for love, marriage, career, and family
        harmony.
      </p>
    </div>
  );
};
