import styled from 'styled-components'; 

const ContainerInfoStyle = styled.div`
    background: ${props => props.color};
    display: flex;
    justify-content: space-between;
    max-width: 90%;
    margin: 1rem auto;

    div {
        max-width: 35%;
    }

    h1 {
        font-size: 3.1rem;
    }

    p {
        font-size: 1.3rem;
        font-weight: lighter;
    }
`;

export default ContainerInfoStyle