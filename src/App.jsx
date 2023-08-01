import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Title from "./components/Title";
import axios from "axios";
import Results from "./components/Results";
import.meta.env.VITE_REACT_APP_ACCESS_KEY;

function App() {
  const [word, setWord] = useState("");
  const [image, setImage] = useState([]);

  const getPhotoData = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.unsplash.com/search/photos?query=${word}&client_id=${import.meta.env.VITE_REACT_APP_ACCESS_KEY}`)
      .then((res) => setImage(res.data.results));
  };

  return (
    <div className="App">
      <Title />
      <Form setWord={setWord} getPhotoData={getPhotoData} />
      <Results image={image} />
    </div>
  );
}

export default App;
