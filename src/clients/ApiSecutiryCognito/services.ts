import { ApiSecutiryCognitoModel } from "@src/models";
import { ICreate, IUpdate } from "@src/routes/main/schema";

const serviceCreate = async (item: ICreate) => {
  try {
    const created = await ApiSecutiryCognitoModel.create(item);
    return created;
  } catch (error) {
    throw error;
  }
};

const serviceUpdate = async (item: IUpdate) => {
  try {
    const created = await ApiSecutiryCognitoModel.update(item);
    return created;
  } catch (error) {
    throw error;
  }
};

export { serviceCreate, serviceUpdate };
