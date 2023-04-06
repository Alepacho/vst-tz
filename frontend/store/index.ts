import { defineStore } from 'pinia';
import { IProduct } from '~/types';

export const useStore = defineStore("product-store", {
    state: () => ({
        productList: [] as IProduct[]
    }),
    actions: {
        fetchProductList: () => {
            console.log("fetchProductList")
        },
        addProductToList: (product: IProduct) => {

        }
    },
    getters: {
        getProductList: state => state.productList
    }
});