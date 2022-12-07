import react from 'react';

/**
 * 
 * @returns a translaton API that allows users to translate the website into different languages
 */
function translate() {
    return (
        <div>
            <div id="google_translate_element"></div>
            <script type="text/javascript">
                function googleTranslateElementInit() {
                    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element')
                }
            </script>
            <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
        </div>
        
    )
}

export default translate;