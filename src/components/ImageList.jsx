import React from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
function ImageList({selectBreed,imageList,handleImageClick}) {
  return (
    <div className="container my-4">
        <h3
          className="mb-4"
          style={selectBreed !== "" ? null : { visibility: "hidden" }}
        >
          {selectBreed + " Breed : " + imageList.length + " Images"}
        </h3>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
          <Masonry gutter="20px" >
            {imageList.map((data, index) => (
              <img
                key={index}
                src={data}
                alt={`image-${index}`}
                onClick={() => {
                  handleImageClick(data);
                }}
                style={{ border: "1vw solid gray", borderRadius: "5vh" }}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
  )
}

export default ImageList