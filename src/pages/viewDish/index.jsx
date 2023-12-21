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
  ContentDetails,
  IngredientTags,
} from "./styles";
import { Stepper } from "./../../components/Stepper";
import { Empty } from "../../components/Empty";
import { GoBack } from "../../components/GoBack";

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

  const goToEditPage = () => {
    navigate(`/edit/${dish_id}`);
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
            <StyledButton title={`Editar Prato`} onClick={goToEditPage} />
          )}
        </>
      ) : (
        <Empty />
      )}
    </Container>
  );
};
