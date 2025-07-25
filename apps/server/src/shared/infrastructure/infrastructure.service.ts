import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InfrastructureService {
    constructor(private readonly prisma:PrismaService){}

    async checkRecordExists(model:string,id:string){
        const record= await this.prisma[model].findUnique({
            where:{id}
        })
        if(!record){
            throw new NotFoundException(`${model} with id ${id} not found`)
        }
        return record
    }

    async checkDuplicate(model:string,fields:{property:string,value:any}[]){
        for(const field of fields){
            const record =await this.prisma[model].findFirst({
                where:{[field.property]:field.value}
            })
            if(record){
                throw new ConflictException(
                    `${model} with ${field.property} ${field.value} already exists`
                )
            }
        }
    }
}
