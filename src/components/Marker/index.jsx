import { FiPlus, FiX } from "react-icons/fi";
import { Container, Input } from "./styles";

export function Marker({ isNew = false, value, onClick, ...rest }) {
  return (
    <Container $isnew={isNew}>
      {isNew ? (
        <Input type="text" value={value} readOnly={!isNew} {...rest} />
      ) : (
        <p>{value}</p>
      )}

      <button
        type="button"
        onClick={onClick}
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
