import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

interface TicketInfo {
  timeInDate: string;
}

interface Text {
  text: string;
}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('problem1')
  getParkingFee(@Body() data: TicketInfo): string {
    return this.appService.calculateParkingFee(data.timeInDate) + "$";
  }

  @Post('problem2')
  problem2(@Body() data: Text): string {
    const listDetectWord = this.appService.detectWordWithDigitLetter(data.text);
    const listVariations = this.appService.generateWordVariation(listDetectWord);
    const matchedWord = "Matched Words: '" + listDetectWord.join(", ") + "' " ;
    const variationsWord = "Variations with '-' character: '" + listVariations.join(", ") + "'";
    return matchedWord + `\n` + variationsWord;
  }
}
