import joi from 'joi';

const userSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(10).required(),
  //repeat_password: joi.ref('password'),
});

export default userSchema;