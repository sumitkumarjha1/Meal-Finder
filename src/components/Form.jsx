import { BsSearch } from "react-icons/bs";
import { useContext } from "react";

import InputContext from "../context/InputContext";
import "../App.css"
const Form = () => {
    const helper = useContext(InputContext);

    function onsubmit(e) {
        e.preventDefault();
       
        if (helper.keyword === '') {
            alert("please enter Meal");
        } else {
            
            helper.setSearchMode(true);
            
            helper.setShuffleMode(false);
                helper.searchEngine();
           

        }

       

    }

    return (
        <div className="inputText" >

            <form onSubmit={onsubmit}>
                <input type="text" placeholder="Search for meals or keywords" value={helper.keyword} onChange={
                    (e) => {
                        helper.setKeyword(e.target.value);
                    }
                } />
                <button className="search-button" type="submit" ><BsSearch /></button>


            </form>


        </div>
    )
}

export default Form;