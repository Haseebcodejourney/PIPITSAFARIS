import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

const GoogleMapComponent = () => {
  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = { lat: 37.7749, lng: -122.4194 };
  const [selected, setSelected] = useState(null);

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}>
        <Marker
          position={defaultCenter}
          onClick={() => setSelected(defaultCenter)}
        />
        {selected && (
          <InfoWindow
            position={defaultCenter}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h4>San Francisco</h4>
              <p>A beautiful city in California!</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
