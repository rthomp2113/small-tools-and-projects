

export const ListManager = (props) => {
    const  changeHandler = (event) => {
        if(event.target.value === "Top"){
            props.setFromPosition("Top")
        } else if(event.target.value === "Bottom"){
            props.setFromPosition("Bottom")
        }
    }

    return (
        <div>
            <h3>Add new items from</h3>
            <div onChange={changeHandler}>
                <input type="radio" value="Top" name="radio" />Top
                <input type="radio" value="Bottom" name="radio"/>Bottom 
            </div>
        </div>
    )
}