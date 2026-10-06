// =========================================
// PROJETO ONG - SINGLE PAGE APPLICATION
// =========================================


// =========================================
// ÁREA PRINCIPAL DA SPA
// =========================================

const app = document.getElementById("app");


// =========================================
// PÁGINAS DA APLICAÇÃO
// =========================================

const paginas = {

    // =====================================
    // INÍCIO
    // =====================================

    inicio: `

        <section class="hero">

            <h2>
                💚 Juntos podemos transformar vidas
            </h2>

            <p>
                Nosso projeto trabalha para ajudar
                pessoas e transformar a comunidade
                por meio de ações sociais.
            </p>

            <div class="botoes">

                <a href="#projetos" class="botao">
                    🌱 Conheça nossos projetos
                </a>

                <a href="#cadastro" class="botao-secundario">
                    🤝 Seja voluntário
                </a>

            </div>

        </section>


        <section class="numeros">

            <div>
                <strong>150+</strong>
                <span>Pessoas ajudadas</span>
            </div>

            <div>
                <strong>25</strong>
                <span>Voluntários</span>
            </div>

            <div>
                <strong>10</strong>
                <span>Ações realizadas</span>
            </div>

        </section>


        <section>

            <h2>
                🌱 Conheça nosso trabalho
            </h2>

            <p>
                Desenvolvemos ações em diferentes áreas
                para apoiar pessoas da comunidade.
            </p>


            <div class="cards">

                <article class="card">

                    <span class="badge badge-sucesso">
                        🍎 Alimentação
                    </span>

                    <h3>
                        Combate à fome
                    </h3>

                    <p>
                        Realizamos ações para arrecadar
                        e distribuir alimentos para
                        famílias que precisam.
                    </p>

                </article>


                <article class="card">

                    <span class="badge badge-sucesso">
                        📚 Educação
                    </span>

                    <h3>
                        Apoio educacional
                    </h3>

                    <p>
                        Incentivamos o acesso à educação
                        por meio de atividades e apoio
                        aos estudantes.
                    </p>

                </article>


                <article class="card">

                    <span class="badge badge-sucesso">
                        🤝 Solidariedade
                    </span>

                    <h3>
                        Ações solidárias
                    </h3>

                    <p>
                        Organizamos ações para ajudar
                        pessoas e famílias em situação
                        de necessidade.
                    </p>

                </article>

            </div>

        </section>


        <section class="chamada">

            <h2>
                💚 Faça parte dessa transformação
            </h2>

            <p>
                Você também pode contribuir com o nosso
                projeto e ajudar a transformar vidas.
            </p>

            <a href="#cadastro" class="botao">
                🤝 Quero ser voluntário
            </a>

        </section>

    `,


    // =====================================
    // PROJETOS
    // =====================================

    projetos: `

        <section class="hero">

            <h2>
                🌱 Nossos projetos
            </h2>

            <p>
                Conheça nossas principais ações sociais
                e descubra como você pode fazer parte
                dessa transformação.
            </p>

        </section>


        <section>

            <h2>
                💚 Projetos que transformam
            </h2>

            <p>
                Nossas ações são pensadas para atender
                diferentes necessidades da comunidade.
            </p>


            <div class="cards">


                <article class="card">

                    <span class="badge badge-sucesso">
                        🍎 Alimentação
                    </span>

                    <h3>
                        Combate à fome
                    </h3>

                    <p>
                        Arrecadamos alimentos e montamos
                        cestas para ajudar famílias que
                        enfrentam dificuldades.
                    </p>

                    <div class="alerta alerta-sucesso">
                        ✅ Projeto ativo
                    </div>

                </article>


                <article class="card">

                    <span class="badge badge-sucesso">
                        📚 Educação
                    </span>

                    <h3>
                        Apoio educacional
                    </h3>

                    <p>
                        Desenvolvemos atividades e ações
                        para incentivar o aprendizado e
                        apoiar crianças e jovens.
                    </p>

                    <div class="alerta alerta-atencao">
                        📚 Em desenvolvimento
                    </div>

                </article>


                <article class="card">

                    <span class="badge badge-sucesso">
                        🤝 Solidariedade
                    </span>

                    <h3>
                        Ações solidárias
                    </h3>

                    <p>
                        Organizamos campanhas e ações
                        especiais para apoiar pessoas
                        que precisam.
                    </p>

                    <div class="alerta alerta-erro">
                        ❤️ Novas ações em breve
                    </div>

                </article>


            </div>

        </section>


        <section>

            <h2>
                📋 Como nossos projetos funcionam?
            </h2>

            <p>
                Trabalhamos de forma organizada para
                transformar boas ideias em ações reais.
            </p>


            <div class="cards">

                <article class="card">

                    <h3>
                        1️⃣ Identificamos
                    </h3>

                    <p>
                        Conhecemos as necessidades da
                        comunidade e identificamos onde
                        podemos ajudar.
                    </p>

                </article>


                <article class="card">

                    <h3>
                        2️⃣ Organizamos
                    </h3>

                    <p>
                        Planejamos campanhas, arrecadações
                        e atividades com nossos voluntários.
                    </p>

                </article>


                <article class="card">

                    <h3>
                        3️⃣ Realizamos
                    </h3>

                    <p>
                        Colocamos as ações em prática e
                        acompanhamos os resultados.
                    </p>

                </article>

            </div>

        </section>


        <section>

            <h2>
                🔔 Acompanhe nossas ações
            </h2>

            <p>
                Veja como os recursos e voluntários
                podem contribuir com nossos projetos.
            </p>


            <div class="botoes">

                <button
                    type="button"
                    class="botao"
                    id="mostrarToast">

                    🔔 Ver mensagem

                </button>


                <button
                    type="button"
                    class="botao-secundario"
                    id="abrirModal">

                    ℹ️ Saiba mais

                </button>

            </div>


            <div
                id="toast"
                class="toast"
                role="status"
                aria-live="polite">

                <strong>
                    💚 Obrigado pelo apoio!
                </strong>

                <span>
                    Juntos podemos fazer a diferença.
                </span>

            </div>


            <div
                id="modal"
                class="modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="tituloModal">

                <div class="modal-conteudo">

                    <h2 id="tituloModal">
                        💚 Sobre nossos projetos
                    </h2>

                    <p>
                        Nossos projetos dependem da
                        participação de voluntários e
                        da colaboração da comunidade.
                    </p>

                    <p>
                        Cada pessoa pode contribuir de
                        uma maneira diferente.
                    </p>

                    <button
                        type="button"
                        class="botao"
                        id="fecharModal">

                        Fechar

                    </button>

                </div>

            </div>

        </section>


        <section class="chamada">

            <h2>
                🤝 Quer fazer parte?
            </h2>

            <p>
                Seja voluntário e ajude nossas ações
                a chegarem ainda mais longe.
            </p>

            <div class="botoes">

                <a
                    href="#cadastro"
                    class="botao">

                    🤝 Quero ser voluntário

                </a>


                <button
                    type="button"
                    class="botao-secundario"
                    disabled>

                    🔒 Área em desenvolvimento

                </button>

            </div>

        </section>

    `,


    // =====================================
    // CADASTRO
    // =====================================

    cadastro: `

        <section class="hero">

            <h2>
                🤝 Quero ser voluntário
            </h2>

            <p>
                Preencha o formulário abaixo para fazer
                parte das nossas ações e ajudar a
                transformar vidas. 💚
            </p>

        </section>


        <section>

            <h2>
                📝 Cadastro de voluntário
            </h2>

            <p>
                Conte um pouco sobre você e escolha
                como gostaria de contribuir.
            </p>


            <form id="formulario">

                <div class="campo">

                    <label for="nome">
                        Nome completo
                    </label>

                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Digite seu nome completo"
                        required
                        autocomplete="name">

                    <small class="mensagem-erro">
                        Informe seu nome completo.
                    </small>

                </div>


                <div class="campo">

                    <label for="email">
                        E-mail
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="exemplo@email.com"
                        required
                        autocomplete="email">

                    <small class="mensagem-erro">
                        Informe um e-mail válido.
                    </small>

                </div>


                <div class="campo">

                    <label for="telefone">
                        Telefone
                    </label>

                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        placeholder="(00) 00000-0000"
                        autocomplete="tel">

                </div>


                <div class="campo">

                    <label for="cep">
                        CEP
                    </label>

                    <input
                        type="text"
                        id="cep"
                        name="cep"
                        maxlength="9"
                        placeholder="00000-000"
                        inputmode="numeric"
                        autocomplete="postal-code">

                </div>


                <div class="campo">

                    <label for="area">
                        Área de interesse
                    </label>

                    <select
                        id="area"
                        name="area"
                        required>

                        <option value="">
                            Selecione uma área
                        </option>

                        <option value="alimentacao">
                            🍎 Alimentação
                        </option>

                        <option value="educacao">
                            📚 Educação
                        </option>

                        <option value="solidariedade">
                            🤝 Solidariedade
                        </option>

                    </select>

                </div>


                <div class="campo">

                    <label for="mensagem">
                        Por que deseja ser voluntário?
                    </label>

                    <textarea
                        id="mensagem"
                        name="mensagem"
                        rows="6"
                        placeholder="Conte um pouco sobre você e como gostaria de ajudar."></textarea>

                </div>


                <div class="botoes">

                    <button
                        type="submit"
                        class="botao">

                        🤝 Quero ser voluntário

                    </button>


                    <button
                        type="reset"
                        class="botao-secundario">

                        🔄 Limpar formulário

                    </button>

                </div>


                <div
                    id="mensagemSucesso"
                    class="alerta alerta-sucesso"
                    role="status"
                    aria-live="polite"
                    style="display: none; margin-top: 20px;">

                    ✅ Cadastro realizado com sucesso!

                    <br>

                    Obrigado por querer fazer parte
                    do Projeto ONG. 💚

                </div>

            </form>

        </section>


        <section>

            <h2>
                💚 Por que ser voluntário?
            </h2>


            <div class="cards">

                <article class="card">

                    <h3>
                        🤝 Ajude pessoas
                    </h3>

                    <p>
                        Contribua com ações que ajudam
                        pessoas e famílias da comunidade.
                    </p>

                </article>


                <article class="card">

                    <h3>
                        🌱 Desenvolva habilidades
                    </h3>

                    <p>
                        Compartilhe seus conhecimentos,
                        aprenda e desenvolva novas
                        experiências.
                    </p>

                </article>


                <article class="card">

                    <h3>
                        💚 Faça a diferença
                    </h3>

                    <p>
                        Pequenas atitudes podem gerar
                        grandes mudanças na sociedade.
                    </p>

                </article>

            </div>

        </section>

    `

};


// =========================================
// MENU HAMBÚRGUER
// =========================================

const menuToggle =
    document.getElementById("menuToggle");

const menu =
    document.getElementById("menu");


if (menuToggle && menu) {

    menuToggle.addEventListener(
        "click",
        function () {

            menu.classList.toggle("ativo");

            const menuAberto =
                menu.classList.contains("ativo");

            menuToggle.setAttribute(
                "aria-label",
                menuAberto
                    ? "Fechar menu"
                    : "Abrir menu"
            );

        }
    );

}


// =========================================
// RENDERIZAÇÃO DA PÁGINA
// =========================================

function navegar() {

    if (!app) {
        return;
    }


    const rota =
        window.location.hash.substring(1) || "inicio";


    if (paginas[rota]) {

        app.innerHTML =
            paginas[rota];

    } else {

        app.innerHTML =
            paginas.inicio;

    }


    configurarPagina();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// =========================================
// CONFIGURAÇÕES DOS ELEMENTOS
// =========================================

function configurarPagina() {


    // =====================================
    // FECHAR MENU AO CLICAR
    // =====================================

    if (menu && menuToggle) {

        const links =
            menu.querySelectorAll("a");


        links.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        menu.classList.remove("ativo");

                        menuToggle.setAttribute(
                            "aria-label",
                            "Abrir menu"
                        );

                    }
                );

            }
        );

    }


    // =====================================
    // TOAST
    // =====================================

    const mostrarToast =
        document.getElementById("mostrarToast");

    const toast =
        document.getElementById("toast");


    let tempoToast;


    if (mostrarToast && toast) {

        mostrarToast.addEventListener(
            "click",
            function () {

                clearTimeout(tempoToast);

                toast.classList.add("ativo");


                tempoToast =
                    setTimeout(
                        function () {

                            toast.classList.remove(
                                "ativo"
                            );

                        },
                        3000
                    );

            }
        );

    }


    // =====================================
    // MODAL
    // =====================================

    const abrirModal =
        document.getElementById("abrirModal");

    const fecharModal =
        document.getElementById("fecharModal");

    const modal =
        document.getElementById("modal");


    if (abrirModal && modal) {

        abrirModal.addEventListener(
            "click",
            function () {

                modal.classList.add("ativo");

            }
        );

    }


    if (fecharModal && modal) {

        fecharModal.addEventListener(
            "click",
            function () {

                modal.classList.remove("ativo");

            }
        );

    }


    if (modal) {

        modal.addEventListener(
            "click",
            function (evento) {

                if (evento.target === modal) {

                    modal.classList.remove("ativo");

                }

            }
        );

    }


    // =====================================
    // ESC FECHA O MODAL
    // =====================================

    document.addEventListener(
        "keydown",
        function (evento) {

            if (
                evento.key === "Escape" &&
                modal
            ) {

                modal.classList.remove("ativo");

            }

        }
    );


    // =====================================
    // CONFIGURAR FORMULÁRIO
    // =====================================

    configurarFormulario();

}


// =========================================
// INTERCEPTAÇÃO DOS LINKS DA SPA
// =========================================

document.addEventListener(
    "click",
    function (evento) {

        const link =
            evento.target.closest("a");


        if (!link) {
            return;
        }


        const href =
            link.getAttribute("href");


        if (!href || !href.startsWith("#")) {
            return;
        }


        evento.preventDefault();


        window.location.hash =
            href;

    }
);


// =========================================
// QUANDO A ROTA MUDA
// =========================================

window.addEventListener(
    "hashchange",
    navegar
);


// =========================================
// INICIAR A SPA
// =========================================

navegar();