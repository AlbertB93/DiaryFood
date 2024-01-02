import "../CSS/day.css";

export function Day() {
  return (
    <div className="day">
      <div className="imgContainer">
        <img src="/felek.png" alt="Zdjęcie" className="logoImg" />
      </div>
      <h2>Aktualny jadłospis</h2>
      <h2>Podsumowanie:</h2>
      <h3>Wartość energetyncza: 2000kcal</h3>
      <h3>Tłuszcze: 80g.</h3>
      <h3>Węglowodany: 280g.</h3>
      <h3>Białka: 160g.</h3>
    </div>
  );
}
