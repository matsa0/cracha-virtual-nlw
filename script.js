//DOM - DOCUMENT OBJECT MODEL
/*
O DOM é uma representação orientada a objetos da página da web, que pode ser modificada com uma linguagem de 
script como JavaScript.

É ele que fornece uma representação estruturada do documento como se fosse uma espécie de árvore com galhos, 
definindo métodos para que possam ser alterados estrutura, estilo e conteúdo do documento.

Você consegue alterar elementos da sua página através do DOM com uma liguagem como JAVASCIPT

Você acessa a DOM através do document
*/

const linkSocialMedia =
{
    github: 'matsa0',
    twitter: 'matsaxd',
    instagram: 'msazevedo_',
    discord: 'CwKVS9cb3X',
    linkedin: 'matsa0'
}

const domain =
{
    github: 'com',
    twitter: 'com',
    instagram: 'com',
    discord: 'gg',
    linkedin: 'com'
}

/*
function changeUsername(name)
{
    document.getElementById('username').textContent = name
}
*/

function changeSocialMediaLinks()
{
    for(let li of socialMediaInfos.children) //pega os filhos da UL e armazena na variável li
    {
        const social = li.getAttribute('class')
        li.children[0].href = `https://${social}.${domain[social]}/${linkSocialMedia[social]}` 

        /*
        A 'li.children[0].href' pega o href da tag <a> que é filha da li

        Ela recebe um template string que contém a variável 'social' que tem como função armazenar a captura
        das classes dos filhos da ul.   

        Os conteúdos dessa variável são substituídos na parte do *link* onde possui o nome das redes sociais.

        O *usuário* também é substítuido através do objeto que foi criado, e para saber qual user certo, ele passa
        como posição a variável 'social', que possui *os mesmos nomes* das 'classes'.
        */ 

        console.log(social)
    }
}
changeSocialMediaLinks()

function getGitHubInfos()
{
    const url = `https://api.github.${domain.github}/users/${linkSocialMedia.github}`
    
    //arrow function(=> não possui um nome, somente o parâmetro(variável) response
    fetch(url).then(response => response.json()) //transforma o objeto que foi pegado em json(consumindo api)
    .then(data => {
        username.textContent = data.name
        userBio.textContent = data.bio
        gitHubLink.href = data.html_url
        userGitHub.textContent = data.login
        userPicture.src = data.avatar_url
        linkedinLink.href = data.blog
    })  
    
    /*Guarda a respopsta da url da api*/
    /*Promise: Pegar as respostas do fetch
    .then: o retorno da resposta vai para o .then (então faça isso)*/
}

getGitHubInfos()