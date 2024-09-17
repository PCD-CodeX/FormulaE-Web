import styled from 'styled-components';

export const NavStyle = styled.section`
:root {
    --color1: rgb(8,5,109);
    --color2:#08056d;
    --color3:rgb(0,155,255);
    --color4:rgb(0,255,255);
    --color5:#00ffff;
}
width: 100%;
.nav{
    width: 100%;
    height: 20vh;
    background-color: #08056d;
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
    margin-bottom: clamp(80px, 10vh, 200px);
    margin-left: clamp(30px, 6vw, 200px);
    border-radius: 1vw;
    background: linear-gradient(90deg, var(--color2), var(--color3)); ;
    box-shadow: -0.5vw 0.5vw 0.5vw rgba(88, 88, 88, 0.3);
    opacity: 0.9;
    transition: all 0.6s ease;
}

.sidebar_container.expanded {
    height: clamp(50px,40vw,800px);
    width: clamp(180px,10vw,400px);
    background: linear-gradient(90deg, var(--color2), var(--color3)); ;
    border-radius: 1.2vw;
}

.sidebar {
    z-index: 3;
    display: flex;
    justify-content: end;
    flex-direction: column;
    color: transparent;
    pointer-events: none;
    margin-top: 8vh;
    text-transform: uppercase;
    transition: all 0.2s ease;
}

.sidebar.expand {
    display: flex;
    color: white;
    pointer-events: auto;
}

.menu {
    z-index: 2;
    padding: 1vw;
    font-size: clamp(10px, 0.8vw, 20px);
    transition: 0.2s ease-out;

}
.menu.expand{
    margin: 6vh 2vw 0vh 0vh;
    margin-top: clamp(30px,6vh,80px);
    font-size: clamp(10px, 1.2vw, 20px);
    letter-spacing: 2px;
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
}

#hamb:hover {
    scale: 1.1;
}

#hamb.expanded {
    margin-right: clamp(80px,8vw,1400px);
    margin-bottom: 34vw;
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
