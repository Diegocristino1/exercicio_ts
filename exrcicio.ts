function dizOla(name: string): string {
    try {
        return `Ola ${name}! o resultado da multiplicacao e:`; 
    }
    catch (error) {
        console.error("Ocorreu um erro na saudacao, desculpe", error);
        return "";
    }
}

function multiplicando(valor1: number, valor2: number): number {
    try {
        return valor1 * valor2;
    }
    catch (error) {
        console.error("Ocorreu um erro", error);
        return 0;
    }
}

console.log(dizOla("diego"));
console.log(multiplicando(10, 40));
