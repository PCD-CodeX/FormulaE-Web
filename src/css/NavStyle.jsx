import styled from 'styled-components';

export const NavStyle = styled.section`
:root {
    --color1:#08056d;
    --color2:rgb(0,155,255);
    --color3:#00c2ff;
    --color4:#00ffff;
}
width: 100%;
.nav{
    width: 100%;
    height: 24vh;
    background-color: #be4040;
}
.sidebar_container {
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    height: clamp(40px,4vw,100px);;
    width: clamp(24px, 8vh, 80px);
    margin-top: clamp(40px, 8vh, 200px);
    margin-bottom: clamp(20px, 8vh, 200px);
    margin-left: clamp(30px, 6vw, 200px);
    border-radius: 1vw;
    background: linear-gradient(180deg, var(--color1), var(--color2)); ;
    box-shadow: -0.4vw 0.4vw 0.4vw rgba(88, 88, 88, 0.3);
    transition: all 0.6s ease;
    //opacity: 0.9;
    
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
    justify-content: end;
    flex-direction: column;
    color: transparent;
    pointer-events: none;
    margin-top: 2vw;
    margin-left: 1vw;
    transition: all 0.2s ease-in; //em ease-in a nao mostra o menu vindo do topo do site, pois vai mais rapido ao ponto 0 antes de aparecer na tela
    //text-transform: uppercase;
}

.sidebar.expand {
    display: flex;
    color: white;
    pointer-events: auto;
    margin-left: 0vw;
}

.menu {
    z-index: 2;
    padding-top: 1vw; //altura dos componentes 
    margin-right: 1vw;
    font-size: clamp(6px, 0.6vw, 20px);
    transition: 0.2s ease-out;

}
.menu.expand{
    margin-top: clamp(20px,3vw,80px);
    font-size: clamp(8px, 1.2vw, 20px);
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
