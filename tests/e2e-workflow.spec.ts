import { test } from '../utils/fixtures'
import { expect } from '@playwright/test'

test.describe('E2E Purchase Workflow', () => {
    test('Get First Ten Products', async ({ products }) => {
        const response = await products.getProducts(10, 0)
        expect(response.products.length).toBeLessThanOrEqual(10)
    })

    test('Get a Single Product', async ({ products }) => {
        const response = await products.getSingleProduct(1)
        expect(typeof response.title).toBe('string')
    })

    test('Create a Product', async ({ products }) => {
        const data = {"title": "YETI 20 OZ Tumbler", "description": "To Transport easily your drinks", "category": "Rambler", "price": 34.99, "discountPercentage": 10.48, "rating": 4.5, "stock": 99, "tags": ["Rambler","YETI"]}
        const response = await products.createProduct(data)
        expect(response.title).toEqual('YETI 20 OZ Tumbler')
    })

    test('Update a Product', async ({ products }) => {
        const data = { title: 'YETI 20 OZ Tumbler', price: 34.99 }
        const response = await products.updateProduct(1, data)
        expect(response.title).toEqual('YETI 20 OZ Tumbler')
    })

    test('Delete a Product', async ({ products }) => {
        const response = await products.deleteProduct(3)
        expect(response.isDeleted).toBe(true)
    })
})