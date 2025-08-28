function kysyNimet() {
    const nimet = [];

    for (let i = 1; i <= 10; i++) {
        let nimi;

        //  Kysytään kunnes nimi annetaan / painetaan Peruuta
        while (true) {
            nimi = prompt(`Anna ${i} kaverin nimi:`);

            // Käyttäjä painoi Peruuta -> lopetetaan nimeäminen
            if (nimi === null) {
                break;
            }

            // Kysytään uudestaan
            if (nimi.trim() === '') {
                alert('Et ole naputellut nimeä. Anna nimi!');

            // Nimi annettu, silmukan loppu
            } else {
                break;
            }
        }

        // Jos käyttäjä painoi peruuta, lopetetaan pääsilmukkakin
        if (nimi === null) {
            break;
        }

        nimet.push(nimi.trim());
    }

    // Näytetään nimet listana sivulla
    const lista = document.getElementById('nimiLista');
    lista.innerHTML = ''; // Tyhjennä aiemmat tulokset

    for (const nimi of nimet) {
        const li = document.createElement('li');
        li.textContent = nimi;
        lista.appendChild(li);
        }
}

document.getElementById('nimiButtoni').addEventListener('click', kysyNimet);