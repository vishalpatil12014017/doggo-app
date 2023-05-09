import React, { useState, useEffect, useContext } from "react";
import { Container } from "react-bootstrap";
import ViewModal from "./ViewModal";
import { AuthContext } from "../context/BreedContext";
import ImageList from "./ImageList";
function Home() {
  // State for holding the selected breed
  const {
    selectBreed
  } = useContext(AuthContext);
  // State for holding the list of images
  const [imageList, setImageList] = useState([]);
  const [modalImage, setModalImage] = useState("");
  const [showModal, setShowModal] = useState(false);
  // Fetch images of a selected breed
  useEffect(() => {
    if (selectBreed !== "") {
      fetch(`https://dog.ceo/api/breed/${selectBreed}/images`)
        .then((response) => response.json())
        .then((data) => setImageList(data.message));
    } else {
      fetch("https://dog.ceo/api/breeds/image/random/50")
        .then((response) => response.json())
        .then((data) => setImageList([data.message][0]));
    }
  }, [selectBreed, setImageList]);

  // Handle click on an image
  const handleImageClick = (image) => {
    setModalImage(image);
    setShowModal(true);
  };

  // Render images in odd-even layout

  return (
    <Container className="mt-3">
      <ImageList
        selectBreed={selectBreed}
        imageList={imageList}
        handleImageClick={handleImageClick}
      />
      <ViewModal
        modalImage={modalImage}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </Container>
  );
}

export default Home;
