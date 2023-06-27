import { useState, useEffect, createRef } from "react";
import MapInfoBoxCard from "../components/screen/MapInfoBox/MapInfoBoxCard";
import MapInfoBoxHeader from "./screen/MapInfoBox/MapInfoBoxHeader";

export default function MapInfoBox({ type, setType, places, isLoading, childClicked }) {

  const [eleRefs, setEleRefs] = useState([]);

  useEffect(() => {
    const refs = Array(places?.length).fill().map((_, i) => eleRefs[i] || createRef());
    setEleRefs(refs);
  }, [places]);

  return (
    <div className="flex-[0.3] w-auto h-[800px] flex flex-col">
      <MapInfoBoxHeader type={type} setType={setType}/>
      <div className="overflow-auto">
        {places?.map((place, i) => (
          <div key={i}>
            <MapInfoBoxCard
              place={place}
              selected={Number(childClicked) === i}
              refProp={eleRefs[i]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
