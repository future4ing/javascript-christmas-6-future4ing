const INPUT_DATE =
  '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n';
const INPUT_ORDER = '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n';

const MIN_DATE = 1;
const MAX_DATE = 31;

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

const DISCOUNT_PER_QUANTITY = 2023;
const DISCOUNT_BASE = 1000;
const CHRISTMAS_DISCOUNT_INCREMENT = 100;

const MINIMUM_COST_FOR_DISCOUNT = 10000;
const EVENT_GIFT_THRESHOLD = 120000;
const EVENT_GIFT_DISCOUNT = 25000;

const FRIDAY = 5;
const SATURDAY = 6;
const SUNDAY = 0;
const CHRISTMAS_DAY = 25;

const SANTA_BADGE_THRESHOLD = 20000;
const TREE_BADGE_THRESHOLD = 10000;
const STAR_BADGE_THRESHOLD = 5000;

const NO_DISCOUNT = '없음';
const CHRISTMAS_DISCOUNT_NAME = '크리스마스 디데이 할인';
const WEEKDAY_DISCOUNT_NAME = '평일 할인';
const WEEKEND_DISCOUNT_NAME = '주말 할인';
const SPECIAL_DISCOUNT_NAME = '특별 할인';
const EVENT_GIFT_NAME = '증정 이벤트';

const SANTA_BADGE = '산타';
const TREE_BADGE = '트리';
const STAR_BADGE = '별';

export {
    INPUT_DATE,
    INPUT_ORDER,
    MIN_DATE,
    MAX_DATE,
    ERROR,
    MESSAGE_GREETING,
    MESSAGE_PREVIEW,
    TITLE,
    UNIT_PRICE,
    UNIT_QUANTITY,
    MINIMUM_FOR_GIFT,
    GIFT,
    NO_BENEFIT,
    DISCOUNT_PER_QUANTITY,
    DISCOUNT_BASE,
    CHRISTMAS_DISCOUNT_INCREMENT,
    MINIMUM_COST_FOR_DISCOUNT,
    EVENT_GIFT_THRESHOLD,
    EVENT_GIFT_DISCOUNT,
    FRIDAY,
    SATURDAY,
    SUNDAY,
    CHRISTMAS_DAY,
    SANTA_BADGE_THRESHOLD,
    TREE_BADGE_THRESHOLD,
    STAR_BADGE_THRESHOLD,
    NO_DISCOUNT,
    CHRISTMAS_DISCOUNT_NAME,
    WEEKDAY_DISCOUNT_NAME,
    WEEKEND_DISCOUNT_NAME,
    SPECIAL_DISCOUNT_NAME,
    EVENT_GIFT_NAME,
    SANTA_BADGE,
    TREE_BADGE,
    STAR_BADGE
};