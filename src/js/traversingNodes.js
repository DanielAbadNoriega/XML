function loadXMLDoc(filename) {
  if (window.ActiveXObject) {
    xhttp = new ActiveXObject('Msxml2.XMLHTTP');
  } else {
    xhttp = new XMLHttpRequest();
  }

  xhttp.open('GET', filename, true);

  xhttp.onreadystatechange = function () {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      /** Traversing Nodes */
      txt = '';
      x = this.responseXML.documentElement.childNodes;

      for (i = 0; i < x.length; i++) {
        // Process only element nodes (type 1)
        if (x[i].nodeType == 1) {
          txt += x[i].nodeName + '<br>';
        }
      }
      document.getElementById('demo').innerHTML = txt;
    }
  };

  xhttp.send('');

  return xhttp.responseXML;
}

function displayResult() {
  xml = loadXMLDoc('src/xml/cd.xml');
}
