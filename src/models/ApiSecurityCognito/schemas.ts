import { Schema } from "dynamoose";

const ApiSecutiryCognitoSchema = new Schema(
  {
    PK: {
      type: String,
      hashKey: true,
    },
    SK: {
      type: String,
      rangeKey: true,
    },
    order_id: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
    saveUnknown: true,
  }
);

export { ApiSecutiryCognitoSchema };
