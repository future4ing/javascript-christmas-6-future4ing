import { Console } from '@woowacourse/mission-utils';
import { MESSAGE_GREETING, MESSAGE_PREVIEW } from './constants.js';
import PreviewDetail from './PreviewDetail.js';

class OutputView {
    printGreeting() {
        Console.print(MESSAGE_GREETING);
    }

    printPreview(date) {
        const message = MESSAGE_PREVIEW.replace("${date}", date);
        Console.print(message);
    }

    printPreviewDetail(order) {
        const details = new PreviewDetail();
        // 주문 메뉴
        details.printMenu(order);
    }
}



export default OutputView;