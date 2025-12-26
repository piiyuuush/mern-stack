import './card.css'

export default function Card(props){
    return <div className="card">
                <h3>{props.title}</h3>
                <ul>
                    {props.list.map((name, index) => (
                        <li className='small-body-font' key={index}>{name}</li> 
                    ))}
                </ul>
            </div>
}
