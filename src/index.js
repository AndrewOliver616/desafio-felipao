let heroi = "Super Teacher Felipão"
let experienciaXP = 9000
let nivelHeroi = ""

if (experienciaXP <1000) {
    nivelHeroi = " Nivel Ferro"
} else if (experienciaXP<= 2000) {
    nivelHeroi = " Nivel Bronze"
}else if (experienciaXP<= 5000) {
    nivelHeroi = " Nivel Prata"
}else if (experienciaXP<= 7000) {
    nivelHeroi = " Nivel Ouro"
}else if (experienciaXP<= 8000) {
    nivelHeroi = " Nivel Platina"
}else if (experienciaXP<= 9000) {
    nivelHeroi = " Nivel Ascendente"
}else if (experienciaXP <= 10000) {
    nivelHeroi = " Nivel Imortal"
}else if (experienciaXP > 10000) {
    nivelHeroi = " Nivel Radiamte"
}

console.log("O Herói " + heroi + " está com XP de " + experienciaXP + nivelHeroi)
