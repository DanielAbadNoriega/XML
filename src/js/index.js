function loadXMLDoc(filename) {
  if (window.ActiveXObject) {
    xhttp = new ActiveXObject('Msxml2.XMLHTTP');
  } else {
    xhttp = new XMLHttpRequest();
  }

  xhttp.open('GET', filename, true);

  xhttp.onreadystatechange = function () {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      /** Navigating Node Relationships */
      /**
       * Suppose you have loaded "filename.xml"
       * Get the child nodes of the first "cd" element
       * Set the "y" variable to be the first child node of the first "cd" element
       * For each child node (starting with the first child node "y"):
       * Check the node type. If the node type is "1" it is an element node
       * Output the name of the node if it is an element node
       * Set the "y" variable to be the next sibling node, and run through the loop again
       */
      x = this.responseXML.getElementsByTagName('cd')[0];
      xlen = x.childNodes.length;
      y = x.firstChild;

      txt = '';
      for (i = 0; i < xlen; i++) {
        // Process only element nodes (type 1)
        if (y.nodeType == 1) {
          txt += y.nodeName + '<br>';
        }
        y = y.nextSibling;
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
