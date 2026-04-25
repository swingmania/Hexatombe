
// ===================================
// DADOS DOS PERSONAGENS
// ===================================

const personagens = {
    1: {
        nome: "Makx Ferraz",
        idade: "25",
        classe: "Ocultista",
        nex: "5%",

        imagem: "imagens/p1.png",
        atributos: "imagens/fichaAtributosimg.png",

        pericias: [
            "Ocultismo",
            "Luta",
            "Reflexos"
        ],

        armas: [
            {
                nome: "Foice de Sangue",
                imagem: "imagens/foice.png"
            },
        
        ],

        rituais: [
            "Cicatrização",
            "Perturbação",
            "Tecer ilusão",
        ]
    },

    2: {
        nome: "Personagem 2",
        idade: "--",
        classe: "--",
        nex: "--",

        imagem: "imagens/p2.png",
        atributos: "imagens/fichaAtributosimg.png",

        pericias: [],
        armas: [],
        rituais: []
    },

    3: {
        nome: "Personagem 3",
        idade: "--",
        classe: "--",
        nex: "--",

        imagem: "imagens/p3.png",
        atributos: "imagens/fichaAtributosimg.png",

        pericias: [],
        armas: [],
        rituais: []
    },

    4: {
        nome: "Personagem 4",
        idade: "--",
        classe: "--",
        nex: "--",

        imagem: "imagens/p4.png",
        atributos: "imagens/fichaAtributosimg.png",

        pericias: [],
        armas: [],
        rituais: []
    },

    5: {
        nome: "Personagem 5",
        idade: "--",
        classe: "--",
        nex: "--",

        imagem: "imagens/p5.png",
        atributos: "imagens/fichaAtributosimg.png",

        pericias: [],
        armas: [],
        rituais: []
    },

    6: {
        nome: "Personagem 6",
        idade: "--",
        classe: "--",
        nex: "--",

        imagem: "imagens/p6.png",
        atributos: "imagens/fichaAtributosimg.png",

        pericias: [],
        armas: [],
        rituais: []
    }
};


// ===================================
// CLICAR NO PERSONAGEM
// ===================================

document.querySelectorAll(".personagem").forEach(personagem => {
    personagem.addEventListener("click", () => {
        const id = personagem.dataset.id;
        abrirFicha(personagens[id]);
    });
});


// ===================================
// ABRIR FICHA
// ===================================

function abrirFicha(dados){

    document.getElementById("fichaModal").style.display = "flex";

    document.getElementById("fichaNome").innerText = dados.nome;
    document.getElementById("fichaIdade").innerText = dados.idade;
    document.getElementById("fichaClasse").innerText = dados.classe;
    document.getElementById("fichaNex").innerText = dados.nex;

    document.getElementById("fichaImagem").src = dados.imagem;
    document.getElementById("fichaAtributosImg").src = dados.atributos;

    preencherLista("fichaPericias", dados.pericias);
    preencherLista("fichaRituais", dados.rituais);
    preencherArmas(dados.armas);

    fecharTodasSecoes();
}


// ===================================
// FECHAR MODAL
// ===================================

document.querySelector(".fechar").addEventListener("click", () => {
    document.getElementById("fichaModal").style.display = "none";
});


// ===================================
// TOGGLE DAS SEÇÕES
// ===================================

function toggleSecao(id){
    const secao = document.getElementById(id);
    secao.classList.toggle("aberto");
}


// ===================================
// FECHAR TODAS AO ABRIR FICHA
// ===================================

function fecharTodasSecoes(){
    document.querySelectorAll(".conteudo-toggle").forEach(secao=>{
        secao.classList.remove("aberto");
    });
}


// ===================================
// PREENCHER LISTAS
// ===================================

function preencherLista(id, itens){
    const lista = document.getElementById(id);
    lista.innerHTML = "";

    itens.forEach(item=>{
        lista.innerHTML += `<li>${item}</li>`;
    });
}


// ===================================
// PREENCHER ARMAS
// ===================================

function preencherArmas(armas){
    const container = document.getElementById("fichaArmas");
    container.innerHTML = "";

    armas.forEach(arma=>{
        container.innerHTML += `
            <div class="arma-card">
                <img src="${arma.imagem}" class="arma-img">
                <p>${arma.nome}</p>
            </div>
        `;
    });
}

