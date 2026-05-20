import * as zod from "zod";

const LoginSchema = zod.object().shape({
  email: zod.string().email().required(),
  password: zod.string().password().required(),
});

export default LoginSchema;
