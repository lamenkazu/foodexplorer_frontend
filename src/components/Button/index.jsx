import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

export function Button({
  title,
  loading = false,
  contra = false,
  icon: Icon,
  to,
  ...rest
}) {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(to);
  };

  return (
    <Container
      onClick={handleNavigation}
      type="button"
      disabled={loading}
      $contra={contra}
      {...rest}
    >
      {Icon && <Icon size={22} />}
      <p> {title}</p>
    </Container>
  );
}
