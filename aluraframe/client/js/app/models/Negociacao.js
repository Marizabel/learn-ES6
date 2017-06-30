class Negociacao {

    constructor(data, quantidade, valor){
       this._data = new Date(data.getTime());
       this._quantidade = quantidade;
       this._valor = valor;
       Object.freeze(this);
        /**
         * setDate dado no get data() do objeto funciona (altera a data mesmo com freeze no objeto)
         * Mas se nós utilizamos o Object.freeze(), por que isso aconteceu? O Object.freeze é shallow, ou seja, ele ficará na superfície. Quando congelamos um valor, não podemos alterá-lo.
         * Porém, como _data é um objeto, não entrará como uma das propriedades do objeto. Então, não é feito o que chamamos de deep freeze.
         * Quando trabalhamos com um objeto e dentro dele temos outras propriedades, estas não ficarão congeladas
         */
    }

    get volume(){
        return this._quantidade * this._valor;
    }

    get data(){
        return new Date(this._data.getTime()); //programação defensiva para não ser possível alterar a data pelo setDate
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }
}