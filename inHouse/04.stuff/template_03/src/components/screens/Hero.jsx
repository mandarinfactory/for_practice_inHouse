import NaverMapBox from "../NaverMapBox";
import MapInfoBox from "../MapInfoBox";

export default function Hero() {

  return (
    <section className="flex lg:flex-row md:flex-row sm:flex-col-reverse">
      <section className="lg:w-[20%] md:w-[40%] sm:w-full">
        <MapInfoBox />
      </section>
      <section className="lg:w-[80%] md:w-[60%] sm:w-full">
        <NaverMapBox />
      </section>
    </section>
  );
}
