// =========================================
// LOCALSTORAGE - PROJETO ONG
// =========================================

function salvarVoluntario(dados) {

    const voluntariosSalvos =
        JSON.parse(
            localStorage.getItem("voluntariosONG")
        ) || [];

    voluntariosSalvos.push(dados);

    localStorage.setItem(
        "voluntariosONG",
        JSON.stringify(voluntariosSalvos)
    );
}
