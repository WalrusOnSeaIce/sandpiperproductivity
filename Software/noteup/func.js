function format(command, value) {
    document.execCommand(command, false, value);
 }
 function changeFont(command, value){
    var myFont = document.getElementById("inputFont").value;
     document.execCommand('fontName', false, myFont);
 }
 function changeSize(command, value){
     var mySize =  document.getElementById("presentFontSize").value;
     document.execCommand('fontSize', false, mySize);
 }
 function changeColor(){
     var fontColor = document.getElementById("iColor").value;
     document.execCommand('foreColor', false, fontColor);
 }
 function getContent(){
      document.getElementById("area").value = document.getElementById("texteditor").innerHTML;
 }
 function save(){
     getContent();
     document.getElementById("form").style.display="block";
 }

 function createUrl(){
     let sText = document.getSelection();
     let url = document.getElementById('inputLink').value;
     document.execCommand('insertHTML', false, '<a href="' + url + '" target="_blank" rel="noopener">' + sText + '</a>');
     document.getElementById("inputLink").value = '';
 }