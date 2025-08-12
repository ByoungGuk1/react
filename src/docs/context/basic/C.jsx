import CharContext from "./CharContext";

const C = ({name}) => {
  return (
    <div>
      {name}
      <br />
      <CharContext.Consumer>
        {({name}) => name}
      </CharContext.Consumer>
    </div>
  );
};

export default C;