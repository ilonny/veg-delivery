import React from "react";
import GoogleMapReact from "google-map-react";

function SimpleMapFunction({
  center = {
    lat: 47.6062,
    lng: 122.3321
  },
  zoom = 11,
  ...props
}) {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyD7dbxprbN1UReuJnkciHrw-PMmSZXIUuU" }}
      defaultCenter={center}
      defaultZoom={zoom}
    />
  );
}

export default SimpleMapFunction;
