import React from "react";
import './cardlis.components.css'
import {Card} from '../card/card.component'


export const CardList = (props) => {
return <div className="card-list">{
     // this value is the props in the CardList file
        props.monsters.map(monster =>(
        <Card key={monster.id} monster={monster}/>)) // retrun whatever function we passed iterated over all elements
      
}</div>
console.log(props)
// export out a componenet, props needed
}

// each props has childrens