<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
<!-- корневой образец -->
    <xsl:template match="/"> 
      <html>
        <body>
          <table border="1">
          <h2>Информация по специальности ПОИТ</h2>
            <tr bgcolor="#9acd32">
              <th style="text-align:center">Университет</th>
              <th style="text-align:center">Проходной балл</th>
              <th style="text-align:center">План набора</th>
              <th style="text-align:center">Город</th>
            </tr>
            <xsl:for-each select="poit/university">
              <tr>
                <td><xsl:value-of select="name"/></td>
                <td><xsl:value-of select="passing"/></td>
                <td><xsl:value-of select="pages"/></td>
                <td><xsl:value-of select="location"/></td>
              </tr>
            </xsl:for-each>
          </table>
        </body>
      </html>
    </xsl:template>
</xsl:stylesheet>
