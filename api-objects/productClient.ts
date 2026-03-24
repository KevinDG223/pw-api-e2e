import { RequestHandler } from "../utils/request-handler"
import { allure } from 'allure-playwright'

export class ProductClient {
    private api: RequestHandler

    constructor(api: RequestHandler) {
        this.api = api
    }
    async getProducts(limit: number = 10, skip: number = 0) {
        return await this.api
            .path('/products')
            .params({ limit: 10, skip: 0 })
            .getRequest(200, { dir: 'products', file: 'GET_products' })
    }

    async getSingleProduct(id: number) {
        return await this.api
            .path(`/products/${id}`)
            .getRequest(200, { dir: 'products', file: 'GET_product' })
    }

    async createProduct(productData: object) {
        return await this.api
            .path('/products/add')
            .body(productData)
            .postRequest(201, { dir: 'products', file: 'POST_products' })
    }

    async updateProduct(id: number, productData: object) {
        return await this.api
            .path(`/products/${id}`)
            .body(productData)
            .putRequest(200, { dir: 'products', file: 'PUT_products' })
    }

    async deleteProduct(id: number) {
        return await this.api
            .path(`/products/${id}`)
            .deleteRequest(200, { dir: 'products', file: 'DELETE_products' })
    }
}