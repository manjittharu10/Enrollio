export default function Contact() {
  return (
    <div className="bg-amber-50 min-h-screen">

      
      <section className="bg-emerald-700 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg md:text-2xl">
          We’re here to help your agency succeed. Reach out to us today!
        </p>
      </section>

    
      <section className="py-16">
        <div className="container mx-auto px-6 md:flex md:gap-10 items-start">

          <div className="md:w-2/3 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Message</label>
                <textarea 
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        
          <div className="md:w-1/3 mt-10 md:mt-0">
            <div className="bg-cyan-950 text-white p-6 rounded-lg shadow-lg space-y-4">
              <h3 className="text-xl font-semibold">Our Info</h3>
              <p>Email: support@enrollio.com</p>
              <p>Phone: +1 234 567 890</p>
              <p>Address: 123 Agency St, Toronto, Canada 🇨🇦</p>
              <p>Hours: Mon - Fri, 9:00 AM - 6:00 PM</p>
            </div>
          </div>

        </div>
      </section>

      
      <section className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <button className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
          Schedule a Demo
        </button>
      </section>

    </div>
  );
}
