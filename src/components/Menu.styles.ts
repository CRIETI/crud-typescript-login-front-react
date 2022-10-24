import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MenuContainer = styled.div`
  position: fixed;
  float: right;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 2rem 0;

  background: ${(props) => props.theme.secondary};
`;

export const ContentContainer = styled.div`
  width: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const NavLinkContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  a {
    color: ${(props) => props.theme.white};
  }
`;

export const NavbarLink = styled(NavLink)`
  &:hover,
  &:focus {
    color: ${(props) => props.theme.primary};
    font-weight: 700;
  }
  &.active {
    color: ${(props) => props.theme.primary};
  }
  text-decoration: none;
`;
