import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Wallet } from './dto/wallet.dto';
import { RequestService } from './request.service';

@Controller('request')
export class RequestController {
    constructor(private requestService: RequestService) {}

    @Get()
    async distribute(@Body() wallet: Wallet): Promise<boolean> {
        return this.requestService.distribute(wallet);
    }
}
