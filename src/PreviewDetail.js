import { Console } from '@woowacourse/mission-utils';
import { TITLE, NO_BENEFIT, GIFT, UNIT_PRICE, UNIT_QUANTITY } from './constants.js';
        
class PreviewDetail {
    printMenu(order) {
        Console.print(TITLE.ORDER_MENU);
    
        const items = order.split(',');
        items.forEach(item => {
            const [name, quantity] = item.split('-');
            Console.print(`${name.trim()} ${quantity.trim()}${UNIT_QUANTITY}`);
        });
    }

    printTotalOrderPrice(totalOrderPrice) {
        Console.print(`\n${TITLE.TOTAL_AMOUNT}\n${totalOrderPrice.toLocaleString()}${UNIT_PRICE}`);
    }
    
    printGiftMenu(totalOrderPrice) {
        Console.print(`\n${TITLE.GIFT_MENU}\n${totalOrderPrice < 120000 ? NO_BENEFIT : GIFT}`);
    }

    printBenefits(discounts) {
        Console.print(`\n${TITLE.BENEFIT}`);
        if (discounts.length === 1 && discounts[0].name === NO_BENEFIT) {
            Console.print(NO_BENEFIT);
        } else {
            discounts.forEach(discount => {
                Console.print(`${discount.name}: ${discount.amount.toLocaleString()}${UNIT_PRICE}`);
            });
        }
    }

    printTotalBenefit(totalBenefit) {
        Console.print(`\n${TITLE.TOTAL_BENEFIT}\n${totalBenefit.toLocaleString()}${UNIT_PRICE}`);
    }

    printDiscountedTotalPrice(discountedTotalPrice) {
        Console.print(`\n${TITLE.AMOUNT_AFTER_DISCOUNT}\n${discountedTotalPrice.toLocaleString()}${UNIT_PRICE}`);
    }

    printEventBadge(eventBadge) {
        Console.print(`\n${TITLE.EVENT_BADGE}\n${eventBadge.length === 0 ? NO_BENEFIT : eventBadge}`);
    }
}
        
export default PreviewDetail;