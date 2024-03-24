import {
  MapContainer,
  TileLayer,
  useMapEvent,
  Marker,
  Popup,
} from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";

import { clickMapCoordinates } from "../../actions/mountainActions";

import "leaflet/dist/leaflet.css";

function HandleMapClick() {
  const dispatch = useDispatch();

  useMapEvent("click", (e) => {
    dispatch(clickMapCoordinates(e.latlng));
  });
}

export const EditMap = () => {
  const coordinates = useSelector((state) => state.mountain.clickedCoordinates);
  return (
    <MapContainer
      center={[10, 10]}
      zoom={1}
      style={{ height: "400px", width: "50%", margin: "0 0 1rem 0" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <HandleMapClick />
      {(coordinates.lat != 0 || coordinates.lng != 0) && (
        <Marker position={[coordinates.lat, coordinates.lng]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};
