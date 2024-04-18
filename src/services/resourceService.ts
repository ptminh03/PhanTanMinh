import { Like } from "typeorm"
import { Resource } from "../entities/resource"
import { myDataSource } from "../typeorm"

const resourceRepository = myDataSource.getRepository(Resource)

export const list = async(name: string) => {
    console.log("name", name)
    return resourceRepository.find({
        where: {
            name: Like(`${name}%`)
        },
        order: {
            id: "ASC"
        }
    })
}

export const create = async(name: string): Promise<Resource> => {
    return resourceRepository.save({name})
}

export const detail  = async(id: number): Promise<Resource | null> => {
    return resourceRepository.findOne({where:{id}})
}

export const update = async(id: number, name: string): Promise<Resource> => {
    return resourceRepository.save({id, name})
}

export const remove = async(id: number): Promise<boolean> => {
    const resource = await resourceRepository.findOne({where:{id}})
    if (!resource) {
        return false
    }

    await resourceRepository.remove(resource)
    return true
}
