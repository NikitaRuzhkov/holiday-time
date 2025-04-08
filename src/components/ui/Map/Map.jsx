import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import './Map.css';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const position = [50.42801135668612, 30.51119207116459];

  return (
    <MapContainer center={position} zoom={15} className="map">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Это метка на карте!</Popup>
      </Marker>
    </MapContainer>
  );
};

export { Map };
