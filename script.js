class Nap {
    constructor(nev, orak) {
        this.nev = nev;
        this.orak = orak;
    }
}

class Ora {
    constructor(nev, tanar, terem) {
        this.nev = nev;
        this.tanar = tanar;
        this.terem = terem;
    }
}

var napok = []

var hetfo = []
var kedd = []
var szerda = []
var csutortok = []
var pentek = []

hetfo.push(new Ora("-", "-", "-"))
hetfo.push(new Ora("Matematika", "Varnai Virag", "108"))
hetfo.push(new Ora("Matematika", "Varnai Virag", "108"))
hetfo.push(new Ora("Angol nyelv", "Juhaszne Kassai Agnes", "108"))
hetfo.push(new Ora("Magyar", "Gasparne Birta Agnes", "108"))
hetfo.push(new Ora("Magyar", "Gasparne Birta Agnes", "108"))
hetfo.push(new Ora("Tortenelem", "Szalma Anna Maria", "108"))
hetfo.push(new Ora("-", "-", "-"))
hetfo.push(new Ora("-", "-", "-"))


kedd.push(new Ora("-", "-", "-"))
kedd.push(new Ora("Webprogramozas", "Szilagyi Bertalan", "301"))
kedd.push(new Ora("Webprogramozas", "Szilagyi Bertalan", "301"))
kedd.push(new Ora("Webprogramozas", "Szilagyi Bertalan", "301"))
kedd.push(new Ora("Szakmai angol", "Sandor Maria", "208"))
kedd.push(new Ora("Szakmai angol", "Sandor Maria", "208"))
kedd.push(new Ora("Szoftverteszteles", "Sike Laszlo", "202"))
kedd.push(new Ora("Szoftverteszteles", "Sike Laszlo", "202"))
kedd.push(new Ora("-", "-", "-"))

szerda.push(new Ora("Asztali alkalmazasok", "Paar Norbert", "203"))
szerda.push(new Ora("Asztali alkalmazasok", "Paar Norbert", "203"))
szerda.push(new Ora("Asztali alkalmazasok", "Paar Norbert", "203"))
szerda.push(new Ora("IKT projektmunka", "Paar Norbert", "203"))
szerda.push(new Ora("IKT projektmunka", "Paar Norbert", "203"))
szerda.push(new Ora("IKT projektmunka", "Paar Norbert", "203"))
szerda.push(new Ora("Adatbazis-kezeles", "Takacs Istvan", "309"))
szerda.push(new Ora("-", "-", "-"))
szerda.push(new Ora("-", "-", "-"))


csutortok.push(new Ora("-", "-", "-"))
csutortok.push(new Ora("Matematika", "Varnai Virag", "313"))
csutortok.push(new Ora("Matematika", "Varnai Virag", "313"))
csutortok.push(new Ora("Testneveles", "Demenyi Norbert Szabolcs", "tornaterem"))
csutortok.push(new Ora("Magyar", "Gasperne Birta Agnes", "108"))
csutortok.push(new Ora("Tortenelem", "Szalma Anna Maria", "108"))
csutortok.push(new Ora("Angol nyelv", "Juhaszne Kassai Agnes", "108"))
csutortok.push(new Ora("Angol nyelv", "Juhaszne Kassai Agnes", "108"))
csutortok.push(new Ora("Osztalyfonoki", "Juhaszne Kassai Agnes", "108"))

pentek.push(new Ora("Testneveles","Demenyi Norbert Szabolcs","tornaudvar"))
pentek.push(new Ora("Testneveles","Demenyi Norbert Szabolcs","tornaudvar"))
pentek.push(new Ora("Allampolgari","Szalma Anna Maria","108"))
pentek.push(new Ora("Matematika","Varnai Virag","312"))
pentek.push(new Ora("Angol nyelv","Juhaszne Kassai Agnes","108"))
pentek.push(new Ora("Magyar","Gasparne Birta Agnes","108"))
pentek.push(new Ora("-", "-", "-"))
pentek.push(new Ora("-", "-", "-"))
pentek.push(new Ora("-", "-", "-"))

napok.push(new Nap("Hetfo", hetfo))
napok.push(new Nap("Kedd", kedd))
napok.push(new Nap("Szerda", szerda))
napok.push(new Nap("Csutortok", csutortok))
napok.push(new Nap("Pentek", pentek))

var tabla = document.getElementById("orarend")

var tr = document.createElement("tr");

napok.forEach(nap => {
    var th = document.createElement("th")
    th.textContent = nap.nev
    tr.appendChild(th)
});

tabla.appendChild(tr)

for (let i = 0; i <= 8; i++) {
    var tr = document.createElement("tr")
    napok.forEach(nap => {
        for (let j = 0; j < nap.orak.length; j++) {
            if (j == i) {
                var td = document.createElement("td")
                td.textContent = nap.orak[j].nev + " | " + nap.orak[j].tanar + " | " + nap.orak[j].terem
                tr.appendChild(td)
            }
        }
    });
    tabla.appendChild(tr)
}