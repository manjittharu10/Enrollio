import Digonalimgcard from "./Digonalimgcard";

export default function Header() {
  return (
    <div className="displat flex justify-between bg-blue-100 h-140 text-center mt-5">
    <div className="h-[400px] w-[1000px] mt-15 flex flex-col justify-between p-4 bg-blue-200 ml-16">
      <div>
        <p className="text-orange-400 font-semibold text-3xl">One Platform Solution</p>
      </div>

      <div>
        <p className="text-3xl text-cyan-950">
   Your all-in-one consultancy platform from applications and lead to agencies.
        </p>
        </div>
        <div className="mt-10">
        <h6 className="text-xl mt-2">
          From students and leads to applications, visas, documents,
          insurance, and agencies — run your entire consultancy in one platform.
        </h6>
      </div>

      <div>
        <button className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500">
          Contact Us
        </button>
      </div>
    </div>
    <Digonalimgcard/>
    </div>

  );
}
