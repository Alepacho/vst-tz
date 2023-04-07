import { defineStore } from 'pinia';
import { IProduct } from '~/types';


export const useStore = defineStore("product-store", {
    state: () => ({
        productList: [] as IProduct[]
    }),
    actions: {
        fetchProductList: async () => {
            const config = useRuntimeConfig()
            console.log("fetchProductList:", config.apiUrl)
            const { data, pending, error, refresh } = await useFetch(`${config.apiUrl}products/`, {
                method: 'GET',
                onResponseError: () => {
                    console.warn("Unable to fetch product list")
                }
            });
            console.log(data)
        },
        addProductToList: (product: IProduct) => {

        }
    },
    getters: {
        getProductList: state => state.productList
    }
});