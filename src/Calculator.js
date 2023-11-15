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

export { calculateOrderCost };