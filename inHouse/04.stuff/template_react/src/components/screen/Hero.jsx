import MapBox from "../MapBox";
import MapInfoBox from "../MapInfoBox";

export default function Hero({
  type,
  setType,
  places,
  isLoading,
  coordinates,
  setCoordinates,
  setBounds,
  childClicked,
  setChildClicked,
}) {
  return (
    <div className="flex">
      <MapInfoBox 
        type={type}
        setType={setType}
        places={places}
        isLoading={isLoading}
        childClicked={childClicked}
      />
      <MapBox
        places={places}
        coordinates={coordinates}
        setCoordinates={setCoordinates}
        setBounds={setBounds}
        setChildClicked={setChildClicked}
      />
    </div>
  );
}
