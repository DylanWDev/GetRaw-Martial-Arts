import Nav from "../components/Nav/Nav";

export default function About() {
  return (
    <>
      <div className="relative">
        <div className="absolute top-0 w-full z-50">
          <Nav />
        </div>
        <Filler />
      </div>
    </>
  );
}

const Filler = () => {
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

