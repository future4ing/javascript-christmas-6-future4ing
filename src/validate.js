import { ERROR } from './constants.js';

function validateVisitDate(visitDate) {
    if (isNaN(visitDate) || visitDate < 1 || visitDate > 31) {
        throw new Error(ERROR.invalidDate);
    }
}

export { validateVisitDate };