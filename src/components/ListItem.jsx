import React from "react";


const ListItem =({ele,eleVal})=>{
    
    return <li>{ele} - {eleVal}</li>
}

export default React.memo(ListItem);