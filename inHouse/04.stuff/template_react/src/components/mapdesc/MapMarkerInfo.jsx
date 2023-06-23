import { useResultContext } from "../../contexts/MapDataContext";

export default function MapMarkerInfo () {
    const { resultTitle, resultInstaLink, resultCategory, resultAddress } = useResultContext();
    return (
        <div className="w-50 h-auto bg-slate-50 shadow-lg">
            <h2>{resultTitle}</h2>
            <a href={`${resultInstaLink}`}>인스타그램 링크</a>
            <h4>{resultCategory}</h4>
            <h4>{resultAddress}</h4>
        </div>
    );
};