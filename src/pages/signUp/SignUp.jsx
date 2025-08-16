import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const {
    register, handleSubmit, getValues, formState: {isSubmitting, isSubmitted, errors}
  } = useForm({mode: "onChange"})

  const handleSubmitForm = handleSubmit(async(data) => {
    console.log(data);
  });

  // 정규식 표현
  const emailRegex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

  return (
    <div>
      <Link to={'/'}>메인으로</Link>
      <br />
      <br />
      <h1>회원가입</h1>
      <form onSubmit={handleSubmitForm}>
        <label>
          <p>이메일 : </p>
          <input 
            type="text" name="email" placeholder='이메일 입력'
            {...register("email", {
              required : true,
              pattern : {
                value : emailRegex,
              }
            })}
          />
          {console.log(errors)}
          {errors && errors?.email?.type === "required" &&(<p>이메일을 입력해주세요</p>)}
          {errors && errors?.email?.type === "pattern" &&(<p>이메일 형식으로 작성해주세요</p>)}
        </label>
        <label>
          <p>비밀번호 : </p>
          <input 
            type="password" name="password" placeholder='비밀번호 입력'
            {...register("password", {
              required : true,
              pattern : {
                value : passwordRegex,
              }
            })}
          />
          {console.log(errors)}
          {errors && errors?.password?.type === "required" &&(<p>비밀번호를 입력해주세요</p>)}
          {errors && errors?.password?.type === "pattern" &&(
            <p>문자, 숫자, 특수문자(! @ #)를 포함한 8자리 이상으로 작성해주세요</p>
          )}
        </label>
        <label>
          <p>비밀번호 확인 : </p>
          <input 
            type="password" name="passwordConfirm" placeholder='비밀번호 다시 입력'
            {...register("passwordConfirm", {
              required : true,
              validate : {
                matchPassword : (passwordConfirm) => {
                  const {password} = getValues();
                  return password === passwordConfirm;
                }
              }
            })}
          />
          {console.log(errors)}
          {errors && errors?.passwordConfirm?.type === "required" &&(<p>비밀번호를 입력해주세요</p>)}
          {errors && errors?.passwordConfirm?.type === "matchPassword" &&(<p>비밀번호가 일치하지 않습니다</p>)}
        </label>
        <br />
        
        <div>
          <p>취미(선택)</p>
          <label>
            <input type="checkbox" name="hobbies" value={"soccer"} 
              {...register("hobbies")}
            />
            <span>축구</span>
          </label>
          <label>
            <input type="checkbox" name="hobbies" value={"baseball"} 
              {...register("hobbies")}
            />
            <span>야구</span>
          </label>
          <label>
            <input type="checkbox" name="hobbies" value={"basketball"} 
              {...register("hobbies")}
            />
            <span>농구</span>
          </label>
        </div>

        <br />
        <button disabled={isSubmitting}>회원가입</button>
      </form>
    </div>
  );
};

export default SignUp;