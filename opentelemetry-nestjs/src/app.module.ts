import {Module} from '@nestjs/common';
import {DiceController} from "./dice/dice.controller";

@Module({
    imports: [],
    controllers: [DiceController],
    providers: [],
})
export class AppModule {
}
