const alvo = document.querySelector('#alvo')
const batman = document.querySelector('#batman')
const velr = document.querySelector('#velozes_furiosos_1')
const velo = document.querySelector('#velozes_furiosos_2')
const veloz = document.querySelector('#velozes_furiosos_3')
const resul =document.querySelector('#resultado')


batman.addEventListener('click',function(){
    alvo.src ='imagem/16-the-batman.jpeg'
     resul.textContent= 'The Batman, lançado em 2022, é uma versão mais sombria e introspectiva do personagem criado por Bob Kane e Bill Finger. Dirigido por Matt Reeves e estrelado por Robert Pattinson no papel principal, o filme se distanciam das adaptações anteriores de Batman, oferecendo uma abordagem mais realista e focada no lado investigativo do herói.'
}) 


velr.addEventListener('click',function(){
    alvo.src='imagem/Velozes-Furiosos-1.jpg'
    resul.textContent=' O filme segue Brian O Conner, um policial disfarçado, que é designado para investigar uma série de assaltos a caminhões que envolvem corridas ilegais de rua em Los Angeles. Durante sua missão, ele se envolve com Dominic Toretto, um carismático líder de um grupo de corredores de rua e mecânicos. Brian começa a se aproximar de Toretto e sua irmã, Mia Toretto (Jordana Brewster), e acaba dividindo sua lealdade entre a polícia e sua nova "família". O enredo mistura ação com adrenalina das corridas de rua, enquanto Brian se vê dividido entre sua missão e a amizade com Dominic. '

})
velo.addEventListener('click',function(){
    alvo.src='imagem/velozes -furiosos2.jpg'
    resul.textContent= 'Brian O Conner, após ser afastado da polícia, se encontra com Roman Pearce, e os dois se envolvem em uma missão para desmantelar um cartel de drogas. Eles acabam correndo contra o tempo e enfrentando desafios no mundo das corridas e tráfico de drogas, enquanto tentam ganhar a confiança de um agente do governo. O filme aumentou o foco nas cenas de ação e corridas, além de explorar a dinâmica entre os personagens. '
    
})
veloz.addEventListener('click',function(){
    alvo.src='imagem/velozes e furiosos 3.jpg'
    resul.textContent = 'Em Tóquio, Sean se envolve com Han (Sung Kang), um dos principais corredores da cena local, e começa a aprender o estilo de direção "drift", enquanto se envolve com o crime local e enfrenta rivais no mundo das corridas. Este filme não contou com a participação de Paul Walker ou Vin Diesel, mas Han se tornou um personagem muito querido e uma presença importante nos filmes seguintes da franquia.'
})