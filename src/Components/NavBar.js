import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Home } from "./Home";
import { connect } from "./Interact";
import Mint from "./Mint";
import { Wallet } from "./Wallet";

export const NavBar = () => {
  const [show, setShow] = useState("0");
  const [isconected, setIsConnected] = useState(false);
  const [address, setAddress] = useState();
  async function onConnect() {
    const provider = await connect();
    const signer = provider.getSigner();
    setIsConnected(true);
    setAddress(await signer.getAddress());
  }
  const handleSelect = (eventKey) => setShow(eventKey);

  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        className="sticky-top"
        onSelect={handleSelect}
      >
        <Container>
          <Navbar.Brand>Catos</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link eventKey="0">Home</Nav.Link>
            <Nav.Link eventKey="1">Mint</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {!isconected && <button onClick={onConnect}>Connect to App</button>}
            {isconected && <Nav.Link eventKey="2">{address}</Nav.Link>}
          </Nav>
        </Container>
      </Navbar>
      <section>{show === "0" && <Home />}</section>
      <section>{show === "1" && <Mint />}</section>
      <section>{show === "2" && <Wallet />}</section>
    </div>
  );
};
