import { Controller, Get } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';

@Controller('rolldice')
export class DiceController {
    @Client({
        transport: Transport.TCP,
        options: { host: '0.0.0.0', port: 3000 },
    })
    private client!: ClientProxy;

    @Get()
    rollDice(): string {
        const randomNumber: string = this.getRandomNumber(1, 6).toString();
        this.client.send({ cmd: randomNumber }, {});

        return randomNumber;
    }

    private getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min) + min);
    }
}
