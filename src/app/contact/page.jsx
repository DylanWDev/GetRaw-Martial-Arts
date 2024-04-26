import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

export default function contact() {
  // Assuming you have some way to get the height of the navigation bar
  // For demonstration purposes, let's say the navigation bar has a fixed height of 80px
  const navHeight = 80; // You can replace this with the actual height

  return (
    <>
      <div style={{ height: `calc(100vh - ${navHeight}px)` }}> 
        <div className="top-0 w-full bg-slate-600">
          <Nav />
        </div>
        <div className="h-full overflow-y-auto">
          <p className="py-8">Hello World</p> {/* Adjust padding/margins to your preference */}
        </div>
      </div>
      <Footer />
    </>
  );
}
