import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDishData } from "../../hooks/dishData";

import {
  Container,
  GoBack,
  Cover,
  CustomerOrder,
  StyledButton,
  ContentDetails,
  IngredientTags,
} from "./styles";
import { Stepper } from "./../../components/Stepper";
import { PiCaretLeft, PiReceiptLight } from "react-icons/pi";
import { IngredientTag } from "../../components/IngredientTag";

export const ViewDish = () => {
  const { dish_id } = useParams();
  const navigate = useNavigate();
  const { getDishById, getDishImage } = useDishData();
  const [data, setData] = useState({});

  const dishImg = getDishImage(data.image);

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getDishById(dish_id);
      setData(response);
    };

    fetchData();
  }, []);

  return (
    <Container>
      <GoBack onClick={handleGoBack}>
        <PiCaretLeft size={32} />
        <p>voltar</p>
      </GoBack>

      <Cover src={dishImg} alt="" />

      <ContentDetails>
        <h1>{data.title}</h1>

        <p>{data.description}</p>

        <IngredientTags>
          {data?.ingredients?.map((ingredient) => (
            <IngredientTag key={`${dish_id}${ingredient}`} title={ingredient} />
          ))}
        </IngredientTags>
      </ContentDetails>

      <CustomerOrder>
        <Stepper />
        <StyledButton
          icon={PiReceiptLight}
          title={`pedir ∙ R$ ${data.price}`}
        />
      </CustomerOrder>
    </Container>
  );
};
