function perhitungan() {
    let panjang= document.getElementById("panjang-alas").value;
    let tinggi= document.getElementById("tinggi").value;

    let luas= 0.5 * (panjang) * (tinggi);
    document.getElementById("hasil").textContent = "Luas Segitiga adalah"

    console.log("luas")
}