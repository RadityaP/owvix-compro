import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';

import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import Link from 'next/link';

const DEFAULT_CENTER = [-6.9259918, 107.5186141];

const Map = () => {
  useEffect(() => {
    (async function init() {
      delete L.Icon.Default.prototype._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl: iconRetinaUrl,
        iconUrl: iconUrl,
        shadowUrl: shadowUrl,
      });
    })();
  }, []);

  return (
    <MapContainer className="w-full h-96" center={DEFAULT_CENTER} zoom={12}>
      <>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={DEFAULT_CENTER}>
          <Popup>
            <div className="flex flex-col items-center justify-center">
              <div>Owvix Creative, Jl. Mahar Martanegara No.24</div>
              <Link href="https://www.google.co.id/maps/place/Owvix+Creative/@-6.900284,107.5486165,17z/data=!3m1!4b1!4m5!3m4!1s0x2e68e54743edf89b:0x70d8e85c4248ddaa!8m2!3d-6.900284!4d107.5486165">
                <a
                  target={'_blank'}
                  className="no-underline text-black hover:underline hover:text-blue-500 mt-2 hover:cursor-pointer"
                >
                  Open in google maps
                </a>
              </Link>
            </div>
          </Popup>
        </Marker>
      </>
    </MapContainer>
  );
};

export default Map;
