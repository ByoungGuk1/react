import C from "./C";
import CharContext from "./CharContext";

const B = ({name}) => {
  return (
    <div>
      <C name = {name} />
      <CharContext.Consumer>
        {({color})=>{
          return <p style={{color : color}}>123</p>
          }}
      </CharContext.Consumer>
      <p>
      </p>
    </div>
  );
};

export default B;