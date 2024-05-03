import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

const About = () => {
  return (
    <>
      <div className="w-full bg-DarkCharcoal">
          <Nav />
        </div>
      <div className="container mx-auto px-4 py-8 h-screen">
        <h1 className="text-3xl font-bold mb-4">About Brian Chewning's TaeKwonDo Academy/GetRAW Martial Arts</h1>
        <p className="mb-4">
          Since 1993, Brian Chewning's TaeKwonDo Academy/GetRAW Martial Arts has provided martial arts training to clients, helping them get and stay fit, active, confident, and healthy. We are a Christian-based martial arts school that focuses on teaching traditional TaeKwonDo and Self Defense. We train in martial arts while remaining focused on our 7 tenets:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>HONOR</li>
          <li>COURTESY</li>
          <li>INTEGRITY</li>
          <li>PERSERVERANCE</li>
          <li>SELF-CONTROL</li>
          <li>COURAGE</li>
          <li>COMMUNITY</li>
        </ul>
        <p className="mb-4">
          We are here to help you reach all of your fitness and martial arts goals. We are focused on providing high-quality service and client satisfaction. Meeting the needs of our parents and students are of the utmost importance. Our entire instructor team is committed to meeting those needs. As a result, a high percentage of our business is from repeat clients and referrals.
        </p>
        <p className="mb-4">
          We would welcome the opportunity to earn your trust and deliver you the best service in the industry.
        </p>
        <h2 className="text-xl font-bold mb-4">Classes and Offerings</h2>
        <p className="mb-4">
          We offer lessons 5 days a week to men, women, and children. We have beginners starting as young as 4 and as young at heart as 65! We offer family classes once a week with the opportunity to train and start your journey together to black belt and beyond.
        </p>
        <h2 className="text-xl font-bold mb-4">Discounts Available</h2>
        <p className="mb-4">
          College, Law Enforcement, and Active Military Discounts available with valid ID.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
