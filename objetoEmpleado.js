var Empleado = function (salario, fechadealta) {
    this.salario = parseInt(salario);
    console.log("this.salario: " + this.salario);

    this.salarioAnual = 0;
    var objtS = this;
    this.methodsalarioAnual = function () {
        objtS.salarioAnual = parseInt(this.salario) * 12;
    }

    this.fechadealta = fechadealta;
    console.log("this.fechadealta: " + this.fechadealta);
    this.anyosEmpresa = 0;
    this.methodanyosEmpresa = function () {
        var aFecha1 = this.fechadealta.split('/');

        var hoy = new Date();
        var dd = hoy.getDate();
        var mm = hoy.getMonth() + 1;
        var yyyy = hoy.getFullYear();

        var fFecha1 = Date.UTC(aFecha1[2], aFecha1[1] - 1, aFecha1[0]);
        var fFecha2 = Date.UTC(yyyy, mm - 1, dd);

        var diff = fFecha2 - fFecha1;
        console.log("diferencia: " + diff);
        var diasPasados = Math.floor(diff / (1000 * 60 * 60 * 24));
        console.log("diasdelfuturopasado: " + diasPasados);
        objtS.anyosEmpresa = parseInt(diasPasados / 365);
    }

    this.salarioTotal = 0;
    this.methodsalarioTotal = function () {
        objtS.salarioTotal = parseInt(this.salarioAnual * this.anyosEmpresa);
    }
}