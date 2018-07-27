function sendVal(x) {

    document.getElementById("pwd").value += x;
    let email = document.getElementById("email").value;
    if (email != "") {
        document.getElementById("btnSubmit").disabled = false;
    }
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
function deletePwd() {
    document.getElementById('pwd').value = '';
    document.getElementById('btnSubmit').disabled = true;
}
function deleteLastChar() {
    let val = document.getElementById('pwd').value;
    document.getElementById('pwd').value = val.substr(0, val.length - 1);
    if (val.length == 1) {
        document.getElementById('btnSubmit').disabled = true;

    }
}

function send() {
    let email = document.getElementById('email').value;
    let pwd = document.getElementById('pwd').value;
    alert(email + " " + pwd);

}

