(function($){




// Start codeMirror
var editor = CodeMirror.fromTextArea(document.getElementById('codeInput'), {
  lineNumbers: true,
  matchBrackets: true
});


// Define DOM areas
var $form = $('#magia')
  , $targetLink = $('#a-holder')
  , $codeInput = $('#codeInput')
  , $linkName = $('#nome')


// Make the form parse CSS User Input
$form.submit(function(e){
  e.preventDefault();

  var raw = $codeInput.val()
    , parsedCss = raw
        .replace(/;/g,' !important;') // Make everything !important
        .replace(/\\/g,'\\\\')        // Safe backslash for content
        .replace(/'/g,'\\%27')        // Safe single quotes
        .replace(/"/g,'\\%22')        // Safe double quotes
        .replace(/[\r\n\t]/g,' ')     // No newlines or tabs
        .replace(/ +/g,' ')           // No extra spaces
    , nome = $linkName.val()
    , aHref = "javascript:(function(){ var style = document.createElement(%27style%27), styleContent = document.createTextNode(%27" + parsedCss + "%27); style.appendChild(styleContent ); var caput = document.getElementsByTagName(%27head%27); caput[0].appendChild(style); })();"
    , aElement = '<a href="'+aHref+'">'+nome+'</a>'

  $targetLink.empty().append(aElement);
});




})(jQuery)
