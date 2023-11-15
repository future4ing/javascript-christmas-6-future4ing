import { Console } from '@woowacourse/mission-utils';
import { MESSAGE_GREETING, MESSAGE_PREVIEW } from './constants.js';
import PreviewDetail from './PreviewDetail.js';
import { calculateOrderCost } from './Calculator.js';
import menu from './Menu.js';

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
        // <할인 전 총주문 금액>
        const totalOrderPrice = calculateOrderCost(menu, order);
        details.printTotalOrderPrice(totalOrderPrice);
        // <증정 메뉴>
        details.printGiftMenu(totalOrderPrice);
    }
}



export default OutputView;