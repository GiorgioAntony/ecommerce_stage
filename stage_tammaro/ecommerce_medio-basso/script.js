let lista_oggetti = [
    {
    nome: "iphone 16",
    descrizione: "Iphone di ultimerrima generazione, 128gb,\n1028px 3500mAh",
    prezzo: "699$",
    foto: "img/iphone.png",
    venditore: "Karl Marx"
    },{
    nome: "Labubu",
    descrizione: "Labubu di ultimerrima generazione, 128gb,\n1028px 3500mAh",
    prezzo: "34,99$",
    foto: "img/labubu.png",
    venditore: "Karl Marx"
    },{
    nome: "Cucchiaio Gigante",
    descrizione: "Cucchiaio Gigante di ultimerrima generazione, 128gb,\n1028px 3500mAh",
    prezzo: "4,99$",
    foto: "img/cucchiaio_gigante.png",
    venditore: "Iosif Stalin"
    },{
    nome: "Cultura",
    descrizione: "Cultura di ultimerrima generazione, 128gb,\n1028px 3500mAh",
    prezzo: "0$",
    foto: "img/gramsci.png",
    venditore: "Antonio Gramsci"
    }

];
const div_box_lista = document.getElementById("box-lista")

if(lista_oggetti.length != 0){
    
    for(let i=0; i<lista_oggetti.length; i++){

        //div box-oggetto principale dell'oggetto
        const div_box_oggetto = document.createElement("div");
            //div box-upper-info
            const div_box_upper_info = document.createElement("div");

                //immagine
                const immagine = document.createElement("img");
                //assegno la sorgente dell'immagine da lista oggetti
                immagine.src = lista_oggetti[i]["foto"];

                //div box-descrizione
                const div_box_descrizione = document.createElement("div");

                    //nome descrizione e prezzo
                    const nome = document.createElement("h3");
                    const descrizione = document.createElement("p");
                    const prezzo = document.createElement("p");

                    //assegno i dati dalla lista oggetti ai campi
                    nome.innerHTML = lista_oggetti[i]["nome"];
                    descrizione.innerHTML = lista_oggetti[i]["descrizione"];
                    prezzo.innerHTML = lista_oggetti[i]["prezzo"];
                
                //aggiungo immagine nome descrizione e prezzo al div box-descrizione    
                div_box_descrizione.appendChild(immagine);
                div_box_descrizione.appendChild(nome);
                div_box_descrizione.appendChild(descrizione);
                div_box_descrizione.appendChild(prezzo);
                
            //assegno al div box-upper-info il div box-descrizione
            div_box_upper_info.appendChild(div_box_descrizione);

            //div box-lower-info
            const div_box_lower_info = document.createElement("div");

                //div box-venditore
                const div_box_venditore = document.createElement("div");
                    
                    //testo fisso
                    const titolo_venditore = document.createElement("div");
                    
                    //creo venditore
                    const venditore = document.createElement("p");

                    titolo_venditore.innerHTML = "venditore";
                    venditore.innerHTML = lista_oggetti[i]["venditore"];

                //creo i due radio  button
                const spedizione_standard = document.createElement("input")
                const spedizione_express = document.createElement("input")

            div_box_lower_info.appendChild(div_box_venditore);
            div_box_lower_info.appendChild(spedizione_standard);
            div_box_lower_info.appendChild(spedizione_express);
        //assegno il div box-upper-info al div box-oggetti
        div_box_oggetto.appendChild(div_box_upper_info);    
        //assegmp il div box-lower-info al div box-oggetti
        
        div_box_lista.appendChild(div_box_oggetto);
    }

}


