// O nome d.ts significa que só vou ter definições de tipos do typescript, não vou ter códigos javascript
import "styled-components";
import { defaultTheme } from "../styles/themes/default";

type ThemeType = typeof defaultTheme;

/*Criar uma tipagem para o módulo styledComponents e agora toda vez que eu chamar o styled COMPONENTS
Ele vai chamar o que definimos aqui dentro
Como estamos sobrescrevendo alguma coisa, e não criando a tipagem nova, importamos o styled-componentes e declaramos
Assim, vamos adicionar a tipagem, e não criar uma nova
Dentro do styled components temos um default-theme que ele não cria, deixa para nós definirmos
então vamos exportar essa interface extendo o nosso theme type
*/
declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
