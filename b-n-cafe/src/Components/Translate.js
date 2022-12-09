import {Translator, Translate} from 'react-auto-translate';
import { useRef } from 'react';
import './TranslateStyling.css';



function Translating()  {

    const inputElement = useRef(null);

    // get input value
    const getInputValue = () => {
        // Get the value of the <input> element by accessing the "value" property of the element
        const inputValue = inputElement.current.value;
    
        // Return the value of the <input> element
        return inputValue;
      };

    var hello = 'Translate'

    // on button click, get input value
    var handleClick = () => {
        const inputValue = getInputValue();
        hello = inputValue;

    };


    return (
        
        <Translator
            from="en"
            to="es"
            googleApiKey='AIzaSyDaKqiWtRPw6O0_r212g7Da6TeT10DsJmc'
        >
            
            <h1>Cant Understand a phrase? Type here to translate into Spanish</h1>
            <div className='TranslateStyling'>
                <center>
                    <div>
                        <input type="text" ref={inputElement} name="input" className='TextInput'></input>
                        <button onClick={handleClick}>Translate !</button>
                    </div>
                </center>
            </div>
            

            <center><h2>Translated Text is as follows</h2></center>
            <div className='TranslatedText'>
                <center>
                    
                    <Translate>
                        {hello}
                    </Translate>
                </center>
            </div>
        </Translator>
    );
}

export default Translating;