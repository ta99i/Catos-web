import "../Styles/Cards.css";
import Placeholder from "react-bootstrap/Placeholder";
import Card from "react-bootstrap/Card";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { Transfer } from "./Interact";

export const NFTCards = ({ cards }) => {
  const [show, setShow] = useState(false);
  const [currentNFT, setCurrentNFT] = useState();
  const handleClose = () => setShow(false);
  const handleShow = (card) => {
    setCurrentNFT(cards[card.key]);
    setShow(true);
  };
  const onTransfer = () => {
    Transfer(document.getElementById(123).value, currentNFT.tokenId);
  };
  return (
    <>
      <section className="cards">
        {cards.map((card, i) => (
          <div className="card" key={i} onClick={() => handleShow({ key: i })}>
            <img
              className="card-image"
              src={card.img}
              alt={"NFT Catos " + card.name + " " + card.breed}
            />
            <h5>{card.title}</h5>
            <h5>Name: {card.name}</h5>
            <h5>Breed: {card.breed}</h5>
            <h5>Birth Day: {card.birthday}</h5>
          </div>
        ))}
      </section>
      {show && (
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{currentNFT.title}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div>
              <h3>Transfer To :</h3>
              <input className="mt-3" id="123"></input>
              <button className="mt-3" onClick={onTransfer}>
                Transfer
              </button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </>
  );
};
export const FreeCards = () => {
  return (
    <>
      <section className="cards">
        {Array.from({ length: 3 }).map((_, i) => (
          <div className="card" key={i}>
            <img className="card-image free" alt="" />
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
            </Placeholder>
          </div>
        ))}
      </section>
    </>
  );
};
