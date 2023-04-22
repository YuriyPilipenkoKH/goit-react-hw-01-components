import styled from '@emotion/styled';



export const FriendItem = styled.li`
    
  
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 30px;
  border-radius: 8px;
  background: #f5f5dc;
  border: 1px solid #000;
  box-shadow: ${props => props.theme.shadow};

  > p {
    font-size: 32px;
    font-weight:500;
 }

`
export const Picture = styled.img`
    width: 48px;
`

export const Status = styled.span`
  width: ${props => props.theme.spacing(5)};
  height: ${props => props.theme.spacing(5)};
  border-radius: 50%;
  background-color: ${({ online, theme }) => {
        if (online) {
            return props => props.theme.colors.green
        } else {
            return props => props.theme.colors.red
        }
    }
}`

