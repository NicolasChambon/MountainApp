import { MapContainer, TileLayer, useMapEvent } from "react-leaflet";
import { useDispatch } from "react-redux";

import { clickMapCoordinates } from "../../actions/mountainActions";

import "leaflet/dist/leaflet.css";

function HandleMapClick() {
  const dispatch = useDispatch();

  useMapEvent("click", (e) => {
    console.log(e.latlng);
    dispatch(clickMapCoordinates(e.latlng));
  });
}

export const EditMap = () => {
  return (
    <MapContainer
      center={[10, 10]}
      zoom={1}
      style={{ height: "400px", width: "50%", margin: "0 0 1rem 0" }}
      onClick={(e) => {
        console.log(e.latlng);
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <HandleMapClick />
    </MapContainer>
  );
};
