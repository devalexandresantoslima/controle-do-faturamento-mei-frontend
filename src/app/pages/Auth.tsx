import { Form } from "react-aria-components";
import { Button } from "../shared/components/base/buttons/button";
import { Input } from "../shared/components/base/input/input";
import { Checkbox } from "../shared/components/base/checkbox/checkbox";
import { ButtonGroup, ButtonGroupItem } from "../shared/components/base/button-group/button-group";


const Auth = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen font-body">
        <Form className="grid gap-4">
          <span className="font-bold text-center text-2xl">Login na sua Conta</span>
          <span className="text-gray-700 text-center">Bem-vindo de volta! Use suas <br></br>credenciais para continuar o login</span>

          <ButtonGroup selectedKeys={[]}>
            <ButtonGroupItem className="w-40" id={"createaccont"}>Criar Conta</ButtonGroupItem>
            <ButtonGroupItem className="w-40" id={"login"}>Logar</ButtonGroupItem>
          </ButtonGroup>
          
          <Input label="Email" placeholder="seuemail@mei.com" type="email" tooltip="Ajuda: Digite seu email que foi usado para criar a sua conta" size="lg"></Input>
          <Input label="Senha" placeholder="suasenhaforte" type="password" tooltip="Ajuda: Digite sua senha que foi usado para criar a sua conta" size="lg"></Input>
          
          <div className="grid grid-cols-2 items-center">
            <Checkbox label="Lembrar por 30 dias" size="sm" />
            <a className="text-right text-xs font-bold text-[#9e77ed]">Esqueceu a senha</a>
          </div>   
          
          <Button className="w-80">Entrar</Button>
          <span className="text-gray-700 text-center">Nao possui uma conta? <a href="" className="font-bold text-[#9e77ed]">crie uma conta</a></span>
        </Form>
      </div>   
    </>
  );
}

export default Auth;