$('#registro').validate({ 
    "rules": {
        "rut": {
            required: true,
        },
        "id": {
            required: true,
        },
        "nombres": {
            required: true,
        },
        "apellidos": {
            required: true,
        },
        "correo": {
            required: true,
            email: true,
        },
        "tipo": {
            required: true,
        },
        "precio": {
            required: true,
        },
        "direccion": {
            required: true,
        },
        "password": {
            required: true,
            minlength : 10,
        },
        "password2": {
            required: true,
            minlength : 10,
            equalTo : "#password",
        },
        "descripcion": {
            required: true,
        },
        "descuento": {
            required: true,
        },
        "oferta": {
            required: true,
        },
        "nombre": {
            required: true,
        }
    },


    messages: {
        "rut": {
            required: 'Debe ingresar un RUT válido',
        },
        "nombres": {
            required: 'Debe ingresar sus nombres',
        },
        "apellidos": {
            required: 'Debe ingresar sus apellidos',
        },
        "correo": {
            required: 'Debe ingresar su correo electrónico',
            email: 'Formato de correo incorrecto'
        },
        "tipo": {
            required: 'Debe seleccionar al menos una opción',
        },
        "id": {
            required: 'Debe ingresar un ID válido',
        },
        "precio": {
            required: 'Debe ingresar precio',
        },
        "descuento": {
            required: 'Debe ingresar descuento',
        },
        "oferta": {
            required: 'Debe ingresar descuento',
        },
        
        "descripcion": {
            required: 'Debe ingresar descripción',
        },
        "direccion": {
            required: 'Debe ingresar su dirección',
        },
        "password": {
            required: 'Debe ingresar una password',
            minlength: 'La mínima cantidad de caracteres de la contraseña es 10',
        },
        "password2": {
            required: 'Debe repetir la misma password',
            minlength: 'La mínima cantidad de caracteres de la contraseña es 10',
            equalTo: 'La repetición de contraseña debe coincidir con la contraseña original',
        },
        "nombre": {
            required: 'Debe ingresar un nombre',
        }
    }
});
function validateDescuento(descuento) {
    var re = docu;
    return re.test(email);
}
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Valida el rut con su cadena completa "XXXXXXXX-X"
function validateRut(rutCompleto) {
    if (!/^[0-9]+-[0-9kK]{1}$/.test(rutCompleto))
        return false;
    var tmp = rutCompleto.split('-');
    var rut = tmp[0];
    var digv = tmp[1]; 
    if (digv == 'k') digv = 'K' ;
    return (dv(rut) == digv );
}

function dv(T) {
    var M=0,S=1;
    for(; T; T = Math.floor(T/10))
        S=(S + T % 10 * (9 - M++ %6))%11;
    return S?S-1:'k';
}

// Uso de la función validateRut
// alert( Fn.validateRut('16560241-2') ? 'válido' : 'inválido');


$.validator.addMethod(
    "validateemail",
    function(value, element, validate) {
        debugger
        if (validate) {
            return validateEmail(value);
        }
    },
    "Formato de correo incorrecto"
);

$.validator.addMethod(
    "onenumber",
    function(value, element, validate) {
        if (validate) {
            var re = new RegExp('.*[0-9].*');
            resp = re.test(value);
            return resp;
        }
    },
    "La contraseña debe contener al menos un número"
);

$.validator.addMethod(
    "onemayus",
    function(value, element, validate) {
        if (validate) {
            var re = new RegExp('.*[A-Z].*');
            resp = re.test(value);
            return resp;
        }
    },
    "La contraseña debe contener al menos una mayúscula"
);

$.validator.addMethod(
    "rut",
    function(value, element, validate) {
        if (validate) {
            return validateRut(value);
        }
    },
    "El formato del rut no es válido"
);

$.validator.addMethod(
    "precio",
    function(value, element, validate) {
        if (validate) {
            if(value < 0)
                return false;
            else
                return true;
        }
    },
    "El precio debe ser mayor o igual a 0"
);

$.validator.addMethod(
    "descuento",
    function(value, element, validate) {
        if (validate) {
            if(value < 0, value >100)
                return false;
            else
                return true;
            
        }
    },
    "El descuento debe entre 0 y 100"
);
$.validator.addMethod(
    "oferta",
    function(value, element, validate) {
        if (validate) {
            if(value < 0, value >100)
                return false;
            else
                return true;
            
        }
    },
    "El descuento debe entre 0 y 100"
);




$("#rut").rules("add", { rut: true });
$("#correo").rules("add", { validateemail: true });
$("#password").rules("add", { onenumber: true });
$("#password").rules("add", { onemayus: true });
$("#precio").rules("add", { precio: true });
$("#descuento").rules("add", { descuento: true });
$("#oferta").rules("add", { oferta: true });

$('#buscarfoto').on('change', function(e) {
    let file = '../images/' + e.target.files[0].name;
    $('#fotoperfil').attr('src', file);
});

$('#mostrar-bordes').on('click', function(e) {
    let borde = $('.borde-bootstrap-row').css('border');
    if (borde.includes('1px')) {
        $('.borde-bootstrap-row').css({'border': '0px solid blue'});
    }
    else {
        $('.borde-bootstrap-row').css({'border': '1px solid blue'});
    }
});