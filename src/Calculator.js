import menu from './Menu.js';

function calculateOrderCost(menu, order) {
    let totalCost = 0;
    // 주문을 각 메뉴별로 분리 (예: "해산물파스타-2,레드와인-1,초코케이크-1")
    const orderedItems = order.split(',');
    // 주문 금액 계산 로직 구현
    for (const item of orderedItems) {
        // 각 항목을 이름과 수량으로 분리 (예: "해산물파스타-2" -> ["해산물파스타", "2"])
        const [itemName, quantityStr] = item.split('-');
        const quantity = parseInt(quantityStr, 10);

        // 메뉴에서 해당 항목의 가격 찾기
        const menuItem = menu.find(m => m.name === itemName.trim());
        if (menuItem) {
            totalCost += menuItem.price * quantity;
        }
    }
    return totalCost;
}

function isWeekend(date) {
    // 주말 여부를 확인하는 함수 (금요일: 5, 토요일: 6)
    const dayOfWeek = date.getDay();
    return dayOfWeek === 5 || dayOfWeek === 6;
}

// 평일 할인 요건에 해당하는지 확인 - 디저트 메뉴
function calculateWeekdayDiscount(orderString, menu) {
    let discountAmount = 0;

    // 주문 문자열을 분석하여 메뉴와 수량을 추출
    const orderItems = orderString.split(',').map(item => {
        const [name, quantity] = item.split('-');
        return { name: name.trim(), quantity: parseInt(quantity, 10) };
    });

    // dessert 섹션에 해당하는 메뉴의 수량만큼 할인 적용
    orderItems.forEach(orderItem => {
        const menuItem = menu.find(menuItem => menuItem.name === orderItem.name);
        if (menuItem && menuItem.section === 'dessert') {
            discountAmount += 2023 * orderItem.quantity;
        }
    });

    return discountAmount;
}

// 주말 할인 요건에 부합하는지 확인 - 메인 메뉴
function calculateWeekendDiscount(orderString, menu) {
    let discountAmount = 0;

    // 주문 문자열을 분석하여 메뉴와 수량을 추출
    const orderItems = orderString.split(',').map(item => {
        const [name, quantity] = item.split('-');
        return { name: name.trim(), quantity: parseInt(quantity, 10) };
    });

    // 'main' 섹션에 해당하는 메뉴의 수량만큼 할인 적용
    orderItems.forEach(orderItem => {
        const menuItem = menu.find(menuItem => menuItem.name === orderItem.name);
        if (menuItem && menuItem.section === 'main') {
            discountAmount += 2023 * orderItem.quantity;
        }
    });

    return discountAmount;
}

function calculateChristmasDiscount(dayOfMonth) {
    // 크리스마스 디데이 할인 계산
    if (dayOfMonth >= 1 && dayOfMonth <= 25) {
        return 1000 + (dayOfMonth - 1) * 100;
    } else {
        return 0;
    }
}

// 특별 할인 조건 날짜 확인
function isSpecialDiscountDay(date) {
    const dayOfWeek = date.getDay();
    const dayOfMonth = date.getDate();

    // 별이 있는 날짜 확인: 매주 일요일 (0)과 크리스마스 (12월 25일)
    return dayOfWeek === 0 || dayOfMonth === 25;
}

// 특별할인 조건에 부합할 경우 할인 반환
function calculateSpecialDiscount(date) {
    // 특별 할인 조건 확인
    if (isSpecialDiscountDay(date)) {
        return 1000; // 특별 할인 금액
    } else {
        return 0;
    }
}

// 혜택 내역 계산
function calculateEventDiscounts(dateObj, orderString, totalCost) {
    if (totalCost < 10000) {
        return [{ name: '없음', amount: 0 }];
    }

    let discounts = [];
    // 입력된 숫자 형태의 날짜를 Date 객체로 변환
    const dayOfMonth = dateObj.getDate();
    // 크리스마스 디데이 할인 계산
    const christmasDiscount = calculateChristmasDiscount(dayOfMonth);
    if (christmasDiscount > 0) {
        discounts.push({ name: '크리스마스 디데이 할인', amount: -christmasDiscount });
    }
    // 평일 할인 계산
    if (!isWeekend(dateObj)) {
        const weekdayDiscount = calculateWeekdayDiscount(orderString, menu);
        if (weekdayDiscount > 0) {
            discounts.push({ name: '평일 할인', amount: -weekdayDiscount });
        }
    }
    // 주말 할인 계산
    if (isWeekend(dateObj)) {
        const weekendDiscount = calculateWeekendDiscount(orderString, menu);
        if (weekendDiscount > 0) {
            discounts.push({ name: '주말 할인', amount: -weekendDiscount });
        }
    }
    // 특별 할인 계산
    if (isSpecialDiscountDay(dateObj)) {
        const specialDiscount = calculateSpecialDiscount(dateObj);
        if (specialDiscount > 0) {
            discounts.push({ name: '특별 할인', amount: -specialDiscount });
        }
    }
    // 증정 이벤트 계산
    if (totalCost >= 120000) {
        discounts.push({ name: '증정 이벤트', amount: -25000 }); // 샴페인의 가정된 가격
    }
    
    return discounts.length > 0 ? discounts : [{ name: '없음', amount: 0 }];
}

function calculateTotalBenefit(discounts) {
    let totalBenefit = 0;
    // 모든 할인 및 증정 금액 합산
    for (const discount of discounts) {
        totalBenefit += discount.amount;
    }

    return totalBenefit;
}


/*

function calculateDiscountedTotal(totalCost, totalBenefits) {
    // 할인 후 예상 결제 금액 계산
}

function determineEventBadge(totalBenefits) {
    // 이벤트 배지 결정
}

*/

export { calculateOrderCost, calculateEventDiscounts, calculateTotalBenefit };