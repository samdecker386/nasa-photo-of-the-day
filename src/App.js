import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import Loading from './Components/Loading';
import PicOfTheDay from './Components/PicOfTheDay';


  function App() {
    const [date, setDate] = useState();
    const [title, setTitle] = useState();
    const [url, setUrl] = useState();
    const [explanation, setExplanation] = useState();
  
    useEffect (() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=OYB9iH2UyhXcplnYm1eMwAi6CRMi30yyTEKOpd99`)
        .then (response => {
          console.log("First console.log", response.data);
          setDate(response.data.date);
          setTitle(response.data.title);
          setUrl(response.data.url);
          setExplanation(response.data.explanation);

        })
        .catch(err => console.log(err));
    }, []);
  
      if (!url) return <Loading />;
  return (
    <div className="App">
        <PicOfTheDay date={date} title={title} url={url} explanation={explanation} />
    </div>
  );
}

export default App;