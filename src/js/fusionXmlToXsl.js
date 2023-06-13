// Paso 1: Cargar el documento XML
var xhr = new XMLHttpRequest();

xhr.open('GET', 'src/xml/cd.xml', true);

xhr.onreadystatechange = function () {

  if (xhr.readyState === 4 && xhr.status === 200) {

    var xml = xhr.responseXML;

    console.table('xml: ', xml);

    // Paso 2: Cargar la hoja de estilo XSLT
    var xslRequest = new XMLHttpRequest();

    xslRequest.open('GET', 'src/styles/xslTemplate.xsl', true);

    xslRequest.onreadystatechange = function () {
      if (xslRequest.readyState === 4 && xslRequest.status === 200) {
        var xsl = xslRequest.responseXML;

        // Paso 3: Aplicar la transformación XSLT al XML
        var processor = new XSLTProcessor();
        processor.importStylesheet(xsl);
        var result = processor.transformToDocument(xml);

        // Paso 4: Mostrar el resultado HTML
        var outputDiv = document.getElementById('output');
        outputDiv.innerHTML = new XMLSerializer().serializeToString(result);
      }
    };
    xslRequest.send(null);
  }
};
xhr.send(null);