import { useCallback, useMemo, useState } from 'react';
import Amount from "./Amount";

const ProductContainer = () => {
  console.log("부모 랜더링");
  
  const [like, setLike] = useState(10);
  const [unLike, setUnLike] = useState(5);
  const [amount, setAmount] = useState(1);
  const [coupon, setCoupon] = useState(0);
  
  const increaseLike = () => setLike(like + 1);
  const increaseUnLike = () => setUnLike(unLike + 1);

  const styles = {
    containerDivStyle : {
      width : "500px",
      height : "300px",
      margin : "20px auto",
    },
    productStyle : {
      border : "solid 1px lightgray",
      padding : "30px",
      lineHeight : "1.3",
    },
    divStyle : {
      border : "solid 1px blue",
      height : "60px",
      display : "flex",
      justifyContent : "space-evenly",
      alignItem : "center",
      marginTop : "20px",
      padding : "20px",
    },
    buttonStyle : {
      width : "40px",
      height : "40px",
    },
  }
  
 // memoization =>> 변수
  const memoization = {
    amountMemo :  useMemo(()=>{
      console.log(`amount 연산 ${amount}`);
      return amount;
    },[amount]),
    couponMemo : useMemo(()=>{
      console.log(`coupon 연산 ${coupon}`);
      return coupon;
    },[coupon]),
  }

  // useCallback 함수
  const useCallBack = {
    addAmountCallback : useCallback(() => {
      console.log("amount+ callback");
      setAmount(amount + 1);
    },[amount]),
    subtrackAmountCallback : useCallback(() => {
      console.log("amount- callback");
      setAmount(amount - 1);
    },[amount]),
    addCouponCallback :useCallback(() => {
      console.log("coupon+ callback");
      setCoupon(coupon + 1);
    },[coupon]),
    subtrackCouponCallback : useCallback(() => {
      console.log("coupon- callback");
      setCoupon(coupon - 1);
    },[coupon])
  }

  const props = {
    divStyle : styles.divStyle,
    buttonStyle : styles.buttonStyle,
    amountMemo : memoization.amountMemo,
    couponMemo : memoization.couponMemo,
    addAmount : useCallBack.addAmountCallback,
    subtrackAmount : useCallBack.subtrackAmountCallback,
    addCoupon : useCallBack.addCouponCallback,
    subtrackCoupon : useCallBack.subtrackCouponCallback,
  }

  return (
    <div style={styles.containerDivStyle}>
      <div style={styles.productStyle}>
        <p>[책] 열아홉 스물, 그 사이 스물 하나</p>
        <p>저자 : 이승찬</p>
        <button onClick={increaseLike}>좋아요 : {like}</button>
        <button onClick={increaseUnLike}>싫어요 : {unLike}</button>
        <Amount props = {props}/>
      </div>
    </div>
  );
};

export default ProductContainer;