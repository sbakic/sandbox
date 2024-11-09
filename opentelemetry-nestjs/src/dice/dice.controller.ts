import { Controller, Get } from '@nestjs/common';

@Controller('rolldice')
export class DiceController {

    @Get()
    rollDice(): string {
        return this.getRandomNumber(1, 6).toString();
    }

    private getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min) + min);
    }
}
