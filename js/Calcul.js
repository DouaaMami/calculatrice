function verification(entree) {
    var car ="1234567890+-.*/";
    for (var i = 0; i < entree.length; i++)
     if (car.indexOf(entree.charAt(i))<0 ) return false;
    return true;
   }
   function ajout(caracteres) {
    document.calculatrice.resultat.value =
    document.calculatrice.resultat.value + caracteres;
  }
  function calcul() {
    var x = 0;
   if (verification(document.calculatrice.resultat.value))
      x = eval(document.calculatrice.resultat.value);
    document.calculatrice.resultat.value = x;
  }
 