export default function Display(props){
    return (
        <header id="header">
            <h1>Memory Game</h1>
            <p>Score: {props.score}</p>
            <p>Best Score:{props.bestScore}</p>
        </header>
    )
}