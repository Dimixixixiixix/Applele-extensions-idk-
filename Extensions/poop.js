(function(Scratch) {
  'use strict';
  class Extension {
    getInfo() {
      return {
        id: "poopberr",
        name: "Poop",
        color1: "#7d400e",
        color2: "#5c300c",
        color3: "#5c300c",
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