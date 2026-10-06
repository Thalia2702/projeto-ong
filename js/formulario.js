// =========================================
// FORMULÁRIO - PROJETO ONG
// =========================================

function configurarFormulario() {

    const formulario =
        document.getElementById("formulario");

    const mensagemSucesso =
        document.getElementById("mensagemSucesso");

    if (!formulario) {
        return;
    }


    formulario.addEventListener(
        "submit",
        function (evento) {

            evento.preventDefault();

            if (formulario.checkValidity()) {

                const dadosVoluntario = {

                    nome:
                        document.getElementById("nome").value,

                    email:
                        document.getElementById("email").value,

                    telefone:
                        document.getElementById("telefone").value,

                    cep:
                        document.getElementById("cep").value,

                    area:
                        document.getElementById("area").value,

                    mensagem:
                        document.getElementById("mensagem").value

                };


                salvarVoluntario(dadosVoluntario);


                if (mensagemSucesso) {

                    mensagemSucesso.style.display =
                        "block";

                }


                formulario.reset();

            } else {

                formulario.reportValidity();

            }

        }
    );


    formulario.addEventListener(
        "input",
        function () {

            if (mensagemSucesso) {

                mensagemSucesso.style.display =
                    "none";

            }

        }
    );


    configurarCEP();
    configurarTelefone();

}


// =========================================
// MÁSCARA DE CEP
// =========================================

function configurarCEP() {

    const cep =
        document.getElementById("cep");

    if (!cep) {
        return;
    }

    cep.addEventListener(
        "input",
        function () {

            let valor =
                cep.value.replace(/\D/g, "");

            valor =
                valor.replace(
                    /^(\d{5})(\d)/,
                    "$1-$2"
                );

            cep.value =
                valor.substring(0, 9);

        }
    );

}


// =========================================
// MÁSCARA DE TELEFONE
// =========================================

function configurarTelefone() {

    const telefone =
        document.getElementById("telefone");

    if (!telefone) {
        return;
    }

    telefone.addEventListener(
        "input",
        function () {

            let valor =
                telefone.value.replace(/\D/g, "");


            if (valor.length <= 10) {

                valor =
                    valor.replace(
                        /^(\d{2})(\d)/,
                        "($1) $2"
                    );

                valor =
                    valor.replace(
                        /(\d{4})(\d)/,
                        "$1-$2"
                    );

            } else {

                valor =
                    valor.replace(
                        /^(\d{2})(\d)/,
                        "($1) $2"
                    );

                valor =
                    valor.replace(
                        /(\d{5})(\d)/,
                        "$1-$2"
                    );

            }


            telefone.value =
                valor.substring(0, 15);

        }
    );

}
