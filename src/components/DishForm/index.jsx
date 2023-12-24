import { useEffect, useState } from "react";
import { useDishData } from "../../hooks/dishData";

import {
  Container,
  InputFileWrapper,
  InputWrapper,
  SelectWrapper,
  MarkerWrapper,
  TextareaWrapper,
  ButtonsWrapper,
  DivisoryOne,
  DivisoryTwo,
  StyledButton,
} from "./styles";
import { Input } from "../../components/Input";
import { GoBack } from "../../components/GoBack";
import { Marker } from "../../components/Marker";
import { Select } from "../../components/Select";

import { PiCaretLeft, PiUploadSimple } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

export const DishForm = ({
  confirmMessage = "Confirma que os dados estão corretos para salvar?",
  pageTitle = "Novo prato",
  isNew = false,
  dishData = {
    dishFile: null,
    title: "",
    description: "",
    category: "",
    price: "",
    ingredients: [],
    newIngredient: "",
  },
  dish_id,
}) => {
  const navigate = useNavigate();
  const { createNewDish, updateDish, deleteDish } = useDishData();

  const [form, setForm] = useState(dishData);

  const { title, category, price, description, ingredients, dishFile } = form;

  // Verifica se algum campo obrigatório está vazio
  const isFormEmpty = () => {
    if (isNew)
      return (
        !title || !category || !price || ingredients.length === 0 || !dishFile
      );
    else {
      return !title || !category || !price || ingredients.length === 0;
    }
  };

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

  //Pede para deletar o prato do banco de dados.
  const handleDeleteDish = async () => {
    if (confirm("Quer mesmo deletar este prato?")) {
      await deleteDish(dish_id).then(() => {
        navigate("/");
      });
    }
  };

  //Pede para atualizar o prato no banco de dados.
  const handleUpdate = async () => {
    const dish = {
      dish_id,
      title,
      category,
      price,
      ingredients,
      description,
    };

    if (confirm(confirmMessage)) {
      await updateDish(dish, dishFile).then(() => {
        navigate("/");
      });
    }
  };

  //Pede para criar um novo prato no banco de dados.
  const handleCreate = async () => {
    const newDish = {
      title,
      category,
      price,
      ingredients,
      description,
    };

    if (confirm(confirmMessage))
      await createNewDish(newDish, dishFile).then(() => {
        navigate("/");
      });
  };

  const decideSave = isNew ? handleCreate : handleUpdate;

  useEffect(() => {
    if (!isNew) {
      setForm(dishData);
    }
  }, [dishData]);

  return (
    <Container>
      <InputWrapper>
        {
          //GoBack -> Botão para voltar para a página anterior
        }
        <GoBack onClick={handleGoBack}>
          <PiCaretLeft />
          <p>voltar</p>
        </GoBack>

        <h1>{pageTitle}</h1>

        <DivisoryOne>
          {
            //InputFileWrapper -> Input do arquivo da imagem
          }
          <InputFileWrapper>
            <label htmlFor="fileImageLBL">Imagem do prato</label>

            <label id="fileImageLBL" htmlFor="fileImage">
              <PiUploadSimple size={30} />

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
            value={form.title}
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
            />
          </SelectWrapper>
        </DivisoryOne>

        <DivisoryTwo>
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
        </DivisoryTwo>
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
        <ButtonsWrapper>
          {!isNew && (
            <StyledButton
              contra
              title="Excluir prato"
              onClick={handleDeleteDish}
            />
          )}
          <StyledButton
            loading={isFormEmpty()}
            title="Salvar alterações"
            onClick={decideSave}
          />
        </ButtonsWrapper>
      </InputWrapper>
    </Container>
  );
};
