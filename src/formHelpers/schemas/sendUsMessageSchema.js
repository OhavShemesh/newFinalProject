import Joi from "joi";

const contactSchema = {
    messagehere: Joi.string()
        .ruleset.regex(/^.{10,256}$/)
        .rule({ message: 'Message must be between 10 and 256 characters' })
        .required(),
};

export default contactSchema;
