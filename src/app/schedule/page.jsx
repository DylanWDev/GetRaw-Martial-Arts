import Nav from "../components/Nav/Nav";

export default function schedule() {
  return (
    <>
    <div className="w-full bg-DarkCharcoal">
          <Nav />
        </div>
        <LilWarriorSchedule />
        <WarriorsSchedule />
        <ImpactSchedule />
        <FamilyClassSchedule />
    </>
  );
}



const LilWarriorSchedule = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">L'il Warrior Schedule</h2>
      <table className="w-full border-collapse border border-gray-400">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-400 px-4 py-2">Day</th>
            <th className="border border-gray-400 px-4 py-2">Start Time</th>
            <th className="border border-gray-400 px-4 py-2">End Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Monday</td>
            <td className="border border-gray-400 px-4 py-2">6:00 PM</td>
            <td className="border border-gray-400 px-4 py-2">6:30 PM</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Wednesday</td>
            <td className="border border-gray-400 px-4 py-2">5:00 PM</td>
            <td className="border border-gray-400 px-4 py-2">5:30 PM</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Thursday</td>
            <td className="border border-gray-400 px-4 py-2">6:00 PM</td>
            <td className="border border-gray-400 px-4 py-2">6:30 PM</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-4">
        Have questions about our classes? We're happy to address all of your questions or concerns.
        Call us at <a href="tel:8592232842">(859) 223-2842</a> or use our "Contact Us" button below to send us a message.
      </p>
    </div>
  );
};



const WarriorsSchedule = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Warrior Schedule</h2>
      <table className="w-full border-collapse border border-gray-400">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-400 px-4 py-2">Day</th>
            <th className="border border-gray-400 px-4 py-2">Start Time</th>
            <th className="border border-gray-400 px-4 py-2">End Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Monday (All Ranks)</td>
            <td className="border border-gray-400 px-4 py-2">5:00 PM</td>
            <td className="border border-gray-400 px-4 py-2">5:45 PM</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Tuesday (White - Black Belts)</td>
            <td className="border border-gray-400 px-4 py-2">5:00 PM</td>
            <td className="border border-gray-400 px-4 py-2">5:45 PM</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Tuesday (Family Class)</td>
            <td className="border border-gray-400 px-4 py-2">5:45 PM</td>
            <td className="border border-gray-400 px-4 py-2">6:30 PM</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Wednesday (All Ranks)</td>
            <td className="border border-gray-400 px-4 py-2">5:30 PM</td>
            <td className="border border-gray-400 px-4 py-2">6:15 PM</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Thursday (White - Black Belts)</td>
            <td className="border border-gray-400 px-4 py-2">5:00 PM</td>
            <td className="border border-gray-400 px-4 py-2">5:45 PM</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Thursday (Private Lessons/Open Floor)</td>
            <td className="border border-gray-400 px-4 py-2">5:45 PM</td>
            <td className="border border-gray-400 px-4 py-2">6:30 PM</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Friday (All Ranks)</td>
            <td className="border border-gray-400 px-4 py-2">5:45 PM</td>
            <td className="border border-gray-400 px-4 py-2">6:45 PM</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-4">
        Have questions about our classes? We're happy to address all of your questions or concerns.
        Call us at <a href="tel:8592232842">(859) 223-2842</a> or use our "Contact Us" button below to send us a message.
      </p>
    </div>
  );
};


const ImpactSchedule = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Impact Schedule</h2>
      <table className="w-full border-collapse border border-gray-400">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-400 px-4 py-2">Day</th>
            <th className="border border-gray-400 px-4 py-2">Start Time</th>
            <th className="border border-gray-400 px-4 py-2">End Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Monday</td>
            <td className="border border-gray-400 px-4 py-2">6:30 PM</td>
            <td className="border border-gray-400 px-4 py-2">7:30 PM</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Tuesday</td>
            <td className="border border-gray-400 px-4 py-2">6:30 PM</td>
            <td className="border border-gray-400 px-4 py-2">7:30 PM</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Wednesday</td>
            <td className="border border-gray-400 px-4 py-2">6:15 PM</td>
            <td className="border border-gray-400 px-4 py-2">7:15 PM</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Thursday</td>
            <td className="border border-gray-400 px-4 py-2">6:30 PM</td>
            <td className="border border-gray-400 px-4 py-2">7:30 PM</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Friday</td>
            <td className="border border-gray-400 px-4 py-2">5:45 PM</td>
            <td className="border border-gray-400 px-4 py-2">6:45 PM</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-4">
        Have questions about our classes? We're happy to address all of your questions or concerns.
        Call us at <a href="tel:8592232842">(859) 223-2842</a> or use our "Contact Us" button below to send us a message.
      </p>
    </div>
  );
};



const FamilyClassSchedule = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Family Class Schedule</h2>
      <table className="w-full border-collapse border border-gray-400">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-400 px-4 py-2">Day</th>
            <th className="border border-gray-400 px-4 py-2">Start Time</th>
            <th className="border border-gray-400 px-4 py-2">End Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Friday</td>
            <td className="border border-gray-400 px-4 py-2">5:45 PM</td>
            <td className="border border-gray-400 px-4 py-2">6:45 PM</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-4">
        Have questions about our classes? We're happy to address all of your questions or concerns.
        Call us at <a href="tel:8592232842">(859) 223-2842</a> or use our "Contact Us" button below to send us a message.
      </p>
    </div>
  );
};





