import { Container, InputWrapper, SelectWrapper, Select } from "./styles";
import { Input } from "../../components/Input";
import { GoBack } from "../../components/GoBack";
import { Button } from "../../components/Button";

import { PiCaretLeft } from "react-icons/pi";

export const NewDish = () => {
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <Container>
      <InputWrapper>
        <GoBack onClick={handleGoBack}>
          <PiCaretLeft size={22} />
          <p>voltar</p>
        </GoBack>

        <h1>Novo Prato</h1>

        <Input lbl="Imagem do prato" id="fileImage" type="file" />
        <Input lbl="Nome" id="name" placeholder="Ex.: Salada Ceasar" />
        <SelectWrapper>
          <label htmlFor="category">Categoria</label>
          <Select id="category">
            <option value="">Refeição</option>
            <option value="">Prato Principal</option>
            <option value="">Bebida</option>
          </Select>
        </SelectWrapper>
        <Input lbl="Preço" id="price" placeholder="R$ 00,00" />

        <Button title="Salvar alterações" />
      </InputWrapper>
    </Container>
  );
};
