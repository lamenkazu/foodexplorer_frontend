import { useState } from "react";
import { useDishData } from "../../hooks/dishData";

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
  const { createNewDish } = useDishData();

  const [form, setForm] = useState({
    dishFile: null,
    title: "",
    description: "",
    category: "",
    price: "",
    ingredients: [],
    newIngredient: "",
  });

  const { title, category, price, description, ingredients, dishFile } = form;

  // Verifica se algum campo obrigatório está vazio
  const isFormEmpty = () =>
    !title || !category || !price || ingredients.length === 0 || !dishFile;

  //Pede para salvar um novo prato no banco de dados.
  const handleSaveDish = async () => {
    const newDish = {
      title,
      category,
      price,
      ingredients,
      description,
    };

    await createNewDish(newDish, dishFile);
  };

  const handleFormChanges = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDishImage = (event) => {
    const file = event.target.files[0];

    //Adiciona apenas imagens JPG e PNG
    if (file) {
      const allowedExtensions = ["jpg", "jpeg", "png"];
      const fileNameParts = file.name.split(".");
      const fileExtension =
        fileNameParts[fileNameParts.length - 1].toLowerCase();

      if (allowedExtensions.includes(fileExtension)) {
        setForm({ ...form, dishFile: file });
      } else {
        alert("Apenas imagens no formato PNG e JPG serão aceitas.");
      }
    }
  };

  const handleAddMarker = () => {
    if (form.newIngredient === "") return;
    setForm({
      ...form,
      ingredients: [...form.ingredients, form.newIngredient],
      newIngredient: "",
    });
  };

  const handleRemoveMarker = (deleted) => {
    setForm({
      ...form,
      ingredients: form.ingredients.filter((_, index) => index !== deleted),
    });
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <InputWrapper>
        {
          //GoBack -> Botão para voltar para a página anterior
        }
        <GoBack onClick={handleGoBack}>
          <PiCaretLeft size={22} />
          <p>voltar</p>
        </GoBack>

        <h1>Novo Prato</h1>

        {
          //InputFileWrapper -> Input do arquivo da imagem
        }
        <InputFileWrapper>
          <label htmlFor="fileImageLBL">Imagem do prato</label>

          <label id="fileImageLBL" htmlFor="fileImage">
            <PiUploadSimple size={32} />

            <input id="fileImage" type="file" onChange={handleDishImage} />
            <label htmlFor="fileImage">
              {form.dishFile ? form.dishFile.name : "Selecione imagem"}
            </label>
          </label>
        </InputFileWrapper>

        <Input
          lbl="Nome"
          id="name"
          placeholder="Ex.: Salada Ceasar"
          name="title"
          onChange={handleFormChanges}
        />

        {
          //SelectWrapper -> Input Select de Categoria
        }
        <SelectWrapper>
          <label htmlFor="category">Categoria</label>
          <Select
            name="category"
            id="category"
            onChange={handleFormChanges}
            value={form.category}
          >
            <option value=""></option>
            <option value="Refeição">Refeição</option>
            <option value="Prato Principal">Prato Principal</option>
            <option value="Bebida">Bebida</option>
          </Select>
        </SelectWrapper>

        {
          //MarkerWrapper -> Input de tags de ingredientes
        }
        <MarkerWrapper>
          <label htmlFor="ingredients">Ingredientes</label>

          <div>
            {form.ingredients.map((tag, index) => (
              <Marker
                key={index}
                value={tag}
                onClick={() => {
                  handleRemoveMarker(index);
                }}
              />
            ))}
            <Marker
              name="newIngredient"
              isNew
              placeholder="Adicionar"
              value={form.newIngredient}
              onChange={handleFormChanges}
              onClick={handleAddMarker}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleAddMarker();
                }
              }}
            />
          </div>
        </MarkerWrapper>

        <Input
          lbl="Preço"
          id="price"
          placeholder="R$ 00,00"
          name="price"
          onChange={handleFormChanges}
        />

        {
          //TextareaWrapper -> Input da descrição do prato
        }
        <TextareaWrapper>
          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            name="description"
            onChange={handleFormChanges}
          ></textarea>
        </TextareaWrapper>

        {
          //Botão para salvar prato no banco de dados
        }
        <Button
          loading={isFormEmpty()}
          title="Salvar alterações"
          onClick={handleSaveDish}
        />
      </InputWrapper>
    </Container>
  );
};
