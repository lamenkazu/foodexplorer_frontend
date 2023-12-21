import { useState } from "react";

import {
  Container,
  InputFileWrapper,
  InputWrapper,
  SelectWrapper,
  Select,
  MarkerWrapper,
  TextareaWrapper,
} from "./styles";
import { Input } from "../../components/Input";
import { GoBack } from "../../components/GoBack";
import { Button } from "../../components/Button";
import { Marker } from "../../components/Marker";

import { PiCaretLeft, PiUploadSimple } from "react-icons/pi";

export const NewDish = () => {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [dishFile, setDishFile] = useState(null);

  const handleDishImage = (event) => {
    const file = event.target.files[0];
    setDishFile(file);
  };

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

        <InputFileWrapper>
          <label htmlFor="fileImage">Imagem do prato</label>

          <label htmlFor="fileImage">
            <PiUploadSimple size={32} />

            <input
              lbl="Imagem do prato"
              id="fileImage"
              type="file"
              onChange={handleDishImage}
            />
            <label htmlFor="fileImage">
              {dishFile ? dishFile.name : "Selecione imagem"}
            </label>
          </label>
        </InputFileWrapper>

        <Input lbl="Nome" id="name" placeholder="Ex.: Salada Ceasar" />

        <SelectWrapper>
          <label htmlFor="category">Categoria</label>
          <Select id="category">
            <option value=""></option>
            <option value="Refeição">Refeição</option>
            <option value="Prato Principal">Prato Principal</option>
            <option value="Bebida">Bebida</option>
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
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleAddMarker();
                }
              }}
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
