import { useEffect, useState } from "react";
import { NFTCards } from "./Cards";
import { connect, getNFTSForAccount } from "./Interact";

export const Wallet = () => {
  const [getIt, setGetIt] = useState(false);
  const [cards, setCards] = useState([]);
  async function getNFTS() {
    await connect()
      .then((provider) => {
        const signer = provider.getSigner();
        return signer.getAddress();
      })
      .then((address) => {
        return getNFTSForAccount(address);
      })
      .then((res) => {
        setCards(res);
        setGetIt(true);
      });
  }
  useEffect(() => {
    getNFTS();
  }, []);
  return (
    <>
      <div className="text-center">
        <h1 className="m-5 ">NFTS Owned</h1>
        {getIt && <NFTCards cards={cards} />}
      </div>
    </>
  );
};
