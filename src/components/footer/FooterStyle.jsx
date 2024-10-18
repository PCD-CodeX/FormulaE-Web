import styled from "styled-components"

export const FooterStyle = styled.section `
    width: 100%;
.Footer{
    width: 100%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    padding-top: calc(2.8vh + 10px );
    padding-bottom: calc(2.8vh + 10px );
    padding-right: calc(6vw + 10px);
    padding-left: calc(6vw + 10px);
    background-color:#03045E;
    color: white;  
}

i{
    font-size: clamp(16px,1.2vw,30px);
    color: white;
}
a{
    text-decoration: none;
    font-size: clamp(8px,1vw,30px);
    color: white;
}
h5{
    font-weight: 600;
    font-size: clamp(8px,0.6vw,30px);
}
`