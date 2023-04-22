import styled from '@emotion/styled';

export const ProfileCard = styled.div`
    display: grid;
    place-items: center;
    grid-auto-rows: auto;
    grid-row-gap: 20px;
    width: 450px;
    text-align: center;
    margin: 0 auto;
    background: ${props => props.theme.colors.beige};
    border: 1px solid ${props => props.theme.colors.black};
    border-radius: 8px;
`