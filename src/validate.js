import { ERROR, MIN_DATE, MAX_DATE } from './constants.js';

const menuList = {
    "양송이수프": true,
    "타파스": true,
    "시저샐러드": true,
    "티본스테이크": true,
    "바비큐립": true,
    "해산물파스타": true,
    "크리스마스파스타": true,
    "초코케이크": true,
    "아이스크림": true,
    "제로콜라": true,
    "레드와인": true,
    "샴페인": true
  };

function validateVisitDate(visitDate) {
    if (isNaN(visitDate) || visitDate < MIN_DATE || visitDate > MAX_DATE) {
        throw new Error(ERROR.invalidDate);
    }
}

function isValidOrderMenu(orderMenu) {
  const menuRegex = /^[가-힣\s]+-\d+$/;
  const validMenus = new Set();

  const menuEntries = orderMenu.split(',');
  for (const menuEntry of menuEntries) {
    validateMenuEntry(menuEntry, validMenus);
  }

  return true;
}

function validateMenuEntry(menuEntry, validMenus) {
  const trimmedMenuEntry = menuEntry.trim();
  const [menuName, quantity] = trimmedMenuEntry.split('-');

  if (!isValidMenuFormat(trimmedMenuEntry)) {
    throw new Error(ERROR.invalidMenuFormat);
  }

  if (!isValidMenuName(menuName)) {
    throw new Error(ERROR.orderNotOnMenu);
  }

  if (!isValidMenuCount(quantity)) {
    throw new Error(ERROR.invalidMenuCount);
  }

  if (validMenus.has(menuName)) {
    throw new Error(ERROR.duplicateMenu);
  }

  validMenus.add(menuName);
}

function isValidMenuFormat(menuEntry) {
  const menuRegex = /^[가-힣\s]+-\d+$/;
  return menuRegex.test(menuEntry);
}

function isValidMenuName(menuName) {
    return menuList[menuName] === true;
}

function isValidMenuCount(quantity) {
  return !isNaN(quantity) && quantity >= 1;
}

export { validateVisitDate, isValidOrderMenu };