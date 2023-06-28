$(function () {

    $("#rangopacidad").val("1");
    $("#rangopacidad").prop('disabled', true);
    $("#labelrango").html("Selector de rango dasactivado");
    
    /*boton efecto vidrio esmerilado - al hacer click cambia los valores del efecto a activo o inactivo 
      y cambia el texto del boton*/
    $("#glassbtn").click(function (e) { 
        e.preventDefault();
        let blur = $("#glassbtn").css("backdrop-filter");
        if (blur == "blur(1px)") {
            $("#glassbtn").css("backdrop-filter", "blur(0px)");
            $("#glassbtn").html(" EFECTO / OF ");
            $("#labelrango").html("Selector de rango esmerilado dasactivado");
            $("#glassbtn").css("width", "300px");
            $("#glassbtn").css("heigth", "175px");
            $("#rangopacidad").prop('disabled', true);
        } else{
            $("#glassbtn").css("backdrop-filter", "blur(1px)");
            $("#glassbtn").html(" EFECTO / ON ");
            $("#labelrango").html("Seleccione nivel de esmerilado");
            $("#glassbtn").css("width", "600px");
            $("#glassbtn").css("heigth", "300px");
            $("#rangopacidad").prop('disabled', false);
            $("#rangopacidad").val("0");
        }
    });

    //rango de opacidad - al seleccionar el rango aumenta o disminuye la opacidad de efecto vidrio esmerilado en el boton//
    $("#rangopacidad").change(function (e) { 
        e.preventDefault();
        let rango = $("#rangopacidad").val();
        $("#glassbtn").css("backdrop-filter", "blur("+rango+"px)");
    });



});