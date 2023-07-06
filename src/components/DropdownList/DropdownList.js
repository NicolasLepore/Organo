import './DropdownList.css';

export const DropdownList = function(props) {
    return(
        <div className="dropdown-list">
            <label>
                {props.label}
            </label>
            <select 
                required 
                onChange={e => props.onChangeValue(e.target.value)} 
                value={props.value}
            >
                <option value="" disabled ></option>
                {props.option.map(item => {
                    return <option key={item}> {item} </option>
                })}
            </select>
        </div>
    )
}