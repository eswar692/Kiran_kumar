import { person_name } from "../Genaral/secrete";

export default function About() {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-blue-50 py-20 px-6 font-sans">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-10 md:p-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
          About Us
        </h2>
        <p className="text-gray-800 text-lg md:text-xl leading-relaxed space-y-4">
          Astrologer{" "}
          <span className="font-bold text-indigo-700">{person_name}</span> is a
          trusted and experienced astrology consultant based in Kerala, India.
          With deep knowledge of Vedic astrology and a sincere commitment to
          helping others, he has established himself as a reliable advisor to
          clients across the country.
          <br />
          <br />
          Through years of experience and dedicated practice, Astrologer{" "}
          <span className="font-semibold text-violet-700">
            {person_name}
          </span>{" "}
          offers a wide range of consultation services including palm readings,
          face readings, photo readings, and phone consultations. His expertise
          spans astrology, horoscope analysis, and personal life guidance —
          making him a versatile and knowledgeable consultant.
          <br />
          <br />
          Known for his{" "}
          <span className="font-semibold text-indigo-600">
            thoughtful and personalized approach
          </span>
          , Astrologer{" "}
          <span className="font-semibold text-violet-700">{person_name}</span>{" "}
          has built a loyal following of clients who value the clarity and
          direction his consultations provide.
          <br />
          <br />
          If you are seeking a trusted astrology consultant for guidance on
          life, love, career, or family — we are here to help.
        </p>
      </div>
    </section>
  );
}
