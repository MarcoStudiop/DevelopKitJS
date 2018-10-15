
//JAVASCRIPT
function f(){
    console.log("faccio qualcosa");
}


function b(fc){
    this.function = fc;
    return this;
}

b(()=>{var a="pollo"});

// LAMBDA
var f = () =>{ console.log("faccio qualcosa");}


//funzioni anonime
var a = function(){ console.log(x)}
console.log("faccio qualcosa di nascosto", function(){console.log("vendo i polli")})

console.log("faccio qualcosa" , ()=>{return "qualcosa"})



//CREAZIONE OGGETTI

function persona(nome,cognome,anni){
    this.nome = nome;
    this.cognome = cognome;
    this.anni = anni;
   


};


const persona01 = new persona("marco","saviano",25);

persona01.prototype.setNome = function(nome){
    this.nome = nome;
    return this.nome;
};

setNome("pollo");
console.log(persona01.nome);