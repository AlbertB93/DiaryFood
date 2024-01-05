import { useState } from "react";
import "./App.css";
import { Content } from "./components/Content";
import { Day } from "./components/Day";
import { Menu } from "./components/Menu";

const initialSummaryOfDay = { kcal: 0, fats: 0, carbons: 0, proteins: 0 };

function App() {
  const [summaryOfDay, setSummaryOfDay] = useState(initialSummaryOfDay);
  const [arrOfMeals, setArrOfMeals] = useState([]);
  const [showRecipe, setShowRecipe] = useState(false);
  const [showMeals, setShowMeals] = useState(true);

  function addToDayMenu(
    newTitle,
    newImgUrl,
    newKcal,
    newFats,
    newCarbons,
    newProteins
  ) {
    setSummaryOfDay((prevState) => {
      prevState.kcal += newKcal;
      prevState.fats += newFats;
      prevState.carbons += newCarbons;
      prevState.proteins += newProteins;
      return { ...prevState };
    });

    setArrOfMeals((prevState) => {
      return [
        ...prevState,
        {
          id: Math.random(),
          title: newTitle,
          img: newImgUrl,
          kcal: newKcal,
          fats: newFats,
          carbons: newCarbons,
          proteins: newProteins,
        },
      ];
    });
  }

  return (
    <div className="container">
      <h1>Skomponuj swój dzień jedzenia!</h1>
      <Menu></Menu>
      <Content
        addToDayMenu={addToDayMenu}
        showMeals={showMeals}
        setShowMeals={() => setShowMeals((prevState) => !prevState)}
        showRecipe={showRecipe}
        setShowRecipe={() => setShowRecipe((prevState) => !prevState)}
      ></Content>
      <Day summaryOfDay={summaryOfDay} arrOfMeals={arrOfMeals}></Day>
    </div>
  );
}

export default App;
