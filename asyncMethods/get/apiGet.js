const url = 'https://api-pacientes.herokuapp.com/pacientes'
const body = document.querySelector('body')
let nome
let peso
let altura
let gordura
let imc

const creatingHtmlElements = ((nome, peso, altura, gordura, imc) =>{
    let pNome = document.createElement('p')
    let pPeso = document.createElement('p')
    let pAltura = document.createElement('p')
    let pGordura = document.createElement('p')
    let pImc = document.createElement('p')
    
    pNome.innerText = nome
    pPeso.innerText = peso
    pAltura.innerText = altura
    pGordura.innerText = gordura
    pImc.innerText = imc

    criaDiv = document.createElement('div')
    criaDiv.setAttribute('class', 'divs')
    criaDiv.append(pNome,pPeso, pAltura, pGordura, pImc)
    body.append(criaDiv)
    
    return body
})
const getApiData = async () =>{
    const response = await fetch(url)
    const data = await response.json()
    data.forEach(e =>{
        nome = e.nome
        peso = e.peso
        altura = e.altura
        gordura = e.gordura
        imc = e.imc
        
        creatingHtmlElements(nome, peso, altura, gordura, imc)
    })
}
getApiData()