import styled from 'styled-components';

export const HeaderStyled = styled.nav`
    display : flex;
    flex-direction : row;
    ul {
        display : flex;
        flex-direction : row;
        li {
            display : block;
            margin : 0 10px;
            a {
                color : black;
                text-decoration : none;
            }
        }
    }
`
