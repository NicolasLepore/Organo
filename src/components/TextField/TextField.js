import './TextField.css'

export const TextField = function(props) {

    //let value = '';

    /* 
    function getInputValue(e) {
        props.onChangeValue(e.target.value);
    }
    */

    return(
        <div className="text-field">
            <label>
                {props.label}
            </label>
            <input 
                value={props.value} 
                onChange={e => props.onChangeValue(e.target.value)} 
                required={props.required} 
                placeholder={`${props.placeholder}...`} 
            />

        </div>
    )
}   