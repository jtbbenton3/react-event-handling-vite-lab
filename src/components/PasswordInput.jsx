// Code PasswordInput Component Here

function PasswordInput (){
    function handleChange(event) {
        console.log("Entering password...");
    }


    return(
        <input type="password" 
        onChange={handleChange}
        />
    );
}

export default PasswordInput;