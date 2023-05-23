import styled from 'styled-components';

export const ButtonDelete = styled.button`
  margin-left: 10px;
  margin-top: 5px;
  padding: 2px;
  
  &:hover {
    background: #3498db;
  }
`;
export const ContactListLi = styled.li`
  padding: 2px;
   width: 100%;
  display: flex;
  // -webkit-box-pack: justify;
   justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  //  gap: 16px;
`;
export const ContactListBox = styled.ol`
  width: 400px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  // gap: 16px;
`;
