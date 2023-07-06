import './Submit.css';

export const Submit = function(props) {
    return(
        <input className="submit" type="submit" value={props.children} /> 
    )
}