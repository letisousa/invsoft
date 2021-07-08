const tilesProvider = 'https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png'

let myMap = L.map('myMap').setView([-7.11532, -34.861], 13)

L.tileLayer(tilesProvider, {
    maxZoom: 18,
}).addTo(myMap)

//marker
var myIcon = L.icon({
    iconUrl: './imagens/iconhospital.png',
    iconSize: [30,30],

});



//Posição hospitais

let marker = L.marker([-7.0709523, -34.8390184], {icon: myIcon}).addTo(myMap)
let popup = marker.bindPopup("<b>USF Bessa</b><br>R. Napoleão Gomes Varela, 385 <br> Bessa, João Pessoa - PB <br> CEP: 58035-080 ");

let marker2 = L.marker([-7.09697715, -34.839784909851176], {icon: myIcon}).addTo(myMap)
let popup2 = marker2.bindPopup("<b>UPA oceania </b><br>Av. Gov. Flávio Ribeiro Coutinho, 70 <br> Aeroclube, João Pessoa - PB<br> CEP:  58036-800 ");

let marker3 = L.marker([-7.112226700000001, -34.824494900000005], {icon: myIcon}).addTo(myMap)
let popup3 = marker3.bindPopup("<b>Unidade de Saúde das Praias </b><br>Avenida Olinda, Tambaú, João Pessoa - PB <br> CEP: 58039-120");

let marker4 = L.marker([-7.09697715, -34.839784909851176], {icon: myIcon}).addTo(myMap)
let popup4 = marker4.bindPopup("<b>USF São José (São José I, II, III, IV e V)</b><br>Av. Vigolvino Florentino da Costa, sn <br> Manaíra, João Pessoa - PB<br>  CEP: 58038-580 ");

let marker5 = L.marker([-7.1211859, -34.8580648], {icon: myIcon}).addTo(myMap)
let popup5 = marker5.bindPopup("<b>USF Torre I </b><br>Av. Rui Barbosa, 273  <br> João Pessoa - PB, 58040-490");

let marker6 = L.marker([-7.1298068, -34.85770491421072], {icon: myIcon}).addTo(myMap)
let popup6 = marker6.bindPopup("<b>Hospital Alberto Urquiza Wanderley - Unimed João Pessoa </b><br>Av. Min. José Américo de Almeida, 1450<br>  Torre, João Pessoa - PB, 58040-300 ");

let marker7 = L.marker([-7.1316439, -34.8710327], {icon: myIcon}).addTo(myMap)
let popup7 = marker7.bindPopup("<b>Complexo de Doencas Infecto Contagiosas Clementino Fraga </b><br>R. Estér Borges Bastos, s/n <br> Jaguaribe, João Pessoa - PB, 58015-270");

let marker8 = L.marker([-7.1297741, -34.8425725], {icon: myIcon}).addTo(myMap)
let popup8 = marker8.bindPopup("<b>USF Castelo Branco I </b><br>r Praça Abdon Milanez - s/n <br> João Pessoa - PB, 58050-370  ");

let marker9 = L.marker([-7.1328911, -34.9812908], {icon: myIcon}).addTo(myMap)
let popup9 = marker9.bindPopup("<b>USF - Altiplano I e II </b><br>Lot. Jardim Bela Vista<br> João Pessoa - PB, 58033-455 ");

let marker10 = L.marker([58033-455 - -7.1451314, -34.850811], {icon: myIcon}).addTo(myMap)
let popup10 = marker10.bindPopup("<b>UPA Bancários </b><br>R. Empresário João Rodrigues Alves<br> Bancários, João Pessoa - PB, 58033-455");

let marker11 = L.marker([-7.1486, -34.8356], {icon: myIcon}).addTo(myMap)
let popup11 = marker11.bindPopup("<b>UPA Bancários e Aldeia SOS </b><br>R. Esmeraldo Gomes Vieira, sn<br>  Bancários, João Pessoa - PB, 58051-650 ");

let marker12 = L.marker([-7.1099, -34.8364 ], {icon: myIcon}).addTo(myMap)
let popup12 = marker12.bindPopup("<b>Centro de Saúde Maria Luiza Targino (USF São José) </b><br> Av. Vigolvino Florentino da Costa, sn<br> Manaíra, João Pessoa - PB, 58038-580  ");

let marker13 = L.marker([-7.1717, -34.8133], {icon: myIcon}).addTo(myMap)
let popup13 = marker13.bindPopup("<b>PSF Penha </b><br>Av. Gov. Flávio Ribeiro Coutinho, 70 <br> Aeroclube, João Pessoa - PB<br>  58036-800 ");

let marker14 = L.marker([-7.09697715, -34.839784909851176], {icon: myIcon}).addTo(myMap)
let popup14 = marker14.bindPopup("<b>UPA oceania </b><br>Av. Nossa Sra. da Penha, 546 - Penha<br> João Pessoa - PB, 58038-580  ");

let marker15 = L.marker([ -7.1678,-34.8326], {icon: myIcon}).addTo(myMap)
let popup15 = marker15.bindPopup("<b>USF Mangabeira VI </b><br>Rua Professora Wanda de Farias Coutinho, 423 <br> Mangabeira, João Pessoa - PB, 58058-000 ");

let marker16 = L.marker([-7.1746866, -34.8210808], {icon: myIcon}).addTo(myMap)
let popup16 = marker16.bindPopup("<b>USF Verdes Mares </b><br>R. José Eustaquio da Fonseca - Cidade verde II<br>  João Pessoa - PB, 58033-455 ");

let marker17 = L.marker([-7.1675, -34.8309], {icon: myIcon}).addTo(myMap)
let popup17 = marker17.bindPopup("<b>USF Quatro Estações Mangabeira VI 2a Etapa </b><br>R. Jurema Teotônio da Silva, sn - Mangabeira <br>  João Pessoa - PB, 58058-235");

let marker18 = L.marker([-7.1585, -34.8349], {icon: myIcon}).addTo(myMap)
let popup18 = marker18.bindPopup("<b>Caps III Caminhar Bancários </b><br>R. Paulino dos Santos Coelho Jardim Cidade Universitaria<br>  João Pessoa - PB ");

let marker19 = L.marker([-7.1654,-34.8358], {icon: myIcon}).addTo(myMap)
let popup19 = marker19.bindPopup("<b>USF - Mangabeira VII </b><br> R. Olívia de Azevedo Sena, 69<br>  Mangabeira, João Pessoa - PB, 58058-070 ");

let marker20 = L.marker([ -7.1666, -34.8549], {icon: myIcon}).addTo(myMap)
let popup20 = marker20.bindPopup("<b>USF José Americo I </b><br> R. Leila Diniz, sn - José Américo de Almeida<br>João Pessoa - PB, 58073-180 ");

let marker21 = L.marker([-7.1986,-34.8463], {icon: myIcon}).addTo(myMap)
let popup21 = marker21.bindPopup("<b>Unidade de Pronto Atendimento - UPA 24 Horas Célio Pires de Sá </b><br>Valentina -  R. Estêvão Lopes Galvão, sn<br>  Valentina, João Pessoa - PB, 58064-090 ");

let marker22 = L.marker([-7.1866, -34.8643], {icon: myIcon}).addTo(myMap)
let popup22 = marker22.bindPopup("<b>USF Saúde em Ação (Geisel III)</b><br> R. Olívio de Moraes Magalhães, sn Cuiá<br>Lot. Jaqueira, João Pessoa - PB, 58077-128");

let marker23 = L.marker([-7.1986,-34.8463], {icon: myIcon}).addTo(myMap)
let popup23 = marker23.bindPopup("<b>Unidade de Pronto Atendimento - UPA 24 Horas Célio Pires de Sá </b><br>Valentina -  R. Estêvão Lopes Galvão, sn <br> Valentina, João Pessoa - PB, 58064-090");

let marker24 = L.marker([-7.1783, -34.8445], {icon: myIcon}).addTo(myMap)
let popup24 = marker24.bindPopup("<b>SF - Nova União</b><br>Av. Gov. Flávio Ribeiro Coutinho, 70R. João Francisco Alves, s/n - Mangabeira <br> João Pessoa - PB, 58057-590");

let marker25 = L.marker([-7.2046928, -34.8370864], {icon: myIcon}).addTo(myMap)
let popup25 = marker25.bindPopup("<b>USF Paratibe II  </b><br>R. Maria Doraci Moreira, Qd. 986 - Lt. 185 - Paratibe<br>João Pessoa - PB, 58062-309");

let marker26 = L.marker([-7.1986, -34.8462], {icon: myIcon}).addTo(myMap)
let popup26 = marker26.bindPopup("<b>Hospital Valentina de FigueIredo</b><br> Av. Mariângela Lucena Peixoto, 190-320 - Conj. Valentina Figueredo II, <br>  João Pessoa - PB, 58033-455 ");

let marker27 = L.marker([-7.2005, -34.8451], {icon: myIcon}).addTo(myMap)
let popup27 = marker27.bindPopup("<b>USF - Valentina IV  <br>R. Paulo de Medeiros Gomes, 128<br> Valentina 1, João Pessoa - PB, 58064-140 ");

let marker28 = L.marker([-7.2046,-34.8481], {icon: myIcon}).addTo(myMap)
let popup28 = marker28.bindPopup("<b>USF Valentina Integrada (Valentina I, II e III) </b><br>Av. Mariângela Lucena Peixoto, sn - Valentina<br> João Pessoa - PB, 58063-540");

let marker29 = L.marker([-7.2060438, -34.8571495], {icon: myIcon}).addTo(myMap)
let popup29 = marker29.bindPopup("<b>Centro de Saude Nova Esperança - Unidade II </b><br>Av. Frei Galvão, 12 - Gramame<br> João Pessoa - PB, 58067-695");

let marker30 = L.marker([-7.1753, -34.8375], {icon: myIcon}).addTo(myMap)
let popup30 = marker30.bindPopup("<b>Complexo Hospitalar Municipal Governador Tarcisio de Miranda Burity (Ortotrauma) <br> Av. Nossa Senhora da Luz sn esquina com: Rua Ag. Fiscal José da<br>  ");

let marker31 = L.marker([ -7.2097, -34.8395], {icon: myIcon}).addTo(myMap)
let popup31 = marker31.bindPopup("<b>USF - Integrada Rosa de Fátima <br> R. Oscar Lopes Machado, s/n <br>  Paratibe, João Pessoa - PB, 58066-120 ");

let marker32 = L.marker([-7.2084379, -34.843322], {icon: myIcon}).addTo(myMap)
let popup32 = marker32.bindPopup("<b>Upa polícia militar  <br> Perimetral Sul - Gramame, João Pessoa - PB ");

let marker33 = L.marker([-7.118535, -34.870185], {icon: myIcon}).addTo(myMap)
let popup33 = marker33.bindPopup("<b>Hospital prontovida</b><br>Av. Monsenhor Walfredo Leal, 46 - Tambiá,<br> João Pessoa - PB, 58020-540");

let marker34 = L.marker([-7.1182, -34.8705], {icon: myIcon}).addTo(myMap)
let popup34 = marker34.bindPopup("<b>Hospital geral Santa Isabel  </b><br>Praça Caldas Brandão, S/N<br>  Tambiá, João Pessoa - PB, 58020-560");

let marker35 = L.marker([-7.1314, -34.8716], {icon: myIcon}).addTo(myMap)
let popup35 = marker35.bindPopup("<b>Complexo de Doencas Infecto Contagiosas Clementino Fraga</b><br>R. Estér Borges Bastos, s/n - Jaguaribe<br>   João Pessoa - PB, 58015-270  ");

let marker36 = L.marker([-7.1259, -34.9482], {icon: myIcon}).addTo(myMap)
let popup36 = marker36.bindPopup("<b> R. Roberto Santos Corrêa, S/N - Várzea Nova <br>Santa Rita - PB, 58319-000 ");

let marker37 = L.marker([-7.1461, -34.8498], {icon: myIcon}).addTo(myMap)
let popup37 = marker37.bindPopup("<b>Hospital Universitário Lauro Wanderley </b><br>R. Tab. Stanislau Eloy, 585 <br> Castelo Branco, João Pessoa - PB, 58050-585 ");

let marker38 = L.marker([-7.1443, -34.8167], {icon: myIcon}).addTo(myMap)
let popup38 = marker38.bindPopup("<b>USF Cidade Recreio</b><br>Av. Gov. Antônio da Silva Mariz<br> R. Antônio Dutra Sobrinho, sn <br>Portal do Sol, João Pessoa - PB, 58046-518");

let marker39 = L.marker([-7.1432217, -34.8876209], {icon: myIcon}).addTo(myMap)
let popup39 = marker39.bindPopup("<b>Unidade de Saúde da Família - USF<br>  Cruz das Armas, João Pessoa - PB, 58085-005");

let marker40 = L.marker([-7.1603, -34.8781], {icon: myIcon}).addTo(myMap)
let popup40 = marker40.bindPopup("<b>USF - Vila Saúde</b><br>R. Eng. Sérgio Rubens de Albuquerque,326<br> Cristo, João Pessoa - PB, 58071-440 ");

let marker41 = L.marker([-7.1774, -34.8731], {icon: myIcon}).addTo(myMap)
let popup41 = marker41.bindPopup("<b>USF Estação Saúde<br>R. José Darcí Ferreira - Ernesto Geisel<br> João Pessoa - PB, 58075-240");

let marker42 = L.marker([-7.1797, -34.8898], {icon: myIcon}).addTo(myMap)
let popup42 = marker42.bindPopup("<b>USF - Funcionários III E IV</b><br>R. Teresinha de Oliveira Justa, 162 <br> C Cidade dos Funcionários II, João Pessoa - PB, 58079-370");
//Fim das posições
//Localização do usário
var x=document.getElementById("demo");
function getLocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
    x.innerHTML="O seu navegador não suporta Geolocalização.";
    }
}
function showPosition(position)
  {
  lat=position.coords.latitude;
  lon=position.coords.longitude;
  latlon= L.marker([coords.lat, coords.lon]).addTo(myMap)
  mapholder=document.getElementById('mapholder')
  mapholder.style.height='250px';
  mapholder.style.width='500px';
 
  var myOptions={
  center:latlon,zoom:14,
  mapTypeId:google.maps.MapTypeId.ROADMAP,
  mapTypeControl:false,
  navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
  };
  var map=new google.maps.Map(document.getElementById("mapholder"),myOptions);
  var marker=new google.maps.Marker({position:latlon,map:map,title:"Você está Aqui!"});
  }

//let marker2000 = L.marker([-7.1194958, -34.8450118]).addTo(myMap)

/*var circle = L.circle([-7.11500, -34.858],{
    color:'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(myMap);*/

//circle.bindPopup("Eu sou o circulo");