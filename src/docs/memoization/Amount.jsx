const Amount = ({props}) => {
  const {divStyle,buttonStyle,amountMemo,couponMemo,addAmount,subtrackAmount,addCoupon,subtrackCoupon} = props;
  console.log("자식 랜더링");

  return (
    <div style={divStyle}>
      <button style={buttonStyle} onClick={subtrackAmount}>-</button>
      <span>수량 : {amountMemo}</span>
      <button style={buttonStyle} onClick={addAmount}>+</button>
      <button style={buttonStyle} onClick={subtrackCoupon}>-</button>
      <span>쿠폰 : {couponMemo}</span>
      <button style={buttonStyle} onClick={addCoupon}>+</button>
    </div>
  );
};

export default Amount;