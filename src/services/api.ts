import { fetchStores as fetchAllStores, fetchStoreById as fetchStore } from '../models/storeModel';

export const fetchStores = async () => {
  return await fetchAllStores();
};

export const fetchStoreById = async (id: number) => {
  return await fetchStore(id);
};
