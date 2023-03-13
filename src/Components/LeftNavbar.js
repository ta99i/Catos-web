import React, { useEffect } from "react";
import "../Styles/LeftNavbar.css";
import Accordion from "react-bootstrap/Accordion";

const LeftNavbar = ({ colors, inputs, onColorChange, onInputChanges }) => {
  const handleColorChange = (event) => {
    colors[event.target.id] = event.target.value;
    onColorChange(colors);
  };
  const handleInputChange = (event) => {
    inputs[event.target.id] = event.target.value;
    onInputChanges(inputs);
  };
  useEffect(() => {
    colors.map((color, index) => {
      document.getElementById(index).value = color;
    });
  });
  return (
    <div className="menu">
      <Accordion defaultActiveKey={["0"]} alwaysOpen className="acc">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Border</Accordion.Header>
          <Accordion.Body>
            <div>
              <label className="lab">Color</label>
              <input
                type="color"
                className="inp"
                id="0"
                onChange={handleColorChange}
              />
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Face</Accordion.Header>
          <Accordion.Body>
            <div>
              <label className="lab">Color</label>
              <input
                type="color"
                className="inp"
                id="1"
                onChange={handleColorChange}
              />
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Ears</Accordion.Header>
          <Accordion.Body>
            <div>
              <label className="lab">Left Ear</label>
              <input
                type="color"
                className="inp"
                id="2"
                onChange={handleColorChange}
              />
            </div>
            <div>
              <label className="lab">Right Ear</label>
              <input
                type="color"
                className="inp"
                id="3"
                onChange={handleColorChange}
              />
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Ears Shadow</Accordion.Header>
          <Accordion.Body>
            <div>
              <label className="lab">Left Shadow</label>
              <input
                type="color"
                className="inp"
                id="4"
                onChange={handleColorChange}
              />
            </div>
            <div>
              <label className="lab">Right Shadow</label>
              <input
                type="color"
                className="inp"
                id="5"
                onChange={handleColorChange}
              />
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>More Shadow</Accordion.Header>
          <Accordion.Body>
            <div>
              <label className="lab">Left Shadow</label>
              <input
                type="color"
                className="inp"
                id="6"
                onChange={handleColorChange}
              />
            </div>
            <div>
              <label className="lab">Right Shadow</label>
              <input
                type="color"
                className="inp"
                id="7"
                onChange={handleColorChange}
              />
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Hear</Accordion.Header>
          <Accordion.Body>
            <div>
              <label className="lab">Left Hear</label>
              <input
                type="color"
                className="inp"
                id="8"
                onChange={handleColorChange}
              />
            </div>
            <div>
              <label className="lab">Middle Hear</label>
              <input
                type="color"
                className="inp"
                id="9"
                onChange={handleColorChange}
              />
            </div>
            <div>
              <label className="lab">Right Shadow</label>
              <input
                type="color"
                className="inp"
                id="10"
                onChange={handleColorChange}
              />
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Eyes</Accordion.Header>
          <Accordion.Body>
            <div>
              <label className="lab">Left Eye</label>
              <input
                type="color"
                className="inp"
                id="17"
                onChange={handleColorChange}
              />
            </div>
            <div>
              <label className="lab">Right Eye</label>
              <input
                type="color"
                className="inp"
                id="18"
                onChange={handleColorChange}
              />
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>Nose</Accordion.Header>
          <Accordion.Body>
            <div>
              <label className="lab">Front Nose</label>
              <input
                type="color"
                className="inp"
                id="19"
                onChange={handleColorChange}
              />
            </div>
            <div>
              <label className="lab">Back Nose</label>
              <input
                type="color"
                className="inp"
                id="20"
                onChange={handleColorChange}
              />
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>Orthosiphon</Accordion.Header>
          <Accordion.Body>
            <div>
              <label className="lab">Left Orthosiphon</label>
              <input
                type="color"
                className="inp"
                id="15"
                onChange={handleColorChange}
              />
            </div>

            <div>
              <label className="lab">Right Orthosiphon</label>
              <input
                type="color"
                className="inp"
                id="16"
                onChange={handleColorChange}
              />
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>Cheek Hair</Accordion.Header>
          <Accordion.Body>
            <div>
              <label className="lab">Left Up</label>
              <input
                type="color"
                className="inp"
                id="11"
                onChange={handleColorChange}
              />
            </div>
            <div>
              <label className="lab">Left Down</label>
              <input
                type="color"
                className="inp"
                id="12"
                onChange={handleColorChange}
              />
            </div>
            <div>
              <label className="lab">Right Up</label>
              <input
                type="color"
                className="inp"
                id="13"
                onChange={handleColorChange}
              />
            </div>
            <div>
              <label className="lab">Right Down</label>
              <input
                type="color"
                className="inp"
                id="14"
                onChange={handleColorChange}
              />
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="10">
          <Accordion.Header>Info</Accordion.Header>
          <Accordion.Body>
            <div>
              <label className="lab">Cats Name</label>

              <input
                id="0"
                style={{ width: "250px" }}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="lab">Cats Breed</label>

              <input
                id="1"
                style={{ width: "250px" }}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="lab">Cats Birth Day</label>
              <input
                id="2"
                type="date"
                style={{ width: "250px" }}
                onChange={handleInputChange}
              />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default LeftNavbar;
