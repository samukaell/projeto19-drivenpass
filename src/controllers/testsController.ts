import { Request, Response } from "express";
import { CreateTestData } from "../services/testsService";
import * as testsService from "../services/testsService.js"

export async function addTests(req: Request, res: Response) {
    const tests:CreateTestData = req.body;
    await testsService.addTests(tests);
    res.sendStatus(200);
}

export async function findTests(req: Request, res: Response) {
    const {discipline} = req.params;
    console.log("Discipline",discipline);
    res.sendStatus(200);
}