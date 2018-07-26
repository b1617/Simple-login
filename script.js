function sendVal(x) {
    document.getElementById("pwd").value += x;
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
}
function deleteLastChar() {
    let val = document.getElementById('pwd').value;
    document.getElementById('pwd').value = val.substr(0, val.length - 1);
}

function send() {
    let email = document.getElementById('email').value;
    let pwd = document.getElementById('pwd').value;
    if (pwd == '') {
        alert('add password');
        return false;

    } else {
        alert(email + " "  + pwd);
    }
}

