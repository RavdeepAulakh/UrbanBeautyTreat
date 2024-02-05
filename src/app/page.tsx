"use client";

import Image from "next/image";
import { useState } from "react";

const SalonHome: React.FC = () => {
  // State to manage visibility of service details
  const [showHairStyling, setShowHairStyling] = useState(false);
  const [showSpaWellness, setShowSpaWellness] = useState(false);
  const [makeUp, setMakeUp] = useState(false);
  const [henna, setHenna] = useState(false);
  const [hair, setHair] = useState(false);
  const [skin, setSkin] = useState(false);
  const [mani, setMani] = useState(false);
  const [wax, setWax] = useState(false);

  return (
    <div className="bg-white">
      {/* Banner Section */}
      <section className="relative h-80 mb-8 overflow-hidden rounded-t-xl">
        <Image
          src="/banner.jpeg" // Replace with the path to your banner image
          alt="Salon Banner"
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
        <div
          className="absolute inset-0 flex items-center justify-center text-black text-center px-4"
          id="home"
        >
          <h1 className="text-4xl font-bold">The Urban's Beauty Treat</h1>
        </div>
      </section>

      {/* Description Section */}
      <div className="max-w-3xl w-full mx-auto p-8">
        <p className="text-gray-600 text-lg">
          Elevate your beauty experience at the Urban's. Our team of skilled
          professionals is dedicated to providing you with top-notch services in
          a relaxing and luxurious environment.
        </p>
      </div>

      {/* Services Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-3xl mx-auto text-center" id="services">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Hair Styling Service */}
            <div className="sm:flex sm:flex-col bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
              <h3
                className="text-xl text-gray-600 font-semibold mb-2 cursor-pointer"
                onClick={() => setShowHairStyling(!showHairStyling)}
              >
                Threading
              </h3>
              {showHairStyling && (
                <div className="text-gray-700">
                  <ul>
                    <li>Eye Brows - $8</li>
                    <li>Upper Lip - $4</li>
                    <li>Chin - $5</li>
                    <li>Full Face with Brows - $25+</li>
                    {/* Add more services and prices as needed */}
                  </ul>
                </div>
              )}
            </div>

            {/* Spa & Wellness Service */}
            <div className="sm:flex sm:flex-col bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
              <h3
                className="text-xl text-gray-600 font-semibold mb-2 cursor-pointer"
                onClick={() => setShowSpaWellness(!showSpaWellness)}
              >
                Tinting & Lifting
              </h3>
              {showSpaWellness && (
                <div className="text-gray-700">
                  <ul>
                    <li>Eyebrow Tint - $15</li>
                    <li>Eyelash Tint - $20</li>
                    <li>Eyelash Lift & Tinting - $70</li>
                    {/* Add more services and prices as needed */}
                  </ul>
                </div>
              )}
            </div>

            <div className="sm:flex sm:flex-col bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
              <h3
                className="text-xl text-gray-600 font-semibold mb-2 cursor-pointer"
                onClick={() => setWax(!wax)}
              >
                Waxing
              </h3>
              {wax && (
                <div className="text-gray-700">
                  <ul>
                    <li>Full Face - $25+</li>
                    <li>Eye Brows - $10</li>
                    <li>Upper Lips or Chin - $5</li>
                    <li>Full Arms - $30</li>
                    <li>Under Arms - $10</li>
                    <li>Upper or Lower Arms - $20</li>
                    <li>Full Legs - $45</li>
                    <li>Upper or Lower Legs - $30</li>
                    <li>Full Front or Full Back - $35</li>
                    <li>Bikini(Regular) - $20</li>
                    <li>Bikini(French) - $26</li>
                    <li>Bikini(Brazilian) - $45</li>
                    {/* Add more services and prices as needed */}
                  </ul>
                </div>
              )}
            </div>

            <div className="sm:flex sm:flex-col bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
              <h3
                className="text-xl text-gray-600 font-semibold mb-2 cursor-pointer"
                onClick={() => setMani(!mani)}
              >
                Manicure & Pedicure
              </h3>
              {mani && (
                <div className="text-gray-700">
                  <ul>
                    <li>Deluxe Manicure - $25</li>
                    <li>French Manicure - $35</li>
                    <li>Gel/Shellac Manicure - $35</li>
                    <li>Polish Application Hand & Feet - $15</li>
                    <li>Deluxe Pedicure - $35</li>
                    <li>Gel/Shellac Pedicure - $45</li>
                    <li>Paraffin Treatment - $15</li>
                    <li>Nail Art - $9+</li>
                    {/* Add more services and prices as needed */}
                  </ul>
                </div>
              )}
            </div>

            <div className="sm:flex sm:flex-col bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
              <h3
                className="text-xl text-gray-600 font-semibold mb-2 cursor-pointer"
                onClick={() => setSkin(!skin)}
              >
                Skin Care
              </h3>
              {skin && (
                <div className="text-gray-700">
                  <ul>
                    <li>Deluxe Facial - $65</li>
                    <li>Deep Pore Cleansing - $75</li>
                    <li>Anti-Acne Facial - $80</li>
                    <li>Vitamin Facial - $85</li>
                    <li>AquaHydro Facial - $100</li>
                    <li>EMS Face Lift Facial - $150</li>
                    {/* Add more services and prices as needed */}
                  </ul>
                </div>
              )}
            </div>

            <div className="sm:flex sm:flex-col bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
              <h3
                className="text-xl text-gray-600 font-semibold mb-2 cursor-pointer"
                onClick={() => setHair(!hair)}
              >
                Hairstyles
              </h3>
              {hair && (
                <div className="text-gray-700">
                  <ul>
                    <li>Straightening - $30+</li>
                    <li>Curls - $45+</li>
                    <li>Updo - $55+</li>
                    <li>Bridal Hair Style - $200+</li>
                    {/* Add more services and prices as needed */}
                  </ul>
                </div>
              )}
            </div>

            <div className="sm:flex sm:flex-col bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
              <h3
                className="text-xl text-gray-600 font-semibold mb-2 cursor-pointer"
                onClick={() => setMakeUp(!makeUp)}
              >
                Makeup
              </h3>
              {makeUp && (
                <div className="text-gray-700">
                  <ul>
                    <li>Day Makeup - $70+</li>
                    <li>Night Makeup - $75+</li>
                    <li>Bridal Makeup - $300</li>
                    <li>Sari or Chunni Tie - $15</li>
                    {/* Add more services and prices as needed */}
                  </ul>
                </div>
              )}
            </div>

            <div className="sm:flex sm:flex-col bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
              <h3
                className="text-xl text-gray-600 font-semibold mb-2 cursor-pointer"
                onClick={() => setHenna(!henna)}
              >
                Henna (Mehandi)
              </h3>
              {henna && (
                <div className="text-gray-700">
                  <ul>
                    <li>Start From - $7</li>
                    <li>Bridal Henna - $150+</li>
                    {/* Add more services and prices as needed */}
                  </ul>
                </div>
              )}
            </div>

            {/* Add more services as needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto text-center" id="contact">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Contact Us
          </h2>
          <p className="text-gray-700 mb-6">
            Have questions or ready to book an appointment? Contact us using the
            information below:
          </p>
          <div className="flex flex-col gap-4 items-center justify-center sm:flex-row sm:justify-between">
            <p className="text-gray-700 mb-2 sm:mb-0">Phone: (604) 569-1633</p>
            <p className="text-gray-700 mb-2 sm:mb-0">
              Instagram: @urbanbeautytreat
            </p>
            <p className="text-gray-700 mb-2 sm:mb-0">
              Location: 7606 Royal Oak Ave, Burnaby, BC V5J 4K3
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalonHome;
