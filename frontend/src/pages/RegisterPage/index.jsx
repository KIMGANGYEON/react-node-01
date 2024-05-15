import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/thunkFunctions";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });
  const dispatch = useDispatch();

  const onSubmit = ({ email, password, name }) => {
    const body = {
      email,
      password,
      name,
      image:
        "data:image/jpeg;base64,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",
    };

    dispatch(registerUser(body));

    reset();
  };

  const userEmail = {
    required: "필수입력입니다",
  };

  const userName = {
    required: "필수입력입니다",
  };

  const userPassword = {
    required: "필수입력입니다",
    minLength: {
      value: 6,
      message: "최소 6자 입니다.",
    },
  };
  return (
    <section className="flex flex-col justify-center mt-20 max-w-xl m-auto">
      <div className="p-6 bg-white rounded-md shadow-md">
        <h1 className="text-4xl font-semibold text-center">회원가입</h1>
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="text-xl font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-2 bg-white border rounded-md"
              {...register("email", userEmail)}
            />
            {errors?.email && (
              <div>
                <span className="text-red-500">{errors.email.message}</span>
              </div>
            )}
          </div>
          <div className="mb-2">
            <label
              htmlFor="name"
              className="text-xl font-semibold text-gray-800"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 mt-2 bg-white border rounded-md"
              {...register("name", userName)}
            />
            {errors?.name && (
              <div>
                <span className="text-red-500">{errors.name.message}</span>
              </div>
            )}
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="text-xl font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-2 bg-white border rounded-md"
              {...register("password", userPassword)}
            />
            {errors?.password && (
              <div>
                <span className="text-red-500">{errors.password.message}</span>
              </div>
            )}
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700 duration-200"
            >
              회원가입
            </button>
          </div>
          <p className="mt-8 text-m font-light text-center text-gray-700">
            아이디가 있다면?
            <a href="/login" className="font-medium hover:underline ml-2">
              로그인
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
