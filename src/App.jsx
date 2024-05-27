import { useState } from "react";
import { setCookie, readCookie, clearCookie } from "./services/api";

const App = () => {
  const [cookieValue, setCookieValue] = useState("");

  const handleSetCookie = async () => {
    await setCookie();
  };

  const handleReadCookie = async () => {
    const value = await readCookie();
    console.log(`🚀 ~ handleReadCookie ~ value:`, value);
    setCookieValue(value);
  };

  const handleClearCookie = async () => {
    await clearCookie();
    setCookieValue("");
  };

  return (
    <div className="App">
      <h1>Set, Read, and Clear HTTP Cookie Example</h1>
      <button onClick={handleSetCookie}>Set Cookie</button>
      <button onClick={handleReadCookie}>Read Cookie</button>
      <button onClick={handleClearCookie}>Clear Cookie</button>
      {cookieValue && <p>{cookieValue}</p>}
    </div>
  );
};

export default App;
