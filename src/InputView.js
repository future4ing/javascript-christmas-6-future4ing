/* eslint-disable import/no-cycle */
import { Console } from '@woowacourse/mission-utils';
import { INPUT_DATE, ERROR } from './constants.js';

class InputView {
    constructor() {
        this.input = 0;
    }
    
    async readDate() {
        while (true) {
            try {
                const input = await Console.readLineAsync(INPUT_DATE);
    
                const dateInput = parseInt(input, 10);
                if (isNaN(dateInput) || dateInput < 1 || dateInput > 31) {
                    throw new Error(ERROR.invalidDate);
                }
                this.input = dateInput;
                
                return this.input;
    
            } catch (error) {
                // 예외 처리: 에러 메시지 출력 또는 다른 처리를 추가할 수 있습니다.
                console.error(error.message);
            }
        }

        
    }
    // ...
}


export default InputView;