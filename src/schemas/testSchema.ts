import joi from 'joi';

const testSchema = joi.object({
  name: joi.string().required(),
  pdfUrl: joi
  .string()
  .pattern(/^[a-zA-Z0-9-_]+[:./\\]+([a-zA-Z0-9 -_./:=&"'?%+@#$!])+$/)
  .required(),
  categoryId: joi.number().required(),
  teacherDisciplineId: joi.number().required()
});

export default testSchema;