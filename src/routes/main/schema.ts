const createSchema = {
  type: "object",
  properties: {
    body: {
      type: "object",
      properties: {
        PK: { type: "string" },
        order_id: { type: "string" },
        user_id: { type: "string" },
      },
      required: ["PK", "order_id", "user_id"],
    },
  },
  required: ["body"],
} as const;

interface ICreate {
  PK: string;
  SK: string | `${string}-${string}-${string}-${string}-${string}`;
  order_id: string;
  user_id: string;
  created_at?: number;
  updated_at?: number;
}

interface IUpdate {
  PK: string;
  SK: string | `${string}-${string}-${string}-${string}-${string}`;
  order_id: string;
  user_id: string;
  created_at?: number;
  updated_at?: number;
}

const updateSchema = {
  type: "object",
  required: ["body"],
  properties: {
    body: {
      type: "object",
      properties: {
        PK: { type: "string" },
        SK: { type: "string" },
        order_id: { type: "string" },
        user_id: { type: "string" },
      },
      required: ["PK", "SK", "order_id", "user_id"],
    },
  },
} as const;

export { createSchema, updateSchema, ICreate, IUpdate };
