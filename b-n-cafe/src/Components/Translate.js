// import react from 'react';

// function translate() {
//     return (
//         <div>
//             <div id="google_translate_element"></div>
//             <script type="text/javascript">
//                 function googleTranslateElementInit() {
//                     new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element')
//                 }
//             </script>
//             <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
//         </div>
        
//     )
// }

// export default translate;


// import { useEffect } from 'react';

// const Translate = () => {
//   // Use the useEffect hook to create the <div> element that will contain the translated text after the component has been mounted
//   useEffect(() => {
//     // Use the google.translate.TranslateElement function to create a <div> element that will contain the translated text

//     // get the google translate script
//     // const script = document.createElement('script');
//     google.translate.TranslateElement({
//       pageLanguage: 'en', // The initial language for the page
//       includedLanguages: 'en,es,fr,de', // The languages that the user can translate to
//       layout: google.translate.TranslateElement.InlineLayout.SIMPLE
//     }, 'translate');

//     // Use the onLoad and onTranslate callback functions to trigger the translation when the page is loaded and when the user changes the language
//     google.translate.TranslateElement.addEventListener('load', googleTranslateElementLoad);
//     google.translate.TranslateElement.addEventListener('translate', googleTranslateElementTranslate);
//   }, []);

//   return (
//     <div>
        
//         <div id="translate"></div>
//     </div>
//   );
// };

// // Define the googleTranslateElementLoad and googleTranslateElementTranslate callback functions
// const googleTranslateElementLoad = () => {
//   // Trigger the translation when the page is loaded
//   new google.translate.TranslateElement({ pageLanguage: 'en' }, 'translate');
// };

// const googleTranslateElementTranslate = () => {
//   // Trigger the translation when the user changes the language
//   new google.translate.TranslateElement({ pageLanguage: 'en' }, 'translate');
// };


// export default Translate;



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