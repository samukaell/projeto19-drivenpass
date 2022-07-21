import {prisma}  from "../config/db.js"
import { CreateTestData } from "../services/testsService.js"

async function createTest(test:CreateTestData) {
    await prisma.tests.create({
        data:test,
    })
}

export{
    createTest
}