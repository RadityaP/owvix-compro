import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import Link from "next/link";

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
              <div>Jl. Mahar Martanegara No.150, Baros</div>
              <Link href="https://www.google.com/maps/place/Jl.+Mahar+Martanegara+No.150,+Baros,+Kec.+Cimahi+Tengah,+Kota+Cimahi,+Jawa+Barat+40522/@-6.9002391,107.5480031,17z/data=!3m1!4b1!4m5!3m4!1s0x2e68e5b9c19b021d:0xc875b4f4e902d33!8m2!3d-6.9002391!4d107.5480031">
                <a
                  target={"_blank"}
                  className="no-underline text-black hover:underline hover:text-blue-500 mt-2"
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
