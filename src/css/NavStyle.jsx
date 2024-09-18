import styled from 'styled-components';

export const NavStyle = styled.section`

:root {
    --color1:#08056d; //base de cores, mudar aqui nao adianta, tem que mudar no RESET.CSS!!!
    --color2:rgb(0,155,255); //base de cores, mudar aqui nao adianta, tem que mudar no RESET.CSS!!!
    --color3:#00c2ff; //base de cores, mudar aqui nao adianta, tem que mudar no RESET.CSS!!!
    --color4:#00ffff; //base de cores, mudar aqui nao adianta, tem que mudar no RESET.CSS!!!
    --opacity:rgba(0, 71, 255, 0.1) //base de cores, mudar aqui nao adianta, tem que mudar no RESET.CSS!!!
}

width: 100%;


.nav{
    width: 100%;
    height: 24vh;
    background-color: var(--color2);
}
.links{
    position: fixed;
    margin-top: clamp(20px, 8vh, 200px); //da a altura do menu em relação ao topo
    width: 100%;
    display: flex;
    justify-content: end;
    font-size: clamp(10px, 0.8vw, 20px);
}
h1{
    margin: 0 clamp(20px,3vw,100px);
    padding: clamp(10px,1vw,30px);
    border-radius: 1vw;
    background-color: var(--opacity);
    border: clamp(2px,0.2vw,4px) solid var(--opacity) ;
    transition: 0.2s ease;
}
h1:hover{ 
    background-color: var(--opacity);
    border: 0.2vw solid var(--color1) ;
    scale: 1.03;
}
.sidebar_container {
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    height: clamp(30px,4vw,100px);;
    width: clamp(30px, 8vh, 80px);
    margin-top: clamp(20px, 8vh, 200px); //da a altura do menu em relação ao topo
    margin-bottom: clamp(20px, 8vh, 200px);
    margin-left: clamp(30px, 6vw, 200px);
    background: linear-gradient(180deg, var(--color1), var(--color2));
    box-shadow: -0.4vw 0.4vw 0.4vw rgba(88, 88, 88, 0.3);
    border-radius: 1vw;
    transition: all 0.6s ease;
    opacity: 0.96;
    
}

.sidebar_container.expanded {
    height: clamp(300px,40vw,800px);
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
    transition: all 0.2s ease-in; //em ease-in a nao mostra o menu vindo do topo do site, pois vai mais rapido ao ponto 0 antes de aparecer na tela
    //text-transform: uppercase;
}

.sidebar.expand {
    display: flex;
    color: white;
    pointer-events: auto;
}

.menu {
    z-index: 2;
    padding-top: 1vw; //altura dos componentes 
    font-size: clamp(6px, 0.6vw, 20px);
    transition: 0.1s ease-out;

}
.menu.expand{
    margin-top: clamp(20px,3vw,80px);
    font-size: clamp(8px, 1vw, 20px);
    letter-spacing: clamp(1px,0.2vh,3px);
    font-weight: 700;
    padding: 0.6vw; //altura dos componentes 
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
    margin-bottom: clamp(240px,34vw,1000px);
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
