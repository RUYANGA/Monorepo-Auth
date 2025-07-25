import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateAuthDto {
    @IsString()
    @IsNotEmpty()
    firstName:string;

    @IsNotEmpty()
    @IsString()
    lastName:string;

    @IsNotEmpty()
    @IsString()
    phone:string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email:string;

    @IsNotEmpty()
    @IsString()
    password:string;
}
