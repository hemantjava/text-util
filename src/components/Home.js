import { useState } from "react";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import Alert from "./Alert";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark mode has enabled", "success");
      document.title = "TextUtil Dark Mode";
    } else {
      setMode("light");
      showAlert("Dark mode has disabled", "success");
      document.title = "TextUtil Light Mode";
    }
  };
  return (
    <>
      <Navbar
        title="TexztUtils"
        about="About US"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      {/*title and about are props */}
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
