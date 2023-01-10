import CarInformation from "./components/car-information";

const DATA = [
  {
    name: "Sedans",
    info: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    color: "#E28625",
  },
  {
    name: "SUVs",
    info: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    color: "#006971",
  },
  {
    name: "Luxury",
    info: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    color: "#004140",
  },
];

function App() {
  return (
    <main>
      <div className="flex flex-col sm:flex-row justify-center items-center p-6 text-white font-LexendDeca text-base sm:h-screen">
        {DATA.map((car) => (
          <CarInformation key={car.name} car={car} />
        ))}
      </div>
    </main>
  );
}

export default App;
