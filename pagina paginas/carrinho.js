 // CONFIGURAÇÃO DO FIREBASE
 var firebaseConfig = {
  apiKey: "AIzaSyCoRU__Rq8TIULpqg96kqds44H0yjz2Nyg",
  authDomain: "olimpobr-44059.firebaseapp.com",
  databaseURL: "https://olimpobr-44059.firebaseio.com",
  projectId: "olimpobr-44059",
  storageBucket: "olimpobr-44059.appspot.com",
  messagingSenderId: "190190138422",
  appId: "1:190190138422:web:4bac478e5da73a7fed1497"
};
// INICIALIZAÇÃO DO FIREBASE
firebase.initializeApp(firebaseConfig);


function confirmado() {

  alert("Pedido Confirmado")

}

function guardartel() {
  telV = document.getElementById("telefone").value;
};

function puxar() {

  guardartel();

  firebase.database().ref("Clientes/" + telV).on("value", function(snapshot) {
      document.getElementById("cliente").value = snapshot.val().Nome;
      document.getElementById("rua").value = snapshot.val().Rua;
      document.getElementById("cidade").value = snapshot.val().Cidade;
      document.getElementById("bairro").value = snapshot.val().Bairro;
      document.getElementById("numero").value = snapshot.val().Numero;
      document.getElementById("referencia").value = snapshot.val().Referencia;
      document.getElementById("cpf").value = snapshot.val().CPF;
      document.getElementById("cep").value = snapshot.val().Cep;
  })
};

function carrinho() {

  guardartel();

  firebase.database().ref("Carrinho/" + telV).on("value", function(snapshot) {
      document.getElementById("produto").value = snapshot.val().Produto;
      document.getElementById("quantidade").value = snapshot.val().Quantidade;
      quantx = document.getElementById("quantidade").value;
      document.getElementById("valor").value = snapshot.val().Valor;
      valx = document.getElementById("valor").value;
      val = valx / quantx;

      document.getElementById("produto1").value = snapshot.val().Produto1;
      document.getElementById("quantidade1").value = snapshot.val().Quantidade1;
      quanty = document.getElementById("quantidade1").value;
      document.getElementById("valor1").value = snapshot.val().Valor1;
      valy = document.getElementById("valor1").value;
      val1 = valy / quanty;

      document.getElementById("produto2").value = snapshot.val().Produto2;
      document.getElementById("quantidade2").value = snapshot.val().Quantidade2;
      quantz = document.getElementById("quantidade2").value;
      document.getElementById("valor2").value = snapshot.val().Valor2;
      valz = document.getElementById("valor2").value;
      val2 = valz / quantz;

      vartotalxd = parseFloat(valx) + parseFloat(valy) + parseFloat(valz);
      const valorFormatado = Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL'
      }).format(vartotalxd);
      document.getElementById("vart").value = valorFormatado;
      
  })
};

function totalcarrinho() {


  quant = document.getElementById("quantidade").value;
  total1 = val * quant;
  document.getElementById("valor").value = parseFloat(total1.toFixed(2));

  quant1 = document.getElementById("quantidade1").value;
  total2 = val1 * quant1;
  document.getElementById("valor1").value = parseFloat(total2.toFixed(2));

  quant2 = document.getElementById("quantidade2").value;
  total3 = val2 * quant2;
  document.getElementById("valor2").value = parseFloat(total3.toFixed(2));

  totalV = total1 + total2 + total3;
  parseFloat(totalV).toFixed(2);
  const valorFormatado1 = Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL'
  }).format(totalV);
  document.getElementById("vart").value = valorFormatado1;

}
function mascara(i, t) {

  var v = i.value;

  if (isNaN(v[v.length - 1])) {
      i.value = v.substring(0, v.length - 1);
      return;
  }


  if (t == "cpf") {
      i.setAttribute("maxlength", "14");
      if (v.length == 3 || v.length == 7) i.value += ".";
      if (v.length == 11) i.value += "-";
  }

  if (t == "tel") {
      if (v[0] == 9) {
          i.setAttribute("maxlength", "10");
          if (v.length == 5) i.value += "-";
      } else {
          i.setAttribute("maxlength", "10");
          if (v.length == 5) i.value += "-";
      }
  }
}