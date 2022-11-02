function vaporcode(string) {
    return string.toUpperCase().split(' ').join('').split('').join('  ')
    //caixaalta.divide( 'LETS', 'GO', 'TO', 'THE', 'MOVIES').junta('LETSGOTOTHEMOVIES').dividednv('[ 'L','E','T','S','G'
    //'O','T','O''T','H','E','M','O','V','I','E','S' ]').juntadnv('dois espaço')
    //se só usar split('').join(' ') entre cada palavra fica dois espaços e somente um entre as letras, ai fica feio.
    //precisa primeiro separar as palavras, juntar tudo, dividir cada letra e depois separar por dois espaços.

    //outra forma
    function vaporcode(string) {
        return Array.from(string.replace(/\s+/g, "").toUpperCase()).join("  ")
      }
      
   }