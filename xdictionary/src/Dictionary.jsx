import { useState} from "react";

function Dictionary(){
    const dictionary = [
        {word: "React", meaning: "A JavaScript library for building user interfaces."},
        {word: "Component", meaning: "A reusable building block in React."},
        {word: "State",meaning: "An object that stores data for a component."}
    ];
    const [input, setInput] = useState('');
    const [defination, setDefination] = useState('');
    const handleSearch=()=>{
      const found = dictionary.find((word)=> word.word.toLowerCase() === input.toLowerCase());
      if(found) setDefination(found.meaning);
      else setDefination('Word not found in the dictionary.');
    };
    return(
        <>
        <h1>Dictionary App</h1>
        <div>
            <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder="Search for a word..." />
            <button onClick={handleSearch}>Search</button>
        </div>
        <div>
            <h3>Definition:</h3> {defination && <p>{defination}</p> }
        </div>
        </>
    )
}
export default Dictionary;