import { useAuth } from "../../hooks/auth";
import { useDishData } from "../../hooks/dishData";

import {
  Container,
  Cover,
  StyledButton,
  H2,
  P,
  Span,
  StyledLink,
  CustomerOptions,
} from "./styles";
import { Stepper } from "../Stepper";
import { Empty } from "../../components/Empty";

import { CiHeart } from "react-icons/ci";
import { PiPencilSimpleLight } from "react-icons/pi";

import { USER_ROLE } from "../../utils/roles";
import { useNavigate } from "react-router-dom";

export const DishCard = ({ data }) => {
  const navigate = useNavigate();

  const { user } = useAuth();
  const { getDishImage } = useDishData();

  const dishImg = getDishImage(data.image);

  const goToEditPage = () => {
    navigate(`/edit/${data.dish_id}`);
  };

  return (
    <Container>
      {![USER_ROLE.ADMIN].includes(user.role) ? (
        <CiHeart />
      ) : (
        <PiPencilSimpleLight onClick={goToEditPage} />
      )}

      <StyledLink to={`/view/${data.dish_id}`}>
        <Cover src={dishImg} alt="Imagem do alimento" />
        <H2>{data.title} &gt;</H2>
        <P>{data.description}</P>
        <Span>R$ {data.price} </Span>
      </StyledLink>

      {![USER_ROLE.ADMIN].includes(user.role) ? (
        <CustomerOptions>
          <Stepper />
          <StyledButton title="Incluir" />
        </CustomerOptions>
      ) : (
        <Empty />
      )}
    </Container>
  );
};
