import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/BreedContext";
import { ListGroup } from "react-bootstrap";
import ViewModal from "./ViewModal";
function SubBreeds() {
  const { selectBreed } = useContext(AuthContext);
  const [breeds, setBreeds] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [subBreeds, setSubBreeds] = useState("");
  useEffect(() => {
    if (selectBreed !== "") {
      fetch(`https://dog.ceo/api/breed/${selectBreed}/list`)
        .then((response) => response.json())
        .then((data) => setBreeds(data.message))
        .catch((error) => console.log(error));
    }
  }, [selectBreed]);

  useEffect(() => {
    if (selectBreed !== "") {
      fetch(`https://dog.ceo/api/breed/${selectBreed}/${subBreeds}/images/random`)
        .then((response) => response.json())
        .then((data) => setModalImage(data.message))
        .catch((error) => console.log(error));
    }
  }, [subBreeds]);

  const handleCloseModal = () => setShowModal(false);

  const handleShowModal = (breed) => {
    setSubBreeds(breed);
    setShowModal(true);
  };

  return (
    <div className="d-flex justify-content-center mt-3">
      {selectBreed === "" && (
        <h1 className="text-center mt-4">Please Select Breed</h1>
      )}
      {selectBreed !== "" && (
        <>
          <div style={{ width: "90%", margin: "auto", marginTop: "7vh" }}>
            <h2 style={{ marginBottom: "5vh" }}>{selectBreed} Sub Breeds</h2>
            <ListGroup>
              <ListGroup.Item style={{ backgroundColor: "#a1a3a5" }}>
                <div className="d-flex justify-content-between">
                  <div>SUB-BREED</div>
                  <div>OPEN 1 IMAGE (MODAL)</div>
                </div>
              </ListGroup.Item>
              {breeds.map((breed, index) => (
                <ListGroup.Item
                  key={index}
                  style={{ border: "none", cursor: "pointer" }}
                  onClick={() => handleShowModal(breed)}
                >
                  <div className="d-flex justify-content-between">
                    <div>{breed}</div>
                    <div>Link</div>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
          <ViewModal
            modalImage={modalImage}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </>
      )}
    </div>
  );
}

export default SubBreeds;
