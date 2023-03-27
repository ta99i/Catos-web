import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import LeftNavbar from "./LeftNavbar";
import Modal from "react-bootstrap/Modal";

import "../Styles/Mint.css";
import { mint } from "./Interact";

const Mint = () => {
  const [show, setShow] = useState(false);
  const [nftSvg, setNftSvg] = useState(null);
  const [inputs, setInputs] = useState([]);
  const [colors, setColors] = useState([
    "#000000",
    "#FFFFFF",
    "#222034",
    "#663931",
    "#45283c",
    "#4b692f",
    "#6c0b0b",
    "#37946e",
    "#fbf236",
    "#99e550",
    "#6abe30",
    "#323c39",
    "#3f3f74",
    "#5fcde4",
    "#639bff",
    "#306082",
    "#5b6ee1",
    "#cbdbfc",
    "#9badb7",
    "#ac3232",
    "#8a6f30",
  ]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function generateNFT(colors) {
    setNftSvg(
      <div className="svg-width">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -0.5 15 15"
          shapeRendering="crispEdges"
          width="500"
          height="500"
        >
          <path
            stroke={colors[0]}
            d="M2 1h1M12 1h1M1 2h1M3 2h1M11 2h1M13 2h1M1 3h1M4 3h7M13 3h1M1 4h1M13 4h1M1 5h1M13 5h1M2 6h1M12 6h1M1 7h1M13 7h1M1 8h1M13 8h1M1 9h1M13 9h1M1 10h1M13 10h1M2 11h1M12 11h1M3 12h1M11 12h1M4 13h7"
          />
          <path
            stroke={colors[1]}
            d="M6 4h1M8 4h1M4 5h1M6 5h1M8 5h1M10 5h1M3 6h2M6 6h1M8 6h1M10 6h2M2 7h11M4 8h2M9 8h2M2 9h3M10 9h3M5 10h1M9 10h1M3 11h9M4 12h7"
          />
          <path stroke={colors[2]} d="M2 2h1M2 3h2M2 4h1M2 5h1" />
          //right
          <path stroke={colors[3]} d="M12 2h1M11 3h2M12 4h1M12 5h1" />
          //88
          <path stroke={colors[4]} d="M3 4h1M3 5h1" />
          // right ear shadow
          <path stroke={colors[5]} d="M11 4h1M11 5h1" />
          <path stroke={colors[6]} d="M4 4h1" />
          <path stroke={colors[7]} d="M10 4h1" />
          <path stroke={colors[8]} d="M5 4h1M5 5h1M5 6h1" />
          <path stroke={colors[9]} d="M7 4h1M7 5h1M7 6h1" />
          <path stroke={colors[10]} d="M9 4h1M9 5h1M9 6h1" />
          <path stroke={colors[11]} d="M2 8h2" />
          <path stroke={colors[12]} d="M2 10h2" />
          <path stroke={colors[13]} d="M11 8h2" />
          <path stroke={colors[14]} d="M11 10h2" />
          <path stroke={colors[15]} d="M4 10h1" />
          <path stroke={colors[16]} d="M10 10h1" />
          <path stroke={colors[17]} d="M5 9h1" />
          <path stroke={colors[18]} d="M9 9h1" />
          <path stroke={colors[19]} d="M7 10h1" />
          <path stroke={colors[20]} d="M6 8h3M6 9h3M6 10h1M8 10h1" />
        </svg>
      </div>
    );
  }
  useEffect(() => {
    generateNFT(colors);
  }, [colors, inputs]);
  function handleInputsChange(_inputs) {
    setInputs(_inputs);
  }
  function handleColorChange(newColors) {
    setColors(newColors);
    generateNFT(colors);
  }
  async function mintNFT() {
    mint(colors, inputs);
    handleClose();
  }
  return (
    <>
      <div>
        <LeftNavbar
          colors={colors}
          inputs={inputs}
          onColorChange={handleColorChange}
          onInputChanges={handleInputsChange}
        />
      </div>
      <div className="center-screen">
        <div className="d-flex flex-column align-items-center ">
          {nftSvg}
          <Button onClick={handleShow}>Mint</Button>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Mint</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="d-flex flex-column align-items-center ">
                {nftSvg}
              </div>
              <h2>Name : {inputs[0]}</h2>
              <h2>Breed :{inputs[1]} </h2>
              <h2>Birth Day : {inputs[2]}</h2>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={mintNFT}>
              Mint
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};
export default Mint;
