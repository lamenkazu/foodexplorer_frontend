import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDishData } from "../../hooks/dishData";

import {
  Container,
  InputFileWrapper,
  InputWrapper,
  SelectWrapper,
  MarkerWrapper,
  TextareaWrapper,
  ButtonsWrapper,
} from "./styles";
import { Input } from "../../components/Input";
import { GoBack } from "../../components/GoBack";
import { Button } from "../../components/Button";
import { Marker } from "../../components/Marker";
import { Select } from "../../components/Select";

import { PiCaretLeft, PiUploadSimple } from "react-icons/pi";

export const EditDish = () => {
  const { dish_id } = useParams();
  const navigate = useNavigate();
  const { getDishById, updateDish, deleteDish } = useDishData();

  //Estado do formulário.
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

  // Verifica se algum campo obrigatório está vazio.
  const isFormEmpty = () =>
    !title || !category || !price || ingredients.length === 0;

  //Lida com as mudanças no formulario.
  const handleFormChanges = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //Lida com o recebimento do arquivo de imagem.
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

  //Adiciona um novo ingrediente à lista.
  const handleAddMarker = () => {
    if (form.newIngredient === "") return;
    setForm({
      ...form,
      ingredients: [...form.ingredients, form.newIngredient],
      newIngredient: "",
    });
  };

  //Remove um ingrediente da lista.
  const handleRemoveMarker = (deleted) => {
    setForm({
      ...form,
      ingredients: form.ingredients.filter((_, index) => index !== deleted),
    });
  };

  //Lida com o retorno à pagina anterior.
  const handleGoBack = () => {
    navigate(-1);
  };

  //Pede para salvar os novos dados prato no banco de dados.
  const handleUpdateDish = async () => {
    const dish = {
      dish_id,
      title,
      category,
      price,
      ingredients,
      description,
    };

    if (confirm("Confirma atualização dos dados do prato?")) {
      await updateDish(dish, dishFile).then(() => {
        navigate("/");
      });
    }
  };

  //Pede para deletar o prato do banco de dados.
  const handleDeleteDish = async () => {
    if (confirm("Quer mesmo deletar este prato?")) {
      await deleteDish(dish_id).then(() => {
        navigate("/");
      });
    }
  };

  //Busca os dados do prato para adicionar aos inputs.
  useEffect(() => {
    const fetchData = async () => {
      const response = await getDishById(dish_id);
      setForm({
        ...form,
        title: response?.title,
        description: response?.description,
        category: response?.category,
        price: response?.price,
        ingredients: response?.ingredients,
      });
    };

    fetchData();
  }, []);

  return (
    <Container>
      <InputWrapper>
        <GoBack onClick={handleGoBack}>
          <PiCaretLeft size={22} />
          <p>voltar</p>
        </GoBack>

        <h1>Editar prato</h1>

        <InputFileWrapper>
          <label htmlFor="fileImageLBL">Imagem do prato</label>

          <label id="fileImageLBL" htmlFor="fileImage">
            <PiUploadSimple size={32} />

            <input id="fileImage" type="file" onChange={handleDishImage} />
            <label htmlFor="fileImage">
              {form.dishFile
                ? form.dishFile.name
                : "Selecione imagem para alterá-la"}
            </label>
          </label>
        </InputFileWrapper>

        <Input
          value={form.title}
          lbl="Nome"
          id="name"
          placeholder="Ex.: Salada Ceasar"
          name="title"
          onChange={handleFormChanges}
        />

        <SelectWrapper>
          <label htmlFor="category">Categoria</label>
          <Select
            name="category"
            id="category"
            onChange={handleFormChanges}
            value={form.category}
          />
        </SelectWrapper>

        <MarkerWrapper>
          <label htmlFor="ingredients">Ingredientes</label>

          <div>
            {form.ingredients?.map((tag, index) => (
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
          value={form.price}
          onChange={handleFormChanges}
        />

        <TextareaWrapper>
          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            name="description"
            value={form.description}
            onChange={handleFormChanges}
          ></textarea>
        </TextareaWrapper>

        <ButtonsWrapper>
          <Button contra title="Excluir prato" onClick={handleDeleteDish} />
          <Button
            loading={isFormEmpty()}
            title="Salvar alterações"
            onClick={handleUpdateDish}
          />
        </ButtonsWrapper>
      </InputWrapper>
    </Container>
  );
};
