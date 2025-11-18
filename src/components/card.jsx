 function Card(props){
    return (
        <div
            className='card'
            onClick={function(){
                props.clicked(props.id)
            }}
        >
            <img src={props.img} alt={props.name || 'pokemon card'}/>
            <div className="card-name">{props.name}</div>
        </div>
    )
}
export default Card;