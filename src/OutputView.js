import { Console } from '@woowacourse/mission-utils';
import { MESSAGE_GREETING, MESSAGE_PREVIEW } from './constants.js';
import PreviewDetail from './PreviewDetail.js';
import { calculateOrderCost, calculateEventDiscounts, calculateTotalBenefit, calculateDiscountedTotal, giveEventBadge } from './Calculator.js';
import menu from './Menu.js';

class OutputView {
    printGreeting() {
        Console.print(MESSAGE_GREETING);
    }

    printPreview(date) {
        const message = MESSAGE_PREVIEW.replace("${date}", date);
        Console.print(message);
    }

    printPreviewDetail(order, date) {
        const details = new PreviewDetail();
        details.printMenu(order);
        
        const totalOrderPrice = calculateOrderCost(menu, order);
        details.printTotalOrderPrice(totalOrderPrice);
        
        details.printGiftMenu(totalOrderPrice);
        
        function convertNumberToDate(date) {
            const formattedDay = date.toString().padStart(2, '0');
            return new Date(`2023-12-${formattedDay}`);
        }
        const dateObj = convertNumberToDate(date);

        const discounts = calculateEventDiscounts(dateObj, order, totalOrderPrice);
        details.printBenefits(discounts);
        
        const totalBenefit = calculateTotalBenefit(discounts);
        details.printTotalBenefit(totalBenefit);
        
        const discountedTotalPrice = calculateDiscountedTotal(totalOrderPrice, discounts);
        details.printDiscountedTotalPrice(discountedTotalPrice);
        
        const eventBadge = giveEventBadge(totalBenefit);
        details.printEventBadge(eventBadge);
    }
}



export default OutputView;