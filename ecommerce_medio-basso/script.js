
let lista_oggetti = [
    {
    nome: "iphone 16",
    descrizione: "Iphone di ultimerrima generazione, 128gb,standard1028px 3500mAh",
    prezzo: "699$",
    foto: "img/iphone.png",
    venditore: "Karl Marx",
    slug: "iphone16"
    },{
    nome: "Labubu",
    descrizione: "Labubu di ultimerrima generazione, 128gb,standard1028px 3500mAh",
    prezzo: "34,99$",
    foto: "img/labubu.png",
    venditore: "Karl Marx",
    slug: "labubu"
    },{
    nome: "Cucchiaio Gigante",
    descrizione: "Cucchiaio Gigante di ultimerrima generazione, 128gb,standard1028px 3500mAh",
    prezzo: "4,99$",
    foto: "img/cucchiaio_gigante.png",
    venditore: "Iosif Stalin",
    slug: "cucchiaiogigante"
    },{
    nome: "Cultura",
    descrizione: "Cultura di ultimerrima generazione, 128gb,standard1028px 3500mAh",
    prezzo: "0$",
    foto: "img/gramsci.png",
    venditore: "Antonio Gramsci",
    slug: "cultura"
    },{
    nome: "Bistola",
    descrizione: "Bistola di ultimerrima generazione, 128gb, 1028px 3500mAh",
    prezzo: "74,51$",
    foto: "img/bistola.png",
    venditore: "Antonio Bistola",
    slug: "bistola"
    }


];

const div_box_lista = document.getElementById("box-lista")

if(lista_oggetti.length != 0){
    
    for(let i=0; i<lista_oggetti.length; i++){

        //div box-oggetto principale dell'oggetto
        const div_box_oggetto = document.createElement("div");

        //aggiungendo la classe al div-box-oggetto
        div_box_oggetto.className = "box-oggetto";

            //immagine
            const immagine = document.createElement("img");
            //assegno la sorgente dell'immagine da lista oggetti
            immagine.src = lista_oggetti[i]["foto"];

            //div box-info
            const div_box_info = document.createElement("div");

            //aggiungo la classe al div-box-info
            div_box_info.className = "box-info";

                //nome descrizione prezzo e venditore
                const nome = document.createElement("h3");
                const descrizione = document.createElement("p");
                const prezzo = document.createElement("p");
                const venditore = document.createElement("p");

                //assegno i dati dalla lista oggetti ai campi
                nome.innerHTML = lista_oggetti[i]["nome"];
                nome.className = "nome";

                descrizione.innerHTML = lista_oggetti[i]["descrizione"];
                descrizione.className = "descrizione";

                prezzo.innerHTML = lista_oggetti[i]["prezzo"];
                prezzo.className = "prezzo";

                //venditore in un'unica riga "Venditore: nome"
                venditore.innerHTML = "Venditore: " + lista_oggetti[i]["venditore"];
                venditore.className = "venditore";

                //creo il menu a tendina per la spedizione
                const spedizione = document.createElement("select");
                spedizione.className = "spedizione";
                spedizione.name = "spedizione-" + lista_oggetti[i]["slug"];
                spedizione.id = "spedizione-" + lista_oggetti[i]["slug"];

                    //opzione standard
                    const opzione_standard = document.createElement("option");
                    opzione_standard.value = "standard";
                    opzione_standard.innerHTML = "Spedizione Standard";

                    //opzione express
                    const opzione_express = document.createElement("option");
                    opzione_express.value = "express";
                    opzione_express.innerHTML = "Spedizione Express";

                //aggiungo le due opzioni al menu a tendina
                spedizione.appendChild(opzione_standard);
                spedizione.appendChild(opzione_express);

            //aggiungo nome descrizione prezzo venditore e menu a tendina al div box-info
            div_box_info.appendChild(nome);
            div_box_info.appendChild(descrizione);
            div_box_info.appendChild(prezzo);
            div_box_info.appendChild(venditore);
            div_box_info.appendChild(spedizione);

        //assegno al div box-oggetto l'immagine e il div box-info
        div_box_oggetto.appendChild(immagine);
        div_box_oggetto.appendChild(div_box_info);

        //assegno il div box-oggetto al div box-lista
        div_box_lista.appendChild(div_box_oggetto);

    }

}

function initInputDetection() {
  const body = document.body;

  window.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'touch') {
      body.classList.add('is-touch');
      body.classList.remove('is-mouse');
    } else if (e.pointerType === 'mouse') {
      body.classList.add('is-mouse');
      body.classList.remove('is-touch');
    }
  });
}

// Avvia la funzione al caricamento del DOM
document.addEventListener('DOMContentLoaded', initInputDetection);
