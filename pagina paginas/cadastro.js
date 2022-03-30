
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
          codV = document.getElementById("cod").value
          prodV = document.getElementById("prodV").value
          precoV = document.getElementById("preco").value
          imagemV = document.getElementById("imagem").scr
      }

      function Inserir() {
          Dados();
          firebase.database().ref("Produtos/Pizza/" + codV).set({
              Produto: prodV,
              Preco: precoV,
          });
      }

      function DadosCliente() {
          cpfV = document.getElementById("cpfhtml").value
          nomeV = document.getElementById("nomehtml").value
          telefoneV = document.getElementById("telefonehtml").value
          cepV = document.getElementById("cep").value
          bairroV = document.getElementById("bairro").value
          ruaV = document.getElementById("rua").value
          cidadeV = document.getElementById("cidade").value
          ufV = document.getElementById("uf").value
          refV = document.getElementById("ref").value
          numerodacasaV = document.getElementById("numerodacasa").value

      }

      function InserirCliente() {

          DadosCliente();
          firebase.database().ref("Clientes/" + telefoneV).set({
              CPF: cpfV,
              Nome: nomeV,
              Telefone: telefoneV,
              Cep: cepV,
              Bairro: bairroV,
              Rua: ruaV,
              Cidade: cidadeV,
              UF: ufV,
              Referencia: refV,
              Numero: numerodacasaV,


          });
      }

      function SalvarCPFantesdospontos() {

          var cpforiginal = document.getElementById("cpfhtml");
          // Função que salvaria o cpf antes da formatação, porém não consegui aplicar
          // colocaria o cpf antes do replace para ser enviado ao FB
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

    function validarCPF(cpf) {
        cpf = cpf.replace(/[^\d]+/g, '');
    } 
   
    $(document).ready(function() {

      function limpa_formulário_cep() {
          // Limpa valores do formulário de cep.
          $("#rua").val("");
          $("#bairro").val("");
          $("#cidade").val("");
          $("#uf").val("");

      }


      $("#cep").blur(function() {


          var cep = $(this).val().replace(/\D/g, '');


          if (cep != "") {


              var validacep = /^[0-9]{8}$/;


              if (validacep.test(cep)) {

                  //Preenche os campos com "..." enquanto consulta webservice.
                  $("#rua").val("...");
                  $("#bairro").val("...");
                  $("#cidade").val("...");
                  $("#uf").val("...");



                  $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function(dados) {

                      if (!("erro" in dados)) {
                          //Atualiza os campos com os valores da consulta//
                          $("#rua").val(dados.logradouro);
                          $("#bairro").val(dados.bairro);
                          $("#cidade").val(dados.localidade);
                          $("#uf").val(dados.uf);

                      } else {

                          limpa_formulário_cep();
                          alert("CEP não encontrado.");
                      }
                  });
              } else {

                  limpa_formulário_cep();
                  alert("Formato de CEP inválido.");
              }
          } else {

              limpa_formulário_cep();
          }
      });
  });