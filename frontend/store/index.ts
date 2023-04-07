import { defineStore } from 'pinia';
import { IProduct } from '~/types';


export const useStore = defineStore("product-store", {
    state: () => ({
        productList: [] as IProduct[],
        searchInput: ""
    }),
    actions: {
        setSearchInput(value: string) {
            this.searchInput = value
        },
        // можно попроще сделать конечно (через axios)
        async fetchProductList () {
            const config = useRuntimeConfig()
            console.log("fetchProductList:", config.apiUrl)
            const { data, pending, error, refresh } = await useFetch(`${config.apiUrl}products/`, {
                method: 'GET',
                onResponseError: ({ request, response, options }) => {
                    console.warn("Unable to fetch product list:", response)
                },
                onResponse: ({ request, response, options }) => {
                    console.log("request", request)
                    console.log("response", response)
                    console.log("options", options)

                    console.log("data.value:", response._data)
                    // ! лучше обернуть в try catch
                    if (response._data != null) {
                        const d: any = response._data
                        const list: IProduct[] = d.results
                        // state.productList = d.results
                        console.log({list})
                        this.productList = [...list]
                    }

                    return response._data
                }
            });
            
        },
        async addProductToList (product: IProduct) {
            const config = useRuntimeConfig()
            console.log("addProductToList:", product)
            let p: any = product
            p.details = JSON.stringify(product.details)

            await useFetch(`${config.apiUrl}products/`, {
                method: 'POST',
                // body: JSON.stringify(product),
                body: { ...product },
                headers: {
                    // "Content-Type": "multipart/form-data",
                    "Accept": 'application/json',
                    'Content-type': 'application/json',
                },
                onResponseError: ({ request, response, options }) => {
                    console.warn("Unable to fetch product list:", response)
                },
                onResponse: ({ request, response, options }) => {
                    console.log("request", request)
                    console.log("response", response)
                    console.log("options", options)

                    console.log("data.value:", response._data)
                    if (response._data != null) {
                        const d: any = response._data
                        const list: IProduct[] = d.results
                        // state.productList = d.results
                        console.log({list})
                        this.productList = [...list]
                    }

                    return response._data
                }
            });
        },
        async getProductByID(index: number) {
            const config = useRuntimeConfig()
            console.log("getProductByID:", config.apiUrl)
            const { data } = await useFetch(`${config.apiUrl}products/${index}`, {
                method: 'GET',
            })
            return data.value
        }
    },
    getters: {
        getFilteredProductList (state) {
            console.log("search input", state.searchInput)
            // ! Можно дополнить ценником, описанием и тд.
            return state.productList.filter((p) => p.name.toLowerCase().includes(state.searchInput.toLowerCase()))
        }
    }
});