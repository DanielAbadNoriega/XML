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
      /*       let x = this.responseXML.getElementsByTagName('cd')[0].childNodes;
let xLen = x.length;
console.log(x);
for (i = 0; i < x.length; i++) {
  if (x[i].nodeType == 1) txt += x[i].nodeName + ': ' + x[i].childNodes[0].nodeValue + '<br>';
} */

      let xmlDoc = this.responseXML;
      let txt = '';
      let arrCD = xmlDoc.getElementsByTagName('cd');
      let arrCDLength = arrCD.length;
      let j = 0;
      for (j; j < arrCDLength; j++) {
        let nodesCD = arrCD[j].childNodes;
        let i = 0;
        for (i; i < nodesCD.length; i++) {
          if (nodesCD[i].nodeType == 1) txt += nodesCD[i].nodeName + ': ' + nodesCD[i].childNodes[0].nodeValue + '<br>';
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

  // xsl = loadXMLDoc('src/styles/xslTemplate.xsl');

  // code for Chrome, Firefox, Opera, etc.
  /*   else if (document.implementation && document.implementation.createDocument) {
    xsltProcessor = new XSLTProcessor();
    xsltProcessor.importStylesheet(xsl);
    resultDocument = xsltProcessor.transformToFragment(xml, document);
    document.getElementById('output').appendChild(resultDocument);
  } */
}
