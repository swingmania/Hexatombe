
// ================================
// PERSONAGENS FIXOS
// ================================
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

    2: { nome:"Personagem 2", idade:"--", classe:"--", nex:"--", imagem:"p2.png", atributos:"fichaAtributosimg.png", pericias:[], armas:[], rituais:[] },
    3: { nome:"Personagem 3", idade:"--", classe:"--", nex:"--", imagem:"p3.png", atributos:"fichaAtributosimg.png", pericias:[], armas:[], rituais:[] },
    4: { nome:"Personagem 4", idade:"--", classe:"--", nex:"--", imagem:"p4.png", atributos:"fichaAtributosimg.png", pericias:[], armas:[], rituais:[] },
    5: { nome:"Personagem 5", idade:"--", classe:"--", nex:"--", imagem:"p5.png", atributos:"fichaAtributosimg.png", pericias:[], armas:[], rituais:[] },
    6: { nome:"Personagem 6", idade:"--", classe:"--", nex:"--", imagem:"p6.png", atributos:"fichaAtributosimg.png", pericias:[], armas:[], rituais:[] }
};


// ================================
// CLIQUE PERSONAGENS FIXOS
// ================================
document.querySelectorAll(".personagem").forEach(personagem=>{
    personagem.addEventListener("click", ()=>{
        const id = personagem.dataset.id;
        abrirFicha(personagens[id]);
    });
});


// ================================
// ABRIR FICHA
// ================================
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


// ================================
// FECHAR MODAIS
// ================================
document.querySelector(".fechar").addEventListener("click", ()=>{
    document.getElementById("fichaModal").style.display = "none";
});

document.querySelector(".fechar-add").addEventListener("click", ()=>{
    document.getElementById("modalAdicionar").style.display = "none";
});


// ================================
// TOGGLE SEÇÕES
// ================================
function toggleSecao(id){
    document.getElementById(id).classList.toggle("aberto");
}

function fecharTodasSecoes(){
    document.querySelectorAll(".conteudo-toggle").forEach(secao=>{
        secao.classList.remove("aberto");
    });
}


// ================================
// PREENCHER LISTAS
// ================================
function preencherLista(id,itens){
    const lista = document.getElementById(id);
    lista.innerHTML = "";

    itens.forEach(item=>{
        lista.innerHTML += `<li>${item}</li>`;
    });
}


// ================================
// PREENCHER ARMAS
// ================================
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


// ================================
// MODAL ADICIONAR
// ================================
document.getElementById("btnAdicionar").addEventListener("click", ()=>{
    document.getElementById("modalAdicionar").style.display = "flex";
});


// ================================
// SALVAR NOVO ITEM
// ================================
function salvarNovoItem(){

    const tipo = document.getElementById("tipoAdd").value;
    const nome = document.getElementById("nomeAdd").value;
    const descricao = document.getElementById("descricaoAdd").value;
    const imagemInput = document.getElementById("imagemAdd");

    if(!nome || !descricao || !imagemInput.files[0]){
        alert("Preencha tudo.");
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e){

        const novoItem = {
            tipo,
            nome,
            descricao,
            imagem: e.target.result
        };

        const itens = JSON.parse(localStorage.getItem("registrosHexatombe")) || [];
        itens.push(novoItem);

        localStorage.setItem("registrosHexatombe", JSON.stringify(itens));

        renderizarNovoItem(novoItem);

        document.getElementById("modalAdicionar").style.display = "none";

        document.getElementById("nomeAdd").value = "";
        document.getElementById("descricaoAdd").value = "";
        document.getElementById("imagemAdd").value = "";
    };

    reader.readAsDataURL(imagemInput.files[0]);
}


// ================================
// RENDERIZAR ITEM
// ================================
function renderizarNovoItem(item){

    const container = document.querySelector(".personagens");

    const card = document.createElement("img");
    card.src = item.imagem;
    card.className = "personagem";

    card.addEventListener("click", ()=>{

        document.getElementById("fichaModal").style.display = "flex";

        document.getElementById("fichaNome").innerText = item.nome;
        document.getElementById("fichaIdade").innerText = item.tipo;
        document.getElementById("fichaClasse").innerText = "Registro";
        document.getElementById("fichaNex").innerText = "--";

        document.getElementById("fichaImagem").src = item.imagem;
        document.getElementById("fichaAtributosImg").src = "";

        document.getElementById("fichaPericias").innerHTML =
            `<li>${item.descricao}</li>`;

        document.getElementById("fichaRituais").innerHTML = "";
        document.getElementById("fichaArmas").innerHTML = "";

        fecharTodasSecoes();
    });

    container.appendChild(card);
}


// ================================
// CARREGAR ITENS SALVOS
// ================================
window.addEventListener("load", ()=>{

    const itens = JSON.parse(localStorage.getItem("registrosHexatombe")) || [];

    itens.forEach(item=>{
        renderizarNovoItem(item);
    });

});
```
