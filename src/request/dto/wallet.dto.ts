import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator";

export class Wallet {
    @IsString()
    @IsNotEmpty()
    receiver: string

    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    @Max(3)
    amount: number
}