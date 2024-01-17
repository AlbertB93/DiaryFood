import "./App.css";
import { useState } from "react";
import { Content } from "./components/Content";
import { DailyMenu } from "./components/DailyMenu";

const initialSummaryOfDay = { kcal: 0, fats: 0, carbons: 0, proteins: 0 };

function App() {
  const [summaryOfDay, setSummaryOfDay] = useState(initialSummaryOfDay);
  const [showRecipe, setShowRecipe] = useState(false);
  const [showMeals, setShowMeals] = useState(false);
  const [showNewMeal, setShowNewMeal] = useState(true);
  /* DailMenu */
  const [listOfMeals, setListOfMeals] = useState([]);
  /* New Meal */
  const [valuesOfNewMeal, setValuesOfNewMeal] = useState({
    kcal: 0,
    fats: 0,
    carbons: 0,
    proteins: 0,
  });

  /*--------------------------*/

  function addToDailyMenu(
    newId,
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

    setListOfMeals((prevState) => {
      return [
        ...prevState,
        {
          id: newId,
          title: newTitle,
          img: newImgUrl,
          kcal: newKcal,
          fats: newFats,
          carbons: newCarbons,
          proteins: newProteins,
        },
      ];
    });
    setValuesOfNewMeal({ kcal: 0, fats: 0, carbons: 0, proteins: 0 });
  }

  function showNewMealComponent(e) {
    e.preventDefault();
    setShowMeals((prevState) => !prevState);
    setShowNewMeal((prevState) => !prevState);
  }

  function showHomePage() {
    setShowMeals((prevState) => !prevState);
    setShowNewMeal((prevState) => !prevState);
  }

  return (
    <div className="container">
      <h1>Skomponuj swój dzień jedzenia!</h1>
      <Content
        addToDayMenu={addToDailyMenu}
        showMeals={showMeals}
        setShowMeals={() => setShowMeals((prevState) => !prevState)}
        showRecipe={showRecipe}
        setShowRecipe={() => setShowRecipe((prevState) => !prevState)}
        showNewMeal={showNewMeal}
        showNewMealComponent={showNewMealComponent}
        showHomePage={showHomePage}
        valuesOfMeal={valuesOfNewMeal}
        setValuesOfMeal={setValuesOfNewMeal}
      ></Content>
      <DailyMenu
        summaryOfDay={summaryOfDay}
        listOfMeals={listOfMeals}
      ></DailyMenu>
    </div>
  );
}

export default App;
