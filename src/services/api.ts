import { getAllStores as fetchAllStores, getStoreById as fetchStore } from '../models/storeModel';

export const fetchStores = async () => {
  return await fetchAllStores();
};

export const fetchStoreById = async (id: number) => {
  return await fetchStore(id);
};
