(function(Scratch) {
  'use strict';
  class Extension {
    constructor() {
      this.money = 0;
    }
    getInfo() {
      return {
        id: "mrcrabs",
        name: "Money! Money!",
        color1: "#08cf08",
        color2: "#339e0d",
        blocks: [
          {
            opcode: 'add',
            text: 'add [MON] money',
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              MON: {
                type: Scratch.ArgumentType.NUMBER
              }
            }
          }
        ]
      };
    }
    add(args) {
      this.money += arg.MON
    }
  }
  Scratch.extensions.register(new Extension());
})(Scratch);