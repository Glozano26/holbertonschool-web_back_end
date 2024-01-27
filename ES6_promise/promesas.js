/*
 * Creates a ZipCode object.
 *
 * Accepted formats for a zip code are:
 *    12345
 *    12345-6789
 *    123456789
 *    12345 6789
 *
 * If the argument passed to the ZipCode constructor does not
 * conform to one of these patterns, an exception is thrown.
 */

function ZipCode(zip) {
    zip = new String(zip);
    pattern = /[0-9]{5}([- ]?[0-9]{4})?/;
    if (pattern.test(zip)) {
       // zip code value will be the first match in the string
       this.value = zip.match(pattern)[0];
       this.valueOf = function() {
          return this.value
       };
       this.toString = function() {
          return String(this.value)
       };
    } else {
       throw new ExcepcionFormatoCodigoPostal(zip);
    }
 }
 
 function ExcepcionFormatoCodigoPostal(valor) {
    this.valor = valor;
    this.mensaje = "no conforme con el formato esperado de código postal";
    this.toString = function() {
       return this.valor + this.mensaje
    };
 }
 
 /*
  * Esto podría estar en un script que valida los datos de una dirección de EE.UU.
  */
 
 var CODIGOPOSTAL_NOVALIDO = -1;
 var CODIGOPOSTAL_DESCONOCIDO_ERROR = -2;
 
 function verificarCodigoPostal(codigo) {
    try {
       codigo = new CodigoPostal(codigo);
    } catch (excepcion) {
       if (excepcion instanceof ExcepcionFormatoCodigoPostal) {
          return CODIGOPOSTAL_NOVALIDO;
       } else {
          return CODIGOPOSTAL_DESCONOCIDO_ERROR;
       }
    }
    return codigo;
 }
 
 a = verificarCodigoPostal(95060);         // devuelve 95060
 b = verificarCodigoPostal(9560;)          // devuelve -1
 c = verificarCodigoPostal("a");           // devuelve -1
 d = verificarCodigoPostal("95060");       // devuelve 95060
 e = verificarCodigoPostal("95060 1234");  // devuelve 95060 1234
 