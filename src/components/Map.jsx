import React from "react";
import GoogleMapReact from "google-map-react";
import { Container } from "react-bootstrap";

function Map({ center, zoom, locations }) {
  const Marker = ({ lat, lng }) => (
    <div style={{ color: "red", fontSize: "24px" }}>📍</div>
  );

  return (
    <div
      style={{
        height: "80%",
        width: "80%",
        margin: "auto",
        backgroundColor: "gray",
        borderRadius: "5vh",
        marginTop:"10vh",
        marginBottom:"10vh"
      }}
    >
      <Container className="d-flex justify-content-center align-items-center p-4 ">
        <div style={{ height: "100vh", width: "100%" }}>
          <GoogleMapReact center={center} zoom={zoom}>
            {locations.map(({ lat, lng }, index) => (
              <Marker key={index} lat={lat} lng={lng} />
            ))}
          </GoogleMapReact>
        </div>
      </Container>
    </div>
  );
}

export default Map;
