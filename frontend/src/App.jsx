import "./App.css";
import CryptoWidget from "./components/CryptoWidget";
import WeatherWidget from "./components/WeatherWidget";
function App() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-full h-screen container flex items-center justify-center ">
          <div className="grid grid-cols-3 w-full gap-10">
            <div className="col-span-1 flex justify-center items-center">
              <WeatherWidget />
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <CryptoWidget />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
