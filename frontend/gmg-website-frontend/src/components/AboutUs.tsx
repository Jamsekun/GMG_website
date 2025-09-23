import FeatherIcon from "feather-icons-react";
import PlaceholderImage from "../assets/images/main-banner-1.jpg"; // replace with your own later
import PlaceholderImage2 from "../assets/images/car_coffee_bg.png"; // replace with your own later

const AboutUs = () => {
  return (
    <section className="flex flex-col min-h-screen bg-[#FFEAD4] text-gray-800">
      {/* Hero Section */}
      <div
        className="relative flex items-center justify-center h-[40vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${PlaceholderImage})` }}
      >
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>
        <h1 className="relative text-3xl lg:text-5xl font-bold text-white z-10">
          About <span className="text-amber-500">Us</span>
        </h1>
      </div>

      {/* Intro Section */}
      <div className="flex flex-col lg:flex-row gap-12 px-8 md:px-16 lg:px-32 py-16 items-center">
        <img
          src={PlaceholderImage2}
          alt="Our Coffee Shop"
          className="w-full lg:w-1/2 rounded-lg shadow-lg object-cover"
        />
        <div className="flex flex-col gap-6 lg:w-1/2">
          <h2 className="text-2xl lg:text-3xl font-bold text-amber-800">
            Brewing Coffee, Washing Cars, Building Community
          </h2>
          <p className="text-sm lg:text-base leading-relaxed">
            At <span className="font-semibold">Coffee & Wash</span>, we believe
            in more than just serving drinks or cleaning vehicles. We create a
            space where people can relax, recharge, and connect. Our mission is
            to combine the warmth of a neighborhood coffee shop with the
            efficiency of a professional car wash—so you can enjoy both quality
            coffee and a spotless ride in one stop.
          </p>
          <ul className="flex flex-col gap-4 text-sm lg:text-base">
            <li className="flex items-center gap-2.5">
              <FeatherIcon icon="coffee" className="text-amber-500" />
              Specialty coffee brewed from high-quality beans
            </li>
            <li className="flex items-center gap-2.5">
              <FeatherIcon icon="droplet" className="text-amber-500" />
              Eco-friendly car wash with premium service
            </li>
            <li className="flex items-center gap-2.5">
              <FeatherIcon icon="users" className="text-amber-500" />
              A welcoming community space for everyone
            </li>
          </ul>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-[#FFEAD4] py-16 px-8 md:px-16 lg:px-32">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12">
          Our <span className="text-amber-500">Values</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center gap-4">
            <FeatherIcon icon="heart" className="text-amber-500 w-10 h-10" />
            <h3 className="font-semibold text-lg">Passion</h3>
            <p className="text-sm">
              We pour our hearts into every cup of coffee and every car wash,
              ensuring you always leave with a smile.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <FeatherIcon icon="shield" className="text-amber-500 w-10 h-10" />
            <h3 className="font-semibold text-lg">Quality</h3>
            <p className="text-sm">
              From sourcing beans to maintaining equipment, we never compromise
              on quality and reliability.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <FeatherIcon icon="smile" className="text-amber-500 w-10 h-10" />
            <h3 className="font-semibold text-lg">Community</h3>
            <p className="text-sm">
              Our shop is more than a business—it’s a place where friendships
              are brewed and connections are made.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative flex flex-col items-center justify-center py-20 bg-secondary-dark text-white">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">
          Experience the Best of Both Worlds
        </h2>
        <p className="text-sm lg:text-base mb-8 max-w-2xl text-center">
          Whether you’re here for a quick caffeine fix, a deep car clean, or
          simply to unwind, we’re here to serve you with excellence.
        </p>
        <button className="px-6 py-3 bg-white text-amber-600 font-semibold rounded-md hover:bg-amber-200 transition">
          Visit Us Today
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
