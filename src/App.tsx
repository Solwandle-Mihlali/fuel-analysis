import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CaptureForm from "./components/captureForm/form";
import { wallOne } from "./assets/landingPageImages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className=" flex flex-col w-[100%] min-h-[100vh] 
      
      "
      >
        <header className=" h-[7.5vh] shadow-sm rounded-sm"></header>
        <div
          className="mainContainer w-[100%] h-[92.5vh] flex items-center justify-center "
          style={{
            backgroundImage: `url(${wallOne})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="left w-[30%] h-[100%]  flex items-center justify-center">
            <CaptureForm />
          </div>
          <div className="right w-[70%] bg-blue-200">right</div>
        </div>
      </div>
    </>
  );
}

export default App;
