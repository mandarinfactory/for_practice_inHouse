import { useRef } from "react";

import NaverMapBox from "../NaverMapBox";
import MapInfoBox from "./MapInfoBox";

export default function Hero() {
  const mapRef = useRef();

  return (
    <section className="flex lg:flex-row md:flex-row sm:flex-col-reverse">
      <section className="lg:w-[20%] sm:w-full">
        <MapInfoBox mapRef={mapRef} />
      </section>
      <section className="lg:w-[80%] lg:h-full sm:w-full">
        <NaverMapBox mapRef={mapRef} />
      </section>
    </section>
  );
}
