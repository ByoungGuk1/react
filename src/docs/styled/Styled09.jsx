// import BasicButton from '../../components/button/BasicButton';

import Button from "../../components/button/style";


const Styled09 = () => {

    const buttonProps = {
    color: "blue",
    font: "h8",
    size: "full",
  }

  return (
    <div>
      {/* <BasicButton>
        만든 버튼
      </BasicButton> */}
      <Button {...buttonProps}>
        만든버튼
      </Button>
    </div>
  );
};

export default Styled09;