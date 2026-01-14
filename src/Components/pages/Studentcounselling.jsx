import StudentCounselling from "../../assets/StudentCounselling.jpg";

export default function Studentcounselling() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      <h1 className="text-xl font-semibold text-cyan-950 mb-2">
        Student Counselling
      </h1>

      <p className="text-gray-600 mb-4 text-2xl">
        Deliver personalized guidance supported by structured insight and easy tracking.
      </p>

      <div className="overflow-hidden rounded-xl">
        <img
          src={StudentCounselling}
          alt="Student counselling"
          className="w-full h-120 object-cover"
        />
      </div>

    </div>
  );
}
