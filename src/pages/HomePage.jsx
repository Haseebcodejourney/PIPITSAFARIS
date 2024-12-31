import ReadySafari from "../components/home/ReadySafari";
import Booking from "../components/home/Booking";
import Hero from "../components/Hero";
import Safaris from "../components/home/Safaris";
import Climbs from "../components/home/Climbs";
import Destinations from "../components/home/Destinations";

export default function HomePage({ theme }) {
  return (
    <>
      <Hero theme={theme} />
      <Safaris theme={theme} />
      <Climbs theme={theme} />
      <Destinations theme={theme} />
      <Booking theme={theme} />
      <ReadySafari theme={theme} />
    </>
  );
}
