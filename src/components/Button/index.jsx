import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

export function Button({ title, loading = false, icon: Icon, to, ...rest }) {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(to);
  };

  return (
    <Container
      onClick={handleNavigation}
      type="button"
      disabled={loading}
      {...rest}
    >
      {Icon && <Icon />}
      <p> {title}</p>
    </Container>
  );
}
