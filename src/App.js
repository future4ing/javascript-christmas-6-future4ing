import { Console } from "@woowacourse/mission-utils";
import InputView from './InputView.js';
import { MESSAGE_GREETING } from './constants.js';

class App {
  async run() {
    Console.print(MESSAGE_GREETING);
    const input = new InputView;
    input.readDate();
  }
}

export default App;
