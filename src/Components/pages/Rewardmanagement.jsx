export default function Rewardmanagement() {

  const Targetvisa = 40;
  const Targetreward = 300000;
  const Approvedceo = 10;
  const Estimatedearning = 75000;
  const Approvedvisa = 5;
  const Actualearning = 37500;

  return (
    <section className="bg-amber-100 rounded-2xl p-8 shadow-md">

    
      <div className="text-center mb-10">
        <h1 className="text-2xl font-semibold text-cyan-950">
          Target & Reward Management
        </h1>
        <p className="mt-3 text-gray-700">
          Set clear goals, measure performance, and reward success
        </p>
      </div>


      <p className="text-center text-3xl font-bold text-orange-500 mb-8">
        Canada
      </p>

    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    
        <div className="bg-blue-900 rounded-2xl p-6 text-center text-white">
          <p className="text-blue-200 text-lg">Targeted Visa Approved</p>
          <p className="text-3xl font-bold">{Targetvisa}</p>

          <p className="mt-6 text-blue-200 text-lg">Targeted Reward</p>
          <p className="text-3xl font-bold">Rs {Targetreward}</p>
        </div>


        <div className="bg-blue-900 rounded-2xl p-6 text-center text-white">
          <p className="text-blue-200 text-lg ">No. of CEO Approved</p>
          <p className="text-3xl font-bold text-red-400">{Approvedceo}</p>

          <p className="mt-6 text-blue-200 text-lg">Estimated Earning</p>
          <p className="text-3xl font-bold text-red-400">Rs {Estimatedearning}</p>
        </div>

    
        <div className="bg-blue-900 rounded-2xl p-6 text-center text-white">
          <p className="text-blue-200 text-lg">No. of Visa Approved</p>
          <p className="text-3xl font-bold text-green-600">{Approvedvisa}</p>

          <p className="mt-6 text-blue-200 text-lg">Actual Earning</p>
          <p className="text-3xl font-bold text-green-400">Rs {Actualearning}</p>
        </div>

      </div>
    </section>
  );
}
