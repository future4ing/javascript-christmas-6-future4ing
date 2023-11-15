import { Console } from '@woowacourse/mission-utils';
import { TITLE } from './constants.js';
        
class PreviewDetail {
    printMenu(order) {
        Console.print(TITLE.ORDER_MENU);

        const items = order.split(',');

        for (const item of items) {
            const [name, quantity] = item.split('-');
            Console.print(`${name.trim()} ${quantity.trim()}개`);
        }
    }

}
        
        
        
export default PreviewDetail;