// andi + budi = 49
// ratio = 0.4 || 4 / 10 || 4 : 10 || 2 : 5


const totalUmur = 49, ratioAndi = 2, ratioBudi = 5;

const umurAndi = totalUmur * (ratioAndi / (ratioAndi + ratioBudi))
const umurBudi = totalUmur * (ratioBudi / (ratioAndi + ratioBudi))

console.log(`umur andi saat ini adalah ${umurAndi} tahun`)
console.log(`umur budi saat ini adalah ${umurBudi} tahun`)
console.log(`umur andi saat 2 tahun berikutnya adalah ${umurAndi + 2} tahun`)
console.log(`umur budi saat 2 tahun berikutnya adalah ${umurBudi + 2} tahun`)