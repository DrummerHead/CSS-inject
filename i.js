javascript:(function(){
  var style = document.createElement('style');
  var styleContent = document.createTextNode('body{background-color:red}');
  style.appendChild(styleContent );
  var caput = document.getElementsByTagName('head');
  caput[0].appendChild(style);
})();
