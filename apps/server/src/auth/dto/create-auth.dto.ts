import { IsEmail, IsString } from "class-validator";

export class CreateAuthDto {
    @IsString()
    firstName:string;

    @IsString()
    lastName:string;

    @IsString()
    phone:string;

    @IsString()
    @IsEmail()
    email:string;

    @IsString()
    password:string;
}
