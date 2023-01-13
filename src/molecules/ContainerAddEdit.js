import {
  Container,
  Heading,
  Title,
  Actions,
  Content
} from "../atoms/Container";

const ContainerAddEdit = ({ title, children, onEdit, onAdd }) => {
  return (
    <Container>
      <Heading>
        <Title>{title}</Title>
        <Actions>
          <button onClick={onAdd}>
            <span role="img" aria-label="Add">
              ➕
            </span>
          </button>
          {onEdit && (
            <button onClick={onEdit}>
              <span role="img" aria-label="edit">
                ✏️
              </span>
            </button>
          )}
        </Actions>
      </Heading>
      <Content>{children}</Content>
    </Container>
  );
};

export default ContainerAddEdit;
