import Display from "./components/Display.jsx";
import Board from "./components/Gameboard.jsx";
import './App.css';
import { useState, useEffect } from "react";
function App(){
const [cards, setCards] = useState([]);//The pokemon cards I'm gon show
const [choosed , setChoosed] = useState([]);//The list of pokemon the player has already clicked
const [score, setScore] = useState(0);//score of the player
const [bestScore, setBestScore] = useState(0);// new high score of the player
useEffect(function(){
  const fetched = async function(){
    const output = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12');//It will fetch 16 pokemon from PokeAp
    const info = await output.json();
    const everything = await Promise.all(//then it fetches the details for each pokemon like their image
    info.results.map(pokemon=>
      fetch(pokemon.url).then(final=>final.json())
    )
    );
    const cards = everything.map((pokemon)=>({//then it will build a list of card objects with id, name and image
        id: pokemon.id ,
        name:pokemon.name,
        img:pokemon.sprites.front_default,
      })
)
setCards(cards);//it will store the list in cards using setCards
};
fetched();
}, []);
function shuffle(arrays){//to mix up the order
  const shuffled = [...arrays];//copy the array and then swap it around with loops
  let x = shuffled.length -1;
  while(x>0){
    const y = Math.floor(Math.random()* (x+1));//do it randomly
    [shuffled[x], shuffled[y]]= [shuffled[y], shuffled[x]];
    x=x-1;
  }
  return shuffled;
}
function clickedCard(uniquecard){
  if(choosed.includes(uniquecard)){
    restart();//restart the game if it is already clicked
    return ;
  }
  setScore(score+1);//increase the score
  setChoosed([...choosed, uniquecard]);//card id is now added to choosed
  if(score +1>= bestScore){
    setBestScore(score+1);//set a new high score
  }
  setCards(shuffle(cards));//shuffle the card again
}
function restart(){//to restart the game
  setScore(0);
  setChoosed([]);
  setCards(shuffle(cards));
}

return(
  <div className='App'>
  <div className='first'>
   <div className="note">
   <img
    src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="Pokemon Logo" style={{ width: "200px", height: "auto", marginBottom: "10px" }} />
     <h1>Pokemon Game</h1>
     <p><strong>Play the pokemon memory Game </strong></p>
   </div>
   <Display score={score} bestScore={bestScore}/>
   </div>
  <Board cards={cards} clicked={clickedCard}/>

</div>
);
}
export default App;
