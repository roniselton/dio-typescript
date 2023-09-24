"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function nomeFuncao(n1, n2, n3) {
    console.log(n2 + " - " + n3.getDay() + " - " + n3.getMonth() + " - " + n3.getFullYear());
    return n1;
}
let soma = nomeFuncao(1, "Roni", new Date("2022-06-11 00:00"));
console.log(soma);
function interpolacaoString(n1, n2) {
    return `Os valores ${n1} e ${n2}  somam ` + (n1 + n2);
}
console.log(interpolacaoString(5, 3));
function callPhone(phone) {
    console.log(`Telefone: ${phone}`);
    return phone;
}
console.log(callPhone("123"));
console.log(callPhone(9987));
function consultarDados(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Roni";
    });
}
consultarDados(1)
    .then((x) => console.log("Resulttado da Promise" + x))
    .catch((error) => console.log("erro ao consultar"));
