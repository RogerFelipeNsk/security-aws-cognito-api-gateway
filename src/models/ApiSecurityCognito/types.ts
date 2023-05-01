import { Item } from "dynamoose/dist/Item";

export interface IModel extends Item {
  PK: string;
  SK: string | `${string}-${string}-${string}-${string}-${string}`;
  order_id: string;
  user_id: string;
  created_at?: number;
  updated_at?: number;
}
