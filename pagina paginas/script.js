 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCoRU__Rq8TIULpqg96kqds44H0yjz2Nyg",
  authDomain: "olimpobr-44059.firebaseapp.com",
  databaseURL: "https://olimpobr-44059.firebaseio.com",
  projectId: "olimpobr-44059",
  storageBucket: "olimpobr-44059.appspot.com",
  messagingSenderId: "190190138422",
  appId: "1:190190138422:web:4bac478e5da73a7fed1497"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function Dados() {
  codV = document.getElementById("prod").value
  quantF = document.getElementById("quantidade").value;
  valorF = document.getElementById("valor").value


}


function Procurar() {

  document.getElementById("quantidade").value = 1;
  codV = codigo;

  firebase.database().ref("Produtos/" + codV).on("value", function(snapshot) {
      document.getElementById("prod").value = snapshot.val().Produto;
      document.getElementById("preco").value = snapshot.val().Preco;
      document.getElementById("desc").value = snapshot.val().Descrição;
      document.getElementById("valortotal").value = snapshot.val().Preco;
      document.getElementById("fotox").src = snapshot.val().Foto;



  });
}

function valort() {
  quantidadeV = parseInt(document.getElementById("quantidade").value);
  if (quantidadeV >= 100) {
      window.location.href = "../imagens/gifpizza.gif";
  } else {
      valorV = parseFloat(document.getElementById("preco").value).toFixed(2);
      totalV = parseFloat(valorV * quantidadeV).toFixed(2);
      document.getElementById("valortotal").value = totalV;
  }

}
cont = 0;

function DadosCarrinho() {

  prodF = document.getElementById("prod").value;
  quantF = document.getElementById("quantidade").value;
  valorF = document.getElementById("valortotal").value;


  telV = document.getElementById("telefone").value;
  ///TERCEIRO PRODUTO
  if (cont == 2) {

      alert(cont);
      firebase.database().ref("Carrinho/" + telV).update({
          Produto2: prodF,
          Quantidade2: quantF,
          Valor2: valorF,
      })
      cont = cont + 1;
  };


  //SEGUNDO PRODUTO
  if (cont == 1) {

      alert(cont);
      firebase.database().ref("Carrinho/" + telV).update({
          Produto1: prodF,
          Quantidade1: quantF,
          Valor1: valorF,
      })
      cont = cont + 1;
  };


  //PRIMEIRO PRODUTO
  if (cont == 0) {
      alert(telV);
      alert("yes");
      firebase.database().ref("Carrinho/" + telV).update({

          Produto: prodF,
          Quantidade: quantF,
          Valor: valorF,

      })
      cont = cont + 1;
  };







};

var modal = document.getElementById('modal');
modal.addEventListener('click', function(e) {
  if (e.target == this) fecharx();
});

function fecharx() {
  modal.style.display = 'none';
}

function addaocarrinho() {
  DadosCarrinho();








}