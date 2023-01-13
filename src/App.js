import ContainerAddEdit from "./molecules/ContainerAddEdit";
import ContainerWithVisibleMessage from "./molecules/ContainerWithVisibleMessage";

export default function App() {
  return (
    <div className="App">
      <ContainerAddEdit title={"Title"} onAdd={() => {}} onEdit={() => {}}>
        <p>This is the child of the add/edit container</p>
      </ContainerAddEdit>
      <ContainerWithVisibleMessage
        title={"Mess"}
        message={"This information is not public"}
      >
        <p>This is the child of the message style container</p>
      </ContainerWithVisibleMessage>
    </div>
  );
}
