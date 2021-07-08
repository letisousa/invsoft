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
var myIcon2 = L.icon({
    iconUrl: './imagens/ilaranja.png',
    iconSize: [35,35],

});

//posição de coronados
let marker01 = L.marker([-7.0809529, -34.8390179], {icon: myIcon2}).addTo(myMap)
let popup01 = marker01.bindPopup("<b>Letícia Souza</b><br>Estou contaminado(a)!");

let marker02 = L.marker([-7.0809429, -34.8350159], {icon: myIcon2}).addTo(myMap)
let popup02 = marker02.bindPopup("<b>André Silva</b><br>Estou contaminado(a)!");

let marker03 = L.marker([-7.0805539, -34.837890179], {icon: myIcon2}).addTo(myMap)
let popup03 = marker03.bindPopup("<b>Elaine Souza</b><br>Estou contaminado(a)!");

let marker04 = L.marker([-7.1166, -34.8825], {icon: myIcon2}).addTo(myMap)
let popup04 = marker04.bindPopup("<b>Rebeca Raab</b><br>Estou contaminado(a)!");

let marker05 = L.marker([-7.1213,-34.8639], {icon: myIcon2}).addTo(myMap)
let popup05 = marker05.bindPopup("<b>João Costa</b><br>Estou contaminado(a)!");

let marker06 = L.marker([-7.1233, -34.8532], {icon: myIcon2}).addTo(myMap)
let popup06 = marker06.bindPopup("<b>Erique Bezerra</b><br>Estou contaminado(a)!");

let marker07 = L.marker([-7.1074, -34.8567], {icon: myIcon2}).addTo(myMap)
let popup07 = marker07.bindPopup("<b>Sténio Éllison</b><br>Estou contaminado(a)!");

let marker08 = L.marker([-7.0710, -34.8404], {icon: myIcon2}).addTo(myMap)
let popup08 = marker08.bindPopup("<b>Joisom Silva</b><br>Estou contaminado(a)!");

let marker09 = L.marker([-7.1013, -34.8330], {icon: myIcon2}).addTo(myMap)
let popup09 = marker09.bindPopup("<b>Ewerton Moura</b><br>Estou contaminado(a)!");

let marker010 = L.marker([-7.1197, -34.8246], {icon: myIcon2}).addTo(myMap)
let popup010 = marker010.bindPopup("<b>Samira Facury</b><br>Estou contaminado(a)!");

let marker011 = L.marker([-7.1250,-34.8421], {icon: myIcon2}).addTo(myMap)
let popup011 = marker011.bindPopup("<b>Wenderson Carlos</b><br>Estou contaminado(a)!");

let marker012 = L.marker([-7.1297, -34.8784], {icon: myIcon2}).addTo(myMap)
let popup012 = marker012.bindPopup("<b>Júlio Gusmão</b><br>Estou contaminado(a)!");

let marker013 = L.marker([-7.1311,-34.8229], {icon: myIcon2}).addTo(myMap)
let popup013 = marker013.bindPopup("<b>Matheus Ambrósio</b><br>Estou contaminado(a)!");

let marker014 = L.marker([-7.1179, -34.8429], {icon: myIcon2}).addTo(myMap)
let popup014 = marker014.bindPopup("<b>Carlos Silva</b><br>Estou contaminado(a)!");

let marker015 = L.marker([-7.1226, -34.8866], {icon: myIcon2}).addTo(myMap)
let popup015 = marker015.bindPopup("<b>Pedro Felipe</b><br>Estou contaminado(a)!");

let marker016 = L.marker([-7.1277, -34.8790], {icon: myIcon2}).addTo(myMap)
let popup016 = marker016.bindPopup("<b>Felipe José</b><br>Estou contaminado(a)!");

let marker017 = L.marker([-7.1408, -34.9122], {icon: myIcon2}).addTo(myMap)
let popup017 = marker017.bindPopup("<b>Victor Ferreira</b><br>Estou contaminado(a)!");

let marker018 = L.marker([-7.1494, -34.9070], {icon: myIcon2}).addTo(myMap)
let popup018 = marker018.bindPopup("<b>Yan Lins</b><br>Estou contaminado(a)!");

let marker019 = L.marker([-7.1504, -34.8831], {icon: myIcon2}).addTo(myMap)
let popup019 = marker019.bindPopup("<b>Yuri Facury</b><br>Estou contaminado(a)!");

let marker020 = L.marker([ -7.1575,-34.8755], {icon: myIcon2}).addTo(myMap)
let popup020 = marker020.bindPopup("<b>Uli Pedrosa</b><br>Estou contaminado(a)!");

let marker022 = L.marker([-7.1216, -34.8388], {icon: myIcon2}).addTo(myMap)
let popup022 = marker022.bindPopup("<b>Camila Pinto</b><br>Estou contaminado(a)!");

let marker021 = L.marker([ -7.1212, -34.8446], {icon: myIcon2}).addTo(myMap)
let popup021 = marker021.bindPopup("<b>Fernando Torres</b><br>Estou contaminado(a)!");

let marker023 = L.marker([-7.1216,-34.8386], {icon: myIcon2}).addTo(myMap)
let popup023 = marker023.bindPopup("<b>Neliel Andrade</b><br>Estou contaminado(a)!");

let marker024 = L.marker([-7.1590, -34.8378], {icon: myIcon2}).addTo(myMap)
let popup024 = marker024.bindPopup("<b>Vinícius Costa</b><br>Estou contaminado(a)!");

let marker025 = L.marker([-7.1592, -34.8056], {icon: myIcon2}).addTo(myMap)
let popup025 = marker025.bindPopup("<b>Laura Bezerra</b><br>Estou contaminado(a)!");

let marker026 = L.marker([ -7.1565, -34.834], {icon: myIcon2}).addTo(myMap)
let popup026 = marker026.bindPopup("<b>Joyce Batista</b><br>Estou contaminado(a)!");

let marker027 = L.marker([-7.1575, -34.8388], {icon: myIcon2}).addTo(myMap)
let popup027 = marker027.bindPopup("<b>Sara Dias</b><br>Estou contaminado(a)!");

let marker028 = L.marker([-7.1688, -34.8374], {icon: myIcon2}).addTo(myMap)
let popup028 = marker028.bindPopup("<b>Matheus Arnauld</b><br>Estou contaminado(a)!");

let marker029 = L.marker([-7.1778, -34.8378], {icon: myIcon2}).addTo(myMap)
let popup029 = marker029.bindPopup("<b>Daniele Farias</b><br>Estou contaminado(a)!");

let marker030 = L.marker([-7.1571, -34.8083], {icon: myIcon2}).addTo(myMap)
let popup030 = marker030.bindPopup("<b>Thiago Silva</b><br>Estou contaminado(a)!");

let marker033 = L.marker([-7.1645, -34.8199], {icon: myIcon2}).addTo(myMap)
let popup033 = marker033.bindPopup("<b>Allan Pinto</b><br>Estou contaminado(a)!");

let marker034 = L.marker([-7.2044,-34.8464], {icon: myIcon2}).addTo(myMap)
let popup034 = marker034.bindPopup("<b>Jão Pedrosa</b><br>Estou contaminado(a)!");

let marker031 = L.marker([-7.2074,-34.8417], {icon: myIcon2}).addTo(myMap)
let popup031 = marker031.bindPopup("<b>Jenyfer Souza</b><br>Estou contaminado(a)!");

let marker032 = L.marker([-7.1800, -34.8679], {icon: myIcon2}).addTo(myMap)
let popup032 = marker032.bindPopup("<b>Camila Facury</b><br>Estou contaminado(a)!");

let marker035 = L.marker([-7.1618, -34.8942], {icon: myIcon2}).addTo(myMap)
let popup035 = marker035.bindPopup("<b>Cristina Lins</b><br>Estou contaminado(a)!");

let marker036 = L.marker([ -7.1776, -34.9163], {icon: myIcon2}).addTo(myMap)
let popup036 = marker036.bindPopup("<b>Cristiane Souza</b><br>Estou contaminado(a)!");

let marker037 = L.marker([-7.1825, -34.8843], {icon: myIcon2}).addTo(myMap)
let popup037 = marker037.bindPopup("<b>Fernanda Costa</b><br>Estou contaminado(a)!");

let marker039 = L.marker([-7.2017,-34.8578], {icon: myIcon2}).addTo(myMap)
let popup039 = marker039.bindPopup("<b>Fernando Silva</b><br>Estou contaminado(a)!");

let marker040 = L.marker([-7.1833,-34.8835], {icon: myIcon2}).addTo(myMap)
let popup040 = marker040.bindPopup("<b>Paula Souza</b><br>Estou contaminado(a)!");

let marker041 = L.marker([-7.2017, -34.8528], {icon: myIcon2}).addTo(myMap)
let popup041 = marker041.bindPopup("<b>Paulo Raab</b><br>Estou contaminado(a)!");

let marker042 = L.marker([-7.1590, -34.8988], {icon: myIcon2}).addTo(myMap)
let popup042 = marker042.bindPopup("<b>Letícia Leite</b><br>Estou contaminado(a)!");

let marker043 = L.marker([-7.1575,-34.8720], {icon: myIcon2}).addTo(myMap)
let popup043 = marker043.bindPopup("<b>Sténio Silva</b><br>Estou contaminado(a)!");

let marker044 = L.marker([-7.1344, -34.8213], {icon: myIcon2}).addTo(myMap)
let popup044 = marker044.bindPopup("<b>Júlio Souza</b><br>Estou contaminado(a)!");

let marker045 = L.marker([-7.1540, -34.8320], {icon: myIcon2}).addTo(myMap)
let popup045 = marker045.bindPopup("<b>Ewerton Raab</b><br>Estou contaminado(a)!");

let marker046 = L.marker([-7.1614,-34.8699], {icon: myIcon2}).addTo(myMap)
let popup046 = marker046.bindPopup("<b>Erique Bezerra</b><br>Estou contaminado(a)!");

let marker047 = L.marker([-7.1563, -34.8932], {icon: myIcon2}).addTo(myMap)
let popup047 = marker047.bindPopup("<b>Sténio Éllison</b><br>Estou contaminado(a)!");

let marker048 = L.marker([-7.1757, -34.8825], {icon: myIcon2}).addTo(myMap)
let popup048 = marker048.bindPopup("<b>Joisom Silva</b><br>Estou contaminado(a)!");

let marker049 = L.marker([ -7.1362, -34.8322], {icon: myIcon2}).addTo(myMap)
let popup049 = marker049.bindPopup("<b>Ewerton Moura</b><br>Estou contaminado(a)!");

let marker050 = L.marker([-7.1554, -34.8293], {icon: myIcon2}).addTo(myMap)
let popup050 = marker050.bindPopup("<b>Samira Facury</b><br>Estou contaminado(a)!");

let marker051 = L.marker([-7.1736, -34.8400], {icon: myIcon2}).addTo(myMap)
let popup051 = marker051.bindPopup("<b>Paulo Raab</b><br>Estou contaminado(a)!");

let marker052 = L.marker([ -7.1573, -34.8199], {icon: myIcon2}).addTo(myMap)
let popup052 = marker052.bindPopup("<b>Letícia Leite</b><br>Estou contaminado(a)!");

let marker053 = L.marker([-7.1558, -34.8277], {icon: myIcon2}).addTo(myMap)
let popup053 = marker053.bindPopup("<b>Sténio Silva</b><br>Estou contaminado(a)!");

let marker054 = L.marker([-7.1258, -34.8701], {icon: myIcon2}).addTo(myMap)
let popup054 = marker054.bindPopup("<b>Júlio Souza</b><br>Estou contaminado(a)!");

let marker055 = L.marker([-7.1260, -34.8821], {icon: myIcon2}).addTo(myMap)
let popup055 = marker055.bindPopup("<b>Ewerton Raab</b><br>Estou contaminado(a)!");

//fim da posição de coronados


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