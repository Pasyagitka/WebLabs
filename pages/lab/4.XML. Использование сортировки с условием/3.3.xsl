<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 

    <xsl:template match="/">
      <html>
        <body>
          <table border="1">
          <h2>Одногруппники</h2>
            <tr bgcolor="#9acd32">
              <th style="text-align:center">Фамилия</th>
              <th style="text-align:center">Имя</th>
              <th style="text-align:center">Отчество</th>
              <th style="text-align:center">Балл</th> 
	<th style="text-align:center">Год рождения</th>
            </tr>
            <xsl:for-each select="poit4/groupmate">
 	<xsl:sort select="birthyear"/>
              	<tr>
                <td><xsl:value-of select="lastname"/></td>
	<xsl:choose>
      	<xsl:when test="passing &gt; 6">		
	<td>
	<xsl:value-of select="firstname"/></td>
	</xsl:when>
	<xsl:when test="passing = 6">		
	<td bgcolor="#90EE90">
	<xsl:value-of select="firstname"/></td>
	</xsl:when>
	<xsl:otherwise>	
	<td bgcolor="#FA8072"><xsl:value-of select="firstname"/></td>
	</xsl:otherwise>
	</xsl:choose>
                <td><xsl:value-of select="middlename"/></td>
                <td><xsl:value-of select="passing"/></td>
                <td><xsl:value-of select="birthyear"/></td>
              	</tr>     
            </xsl:for-each>
          </table>
        </body>
      </html>
    </xsl:template>
</xsl:stylesheet>
