import { User, Atom } from "phosphor-react";

import {
  ContentContainer,
  MenuContainer,
  NavbarLink,
  NavLinkContainer,
} from "./Menu.styles";

export function Menu() {
  return (
    <MenuContainer>
      <ContentContainer>
        <Atom size={62} />
        <NavLinkContainer>
          <NavbarLink to="/users">
            <User size={32} />
          </NavbarLink>
        </NavLinkContainer>
      </ContentContainer>
    </MenuContainer>
  );
}
