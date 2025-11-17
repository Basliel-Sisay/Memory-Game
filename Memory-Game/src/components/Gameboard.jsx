import Card from './card.jsx';

function Board(props){
    return (
        <div className="board">
            {props.cards.map(card => (
                <Card
                    key={card.id}
                    id={card.id}
                    img={card.img}
                    name={card.name}
                    clicked={props.clicked}
                />
            ))}
        </div>
    )
}

export default Board;