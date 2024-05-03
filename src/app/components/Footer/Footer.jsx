export default function Footer() {
  return (
    <>
      <div className="bg-Gold w-full ">
        <div className="container flex flex-wrap justify-between py-8 mx-auto">
          <div className="w-full md:w-1/2 lg:w-auto mb-8 lg:mb-0">
            <h2 className="text-black text-lg font-bold mb-2">Business Hours</h2>
            <p className="text-black">Mon, Tue, Thu: 1:30 pm - 8:30 pm</p>
            <p className="text-black">Wednesday: 1:00 pm - 8:00 pm</p>
            <p className="text-black">Friday: 2:30 pm - 7:30 pm</p>
            <p className="text-black">Saturday: Appointment Only</p>
            <p className="text-black">Sunday: Closed</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-auto mb-8 lg:mb-0">
            <h2 className="text-black text-lg font-bold mb-2">Location</h2>
            <p className="text-black">3323 Partner Place</p>
            <p className="text-black">Suite 16</p>
            <p className="text-black">Lexington, KY 40503</p>
            <p className="text-black">1 (859) 223-2842</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-auto mb-8 lg:mb-0">
            <h2 className="text-black text-lg font-bold mb-2">Find Us</h2>
            {/* Add your map or location link here */}
          </div>
          <div className="w-full md:w-1/2 lg:w-auto mb-8 lg:mb-0">
            <h2 className="text-black text-lg font-bold mb-2">Contact Us</h2>
            {/* Add your contact form or contact information here */}
          </div>
        </div>
      </div>
    </>
  );
}
