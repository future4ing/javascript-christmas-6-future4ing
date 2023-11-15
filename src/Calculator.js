import menu from './Menu.js';
import { 
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
} from './constants.js';

function calculateItemCost(menu, item) {
    const [itemName, quantityStr] = item.split('-');
    const quantity = parseInt(quantityStr, 10);
    const menuItem = menu.find(m => m.name === itemName.trim());

    return menuItem ? menuItem.price * quantity : 0;
}

function calculateOrderCost(menu, order) {
    const orderedItems = order.split(',');

    return orderedItems.reduce((total, item) => total + calculateItemCost(menu, item), 0);
}

function isWeekend(date) {
    const dayOfWeek = date.getDay();
    return dayOfWeek === FRIDAY || dayOfWeek === SATURDAY;
}

function calculateWeekdayDiscount(orderString, menu) {
    let discountAmount = 0;

    const orderItems = orderString.split(',').map(item => {
        const [name, quantity] = item.split('-');
        return { name: name.trim(), quantity: parseInt(quantity, 10) };
    });

    orderItems.forEach(orderItem => {
        const menuItem = menu.find(menuItem => menuItem.name === orderItem.name);
        if (menuItem && menuItem.section === 'dessert') {
            discountAmount += DISCOUNT_PER_QUANTITY * orderItem.quantity;
        }
    });

    return discountAmount;
}

function calculateWeekendDiscount(orderString, menu) {
    let discountAmount = 0;

    const orderItems = orderString.split(',').map(item => {
        const [name, quantity] = item.split('-');
        return { name: name.trim(), quantity: parseInt(quantity, 10) };
    });

    orderItems.forEach(orderItem => {
        const menuItem = menu.find(menuItem => menuItem.name === orderItem.name);
        if (menuItem && menuItem.section === 'main') {
            discountAmount += DISCOUNT_PER_QUANTITY * orderItem.quantity;
        }
    });

    return discountAmount;
}

function calculateChristmasDiscount(dayOfMonth) {
    if (dayOfMonth >= 1 && dayOfMonth <= CHRISTMAS_DAY) {
        return DISCOUNT_BASE + (dayOfMonth - 1) * CHRISTMAS_DISCOUNT_INCREMENT;
    } 
    return 0;
}

function isSpecialDiscountDay(date) {
    const dayOfWeek = date.getDay();
    const dayOfMonth = date.getDate();

    return dayOfWeek === SUNDAY || dayOfMonth === CHRISTMAS_DAY;
}

function calculateSpecialDiscount(date) {
    if (isSpecialDiscountDay(date)) {
        return DISCOUNT_BASE;
    } 
    return 0;
}

function calculateEventDiscounts(dateObj, orderString, totalCost) {
    if (totalCost < MINIMUM_COST_FOR_DISCOUNT) {
        return [{ name: NO_DISCOUNT, amount: 0 }];
    }

    const discounts = [];
    const dayOfMonth = dateObj.getDate();
    const christmasDiscount = calculateChristmasDiscount(dayOfMonth);
    if (christmasDiscount > 0) {
        discounts.push({ name: CHRISTMAS_DISCOUNT_NAME, amount: -christmasDiscount });
    }
    if (!isWeekend(dateObj)) {
        const weekdayDiscount = calculateWeekdayDiscount(orderString, menu);
        if (weekdayDiscount > 0) {
            discounts.push({ name: WEEKDAY_DISCOUNT_NAME, amount: -weekdayDiscount });
        }
    }
    if (isWeekend(dateObj)) {
        const weekendDiscount = calculateWeekendDiscount(orderString, menu);
        if (weekendDiscount > 0) {
            discounts.push({ name: WEEKEND_DISCOUNT_NAME, amount: -weekendDiscount });
        }
    }
    if (isSpecialDiscountDay(dateObj)) {
        const specialDiscount = calculateSpecialDiscount(dateObj);
        if (specialDiscount > 0) {
            discounts.push({ name: SPECIAL_DISCOUNT_NAME, amount: -specialDiscount });
        }
    }
    if (totalCost >= EVENT_GIFT_THRESHOLD) {
        discounts.push({ name: EVENT_GIFT_NAME, amount: -EVENT_GIFT_DISCOUNT });
    }
    
    return discounts.length > 0 ? discounts : [{ name: NO_DISCOUNT, amount: 0 }];
}

function calculateTotalBenefit(discounts) {
    return discounts.reduce((total, discount) => total + discount.amount, 0);
}

function calculateDiscountedTotal(totalOrderPrice, discounts) {
    const discountAmount = discounts
        .filter(discount => discount.name !== EVENT_GIFT_NAME)
        .reduce((total, discount) => total + discount.amount, 0);

    return totalOrderPrice + discountAmount;
}

function giveEventBadge(totalBenefit) {
    const absoluteBenefit = Math.abs(totalBenefit);

    if (absoluteBenefit >= SANTA_BADGE_THRESHOLD) {
        return SANTA_BADGE;
    } if (absoluteBenefit >= TREE_BADGE_THRESHOLD) {
        return TREE_BADGE;
    } if (absoluteBenefit >= STAR_BADGE_THRESHOLD) {
        return STAR_BADGE;
    } 
    return NO_DISCOUNT;
}

export { calculateOrderCost, calculateEventDiscounts, calculateTotalBenefit, calculateDiscountedTotal, giveEventBadge };