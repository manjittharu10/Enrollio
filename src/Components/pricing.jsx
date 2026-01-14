
export default function Pricing() {
  return (
    <div className="bg-amber-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-emerald-700 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Pricing Plans</h1>
        <p className="text-lg md:text-2xl">
          Choose a plan that fits your agency workflow and grow faster
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid gap-8 md:grid-cols-3">
          
          {/* Basic Plan */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:scale-105 transition">
            <h2 className="text-2xl font-semibold mb-2">Basic</h2>
            <p className="text-gray-500 mb-4">For small teams getting started</p>
            <p className="text-4xl font-bold mb-4">$29<span className="text-lg">/month</span></p>
            <ul className="mb-6 space-y-2 text-gray-700 text-center">
              <li>Manage up to 50 leads</li>
              <li>Workflow automation</li>
              <li>Email support</li>
            </ul>
            <button className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
              Choose Plan
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-emerald-700 text-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:scale-105 transition">
            <h2 className="text-2xl font-semibold mb-2">Pro</h2>
            <p className="text-gray-200 mb-4">For growing agencies</p>
            <p className="text-4xl font-bold mb-4">$59<span className="text-lg">/month</span></p>
            <ul className="mb-6 space-y-2 text-gray-200 text-center">
              <li>Manage up to 200 leads</li>
              <li>Advanced automation & reporting</li>
              <li>Priority email support</li>
            </ul>
            <button className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
              Choose Plan
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:scale-105 transition">
            <h2 className="text-2xl font-semibold mb-2">Enterprise</h2>
            <p className="text-gray-500 mb-4">For large agencies with custom needs</p>
            <p className="text-4xl font-bold mb-4">Custom<span className="text-lg">/month</span></p>
            <ul className="mb-6 space-y-2 text-gray-700 text-center">
              <li>Unlimited leads & workflows</li>
              <li>Dedicated account manager</li>
              <li>24/7 Support</li>
            </ul>
            <button className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
              Contact Sales
            </button>
          </div>

        </div>
      </section>

    
      <section className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Journey Today!</h2>
        <button className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
          Get Started
        </button>
      </section>

    </div>
  );
}
