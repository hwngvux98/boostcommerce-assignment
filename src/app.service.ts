import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  calculateParkingFee(time): number {
    var timeIn = new Date(time)
    var timeOut = new Date()
    var duration: number = timeOut.getTime() - timeIn.getTime();

    var minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
      days = Math.floor((duration / (1000 * 60 * 60 * 24)))

    if(days < 1) {
      days = 1;
    }
    if(days > 1) {
      days = days + hours/24 + minutes/(24*60);
    }
    
    var parkingDurationDays = days.toFixed(2);
    var fee = parseFloat(parkingDurationDays) * 5;
    return parseFloat(fee.toFixed(2));
  }

  detectWordWithDigitLetter(text): string[]{
    const regex = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/gm;
    var listWord = text.split(" ")
    var listDetectWord = [];
    for(let i = 0; i < listWord.length; i++) {
      if(listWord[i].match(regex)) {
        listDetectWord.push(listWord[i])
      }
    }
    return listDetectWord
  }

  generateWordVariation(arr): string[] {
    var arr1 = [];
    for(let i = 0; i < arr.length; i++) {
      for(let j = 0; j < arr[i].length; j++) {
        if(((/[a-zA-Z]/).test(arr[i][j]) && (/[0-9]/).test(arr[i][j+1]) && j != arr[i].length - 1 ) || ((/[0-9]/).test(arr[i][j]) && (/[a-zA-Z]/).test(arr[i][j+1]) && j != arr[i].length - 1)) {
          var vari = arr[i].substring(0, j + 1) + "-" + arr[i].substring(j + 1, arr[i].length);
          arr1.push(vari)
          for(let i = 0; i < arr1.length; i++) {
          	for(let j = 0; j < arr1[i].length; j++) {
          		if(((/[a-zA-Z]/).test(arr1[i][j]) && (/[0-9]/).test(arr1[i][j+1]) && j != arr1[i].length - 1 ) || ((/[0-9]/).test(arr1[i][j]) && (/[a-zA-Z]/).test(arr1[i][j+1]) && j != arr1[i].length - 1)) {
          			var vari2 = arr1[i].substring(0, j + 1) + "-" + arr1[i].substring(j + 1, arr1[i].length);
          			if(!arr1.includes(vari2)) {
          				arr1.push(vari2)
          			}
          		}
          	}
          }
        }
      }
    }
    return arr1
  }
}
