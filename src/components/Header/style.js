import styled from 'styled-components';

const StyleHeader = styled.header`

    border-bottom: 1px solid #C4C4C4;
    
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 90%;
        margin: 0.7rem auto;

        background: ${props => props.color};
       
        ul {
            display: flex; 
            margin: 0.5rem 0;
            a {
                color: #222222;
                margin: 0.5rem;
            }

            .bg-black {
                color: white; 
                background: #222222;
            }

            a.button {
                border: 1px solid #222222; 
                border-radius: 5px;
                padding: 0.5rem;
            }

           
        }
    }


    .nav-brand {
        font-weight: bold;
        font-size: 1.2rem;
        color: #222222;
    }
`

export default StyleHeader 