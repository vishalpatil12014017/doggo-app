import React, { useContext } from "react";
import { AuthContext } from "../context/BreedContext";
import Map from "./Map";
import coordinatesPerBreed from "../data/Coordinates";

function Track() {
  const { selectBreed } = useContext(AuthContext);
  const center = {
    lat: 12.9716,
    lng: 77.5946,
  };
  const zoom = 5;
  let location = coordinatesPerBreed(selectBreed);

  return (
    <div className="d-flex justify-content-center mt-3">
      {selectBreed === "" && (
        <h1 className="text-center mt-4">Please Select Breed</h1>
      )}
      {selectBreed !== "" && (
        <>
          <Map center={center} zoom={zoom} locations={location} />
        </>
      )}
    </div>
  );
}

export default Track;
