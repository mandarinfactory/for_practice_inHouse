import Map from "../API/MapAPI";
import MapDesc from "./mapdesc/MapDesc";

export default function Hero({ setInputData }) {
  return (
    <div className="flex flex-row">
      <MapDesc />
      <Map setInputData={setInputData} />
    </div>
  );
}
