
function showPromp() {
    const angka = prompt("Silahkan masukkan angka berapapun", "");

    showAlert(angka, pangkat(angka))
}
uu
function pangkat(angka) {
    return Math.pow(parseInt(angka), 2);

}

function showAlert(angka, hasil) {
    alert(`Kuadrat dari ${angka} = ${hasil}`)
}

showPromp();
