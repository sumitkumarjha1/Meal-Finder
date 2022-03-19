import { useContext } from "react";
import InputContext from "../context/InputContext";
import "../App.css"
import {BsShuffle} from "react-icons/bs"
const Shuffle = ()=>{
    const contextInput = useContext(InputContext);
    return(
        <button className="shuff-button" onClick={()=>{
           contextInput.setSearchMode(false);
           contextInput.setShuffleMode(true);
            contextInput.searchEngine()
        }}><BsShuffle /></button>
    )
}

export default Shuffle;
