import React, { useState, useEffect } from "react";
import "./App.css"; // Tailwind will compile custom animations here
import ProfilePic from "./assets/profilepurva.jpg";


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulating a loading screen with a quote
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000); // Adjust the time as needed
  }, []);

  const importAll = (r) => r.keys().map(r);
  const images = importAll(
    require.context("./works", false, /\.(png|jpe?g|svg)$/)
  );

  const importLogos = (r) => r.keys().map(r);
  const logos = importLogos(
    require.context("./logos", false, /\.(png|jpe?g|svg)$/)
  );

  const [currentText, setCurrentText] = useState("Hey!");

  useEffect(() => {
    const textArray = ["Hey!", "કેમ છો", "नमस्ते"];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % textArray.length; // Cycle through the texts
      setCurrentText(textArray[index]);
    }, 1000); // Change text every 2 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="">
      <div>
        {isLoading ? (
          <div className="h-screen flex items-center justify-center text-black p-4">
            <p className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-2xl tracking-tight">
              "The only way to do great work is to love what you do." - Steve
              Jobs
            </p>
          </div>
        ) : (
          <main className="min-h-screen overflow-x-hidden">
            {/* Intro Section */}
            <section className="h-screen  text-black flex items-center justify-center pl-20 pr-20">
              <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-10">
                <img
                  src={ProfilePic}
                  alt="Portfolio"
                  className="h-56 w-56 object-cover"
                />
                <div className="text-center lg:text-left">
                  <h1 className="text-3xl lg:text-6xl font-bold mb-2 transition-all duration-500 ease-in-out">
                    {currentText}
                  </h1>
                  <h1 className="text-3xl lg:text-6xl font-bold">
                    I'm Purva Patel
                  </h1>
                  <p className="mt-4 text-base sm:text-lg lg:text-2xl">
                    Products & Concepts Design | UI-UX Research & Design | Web
                    Dev | Marketing | Storytelling | Sports
                  </p>
                  <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start mt-6 space-y-4 sm:space-y-0 sm:space-x-6">
                    <button
                      className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out"
                      onClick={() =>
                        document
                          .getElementById("my-works-section")
                          .scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      My Works
                    </button>
                    <button
                      className="px-10 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out"
                      onClick={() =>
                        document
                          .getElementById("my-skills-section")
                          .scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Skills
                    </button>
                    <button
                      className="px-10 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out"
                      onClick={() =>
                        document
                          .getElementById("my-skills-section")
                          .scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Works Section */}
            <section id="my-works-section" className="py-16 border border-t">
              <h2 className="text-4xl font-bold text-center mb-12">My Works</h2>
              <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 px-4 lg:px-20">
                {/* Map through the local images */}
                {images.map((imgSrc, i) => (
                  <div key={i} className="mb-4 break-inside-avoid">
                    <img
                      src={imgSrc}
                      alt={`Work ${i}`}
                      className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </section>
            {/* Skills Section */}
            <section id="my-skills-section" className="py-16 border border-t">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
                Skills
              </h2>
              <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 px-4 lg:px-20">
                {/* Map through the logos */}
                {logos.map((logoSrc, i) => (
                  <div
                    key={i}
                    className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20"
                  >
                    <img
                      src={logoSrc}
                      alt={`Skill ${i}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <section id="my-skills-section" className="py-16 border border-t">
              <h2 className="text-4xl font-bold text-center mb-12">
                Let's Connect
              </h2>

              {/* Mail Section */}
              <div className="flex flex-col items-center mb-8">
                <img
                  src="https://cdn.simpleicons.org/gmail/EA4335"
                  alt="Email"
                  className="h-8 w-8 mb-2 hover:scale-110 transition duration-200"
                />
                <a
                  href="mailto:purvavisionnxt@gmail.com"
                  className="text-lg hover:underline"
                >
                  purvavisionnxt@gmail.com
                </a>
              </div>

              {/* Social Media Icons Section */}
              <div className="flex flex-wrap justify-center items-center gap-8 px-4 lg:px-20">
                {/* GitHub */}
                <a
                  href="https://github.com/purvaspatel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://cdn.simpleicons.org/github/black"
                    alt="GitHub"
                    className="h-8 w-8 hover:scale-110 transition duration-200"
                  />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/purvapatel24"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://cdn.simpleicons.org/linkedin/0077B5"
                    alt="LinkedIn"
                    className="h-8 w-8 hover:scale-110 transition duration-200"
                  />
                </a>

                {/* X.com */}
                <a
                  href="https://x.com/purvaspatel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://cdn.simpleicons.org/x/twitter"
                    alt="X.com"
                    className="h-8 w-8 hover:scale-110 transition duration-200"
                  />
                </a>

                {/* Pinterest */}
                <a
                  href="https://pinterest.com/purvapatel01"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://cdn.simpleicons.org/pinterest/E60023"
                    alt="Pinterest"
                    className="h-8 w-8 hover:scale-110 transition duration-200"
                  />
                </a>

                {/* Medium */}
                <a
                  href="https://medium.com/@purvavisionnxt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://cdn.simpleicons.org/medium/000000"
                    alt="Medium"
                    className="h-8 w-8 hover:scale-110 transition duration-200"
                  />
                </a>
              </div>
            </section>

            {/* Social Links Section */}
            <footer className="py-8 bg-black text-white flex flex-col items-center space-y-4">
              <p>ૐ ગં ગણપતયે નમઃ</p>
            </footer>
          </main>
        )}
      </div>
    </div>
  );
};

export default App;
