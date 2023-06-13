function loadXMLDoc(filename) {
  if (window.ActiveXObject) {
    xhttp = new ActiveXObject('Msxml2.XMLHTTP');
  } else {
    xhttp = new XMLHttpRequest();
  }

  xhttp.open('GET', filename, true);

  xhttp.onreadystatechange = function () {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      /** Listing Node */
      /**
       * Suppose filename.xml is loaded 
       * Set the x variable to hold a node list of all title elements
       * Collect the text node values from <title> elements
       */
      x = this.responseXML.getElementsByTagName('title');
      txt = '';
      xLen = x.length;
      console.log(x);
      for (let i = 0; i < xLen; i++) {
        txt += 'Title: ' + x[i].childNodes[0].nodeValue + '<br>';
      }

      document.getElementById('demo').innerHTML = txt;
    }
  };

  xhttp.send('');

  return xhttp.responseXML;
}

function displayResult() {
  xml = loadXMLDoc('src/xml/cd.xml');

  // xsl = loadXMLDoc('src/styles/xslTemplate.xsl');

  // code for Chrome, Firefox, Opera, etc.
  /*   else if (document.implementation && document.implementation.createDocument) {
    xsltProcessor = new XSLTProcessor();
    xsltProcessor.importStylesheet(xsl);
    resultDocument = xsltProcessor.transformToFragment(xml, document);
    document.getElementById('output').appendChild(resultDocument);
  } */
}
