import styled from '@emotion/styled';

export const ProfileStats = styled.ul`
 width: 100%;
 display: grid;
 grid-template-columns: repeat(3, minmax(70px,33% ));
 justify-items: center;
 justify-content: center;
 background: ${props => props.theme.colors.purple};
 border-radius: 0 0 8px 8px;
 
`

export const StatsItem = styled.li`

  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 0;
  border-right: 1px solid ${props => props.theme.colors.grey};

  >span {
    font-size: 22px;

  }

  :last-child {
    border-right: none;
  }
    
`

export const ProfileQuantity = styled.span`
  font-size: 18px;
  font-weight: 600;
    
`