// Tallennetaan nimet arrayhin
const nimet = [];

function uusiListaElementti(event) {
    event.preventDefault();

    let inputKentta = document.querySelector('#main input[type="text"]');
    let elementinNimi = inputKentta.value;

    // Estetään tyhjän nimen lisääminen ja pysytään kentässä
    if (!elementinNimi) {
        alert('Et ole naputellut nimeä. Anna nimi!');
        return;
    }

    // Lisätään nimi arrayhin
    nimet.push(elementinNimi);

    // Päivitetään näkymä
    paivitaNimiLista();

    inputKentta.value = '';
}

function poistaNimiListasta() {
    let inputKentta = document.querySelector('#main input[type=text]');
    let nimiPoistettava = inputKentta.value;

    if (!nimiPoistettava) {
        alert('Et ole naputellut poistettavaa nimeä. Anna nimi!');
        return;
    }

    let nimiLoytyi = false;

    //käydään nimet-lista läpi, jos nimi listalla se poistetaan
    for (let i = 0; i < nimet.length; i++) {
        if (nimet[i] === nimiPoistettava) {
            nimet.splice(i, 1);
            nimiLoytyi = true;
            break;
        }
    }

    if (nimiLoytyi) {
        paivitaNimiLista();
    } else {
        alert(`Nimeä "${nimiPoistettava}" ei voida poistaa, koska sitä ei löytynyt listalta!`);
    }

    inputKentta.value = '';
}

function aakkosJarjestys() {
    nimet.sort((a, b) => a.localeCompare(b, 'fi'));
    paivitaNimiLista();
}

// HTML-listan päivitys arraylla ja aakkosjärjestys suomenkielen mukaan
function paivitaNimiLista() {
    let kaveriLista = document.getElementById('kaveriLista');
    kaveriLista.innerHTML = '';

    for (const nimi of nimet) {
        const li = document.createElement('li');
        li.textContent = nimi;
        li.className = 'kaveri-lista';
        kaveriLista.appendChild(li);
    }
}

// Tapahtumankuuntelijat
document.forms['formNewItem'].addEventListener('submit', uusiListaElementti);
document.getElementById('poistaNimi').addEventListener('click', poistaNimiListasta);
document.getElementById('jarjestaNimet').addEventListener('click', aakkosJarjestys);
