import Button from "../style";

const BasicButton = ({children}) => {
  return (
    <div>
      <Button>{children}</Button>
    </div>
  );
};

export default BasicButton;