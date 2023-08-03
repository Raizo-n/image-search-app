import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Title from "./components/Title";
import axios from "axios";
import.meta.env.VITE_REACT_APP_ACCESS_KEY;

function App() {
  const [word, setWord] = useState("cat");
  const getPhotoData = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.unsplash.com/search/photos?query=${word}&client_id=${import.meta.env.VITE_REACT_APP_ACCESS_KEY
    }`)
      .then((res) => console.log(res));
  };
  return (
    <div className="App">
      <Title />
      <Form setWord={setWord} getPhotoData={getPhotoData} />
    </div>
  );
}

export default App;
