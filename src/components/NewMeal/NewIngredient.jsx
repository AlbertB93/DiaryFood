import styles from "./newIngredient.module.css";
import { ButtonSmall } from "../ButtonSmall/ButtonSmall.jsx";

export function NewIngredient({
  setShowIngredientsBox,
  setshowNewIngredint,
  ingredients,
}) {
  let objectTest = {
    id: 1,
    name: "bułka grahamka",
    group: "pieczywo",
    image: "grahamka",
    kcal: 100,
    fats: 33,
    carbons: 33,
    proteins: 33,
    weight: 33,
  };
  function closeWindow() {
    setShowIngredientsBox((prevState) => !prevState);
    setshowNewIngredint((prevState) => !prevState);
  }

  /*   function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
} */

  function addToListOfIngredients() {
    console.log(ingredients);

    ingredients.push(objectTest);
    console.log(ingredients);
  }
  return (
    <div className={styles.newIngredient}>
      <p className={styles.title}>Wpisz dane nowego produktu:</p>
      <ButtonSmall onClick={() => closeWindow()}>x</ButtonSmall>
      <form action="" className={styles.form}>
        <div className={styles.singleInput}>
          <label htmlFor="name">Nazwa:</label>
          <input type="text" id="name" className={styles.inputName} />
        </div>
        <div className={styles.singleInput}>
          <label htmlFor="img">Ścieżka obrazka:</label>
          <input type="text" id="img" className={styles.inputName} />
        </div>
        <p className={styles.textParagraph}>
          Wartości odżywcze na 100g. produktu:
        </p>
        <div className={styles.singleInput}>
          <label htmlFor="kcal">Kcal:</label>
          <input type="text" id="kcal" className={styles.input} />
        </div>
        <div className={styles.singleInput}>
          <label htmlFor="fats">Tłuszcze:</label>
          <input type="text" id="fats" className={styles.input} />
        </div>
        <div className={styles.singleInput}>
          <label htmlFor="carbons">Węglowodany:</label>
          <input type="text" id="carbons" className={styles.input} />
        </div>
        <div className={styles.singleInput}>
          <label htmlFor="proteins">Białka:</label>
          <input type="text" id="proteins" className={styles.input} />
        </div>
      </form>
      <ButtonSmall onClick={addToListOfIngredients}>Dodaj!</ButtonSmall>
    </div>
  );
}
