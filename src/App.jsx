import { useState } from "react";
import "./App.css";
import { Content } from "./components/Content";
import { Day } from "./components/Day";
import { Menu } from "./components/Menu";

function App() {
  const [dayMenu, setDayMenu] = useState([
    {
      idOfMeal: 10,
      nameOfMeal: "Nazwa posiłku",
      imgOfMeal: "/dishes/dish6.PNG",
      kcal: 100,
      fats: 10,
      carbons: 10,
      proteins: 10,
    },
  ]);

  function addToDayMenu(testMeal) {
    console.log(dayMenu);
    console.log("Działa");
    setDayMenu((prevState) => [...prevState, testMeal]);
    console.log(dayMenu);
  }

  return (
    <div className="container">
      <h1>Skomponuj swój dzień jedzenia!</h1>
      <Menu></Menu>
      <Content
        idOfMeal={dayMenu.idOfMeal}
        nameOfMeal={dayMenu[0].nameOfMeal}
        imgUrl={dayMenu[0].imgOfMeal}
        kcalOfMeal={dayMenu[0].kcal}
        fats={dayMenu[0].fats}
        carbons={dayMenu[0].carbons}
        proteins={dayMenu[0].proteins}
        addToDayMenu={addToDayMenu}
      ></Content>
      <Day name={dayMenu.nameOfMeal}></Day>
    </div>
  );
}

export default App;
