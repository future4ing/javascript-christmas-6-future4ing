import { Console } from "@woowacourse/mission-utils";
import { MESSAGE_GREETING } from './constants.js';

class App {
  async run() {
    Console.print(MESSAGE_GREETING);

  }
}

export default App;
