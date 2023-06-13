<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html>
      <body>
        <h2 style="text-align: center">XSL:TEMPLATE</h2>
        <xsl:apply-templates />
      </body>
    </html>
  </xsl:template>

  <xsl:template match="cd">
    <p
      style="">
      <xsl:apply-templates select="title" />
      <xsl:apply-templates select="artist" />
      <xsl:apply-templates select="year" />
    </p>
  </xsl:template>

  <xsl:template match="title">
    <b>Title: </b>
    <span style="color:salmon">
      <xsl:value-of select="." />
    </span>
    <br />
  </xsl:template>

  <xsl:template match="artist"> Artist: <span style="color:">
      <xsl:value-of select="." />
    </span>
  <br />
  </xsl:template>

  <xsl:template match="year"> Year: <span>
      <xsl:value-of select="." />
    </span>
  </xsl:template>

</xsl:stylesheet>