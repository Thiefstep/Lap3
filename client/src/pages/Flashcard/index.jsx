import React, { useState, useEffect } from "react";
import { Card, CardFilters } from "../../components";
import { useFlashcards } from "../../hooks/useFlashcards";
import { useAuth } from "../../hooks/useAuth";
import { setFlashcards } from "../../actions";

const Flashcard = () => {
  const [curCardId, setCurCardId] = useState(1);
  const { flashcards, dispatch } = useFlashcards();
  const { user } = useAuth();

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const res = await fetch("http://localhost:3000/flashcards", {
          headers: {
            Authorization: `Bearer ${user.token}`,
            username: user.username,
          },
        });
        const data = await res.json();

        if (res.ok) {
          dispatch(setFlashcards(data));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchFlashcards();
  }, [dispatch, user]);

  const handleNextCard = () => {
    setCurCardId((prevCardId) => prevCardId + 1);
  };

  const handlePreviousCard = () => {
    if (curCardId > 1) {
      setCurCardId((prevCardId) => prevCardId - 1);
    }
  };
  //   const uniqueCate = [...new Set(flashcards.map((Cate) => Cate.category))];

  return (
    <div className="home">
      {/* {flashcards.map((Cate) => Cate.category)}
      {<CardFilters flashcard={uniqueCate} />} */}
      {flashcards &&
        flashcards.map((f) => <CardFilters key={f._id} flashcard={f} />)}
      {flashcards && flashcards.map((f) => <Card key={f._id} flashcard={f} />)}

      <div className="flashbtn">
        <button onClick={handlePreviousCard}>Previous</button>
        <button onClick={handleNextCard}>Next</button>
      </div>
    </div>
  );
};

export default Flashcard;
