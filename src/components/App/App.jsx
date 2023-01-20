import "./App.css";
import Card from "../Card/Card";
import { content } from "../../utils/constants";
import React from "react";

function App() {
  const initialCards = content.map((card) => ({ ...card, isActive: false }));
  const [cards, setCards] = React.useState(initialCards);

  const setCardActive = (id, isActive) => {
    const newCards = cards.map((card) => ({
      ...card,
      isActive: id === card.id ? isActive : card.isActive,
    }));
    setCards(newCards);
  };

  return (
    <main className="content">
      <h1 className="content__header">Ты сегодня покормил кота?</h1>
      <div className="cards">
        {cards.map((card) => {
          return <Card card={card} key={card.id} onClick={setCardActive} />;
        })}
      </div>
    </main>
  );
}

export default App;
