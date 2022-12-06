import react from 'react';
import { Helmet } from "react-helmet"

function translate() {
    return (
        <div>
            <div id="google_translate_element"></div>
                <Helmet>
                    <script type="text/javascript">
                        function googleTranslateElementInit() {
                            new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element')
                        }
                    </script>
                </Helmet>
            <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
        </div>
        
    )
}

export default translate;




