var campos = [
  document.querySelector('#data'), // querySelector é uma função que permite você pegar os elementos da página usando os seletores utilizados no css
  document.querySelector('#quantidade'),
  document.querySelector('#valor')
];

var tbody = document.querySelector('table tbody');
document.querySelector('.form').addEventListener('submit',function(event){
    event.preventDefault(); // neste caso evita que o formulário seja submitado fazendo com que a tr criada não seja perdida
    var tr = document.createElement('tr'); // cria um elemento inédito no html : Vanilla javascript = Javascript puro
    campos.forEach(function(campo){
      var td = document.createElement('td');
      td.textContent = campo.value; //o que vai ficar entre a td / campo.value é a mesma coisa que campo.val() do jQuery
      tr.appendChild(td);
    });

    let tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);
    tbody.appendChild(tr);

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;
    campos[0].focus();

    // ALT + ENTER em cima da propriedade com problema para abrir caixa de opções no webstorm (por exemplo trocar versão do JS para ES6)

});
