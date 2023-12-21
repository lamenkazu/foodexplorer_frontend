import { useState } from "react";

import {
  Container,
  InputWrapper,
  SelectWrapper,
  Select,
  MarkerWrapper,
  TextareaWrapper,
} from "./styles";
import { Input } from "../../components/Input";
import { GoBack } from "../../components/GoBack";
import { Button } from "../../components/Button";

import { PiCaretLeft } from "react-icons/pi";
import { Marker } from "../../components/Marker";

export const NewDish = () => {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const handleAddMarker = () => {
    if (newTag === "") return;

    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  };

  const handleRemoveMarker = (deleted) => {
    setTags((prevState) => prevState.filter((_, index) => index !== deleted));
  };

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

        <MarkerWrapper>
          <label htmlFor="ingredients">Ingredientes</label>

          <div>
            {tags.map((tag, index) => (
              <Marker
                key={index}
                value={tag}
                onClick={() => {
                  handleRemoveMarker(index);
                }}
              />
            ))}
            <Marker
              name="newMarker"
              isNew
              placeholder="Adicionar"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onClick={handleAddMarker}
            />
          </div>
        </MarkerWrapper>

        <Input lbl="Preço" id="price" placeholder="R$ 00,00" />

        <TextareaWrapper>
          <label htmlFor="description">Descrição</label>
          <textarea
            name="description"
            id="description"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          ></textarea>
        </TextareaWrapper>

        <Button title="Salvar alterações" />
      </InputWrapper>
    </Container>
  );
};
