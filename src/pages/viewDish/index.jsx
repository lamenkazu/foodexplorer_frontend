import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useDishData } from "../../hooks/dishData";
import { useAuth } from "../../hooks/auth";

import { USER_ROLE } from "../../utils/roles";

import {
  Container,
  Cover,
  CustomerOrder,
  StyledButton,
  StyledGoBack,
  ContentDetails,
  IngredientTags,
} from "./styles";
import { Stepper } from "./../../components/Stepper";
import { Empty } from "../../components/Empty";
<<<<<<< HEAD
=======
import { GoBack } from "../../components/GoBack";
>>>>>>> 5a3fe85878cb513f499c39149250ca3a8c10af31

import { PiCaretLeft, PiReceiptLight } from "react-icons/pi";
import { IngredientTag } from "../../components/IngredientTag";

export const ViewDish = () => {
  const { dish_id } = useParams();
  const navigate = useNavigate();

  const { user } = useAuth();
  const { getDishById, getDishImage } = useDishData();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const dishImg = getDishImage(data.image);

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getDishById(dish_id);
      setData(response);
      setLoading(true);
    };

    fetchData();
  }, []);

  return (
    <Container>
      {loading ? (
        <>
<<<<<<< HEAD
          <GoBack onClick={handleGoBack}>
            <PiCaretLeft size={32} />
            <p>voltar</p>
          </GoBack>
=======
          <StyledGoBack onClick={handleGoBack}>
            <PiCaretLeft size={32} />
            <p>voltar</p>
          </StyledGoBack>
>>>>>>> 5a3fe85878cb513f499c39149250ca3a8c10af31

          <Cover src={dishImg} alt="" />

          <ContentDetails>
            <h1>{data.title}</h1>

            <p>{data.description}</p>

            <IngredientTags>
              {data?.ingredients?.map((ingredient) => (
                <IngredientTag
                  key={`${dish_id}${ingredient}`}
                  title={ingredient}
                />
              ))}
            </IngredientTags>
          </ContentDetails>

          {![USER_ROLE.ADMIN].includes(user.role) ? (
            <CustomerOrder>
              <Stepper />
              <StyledButton
                icon={PiReceiptLight}
                title={`pedir ∙ R$ ${data.price}`}
              />
            </CustomerOrder>
          ) : (
            <StyledButton title={`Editar Prato`} />
          )}
        </>
      ) : (
        <Empty />
      )}
    </Container>
  );
};
