import OutputView from './OutputView.js';
import InputView from './InputView.js';

class App {
    async run() {
        const outputView = new OutputView();
        const inputView = new InputView();
        // 인사말 출력
        outputView.printGreeting();
        // 방문 날짜, 메뉴 입력 받음
        const date = await inputView.readVisitDate();
        const order = await inputView.readOrderMenu();
    }
}

export default App;
