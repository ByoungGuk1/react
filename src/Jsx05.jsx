// age 를 상수 나이로 설정

import PassComponent from "./PassComponent";
import NotPassComponent from "./NotPassComponent";
import LuckyComponent from "./LuckyComponent";
import UnLuckyComponent from "./UnLuckyComponent";

const Jsx05 = () => {
  const age = 20;
  const isAdult = age > 19;
  const isEven = age % 2 === 0;
  const enter = isAdult ? <PassComponent /> : <NotPassComponent />;
  const lucky = isEven ? <LuckyComponent /> : <UnLuckyComponent />;
  return (
    <div>
      <p>
        나이는 {age}, {enter}, {lucky}
      </p>
    </div>
  );
};

export default Jsx05;