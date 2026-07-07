(function(Scratch) {
  'use strict';
  const blocksIcon = "https://cdn.phototourl.com/free/2026-07-05-db18e682-8ef5-4827-aee3-0030f7b5dad0.png";

  class Extension {
    constructor() {
      this.spriteData = new Map();
    }

    getState(target) {
      if (!this.spriteData.has(target)) {
        this.spriteData.set(target, false);
      }
      return this.spriteData.get(target);
    }

    setState(target, value) {
      this.spriteData.set(target, value);
    }

    getInfo() {
      return {
        id: "applele",
        name: "Applele Blocks V2",
        color1: "#ff0000",
        color2: "#00ff00",
        color3: "#00ff00",
        menuIconURI: blocksIcon,
        blockIconURI: blocksIcon,
        blocks: [
          {
            opcode: 'apple',
            text: 'applele',
            blockType: Scratch.BlockType.COMMAND
          },
          {
            opcode: 'report',
            text: 'this sprite is applele?',
            blockType: Scratch.BlockType.BOOLEAN
          },
          {
            opcode: 'stt',
            text: 'Become applele [APP]',
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              APP: {
                type: Scratch.ArgumentType.BOOLEAN
              }
            }
          },
          {
            opcode: 'when',
            text: 'When becomes applele [YES]',
            blockType: Scratch.BlockType.HAT,
            isEdgeActivated: true,
            arguments: {
              YES: {
                type: Scratch.ArgumentType.BOOLEAN
              }
            }
          }
        ]
      };
    }

    apple(args, util) {
      if (this.getState(util.target) === true) {
        alert("Applele");
      }
    }

    report(args, util) {
      return this.getState(util.target);
    }

    stt(args, util) {
      this.setState(util.target, args.APP === true);
    }

    when(args, util) {
      return this.getState(util.target) === args.YES;
    }
  }

  Scratch.extensions.register(new Extension());
})(Scratch);