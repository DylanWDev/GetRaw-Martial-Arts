import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

export default function contact() {
  // Assuming you have some way to get the height of the navigation bar
  // For demonstration purposes, let's say the navigation bar has a fixed height of 80px
  // You can replace this with the actual height

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-none">
        <div className="w-full bg-slate-600">
          <Nav />
        </div>
      </div>
      <div className="flex-grow overflow-y-auto">
        <p className="py-8">Hello World</p> {/* Adjust padding/margins to your preference */}
      </div>
      <div className="flex-none">
        <Footer />
      </div>
    </div>
  );
}
