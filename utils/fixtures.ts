import { test as base } from '@playwright/test'
import { RequestHandler } from '../utils/request-handler'
import { APILogger } from './logger'
import { config } from '../api-test.config'
import { createToken } from '../helpers/createToken'
import { ProductClient } from '../api-objects/productClient'

export type TestOptions ={
    api: RequestHandler
    products: ProductClient
    config: typeof config
}

export type WorkerFixture = {
    authToken: string
}

export const test = base.extend<TestOptions, WorkerFixture>({
    authToken: [async ({}, use) => {
        const authToken = await createToken(config.userName, config.userPassword)
        await use(authToken)
    }, {scope: 'worker'}],

    api: async({request, authToken}, use, testInfo) => {
        const logger = new APILogger()
        const requestHandler = new RequestHandler(request, config.apiUrl, logger, authToken)
        await use(requestHandler)

        if(testInfo.status !== testInfo.expectedStatus){
            await testInfo.attach('API-Logs', {body: logger.getRecentLogs(), contentType: 'text/plain'})
        }
    },

    products: async({api}, use) => {
        const productClient = new ProductClient(api)
        await use(productClient)
    },

    config: async({}, use) => {
        await use(config)
    }
})