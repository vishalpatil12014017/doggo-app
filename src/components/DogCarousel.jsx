import React, { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import DogNameCard from "./DogNameCard";
import {AuthContext} from "../context/BreedContext";
const Title = styled.h2`
  font-weight: 300;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const DogCarousel = () => {
  const {
    selectBreed,
    setSelectBreed,
    selectBreedIndex,
    setSelectBreedIndex,
  } = useContext(AuthContext);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [dogNameList, setDogNameList] = useState([]);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        setDogNameList(Object.keys(data.message));
      });
  }, []);

  return (
    <Container fluid className="py-2" style={{ overflowX: "hidden" }}>
      <Title className="font-weight-light m-4">Select Breed</Title>
      <CardContainer className="d-flex flex-row">
        <DogNameCard
          data={dogNameList}
          onSelect={(index) => {
            setSelectBreed(dogNameList[index])
            setSelectBreedIndex(index)
          }}
          selected={selectBreedIndex}
        />
      </CardContainer>
    </Container>
  );
};

export default DogCarousel;
