class Produto{

    constructor() {
    this.id = 1;
    this.arrayProdutos = [];
    this.editId = null;

    }

    salvar() {
        let produto = this.lerDados();
        
        if(this.validaCampo(produto)){
            if(this.editId == null){
                this.adicionar(produto);
            } else{
                this.atualizar(this.editId, produto);
            }
        }

        this.listaTabela();
        this.cancelar();
    }

    listaTabela(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        let soma = 0;
        let energia = 0;

        for (let i = 0; i < this.arrayProdutos.length; i++){
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_Equipamento = tr.insertCell();
            let td_Potencia = tr.insertCell();
            let td_Tempo = tr.insertCell();
            let td_Energiapordia  = tr.insertCell();
            let td_Consumomensal = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_Equipamento.innerText = this.arrayProdutos[i].nomeProduto;
            td_Potencia.innerText = this.arrayProdutos[i].qntPotencia + " " + "W";
            td_Tempo.innerText = this.arrayProdutos[i].qntTempo + " " + "h";
            td_Energiapordia.innerText = (this.arrayProdutos[i].qntPotencia * this.arrayProdutos[i].qntTempo)+ " " + "Wh";
            td_Consumomensal.innerText = ((this.arrayProdutos[i].qntPotencia * this.arrayProdutos[i].qntTempo) * 30) / 1000 + " " + "kWh";
           

            energia = ((this.arrayProdutos[i].qntPotencia * this.arrayProdutos[i].qntTempo) * 30) / 1000;
            soma += energia;

            
            td_id.classList.add('center');

            let imgEdit = document.createElement('img');
            imgEdit.src = 'edit.png';
            td_acoes.appendChild(imgEdit);

            imgEdit.setAttribute("onclick", "produto.editar("+ JSON.stringify(this.arrayProdutos[i]) +")");

            let imgDelete = document.createElement('img');
            imgDelete.src = 'delete.png';
            td_acoes.appendChild(imgDelete);

            imgDelete.setAttribute("onclick", "produto.deletar("+ this.arrayProdutos[i].id +")");

            td_acoes.classList.add('center');

        }
       
        return soma;

    }

    adicionar(produto){
        produto.qntPotencia = parseFloat(produto.qntPotencia);
        produto.qntTempo = parseFloat(produto.qntTempo);
        this.arrayProdutos.push(produto);
        this.id++;
    }

    atualizar(id, produto){
        for(let i = 0; i < this.arrayProdutos.length; i++){
           if(this.arrayProdutos[i].id == id){
                this.arrayProdutos[i].nomeProduto = produto.nomeProduto;
                this.arrayProdutos[i].qntPotencia = produto.qntPotencia;
                this.arrayProdutos[i].qntTempo = produto.qntTempo;
           }

        }

    }

    lerDados(){
        let produto = {};

        produto.id = this.id;
        produto.nomeProduto = document.getElementById('equipamento').value;
        produto.qntPotencia = document.getElementById('potencia').value;
        produto.qntTempo = document.getElementById('tempo').value;

        return produto;
    }


    validaCampo(produto){

        let msg = '';

        if (produto.nomeProduto == ''){
            msg += 'Informe o nome do equipamento! \n'; 
        }

        if (produto.qntPotencia == ''){
            msg += 'Informe a potência do equipamento! \n'; 
        }

        if (produto.qntTempo == ''){
            msg += 'Informe o tempo de uso do equipamento! \n';    
        }

        if (msg != ''){
            alert(msg);
            return false;
        }

        return true;
    }


    cancelar() {
        document.getElementById("equipamento").value='';
        document.getElementById("potencia").value='';
        document.getElementById("tempo").value='';

        document.getElementById('btn1').innerText = 'Salvar';
        this.editId = null;
    }

    deletar(id) {
        let tboby = document.getElementById('tbody');

        for(let i=0; i < this.arrayProdutos.length; i++){
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos.splice(i, 1);
                tbody.deleteRow(i);
            }
            console.log(this.arrayProdutos);

        }
    }

    editar(dados){

        this.editId = dados.id;

        document.getElementById('equipamento').value = dados.nomeProduto;
        document.getElementById('potencia').value = dados.qntPotencia;
        document.getElementById('tempo').value = dados.qntTempo;
        
        document.getElementById('btn1').innerText = 'Atualizar';
    }

}

var produto = new Produto();






class Produto2{

    constructor() {
    this.id2 = 1;
    this.arrayProdutos2 = [];
    this.editId2 = null;

    }

    salvar2() {
        let produto2 = this.lerDados2();
        
        if(this.validaCampo2(produto2)){
            if(this.editId2 == null){
                this.adicionar2(produto2);
            } else{
                this.atualizar2(this.editId2, produto2);
            }
        }

        this.listaTabela2();
        this.cancelar2();
    }

    listaTabela2(){
        let tbody2 = document.getElementById('tbody2');
        tbody2.innerText = '';
        let soma2 = 0;
        let energia2 = 0;

        for (let i = 0; i < this.arrayProdutos2.length; i++){
            let tr = tbody2.insertRow();

            let td_id = tr.insertCell();
            let td_Equipamento = tr.insertCell();
            let td_Potencia = tr.insertCell();
            let td_Tempo = tr.insertCell();
            let td_Energia = tr.insertCell();
            let td_Consumomensal = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayProdutos2[i].id2;
            td_Equipamento.innerText = this.arrayProdutos2[i].nomeProduto2;
            td_Potencia.innerText = this.arrayProdutos2[i].qntPotencia2 + " " + "W";
            td_Tempo.innerText = this.arrayProdutos2[i].qntTempo2 + " " + "h";
            td_Energia.innerText = (this.arrayProdutos2[i].qntPotencia2 * this.arrayProdutos2[i].qntTempo2) + " " + "Wh";
            td_Consumomensal.innerText = ((this.arrayProdutos2[i].qntPotencia2 * this.arrayProdutos2[i].qntTempo2) * 4) / 1000 + " " + "kWh";

            energia2 = ((this.arrayProdutos2[i].qntPotencia2 * this.arrayProdutos2[i].qntTempo2) * 4) / 1000;
            soma2 += energia2;
        

            td_id.classList.add('center');

            let imgEdit2 = document.createElement('img');
            imgEdit2.src = 'edit.png';
            td_acoes.appendChild(imgEdit2);

            imgEdit2.setAttribute("onclick", "produto2.editar2("+ JSON.stringify(this.arrayProdutos2[i]) +")");

            let imgDelete2 = document.createElement('img');
            imgDelete2.src = 'delete.png';
            td_acoes.appendChild(imgDelete2);

            imgDelete2.setAttribute("onclick", "produto2.deletar2("+ this.arrayProdutos2[i].id2 +")");

            td_acoes.classList.add('center');

        }

        return soma2;

    }

    adicionar2(produto2){
        produto2.qntPotencia2 = parseFloat(produto2.qntPotencia2);
        produto2.qntTempo2 = parseFloat(produto2.qntTempo2);
        this.arrayProdutos2.push(produto2);
        this.id2++;
    }

    atualizar2(id2, produto2){
        for(let i = 0; i < this.arrayProdutos2.length; i++){
           if(this.arrayProdutos2[i].id2 == id2){
                this.arrayProdutos2[i].nomeProduto2 = produto2.nomeProduto2;
                this.arrayProdutos2[i].qntPotencia2 = produto2.qntPotencia2;
                this.arrayProdutos2[i].qntTempo2 = produto2.qntTempo2;
           }

        }

    }

    lerDados2(){
        let produto2 = {};

        produto2.id2 = this.id2;
        produto2.nomeProduto2 = document.getElementById('equipamento2').value;
        produto2.qntPotencia2 = document.getElementById('potencia2').value;
        produto2.qntTempo2 = document.getElementById('tempo2').value;

        return produto2;
    }


    validaCampo2(produto2){

        let msg = '';

        if (produto2.nomeProduto2 == ''){
            msg += 'Informe o nome do equipamento! \n'; 
        }

        if (produto2.qntPotencia2 == ''){
            msg += 'Informe a potência do equipamento! \n'; 
        }

        if (produto2.qntTempo2 == ''){
            msg += 'Informe o tempo de uso do equipamento! \n';    
        }

        if (msg != ''){
            alert(msg);
            return false;
        }

        return true;
    }


    cancelar2() {
        document.getElementById("equipamento2").value='';
        document.getElementById("potencia2").value='';
        document.getElementById("tempo2").value='';

        document.getElementById('btn2').innerText = 'Salvar';
        this.editId2 = null;
    }

    deletar2(id2) {
        let tboby2 = document.getElementById('tbody2');

        for(let i=0; i < this.arrayProdutos2.length; i++){
            if(this.arrayProdutos2[i].id2 == id2){
                this.arrayProdutos2.splice(i, 1);
                tbody2.deleteRow(i);
            }
            console.log(this.arrayProdutos2);

        }
    }

    editar2(dados2){

        this.editId2 = dados2.id2;

        document.getElementById('equipamento2').value = dados2.nomeProduto2;
        document.getElementById('potencia2').value = dados2.qntPotencia2;
        document.getElementById('tempo2').value = dados2.qntTempo2;
        
        document.getElementById('btn2').innerText = 'Atualizar';
    }

}

var produto2 = new Produto2();


  function  listaTabela3(){
        let tbody3 = document.getElementById('tbody3');
        let total1 = produto.listaTabela();
        let total2 = produto2.listaTabela2();
    
            let tr = tbody3.insertRow();

            let td_Energiamensalpordia = tr.insertCell();
            let td_Energiamensalpormes = tr.insertCell();
            let td_Total = tr.insertCell();

            td_Energiamensalpordia.classList.add('center');
            td_Energiamensalpormes.classList.add('center');
            td_Total.classList.add('center');

            td_Energiamensalpordia.innerText = total1 + " " + "kWh";
            td_Energiamensalpormes.innerText = total2 + " " + "kWh";
            td_Total.innerText = total1 + total2 + " " + "kWh";

}