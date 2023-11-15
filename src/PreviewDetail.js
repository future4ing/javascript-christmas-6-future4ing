import { Console } from '@woowacourse/mission-utils';
import { TITLE, NO_BENEFIT, GIFT } from './constants.js';
        
class PreviewDetail {
    printMenu(order) {
        Console.print(TITLE.ORDER_MENU);

        const items = order.split(',');

        for (const item of items) {
            const [name, quantity] = item.split('-');
            Console.print(`${name.trim()} ${quantity.trim()}개`);
        }
    }

    printTotalOrderPrice(totalOrderPrice) {
        Console.print(`\n${TITLE.TOTAL_AMOUNT}\n${totalOrderPrice.toLocaleString()}원`);
    }
    
    printGiftMenu(totalOrderPrice) {
        Console.print(`\n${TITLE.GIFT_MENU}\n${totalOrderPrice < 120000 ? NO_BENEFIT : GIFT}\n`);
    }

}
        
        
        
export default PreviewDetail;