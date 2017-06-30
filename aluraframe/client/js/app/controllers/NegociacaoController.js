class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document); // se usa o .bind(document) para passar para ele o this como sendo do document
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event){
        event.preventDefault();

        //console.log('aa'+ typeof(this._inputData.value));
        let data = new Date(...
            this._inputData.value
            .split('-')
            .map(function(item) {
            return item;
            })
        );
        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);
    }
}