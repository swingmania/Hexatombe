
const personagens = {
    1: {
        nome: "Makx",
        idade: "23",
        classe: "Ocultista",
        nex: "55%",
        imagem: "p1.png",
        atributos: "fichaAtributosimg.png",
        pericias: ["Ocultismo", "Luta", "Reflexos"],
        armas: [
            {
                nome: "Foice de Sangue",
                imagem: "foice.png"
            }
        ],
        rituais: ["Hemorragia", "Derrame de Sangue"]
    },

    2: {
        nome: "Resenda sem H no lugar do D",
        idade: "--",
        classe: "--",
        nex: "--",
        imagem: "p2.png",
        atributos: "fichaAtributosimg.png",
        pericias: [],
        armas: [],
        rituais: []
    },

    3: {
        nome: "Iza Valkar",
        idade: "--",
        classe: "--",
        nex: "--",
        imagem: "p3.png",
        atributos: "fichaAtributosimg.png",
        pericias: [],
        armas: [],
        rituais: []
    },

    4: {
        nome: "Léia/Ollie",
        idade: "--",
        classe: "--",
        nex: "--",
        imagem: "p4.png",
        atributos: "fichaAtributosimg.png",
        pericias: [],
        armas: [],
        rituais: []
    },

    5: {
        nome: "Antonio Montana",
        idade: "--",
        classe: "--",
        nex: "--",
        imagem: "p5.png",
        atributos: "fichaAtributosimg.png",
        pericias: [],
        armas: [],
        rituais: []
    },

    6: {
        nome: "Sora",
        idade: "--",
        classe: "--",
        nex: "--",
        imagem: "p6.png",
        atributos: "fichaAtributosimg.png",
        pericias: [],
        armas: [],
        rituais: []
    }
};


// CLICAR NOS PERSONAGENS
document.querySelectorAll(".personagem").forEach(personagem => {
    personagem.addEventListener("click", () => {
        const id = personagem.dataset.id;
        abrirFicha(personagens[id]);
    });
});


// ABRIR FICHA
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


// FECHAR MODAL
document.querySelector(".fechar").addEventListener("click", () => {
    document.getElementById("fichaModal").style.display = "none";
});


// ABRIR / FECHAR SEÇÕES
function toggleSecao(id){
    document.getElementById(id).classList.toggle("aberto");
}


// FECHAR TODAS
function fecharTodasSecoes(){
    document.querySelectorAll(".conteudo-toggle").forEach(secao=>{
        secao.classList.remove("aberto");
    });
}


// PREENCHER LISTAS
function preencherLista(id, itens){
    const lista = document.getElementById(id);
    lista.innerHTML = "";

    itens.forEach(item=>{
        lista.innerHTML += `<li>${item}</li>`;
    });
}


// PREENCHER ARMAS
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

