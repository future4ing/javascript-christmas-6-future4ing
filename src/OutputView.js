import { Console } from '@woowacourse/mission-utils';
import { MESSAGE_GREETING, MESSAGE_PREVIEW } from './constants.js';

class OutputView {
    printGreeting() {
        Console.print(MESSAGE_GREETING);
    }

    printPreview(date) {
        const message = MESSAGE_PREVIEW.replace("${date}", date);
        Console.print(message);
    }
}



export default OutputView;