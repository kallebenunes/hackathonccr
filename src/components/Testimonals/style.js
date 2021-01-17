import styled from 'styled-components';

const StyleTestimonals = styled.div`
    max-width: 90%;
    margin: 4rem auto;
    background: #e6f7ff;
    border-radius: 2rem;
    padding: 1rem 6rem;
    box-shadow: 10px 10px 50px 3px rgba(39, 92, 141, 0.15);
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-size: 0.95rem;
    

    .student {
        display: flex;
        align-items: center;
        flex-basis: 30%; 
        
    }

    .testimonal-text {
        color: #848484;
        font-style: italic;
        padding: 0.8rem 0;

        
    }

    .name-student { 
        margin: 0 2rem;
        
        p {
            margin-bottom: 0.5rem;
            font-weight: 650;
            
        }
        span {
            font-family: Gotham;
            font-weight: 900;
        }
    }
`;

export default StyleTestimonals 