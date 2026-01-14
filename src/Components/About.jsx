import about from "../assets/about.jpg"
export default function About() {
  return (
    <div className="bg-amber-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-emerald-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Enrollio
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Supercharge your agency workflow and empower your team in 30 minutes
          </p>
          <button className="px-6 py-3 bg-blue-700 rounded-lg hover:bg-blue-800 transition">
            Contact Us
          </button>
        </div>
      </section>

     
      <section className="py-16">
        <div className="container mx-auto px-6 md:flex md:gap-10 items-center">
         
          <div className="md:w-1/2">
            <img 
              src={about} 
              alt="Agency Story" 
              className="rounded-lg shadow-lg"
            />
          </div>
      
          <div className="md:w-1/2 mt-6 md:mt-0">
            <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
            <p className="text-lg text-gray-700">
              Enrollio was created to simplify agency operations, reduce manual tasks,
              and provide a fully streamlined workflow for teams of all sizes.
            </p>
          </div>
        </div>
      </section>

    
      <section className="bg-cyan-950 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-emerald-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Streamline Workflow</h3>
              <p>Automate tasks and improve efficiency across your agency.</p>
            </div>
            <div className="bg-emerald-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Track Everything</h3>
              <p>Monitor leads, applications, and agency operations in one place.</p>
            </div>
            <div className="bg-emerald-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Grow Faster</h3>
              <p>Focus on growth while Enrollio handles the workflow for you.</p>
            </div>
          </div>
        </div>
      </section>

    
      <section className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <button className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
