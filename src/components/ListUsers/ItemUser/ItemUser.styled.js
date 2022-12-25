import styled from 'styled-components';

export const CardUser = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: ${props => props.theme.spacing(2)};
  padding-top: ${props => props.theme.spacing(2)};
  box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06),
    0px 1px 1px rgba(0, 0, 0, 0.12);

  border-radius: 2%;
`;
export const AvatarUser = styled.img``;
export const NumberТweets = styled.p`
  margin: ${props => props.theme.spacing(1)};
`;
export const NumberFollowers = styled.p`
  margin: ${props => props.theme.spacing(1)};
`;
export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 2px;
  background-color: ${props => {
    return props.colorButton ? props.theme.colors.red : props.theme.colors.aqua;
  }};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  :hover,
  :focus {
    /* background-color: #303f9f; */
  }
`;
