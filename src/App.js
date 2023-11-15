import OutputView from './OutputView.js';
import InputView from './InputView.js';

class App {
    async run() {
        const outputView = new OutputView();
        const inputView = new InputView();

        outputView.printGreeting();
 
        const date = await inputView.readVisitDate();
        const order = await inputView.readOrderMenu();
   
        outputView.printPreview(date);
        
        outputView.printPreviewDetail(order, date);
    }
}

export default App;
