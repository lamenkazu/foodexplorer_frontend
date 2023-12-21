import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

export const EditDish = () => {
  const { dish_id } = useParams();
  const navigate = useNavigate();
  const { getDishById, updateDish } = useDishData();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(false);

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
    !title || !category || !price || ingredients.length === 0;

  //Pede para salvar um novo prato no banco de dados.
  const handleSaveDish = async () => {
    const newDish = {
      dish_id,
      title,
      category,
      price,
      ingredients,
      description,
    };

    await updateDish(newDish, dishFile);
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

  useEffect(() => {
    const fetchData = async () => {
      const response = await getDishById(dish_id);
      setData(response);
      setForm({
        title: response?.title,
        description: response?.description,
        category: response?.category,
        price: response?.price,
        ingredients: response?.ingredients,
        newIngredient: "",
      });
      setLoading(true);
    };

    fetchData();
  }, []);

  return (
    <Container>
      {console.log(data)}
      <InputWrapper>
        {
          //GoBack -> Botão para voltar para a página anterior
        }
        <GoBack onClick={handleGoBack}>
          <PiCaretLeft size={22} />
          <p>voltar</p>
        </GoBack>

        <h1>Editar prato</h1>

        {
          //InputFileWrapper -> Input do arquivo da imagem
        }
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
            <option value="">Selecionar</option>
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

        {
          //TextareaWrapper -> Input da descrição do prato
        }
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
