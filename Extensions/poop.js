(function(Scratch) {
  'use strict';
  class Extension {
    getInfo() {
      return {
        id: "poopberr",
        name: "Poop",
        blocks: [
          {
            opcode: 'spawn',
            text: 'Spawn poop',
            blockType: Scratch.BlockType.COMMAND
          }
        ]
      };
    }

    spawn() {
      console.log('Hello world!');
    }
  }

  Scratch.extensions.register(new Extension());
})(Scratch);