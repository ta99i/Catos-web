import { useEffect, useState } from "react";
import { FreeCards, NFTCards } from "./Cards";
import { getNFTS } from "./Interact";
export const Home = () => {
  const [getIt, setGetIt] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getNFTS().then((value) => {
      const lastThreeCards = value.slice(-3);
      setCards(lastThreeCards);
      setGetIt(true);
    });
  }, []);
  return (
    <>
      <div className="text-center">
        <h1 className="m-5 ">Last Minted NFT</h1>
        {getIt && <NFTCards cards={cards} />}
        {!getIt && <FreeCards />}
      </div>
      <section className="text-center ">
        <h1>Catos is Back !</h1>
        <p>Make NFT for your cat</p>
        <hr />

        <p>
          Catos is A community-driven collectibles project based 100 % on
          Blockchain , All nfts are created on smart contracts by users for
          their cats ,90 % of profits go to animal charities
        </p>
      </section>
    </>
  );
};
