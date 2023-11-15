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
        // 주문 메뉴
        details.printMenu(order);
        // <할인 전 총주문 금액>
        const totalOrderPrice = calculateOrderCost(menu, order);
        details.printTotalOrderPrice(totalOrderPrice);
        // <증정 메뉴>
        details.printGiftMenu(totalOrderPrice);
        // <혜택 내역>
        // 숫자 형태의 날짜를 문자열로 변환, 필요한 경우 앞에 '0'을 추가
        function convertNumberToDate(date) {
            const formattedDay = date.toString().padStart(2, '0');
            return new Date(`2023-12-${formattedDay}`);
        }
        const dateObj = convertNumberToDate(date);

        const discounts = calculateEventDiscounts(dateObj, order, totalOrderPrice);
        details.printBenefits(discounts);
        // <총혜택 금액>
        const totalBenefit = calculateTotalBenefit(discounts);
        details.printTotalBenefit(totalBenefit);
        // <할인 후 예상 결제 금액>
        const discountedTotalPrice = calculateDiscountedTotal(totalOrderPrice, discounts);
        details.printDiscountedTotalPrice(discountedTotalPrice);
        // <12월 이벤트 배지>
        const eventBadge = giveEventBadge(totalBenefit);
        details.printEventBadge(eventBadge);
    }
}



export default OutputView;