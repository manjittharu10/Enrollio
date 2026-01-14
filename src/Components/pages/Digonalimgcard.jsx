import subtractimg from "../../assets/subtract.jpg";

export default function Digonalimgcard() {
  return (
    <div
      className="relative w-[800px] h-[400px] overflow-hidden clip-diagonal mt-40 mr-17"
    >
      {/* Image */}
      <img
        src={subtractimg}
        alt="office"
        className="w-full h-full object-cover"
      />

      {/* Diagonal white lines */}
      <span className="absolute top-0 left-[35%] w-1 h-full bg-white/90 -skew-x-12"></span>
      <span className="absolute top-0 left-[65%] w-1 h-full bg-white/90 -skew-x-12"></span>

      {/* Badge */}
      <div className="absolute bottom-4 left-4 flex items-center gap-2 
                      bg-black/60 text-white px-4 py-2 rounded-full text-sm">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="user"
          className="w-7 h-7 rounded-full"
        />
        <span>10K+ Users World Wide</span>
      </div>
    </div>
  );
}
