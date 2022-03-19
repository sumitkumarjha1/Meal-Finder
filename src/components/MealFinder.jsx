import "../App.css";
import {  useState } from "react";
import SearchResult from "./SearchResult";
import InputContext from "../context/InputContext";
import ShuffleResult from "./ShuffleResult";
import Form from "./Form";
import Shuffle from "./Shuffle";
const MealFinder = () => {
    const [ingridients, setIngridients] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [searchMode, setSearchMode] = useState(true);
    const [shuffleMode, setShuffleMode] = useState(false);
    const [loading, setLoading] = useState(false)
    const searchEngine = async () => {
        setLoading(true);
        const url = searchMode ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}` : `https://www.themealdb.com/api/json/v1/1/random.php`;
       await fetch(url)
            .then((respone) => respone.json())
            .then((res) => {
             
                setIngridients(res.meals);
              
                setLoading(false);
            })
            .catch((e) => {
                setLoading(false)
                console.log(e);
            });
    };
    
    return (
        loading ? <><h1>Loading....</h1></> :
            <InputContext.Provider
                value={{
                    ingridients: ingridients,
                    keyword: keyword,
                    setKeyword: setKeyword,
                    searchMode: searchMode,
                    setSearchMode: setSearchMode,
                    shuffleMode: shuffleMode,
                    setShuffleMode: setShuffleMode,
                    searchEngine: searchEngine,
                }}
            >
                <div className="container">
                    <h1>Meal Finder</h1>
                    <div
                        className="allTypeInput"
                        style={{
                            display: "flex",
                            marginBottom: "30px"
                        }}
                    >
                        <Form />
                        <Shuffle />
                    </div>
                    <div className="result">
                        {searchMode ? <SearchResult /> : <></>}
                        
                        {shuffleMode ? <ShuffleResult /> : <></>}
                    </div>
                </div>
            </InputContext.Provider>
    );
};

export default MealFinder;