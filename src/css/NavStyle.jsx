import styled from 'styled-components';

export const NavStyle = styled.section`

width: 100%;
.nav{
    width: 100%;
    height: 30vh;
}
.sidebar_container {
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    height: 4vw;
    width: clamp(24px, 8vh, 800px);
    margin-top: clamp(80px, 10vh, 200px);
    margin-bottom: clamp(80px, 10vh, 200px);
    margin-left: clamp(30px, 6vw, 200px);
    background-color: #023E8A;
    border-radius: 1vw;
    transition: all 0.6s ease;
    color: white;
}

.sidebar_container.expanded {
    height: 4vw;
    width: 60vw;
    border-radius: 1.2vw;
}

.sidebar {
    z-index: 3;
    display: flex;
    justify-content: end;
    flex-direction: column;
    margin-left: 10vw;
    transition: all 0.1s ease;
    color: transparent;
    pointer-events: none;
}

.sidebar.expand {
    display: flex;
    color: white;
    pointer-events: auto;
}

.menu {
    z-index: 2;
    transition: 0.3s ease;
    margin-right: 4vh;
    padding: 1vw;
    font-size: clamp(10px, 1vw, 20px);

}
.menu.expand{
    margin: 0vh 4vw 0vh 0vh;
}
.menu:hover {
    scale: 1.1;
}

#hamb {
    z-index: 4;
    display: flex;
    position: fixed;
    font-size: clamp(12px, 1vw, 20px);
    transition: all 0.6s ease;
    width: clamp(20px,2.4vw,60px);
}



#hamb:hover {
    scale: 1.1;
}

#hamb.expanded {
    margin-right: 52vw;
    rotate: 360deg;
}

li {
    display: flex;
    flex-direction: row;
    list-style: none;
    
}
a{
    color: inherit;
    text-decoration: none;
    
}
`
