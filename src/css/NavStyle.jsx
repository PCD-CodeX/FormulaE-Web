import styled from 'styled-components';

export const NavStyle = styled.section`
width: 100%;

:root {
    --color1:#08056d; //base de cores, mudar aqui nao adianta, tem que mudar no RESET.CSS!!!
    --color2:rgb(0,155,255); //base de cores, mudar aqui nao adianta, tem que mudar no RESET.CSS!!!
    --color3:#00c2ff; //base de cores, mudar aqui nao adianta, tem que mudar no RESET.CSS!!!
    --color4:#00ffff; //base de cores, mudar aqui nao adianta, tem que mudar no RESET.CSS!!!
    --opacity:rgba(0, 71, 255, 0.1) //base de cores, mudar aqui nao adianta, tem que mudar no RESET.CSS!!!
}


.links {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center; /* Mantém os itens distribuídos horizontalmente */
    font-size: clamp(10px, 0.4vw, 20px);
    margin-top: 1vh;
    margin-bottom: 1vh;
}

.logo {
    width: clamp(100px, 14vw, 240px); /* Mantém a logo flexível */
    margin-right: clamp(8px, 10vw, 200px);
    margin-bottom: 0vh;
}
.link{
    display: flex;
    justify-content: center;
    margin-right: clamp(8px, 6vw, 300px);
    padding: clamp(6px,1vw,30px);
    border-radius: 1vw;
    background-color: var(--opacity);
    border: clamp(2px,0.2vw,4px) solid var(--opacity) ;
    font-size: clamp(8px, 0.5vw, 20px);
    transition: 0.2s ease;
}
.link:hover{ 
    background-color: var(--opacity);
    border: 0.2vw solid var(--color1) ;
    scale: 1.03;
}
.h1{
    margin-right: clamp(8px,12vw, 240px); /* Margem controlada */
    font-size: clamp(8px, 0.6vw, 20px);
    font-weight:700;
}

@media (max-width: 1080px) {
    .links{
        flex-wrap: wrap;
    }

    
}
.nav{
    width: 100%;
    height: 1vh;
    background: linear-gradient(90deg, var(--color1), var(--color3));

}
.sidebar_container {
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    height: clamp(30px,4vw,100px);;
    width: clamp(30px, 8vh, 80px);
    margin-top: clamp(20px, 6vh, 200px); //da a altura do menu em relação ao topo
    margin-bottom: clamp(20px, 8vh, 200px);
    margin-left: clamp(30px, 4vw, 200px);
    background: linear-gradient(180deg, var(--color1), var(--color2));
    box-shadow: -0.4vw 0.4vw 0.4vw rgba(88, 88, 88, 0.3);
    border-radius: 1vw;
    transition: all 0.6s ease;
    opacity: 0.96;
    overflow: hidden;
    
}

.sidebar_container.expanded {
    height: clamp(300px,32vw,800px); //se mexer aqui, tem que mexer no margin-top do hamb.expanded!! se nao o simbolo da FE nao aparece
    width: clamp(80px,10vw,400px);
    background: linear-gradient(180deg, var(--color1), var(--color2)); ;
    border-radius: 1.2vw;
}

.sidebar {
    z-index: 3;
    display: flex;
    flex-direction: column;
    color: transparent;
    pointer-events: none;
    transition: all 0.1s ease-in; //em ease-in a nao mostra o menu vindo do topo do site, pois vai mais rapido ao ponto 0 antes de aparecer na tela
    //text-transform: uppercase;
}

.sidebar.expand {
    display: flex;
    color: white;
    pointer-events: auto;
}

.menu {
    z-index: 2;
    font-size: clamp(6px, 0.6vw, 20px);
    transition: 0.1s ease-out;

}
.menu.expand{
    margin-top: clamp(20px,3vw,80px);
    font-size: clamp(8px, 1vw, 20px);
    letter-spacing: clamp(1px,0.2vh,3px);
    font-weight: 700;
    padding: 0.4vw; //altura dos componentes 
}
.menu:hover {
    scale: 1.03;
}

#hamb {
    z-index: 4;
    display: flex;
    position: fixed;
    width: clamp(20px,2.4vw,60px);
    font-size: clamp(12px, 0.6vw, 20px);
    transition: all 0.6s ease;
    cursor: pointer;
}

#hamb:hover {
    scale: 1.1;
}

#hamb.expanded {
    margin-bottom: clamp(240px,26vw,1000px);
    rotate: 360deg;
}

li {
    display: flex;
    flex-direction: column;
    list-style: none;
    
}
a{
    color: inherit;
    text-decoration: none;
    
}

`
