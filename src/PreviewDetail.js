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
        Console.print(`\n${TITLE.GIFT_MENU}\n${totalOrderPrice < 120000 ? NO_BENEFIT : GIFT}`);
    }

    printBenefits(discounts) {
        Console.print(`\n${TITLE.BENEFIT}`);
        if (discounts.length === 1 && discounts[0].name === NO_BENEFIT) {
            Console.print(NO_BENEFIT);
        } else {
            discounts.forEach(discount => {
                Console.print(`${discount.name}: ${discount.amount.toLocaleString()}원`);
            });
        }
    }

    printTotalBenefit(totalBenefit) {
        Console.print(`\n${TITLE.TOTAL_BENEFIT}\n${totalBenefit.toLocaleString()}원`);
    }

    printDiscountedTotalPrice(discountedTotalPrice) {
        Console.print(`\n${TITLE.AMOUNT_AFTER_DISCOUNT}\n${discountedTotalPrice.toLocaleString()}원`);
    }

}
        
        
        
export default PreviewDetail;