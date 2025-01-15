import "../styles/hero/style.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <section className="hero-wrappper">
        <div className="video-wrapper-hero">
          <video className="video-wrapper" autoPlay muted loop playsInline>
            <source
              src="https://static.cloudsafaris.com/public/Landing-Video.mp4?action=get"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>
        <div className="hero-detail-wrapper">
          <div className="hero-detail-wrapper-inner">
            <h1>Live your dream African safari</h1>
            <span>Take the next step in creating lifetime memories</span>
            <strong>
              <Link style={{ color: "#fff" }} to="/find-trip">
                Plan your trip
              </Link>
            </strong>
          </div>
        </div>
        <div className="selection-wrappper">
          <p className="text-main">African safaris. Made easy.</p>
          <div className="selection-wrappper-inner">
            <div className="trip-wrapper">
              <strong>Choose your trip</strong>
              <p>Discover the safari adventure that speaks to your soul</p>
            </div>
            <div className="trip-wrapper">
              <strong>Review with an expert</strong>
              <p>Get personalized guidance to ensure every moment is perfect</p>
            </div>
            <div className="trip-wrapper">
              <strong>Enjoy</strong>
              <p>
                Embark on a life-changing journey, creating lasting memories
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
