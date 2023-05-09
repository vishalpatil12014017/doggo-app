import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #b4b0b0;
  margin-right: 16px;
  width: 15rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 12rem;
  }

  @media (max-width: 576px) {
    width: 9rem;
  }
`;
function DogNameCard({ data, onSelect, selected }) {
  return (
    <>
      {data.map((data, index) => (
        <Card
          key={index}
          selected={onSelect && onSelect === index}
          className="card card-body col-lg-3 col-md-4 col-sm-6 flex-shrink-0 mx-3"
          onClick={() => onSelect && onSelect(index)}
          style={
            selected === index
              ? { border: "4px solid black", borderRadius: "4vh" }
              : { borderRadius: "4vh" }
          }
        >
          <div className="card-body">
            <h5 className="card-title m-auto">{data}</h5>
          </div>
        </Card>
      ))}
    </>
  );
}

export default DogNameCard;
