import { Console } from '@woowacourse/mission-utils';
import { INPUT_DATE, INPUT_ORDER, MIN_DATE, MAX_DATE } from './constants.js';
import { validateVisitDate, isValidOrderMenu } from './validate.js';

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
        } while (isNaN(visitDate) || visitDate < MIN_DATE || visitDate > MAX_DATE);

        this.inputDate = visitDate;
        return this.inputDate;
    }

    async readOrderMenu() {
        let orderMenu;
        do {
            try {
                orderMenu = await Console.readLineAsync(INPUT_ORDER);
                isValidOrderMenu(orderMenu);
            } catch (error) {
                Console.print(error.message);
            }
        } while (!isValidOrderMenu(orderMenu));
    
        return orderMenu;
    }
}

export default InputView;