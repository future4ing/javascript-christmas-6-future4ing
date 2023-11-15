const INPUT_DATE =
  '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n';
const INPUT_ORDER = '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n';

const ERROR_PREFIX = '[ERROR]';
const ERROR = {
  invalidDate: `${ERROR_PREFIX} 유효하지 않은 날짜입니다. 다시 입력해 주세요.`,
  orderNotOnMenu: `${ERROR_PREFIX} 유효하지 않은 주문입니다. 다시 입력해 주세요.`,
  invalidMenuCount: `${ERROR_PREFIX} 유효하지 않은 주문입니다. 다시 입력해 주세요.`,
  invalidMenuFormat: `${ERROR_PREFIX} 유효하지 않은 주문입니다. 다시 입력해 주세요.`,
  duplicateMenu: `${ERROR_PREFIX} 유효하지 않은 주문입니다. 다시 입력해 주세요.`,
  invalidTotalCount: `${ERROR_PREFIX} 메뉴는 한 번에 최대 20개까지만 주문할 수 있습니다. 다시 입력해 주세요.`,
  orderOnlyDrink: `${ERROR_PREFIX} 음료만 주문 시, 주문할 수 없습니다. 다시 입력해 주세요.`,
};
 
const MESSAGE_GREETING = '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.';
const MESSAGE_PREVIEW = '12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n';

const TITLE_BRACKET_BEFORE = '<';
const TITLE_BRACKET_AFTER = '>';
const TITLE = {
    ORDER_MENU: `${TITLE_BRACKET_BEFORE}주문 메뉴${TITLE_BRACKET_AFTER}`,
    TOTAL_AMOUNT: `${TITLE_BRACKET_BEFORE}할인 전 총주문 금액${TITLE_BRACKET_AFTER}`,
    GIFT_MENU: `${TITLE_BRACKET_BEFORE}증정 메뉴${TITLE_BRACKET_AFTER}`,
    BENEFIT: `${TITLE_BRACKET_BEFORE}혜택 내역${TITLE_BRACKET_AFTER}`,
    TOTAL_BENEFIT: `${TITLE_BRACKET_BEFORE}총혜택 금액${TITLE_BRACKET_AFTER}`,
    AMOUNT_AFTER_DISCOUNT: `${TITLE_BRACKET_BEFORE}할인 후 예상 결제 금액${TITLE_BRACKET_AFTER}`,
    EVENT_BADGE: `${TITLE_BRACKET_BEFORE}12월 이벤트 배지${TITLE_BRACKET_AFTER}`,
};

const UNIT_PRICE = '원';
const UNIT_QUANTITY = '개';

const MINIMUM_FOR_GIFT = 120000;
const GIFT = '샴페인 1개';
const NO_BENEFIT = '없음';

export {
    INPUT_DATE,
    INPUT_ORDER,
    ERROR,
    MESSAGE_GREETING,
    MESSAGE_PREVIEW,
    TITLE,
    UNIT_PRICE,
    UNIT_QUANTITY,
    MINIMUM_FOR_GIFT,
    GIFT,
    NO_BENEFIT,
};