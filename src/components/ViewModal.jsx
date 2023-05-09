import React, { useState } from "react";
import { Modal } from "react-bootstrap";
function ViewModal({ modalImage, showModal, setShowModal }) {
  // State for controlling the modal

  const [zoom, setZoom] = useState(false);

  const handleZoomIn = () => {
    setZoom(true);
  };

  const handleZoomOut = () => {
    setZoom(false);
  };
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div style={{ overflow: "auto" }}>
          <img
            src={modalImage}
            className="w-100"
            alt="dog"
            style={{ transform: zoom ? "scale(1.5)" : "scale(1)" }}
            onClick={handleZoomIn}
            onDoubleClick={handleZoomOut}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ViewModal;
