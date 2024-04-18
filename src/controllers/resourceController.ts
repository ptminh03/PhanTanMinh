import { NextFunction, Request, Response } from "express"
import * as resourceService  from "../services/resourceService"

export const list = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const name = req.query.name? String(req.query.name): ''
        const resources = await resourceService.list(name)
        res.json(resources)
    } catch(error) {
        next(error)
    }
}

export const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name } = req.body
        const resource = await resourceService.create(name)
        res.json(resource)
    } catch (error) {
        next(error)
    }
}

export const detail = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id)
        const resource = await resourceService.detail(id)
        return resource? res.json(resource) : res.status(404).json({message: "404 Not Found"})
    } catch (error) {
        next(error)
    }
}

export const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id)
        const { name } = req.body

        const resource = await resourceService.detail(id)
        if (!resource) {
            return res.status(404).json({message: "404 Not Found"})
        }
        await resourceService.update(id, name)
        res.json()
    } catch (error) {
        next(error)
    }
}

export const remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id)
        
        const resource = await resourceService.detail(id)
        if (!resource) {
            return res.status(404).json({message: "404 Not Found"})
        }
        
        await resourceService.remove(id)
        res.json()
    } catch (error) {
        next(error)
    }
}
