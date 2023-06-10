import Map from "../API/MapAPI";
import MapDesc from "./mapdesc/MapDesc";

export default function Hero() {
  return (
    <div className="flex flex-row">
      <section className="w-[30%]">
        <MapDesc />
      </section>
      <section className="w-[70%]">
        <Map />
      </section>
    </div>
  );
}
