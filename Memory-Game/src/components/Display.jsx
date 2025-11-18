export default function Display(props){
    return (
        <header id="header">
            <h1>Memory Game</h1>
            <p><strong>Score : {props.score}</strong></p>
            <p><strong>Best Score : {props.bestScore}</strong></p>
        </header>
    )
}