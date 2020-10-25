//creamos el objeto
var Matematicas = function (num) {
    //propiedad para almacenar el valor que nos han pasado en el constructor
    this.numero = num;
    //propiedad para almacenar el doble del numero
    this.doble = 0;
    //tendremos un metodo para generar el doble, lo realizamos con funcion anonima
    //por lo que almacenamos el obj.this en una varibale intermedia
    var objt = this;
    this.generarDoble = function () {
        //cambiamos algo del obj,
        objt.doble = this.numero * 2;
        //devolvemos el valor doble directamente
        //return objt.num * 2;
    }
}