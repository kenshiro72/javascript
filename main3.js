let reSult = document.getElementById("result");
let zEro = document.getElementById("zero");
let zEro2 = document.getElementById("zero2");
let oNe = document.getElementById("one");
let tWo = document.getElementById("two");
let tHree = document.getElementById("three");
let fOur = document.getElementById("four");
let fIve = document.getElementById("five");
let sIx = document.getElementById("six");
let sEven = document.getElementById("seven");
let eIght = document.getElementById("eight");
let nIne = document.getElementById("nine");
let pLus = document.getElementById("plus");
let mInus = document.getElementById("minus");
let tImes = document.getElementById("times");
let dIvide = document.getElementById("divide");
let eQual = document.getElementById("equal");
let pOint = document.getElementById("point");
let reSet = document.getElementById("reset");
let nuMber1;
let nuMber1l;
let nuMber2;
let nuMber3;
pOint.disabled = false;
reSet.addEventListener('click', function () {
    reSult.innerHTML = 0
});
zEro.addEventListener('click', function () {
    if (reSult.textContent === "0") {
        reSult.innerHTML = reSult.textContent;
    } else {
        reSult.innerHTML = reSult.textContent + zEro.textContent;
    }
});
zEro2.addEventListener('click', function () {
    if (reSult.textContent === "0" || String(reSult.textContent).slice(-1) === "+" || String(reSult.textContent).slice(-1) === "-" || String(reSult.textContent).slice(-1) === "*" || String(reSult.textContent).slice(-1) === "/") {
        reSult.innerHTML = reSult.textContent;
    } else {
        reSult.innerHTML = reSult.textContent + zEro2.textContent;
    }
});
oNe.addEventListener('click', function () {
    console.log(String(reSult.textContent).slice(-2, -1));
    console.log(String(reSult.textContent).slice(-1));
    if (reSult.textContent === "0") {
        reSult.innerHTML = oNe.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "+" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + oNe.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "-" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + oNe.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "*" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + oNe.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "/" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + oNe.textContent;
    } else {
        reSult.innerHTML = reSult.textContent + oNe.textContent;
    }
});
tWo.addEventListener('click', function () {
    if (reSult.textContent === "0") {
        reSult.innerHTML = tWo.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "+" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + tWo.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "-" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + tWo.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "*" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + tWo.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "/" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + tWo.textContent;
    } else {
        reSult.innerHTML = reSult.textContent + tWo.textContent;
    }
});
tHree.addEventListener('click', function () {
    if (reSult.textContent === "0") {
        reSult.innerHTML = tHree.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "+" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + tHree.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "-" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + tHree.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "*" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + tHree.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "/" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + tHree.textContent;
    } else {
        reSult.innerHTML = reSult.textContent + tHree.textContent;
    }
});
fOur.addEventListener('click', function () {
    if (reSult.textContent === "0") {
        reSult.innerHTML = fOur.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "+" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + fOur.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "-" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + fOur.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "*" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + fOur.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "/" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + fOur.textContent;
    } else {
        reSult.innerHTML = reSult.textContent + fOur.textContent;
    }
});
fIve.addEventListener('click', function () {
    if (reSult.textContent === "0") {
        reSult.innerHTML = fIve.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "+" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + fIve.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "-" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + fIve.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "*" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + fIve.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "/" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + fIve.textContent;
    } else {
        reSult.innerHTML = reSult.textContent + fIve.textContent;
    }
});
sIx.addEventListener('click', function () {
    if (reSult.textContent === "0") {
        reSult.innerHTML = sIx.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "+" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + sIx.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "-" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + sIx.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "*" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + sIx.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "/" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + sIx.textContent;
    } else {
        reSult.innerHTML = reSult.textContent + sIx.textContent;
    }
});
sEven.addEventListener('click', function () {
    if (reSult.textContent === "0") {
        reSult.innerHTML = sEven.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "+" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + sEven.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "-" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + sEven.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "*" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + sEven.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "/" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + sEven.textContent;
    } else {
        reSult.innerHTML = reSult.textContent + sEven.textContent;
    }
});
eIght.addEventListener('click', function () {
    if (reSult.textContent === "0") {
        reSult.innerHTML = eIght.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "+" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + eIght.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "-" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + eIght.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "*" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + eIght.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "/" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + eIght.textContent;
    } else {
        reSult.innerHTML = reSult.textContent + eIght.textContent;
    }
});
nIne.addEventListener('click', function () {
    if (reSult.textContent === "0") {
        reSult.innerHTML = nIne.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "+" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + nIne.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "-" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + nIne.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "*" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + nIne.textContent;
    } else if (String(reSult.textContent).slice(-2, -1) === "/" && String(reSult.textContent).slice(-1) === "0") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        reSult.innerHTML = reSult.textContent + nIne.textContent;
    } else {
        reSult.innerHTML = reSult.textContent + nIne.textContent;
    }
});
pOint.addEventListener('click', function () {
    if (String(reSult.textContent).slice(-1) === "+" || String(reSult.textContent).slice(-1) === "-" || String(reSult.textContent).slice(-1) === "*" || String(reSult.textContent).slice(-1) === "/") {
        reSult.innerHTML = reSult.textContent;
    } else {
        pOint.disabled = true;
        reSult.innerHTML = reSult.textContent + pOint.textContent;
    }
});
pLus.addEventListener('click', function () {
    pOint.disabled = false;
    if (String(reSult.textContent).slice(-1) === "+") {
        reSult.innerHTML = reSult.textContent;
    } else if (String(reSult.textContent).slice(-1) === "-" || String(reSult.textContent).slice(-1) === "*" || String(reSult.textContent).slice(-1) === "/") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        nuMber1 = Number(reSult.textContent);
        nuMber1l = reSult.textContent.length;
        reSult.innerHTML = nuMber1 + pLus.textContent;
    } else {
        nuMber1 = Number(reSult.textContent);
        nuMber1l = reSult.textContent.length;
        reSult.innerHTML = nuMber1 + pLus.textContent;
    }
});
mInus.addEventListener('click', function () {
    pOint.disabled = false;
    if (String(reSult.textContent).slice(-1) === "-") {
        reSult.innerHTML = reSult.textContent;
    } else if (String(reSult.textContent).slice(-1) === "+" || String(reSult.textContent).slice(-1) === "*" || String(reSult.textContent).slice(-1) === "/") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        nuMber1 = Number(reSult.textContent);
        nuMber1l = reSult.textContent.length;
        reSult.innerHTML = nuMber1 + mInus.textContent;
    } else {
        nuMber1 = Number(reSult.textContent);
        nuMber1l = reSult.textContent.length;
        reSult.innerHTML = nuMber1 + mInus.textContent;
    }
});
tImes.addEventListener('click', function () {
    pOint.disabled = false;
    if (String(reSult.textContent).slice(-1) === "*") {
        reSult.innerHTML = reSult.textContent;
    } else if (String(reSult.textContent).slice(-1) === "+" || String(reSult.textContent).slice(-1) === "-" || String(reSult.textContent).slice(-1) === "/") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        nuMber1 = Number(reSult.textContent);
        nuMber1l = reSult.textContent.length;
        reSult.innerHTML = nuMber1 + tImes.textContent;
    } else {
        nuMber1 = Number(reSult.textContent);
        nuMber1l = reSult.textContent.length;
        reSult.innerHTML = nuMber1 + tImes.textContent;
    }
});
dIvide.addEventListener('click', function () {
    pOint.disabled = false;
    if (String(reSult.textContent).slice(-1) === "/") {
        reSult.innerHTML = reSult.textContent;
    } else if (String(reSult.textContent).slice(-1) === "+" || String(reSult.textContent).slice(-1) === "-" || String(reSult.textContent).slice(-1) === "*") {
        reSult.innerHTML = String(reSult.textContent).slice(0, -1);
        nuMber1 = Number(reSult.textContent);
        nuMber1l = reSult.textContent.length;
        reSult.innerHTML = nuMber1 + dIvide.textContent;
    } else {
        nuMber1 = Number(reSult.textContent);
        nuMber1l = reSult.textContent.length;
        reSult.innerHTML = nuMber1 + dIvide.textContent;
    }
});
eQual.addEventListener('click', function () {
    let str = reSult.textContent;
    nuMber2 = Number(str.slice(nuMber1l + 1, 1000));
    console.log(str);
    console.log(nuMber1);
    console.log(nuMber2);
    if (str.slice(nuMber1l, nuMber1l + 1) === "+") {
        reSult.innerHTML = nuMber1 + nuMber2;
    } else if (str.slice(nuMber1l, nuMber1l + 1) === "-") {
        reSult.innerHTML = nuMber1 - nuMber2;
    } else if (str.slice(nuMber1l, nuMber1l + 1) === "*") {
        reSult.innerHTML = nuMber1 * nuMber2;
    } else if (str.slice(nuMber1l, nuMber1l + 1) === "/") {
        reSult.innerHTML = nuMber1 / nuMber2;
    }
    nuMber3 = Math.round(reSult.textContent * 1000000);
    reSult.innerHTML = nuMber3 / 1000000
});
