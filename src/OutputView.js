import { Console } from '@woowacourse/mission-utils';
import { MESSAGE_GREETING } from './constants.js';

class OutputView {
    printGreeting() {
        Console.print(MESSAGE_GREETING);
    }
}



export default OutputView;