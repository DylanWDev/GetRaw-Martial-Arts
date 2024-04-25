import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

export default function contact() {
  return (
    <>
    <div className="relative"> 
        <div className="top-0 w-full bg-slate-600">
          <Nav />
        </div>
        <div className="h-screen z-50">
          <p>Hello World</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
