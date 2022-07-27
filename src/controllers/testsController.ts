import { Request, Response } from "express";
import { CreateTestData } from "../services/testsService";
import * as testsService from "../services/testsService.js"

export async function addTests(req: Request, res: Response) {
    const tests:CreateTestData = req.body;
    await testsService.addTests(tests);
    res.sendStatus(200);
}

export async function findTests(req: Request, res: Response) {
    const tests = await testsService.findAll();
    res.status(200).send(tests);
}
