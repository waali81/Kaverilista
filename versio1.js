function kysyNimet() {
    const nimet = [];

    const lista = document.getElementById('nimiLista');
    lista.innerHTML = ''; // Tyhjennä lista

    for (let i = 1; i <= 10; i++) {
        let nimi;

        //  Kysytään kunnes nimi annetaan / painetaan Peruuta
        while (true) {
            nimi = prompt(`Anna ${i} kaverin nimi:`);

            // Käyttäjä painoi Peruuta, lopetetaan nimeäminen
            if (nimi === null) {
                return;
            }

            // Kysytään uudestaan
            if (nimi.trim() === '') {
                alert('Et ole naputellut nimeä. Anna nimi!');

            // Nimi annettu, silmukan loppu
            } else {
                break;
            }
        }

        nimet.push(nimi.trim());
    }

        //console.log("Annetut nimet:", nimet);

    for (const nimi of nimet) {
        const li = document.createElement('li');
        li.textContent = nimi;
        lista.appendChild(li);
        }
}

//Tapahtumakuuntelija
document.getElementById('nimiButtoni').addEventListener('click', kysyNimet);