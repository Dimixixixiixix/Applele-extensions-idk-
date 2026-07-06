(function(Scratch) {
  'use strict';
  class Extension {
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
      console.log('Added ' + args.MON + ' money!');
    }
  }
  Scratch.extensions.register(new Extension());
})(Scratch);