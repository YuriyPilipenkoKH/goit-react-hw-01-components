import styled from '@emotion/styled';

export const StItem = styled.li`
  width: 100%;
  font-size: 18px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 0;
  border-right: 1px solid #777 ;

  :first-of-type {
    border-radius: 0 0 0 8px ;
  }
  
  :last-child {
  border-right: none;
  border-radius: 0 0 8px 0 ;
  }


`
export const StLabel = styled.span`
    font-weight: 500;
`
export const StPercentage = styled.span`
    font-size: 22px;
    font-weight: 700;
`
