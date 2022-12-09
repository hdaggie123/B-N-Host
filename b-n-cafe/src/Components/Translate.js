import {Translator, Translate} from 'react-auto-translate';
import { useRef } from 'react';



function Translating()  {

    const inputElement = useRef(null);

    // get input value
    const getInputValue = () => {
        // Get the value of the <input> element by accessing the "value" property of the element
        const inputValue = inputElement.current.value;
    
        // Return the value of the <input> element
        return inputValue;
    };

    var hello = 'hello my name is Adam'
    var hello = document.getElementById('input').value;




    return (
        <Translator
            from="en"
            to="es"
            googleApiKey='AIzaSyDaKqiWtRPw6O0_r212g7Da6TeT10DsJmc'
        >

            {/* create an input box and store the variable */}
            <input type="text" ref={inputElement} name="input"></input>
            {/* create a text box and store the info in input element */}
            <button onClick={getInputValue}>Get Input Value</button>
            <input type="submit" value="Submit" />
            
            <input type="text" name="input"></input>
            {/* create a button */}
            <button>Get Input Value</button>
            {/* create a submit button */}
            <input type="submit" value="Submit" />




            {/* <Translate>{hello}</Translate> */}
            <Translate>{hello}</Translate>


        </Translator>
    );
}

export default Translating;