// Para maps
//  function iniciar(){
//     var mapOptions = {
//     center: new google.maps.LatLng(-33.41921,-70.6418611),
//     zoom: 1,
//     mapTypeId: google.maps.MapTypeId.ROADMAP};
//     var map = new google.maps.Map(document.getElementById("map"),mapOptions);
// };
// Primera función para países
 var cunt_code = "";
 var num = ""
 var digit ="";

 function setCountry(code){
        if(code || code==''){
            var text = jQuery('a[cunt_code="'+code+'"]').html();
            $(".dropdown dt a span").html(text);
        };
    };
    $(document).ready(function() {
        // Esconder alertas y boton
        $('.alert_hide').hide();
        $('.btn-next').hide();
        $(".dropdown img.flag").addClass("flagvisibility");
        $(".dropdown dt a").click(function() {
            $(".dropdown dd ul").toggle();
        });
        $(".dropdown dd ul li a").click(function() {            
            var text = $(this).html();
            $(".dropdown dt a span").html(text);
            $(".dropdown dd ul").hide();
            $("#result").html("Selected value is: " + getSelectedValue("country-select"));
        });
        function getSelectedValue(id) {
            return $("#" + id).find("dt a span.value").html();
        };
        $(document).bind('click', function(e) {
            var $clicked = $(e.target);
            if (! $clicked.parents().hasClass("dropdown"))
                $(".dropdown dd ul").hide();
        });
        $("#flagSwitcher").click(function() {
            $(".dropdown img.flag").toggleClass("flagvisibility");
        });
        // Para que mostrar el valor del cunt-code en el input
        $('.dropdown li a').click(function(){
            cunt_code = $(this).attr('cunt_code');
            num = $(this).attr('num');
            $('.input-fono').val(cunt_code);
        });
        $(".input-fono").on('keyup', function(){
            $("#borrar").remove();
            digit = $('.input-fono').val();
            // var CelNum = digit + num;
            // calcular el string del numero telefonico total,
            // lo dejas en una variable
            total = parseInt(cunt_code.length) + parseInt(num);
            if( digit.length == total && isNaN(digit) == false){
                $('.alert_hide').hide();
                $('.btn-next').fadeIn('slow');
            } else{
                $('.alert_hide').fadeIn('slow');
                $('.btn-next').hide();
            }
        });
        var CelNum = digit + num;
        $(".btn-next").click(function(){
            $("#borrar").remove();
            // var CelNum = digit + num;
            // guardar el num telefonico al localStorage
            window.localStorage.setItem('Cel_number', CelNum);
            // generar código rándom
            resultado = Math.floor(Math.random() * 899 + 100)
            window.localStorage.setItem('codeRandom', resultado);
            $('body').append('<div class="container codeAlert"><span class="borrar lab" >Your code is <strong>LAB-'+resultado+'</strong></span></div>');
            $('.codeAlert').append('<div id="btn-code" class=" col-xs-push-1 col-xs-10 btn-next text-center "><a href="validate.html"><strong>NEXT</strong></a></div>');
        });
        var nameUser = "";
        var lastnameUser = "";
        var emailUser = "";
        var nameOk = false;
        var lastOk = false;
        var mailOk = false;
        // validar que estén correctos según las indicaciones
        $('#nameUser,#lastnameUser').on('keyup',function(){
            nameUser = $('#nameUser').val();
            lastnameUser = $('#lastnameUser').val();
            nameOk = true;
            lastOk = true;
            $(".borrar").remove();
            if(nameUser == null || nameUser.length > 30 || /^\s+$/.test(nameUser)){
                nameOk = false;
                $(".name-alert").append('<span class="borrar alert_hide" >Your name is invalid </span>');
                // $(".btn-next2").hide();
            } else if(lastnameUser == null || lastnameUser.length > 30 || /^\s+$/.test(lastnameUser)){
                lastOk = false;
                $(".name-alert").append('<span class="borrar alert_hide" >Your lastname is invalid </span>')
            }
        window.localStorage.setItem('name-user', nameUser);
        window.localStorage.setItem('lastname-user', lastnameUser); 
            // SACAR EL CORREO DE LA VALIDACIÓN, CREAR UN BOOLEANDO PARA QUE CUANDO SEA TRUE SE ACTIVE EL BOTÓN 
        });
        $('#emailUser').on('keyup',function(){
            emailUser = $('#emailUser').val();
            mailOk = true;
            $(".borrar").remove();
                if(emailUser == null || emailUser.length > 50 || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(emailUser) != true){
                   mailOk = false;
                   $(".name-alert").append('<span class="borrar alert_hide">Your email is invalid </span>')
                window.localStorage.setItem('email-user', emailUser);
                }
        });
        $('#check').click(function(){
            if( mailOk && lastOk && nameOk){
                $(this).prop('checked', function(){
                    $(".btn-next2").fadeIn('slow');
                });
            }
        });
        $('#usr-pro').hide();
        $('#profile-btn').click(function(){
            $('#usr-pro').fadeIn(1200);
        });
        $('.back').click(function(){
            $('#usr-pro').fadeOut(700);
        });
        $('.btngo').hide();
        $('#btn-go').click(function(ev){
            // evitamos que el a vaya a algun lugar
            $(".borrar").remove();         
            ev.preventDefault();
            var numberResc = window.localStorage.getItem('codeRandom');
             inputTotal = $('.input-ver1').val() + $('.input-ver2').val() + $('.input-ver3').val();
             // console.log(inputTotal);
             if(numberResc == inputTotal){
                $('.btngo').fadeOut(700);
             } else{
             $('.add-1').append('<span class="borrar alert_1">Please, verify your code</span>')}
        });
});

            // llamar con get setItem lacation.replace(pagina) sino alert

        // var input_1 = 
        // var input_2 = 
        // var input_3 =
// REVERSE GEO LOOKUP
// GEOLOCALIZACIÓN INVERSA