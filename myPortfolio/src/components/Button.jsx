import './button.css'
export default function Button(props){
    return <div className={props.type+" button-font"}>
                    {props.text}
                </div>;
}