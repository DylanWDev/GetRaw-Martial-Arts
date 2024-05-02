import React from "react";
import Nav from "./components/Nav/Nav";

const Home = () => {
  return (
    <>
      <div>
        <div className="absolute top-0 w-full z-50">
          <Nav />
        </div>

        <LandingContent />
        <AboutUs />
        <PhilosophySection />
        <Testimonials />
      </div>
    </>
  );
};

const LandingContent = () => {
  return (
    <div id="landing" className="relative" style={{ marginTop: "-.01rem" }}>
      <div className="text-white gap-5 flex flex-col h-screen justify-center items-center mx-4 sm:mx-12 md:mx-24 lg:mx-32 xl:mx-48 text-center">
        <h1 className="tracking-wide font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          GetRaw Martial Arts!
        </h1>
        <p className="tracking-wide text-sm sm:text-base md:text-lg lg:text-xl xl:text-1xl w-full lg:w-9/12">
          Start Your Martial Arts Journey Today!
        </p>
        <button className="tracking-widest font-bold rounded-full bg-red-700 p-2 w-48 sm:w-60 md:w-72 lg:w-80 xl:w-80">
          <a href="/contact">GET STARTED</a>
        </button>
      </div>
    </div>
  );
};

const PhilosophySection = () => {
  return (
    <section className="py-12 px-4 sm:px-12 bg-gray-900 flex justify-center">
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center mb-6 text-white">
          <hr className="border-2 border-red-600 w-16 sm:w-24"></hr>
          <h2 className="text-2xl sm:text-3xl font-bold relative mx-4">
            Our Philosophy
          </h2>
          <hr className="border-2 border-red-600 w-16 sm:w-24"></hr>
        </div>
        <div className="max-w-4xl text-white">
          <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl mb-4">
            Our school is based on the principle of honor, respect, courtesy,
            accountability, and responsibility. We are not a win-at-all-cost
            school. We believe that mentality causes people to lose their honor,
            integrity, and character. Winning once by any means necessary can
            cause a lifetime of pain.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl mb-4">
            We also do not believe people are entitled to anything except an
            opportunity to excel at life. This is not a program of instant
            gratification but of delayed gratification, discipline, and
            commitment. Learning to control your thoughts and emotions allows
            you to control your responses instead of allowing your circumstances
            to dictate your happiness. Success takes commitment, dedication, and
            a burning desire to never give up, to work through the hard times,
            and believe in yourself. Martial Arts requires commitment, whether
            you are an adult student or a parent making a commitment for your
            child's best interest. We never have a committed child, we only have
            committed and disciplined parents.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl mb-4">
            I know in today's society commitment is a dirty word and everyone
            wants an exit strategy. Instead of asking what if my child or I want
            to quit later, why not ask what if we don't? What if this is a
            life-changing experience that allows me and/or my family to
            fellowship with other positive people, other people that love and
            care for us just the way we are.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl mb-4">
            We believe in hard work, discipline, being kind, and having
            integrity. In order to be physically healthy, you must be mentally,
            emotionally, and spiritually healthy. They are all interconnected,
            being physically healthy and being mentally unhealthy and negative
            will always cause sabotage to success. When you train hard and try
            every day you start to enjoy the journey of who you are becoming
            more than the goal you are trying to achieve.
          </p>
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <section className="py-12 px-4 sm:px-12 bg-white">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center">
        <div className="w-full sm:w-1/2 mb-8 flex">
          <div className="flex flex-col items-center sm:items-start justify-center">
            <div className="flex flex-row items-center mb-6 text-white">
              <hr className="border-2 border-red-600 w-16 sm:w-24"></hr>
              <h2 className="text-black text-2xl sm:text-3xl font-bold relative mx-4">
                About Us
              </h2>
              <hr className="border-2 border-red-600 w-16 sm:w-24"></hr>
            </div>
            <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl mb-4 text-black">
              Welcome to Get Ready and Win Martial Arts! We specialize in using
              martial arts to develop essential life skills, aiming to equip you
              with the tools for success in every aspect of life. Rooted in
              Christian values, our academy emphasizes family, respect, and
              self-defense. Join us to unlock your full potential through
              martial arts discipline!
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl mb-4 text-black">
              You can customize this component further by adding images, videos,
              or any other relevant content.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 flex justify-center">
          <img
            src="images/kicking.webp"
            alt="About Us"
            className="w-full h-auto"
            style={{ filter: "brightness(0.1)" }}
          />
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="bg-white overflow-hidden shadow-lg py-16">
      <div className="flex justify-center pb-12 items-center">
        <hr className="border-2 border-red-600 w-16 sm:w-24"></hr>
        <h2 className="text-3xl sm:text-4xl font-bold relative mx-4">
          Testimonials
        </h2>
        <hr className="border-2 border-red-600 w-16 sm:w-24"></hr>
      </div>
      <div className="p-12 flex flex-col sm:flex-row gap-10 justify-center items-center">
        <Card
          name="Laura Wathen"
          testimonial="Words can't truly express how proud we are of our kiddos and how grateful we are that Brian Chewning's Taekwondo is now part of our family's life. When it comes to Brian Chewning and Carrisa Chewning, all I can say is that I think God hides the wings of angels so we don't freak out when we meet them. These people are nothing short of inspirational!!! If anyone is seeking an activity for their kids that builds strength, stamina, skill, character, perseverance and RESPECT or are in search of a new resource for mental and physical health, fitness and, yes, fun for themselves, come check out Brian Chewning's Taekwondo!!"
        />
        <Card
          name="Rebecca Weaver"
          testimonial="We are so thankful for Master Chewning and all the instructors that give of their time and talents to invest in our children. This business is so much more than that. Chewning’s Get Raw Martial Arts is a place where your child grows not only as a martial artist, but as a person. They help to develop and foster values and integrity in your child to better equip them for the struggles they may face later in life. We highly recommend this school!"
        />
        <Card
          name="Shauna Taulbee"
          testimonial="My son has enjoyed getting fit and exercising without complaint. He has so much fun and has grown emotionally throughout this journey. They have great Birthday celebrations here and it's an excellent way to entertain and wear out a bunch of boys that are going to sleepover at your home."
        />
        <Card
          name="Ashley Lawson"
          testimonial="It's hard to really put into words what this place has meant to my nephew and my family. My sister and I raise her kids as a team, without a strong male role model. It can be a little more challenging for the two of us, to raise him to be the man he has the potential to be. What Master Chewning and his amazing team of instructors have done in the past year both for my nephew's journey to a black belt, as well as for his journey through life, has been a God send.

          What they're helping us to do, is not only give my nephew confidence, skills, and goals, but they're also helping us instill values that have made him a better adjusted child, and will one day add to making him a better man. A man of strength, good character, and a man of faith.
          
          At the belt ceremony last night, after all was said and done I watched the families gather and talk and it felt like being at a big family dinner; love, encouragement and smiles all around. I turn to the back, and see all of the kids and instructors helping to move chairs and put the floor mats back in place...not one announcement to do so, they saw others working and joined in to help.
          
          They are not only teaching him martial arts skills, but life skills that will forever make him a better person.
          
          It takes a village, and we have found a village here. One with love, kindness, discipline, faith and a sense of community that I have not seen often enough.
          
          This is what sets Master Chewning and his entire team apart from other facilities. I felt like I was with family, and I have so much faith that this is the right path for us, and for so many others."
        />
      </div>
    </section>
  );
};

const Card = ({ name, testimonial }) => {
  return (
    <div className="bg-stone-800 rounded-lg overflow-hidden shadow-2xl w-80 h-96 flex flex-col justify-between">
      <div className="p-6">
        <div className="text-white text-lg h-56 overflow-y-hidden text-ellipsis">
          <p className="custom-line-clamp italic">{testimonial}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-bold text-amber-300 truncate">{name}</p>
            <p className="text-xs text-gray-500">Parent</p>
          </div>
          <svg
            className="h-6 w-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
