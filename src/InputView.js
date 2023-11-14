/* eslint-disable import/no-cycle */
import { Console } from '@woowacourse/mission-utils';
import { INPUT_DATE, INPUT_ORDER } from './constants.js';
import { validateVisitDate } from './validate.js';

class InputView {
    constructor() {
        this.inputDate = 0;
        this.inputOrders = "";
    }

    async readVisitDate() {
        let visitDate;
        do {
            try {
                visitDate = await Console.readLineAsync(INPUT_DATE);
                visitDate = parseInt(visitDate, 10);
                validateVisitDate(visitDate);
            } catch (error) {
                Console.print(error.message);
            }
        } while (isNaN(visitDate) || visitDate < 1 || visitDate > 31);

        this.inputDate = visitDate;
        return this.inputDate;
    }
}

export default InputView;