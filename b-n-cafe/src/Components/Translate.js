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