 import counselling from "../../assets/counselling.jpg"

export default function RotatedFeatureCard() {
  return (
    <div className="rotated-card-wrapper">
      
      {/* background layers */}
      <div className="rotated-bg bg-1"></div>
      <div className="rotated-bg bg-2"></div>

      {/* main rotated image */}
      <div className="rotated-image-box">
        <img src={counselling} alt={counselling} />
      </div>

      {/* badge */}
      <div className="rotated-badge">
        <h3>5000+</h3>
        <p>Student Application processed</p>
      </div>


    </div>
  );
}
