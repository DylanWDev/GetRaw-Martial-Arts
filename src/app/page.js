import React from "react";
import Nav from "./components/Nav/Nav";

const Home = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute top-0 w-full z-50">
          <Nav />
        </div>

        <LandingContent />
        <PhilosophySection />
      </div>
    </>
  );
};

const LandingContent = () => {
  return (
    <div id="landing" className="relative" style={{ marginTop: "-.1rem" }}>
      <div className="text-white gap-5 flex flex-col h-screen justify-center items-center mx-4 sm:mx-12 md:mx-24 lg:mx-32 xl:mx-48 text-center">
        <h1 className="tracking-wide font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">GetRaw Martial Arts!</h1>
        <p className="tracking-wide text-sm sm:text-base md:text-lg lg:text-xl xl:text-1xl w-full lg:w-9/12">Welcome to Get Ready and Win Martial Arts! We specialize in using martial arts to develop essential life skills, aiming to equip you with the tools for success in every aspect of life. Rooted in Christian values, our academy emphasizes family, respect, and self-defense. Join us to unlock your full potential through martial arts discipline!</p>
        <button className="tracking-widest font-bold rounded-full bg-red-700 p-2 w-48">GET STARTED</button>
      </div>
    </div>
  );
};

const PhilosophySection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Our Philosophy</h2>
        <p className="text-lg mb-4">
          Our school is based on the principle of honor, respect, courtesy, accountability, and responsibility. We are not a win-at-all-cost school. We believe that mentality causes people to lose their honor, integrity, and character. Winning once by any means necessary can cause a lifetime of pain.
        </p>
        <p className="text-lg mb-4">
          We also do not believe people are entitled to anything except an opportunity to excel at life. This is not a program of instant gratification but of delayed gratification, discipline, and commitment. Learning to control your thoughts and emotions allows you to control your responses instead of allowing your circumstances to dictate your happiness. Success takes commitment, dedication, and a burning desire to never give up, to work through the hard times, and believe in yourself. Martial Arts requires commitment, whether you are an adult student or a parent making a commitment for your child's best interest. We never have a committed child, we only have committed and disciplined parents.
        </p>
        <p className="text-lg mb-4">
          I know in today's society commitment is a dirty word and everyone wants an exit strategy. Instead of asking what if my child or I want to quit later, why not ask what if we don't? What if this is a life-changing experience that allows me and/or my family to fellowship with other positive people, other people that love and care for us just the way we are.
        </p>
        <p className="text-lg mb-4">
          We believe in hard work, discipline, being kind, and having integrity. In order to be physically healthy, you must be mentally, emotionally, and spiritually healthy. They are all interconnected, being physically healthy and being mentally unhealthy and negative will always cause sabotage to success. When you train hard and try every day you start to enjoy the journey of who you are becoming more than the goal you are trying to achieve.
        </p>
      </div>
    </section>
  );
};

export default Home;
