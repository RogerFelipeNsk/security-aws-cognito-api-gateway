const createSchema = {
  type: "object",
  properties: {
    PK: { type: "string" },
    order_id: { type: "string" },
    user_id: { type: "string" },
  },
  required: ["PK", "order_id", "user_id"],
} as const;

const updateSchema = {
  type: "object",
  properties: {
    PK: { type: "string" },
    SK: { type: "string" },
    order_id: { type: "string" },
    user_id: { type: "string" },
  },
  required: ["PK", "SK", "order_id", "user_id"],
} as const;

export { createSchema, updateSchema };
