(function(Scratch) {
  'use strict';
  class Extension {
    getInfo() {
      return {
        id: "joe",
        name: "Joeify",
        blocks: [
          {
            opcode: 'joes',
            text: 'Joeify [TXT]',
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
                TXT: {
                    Scratch.ArgumentType.STRING
                }
            }
          }
        ]
      };
    }

    joes(args) {
    const text = args.TXT;


     const replacementMap = {
     'a': 'j',
     'b': 'j',
     'c': 'j',
     'd': 'j',
     'e': 'j',
     'f': 'j',
     'g': 'j',
     'h': 'j',
     'i': 'o',
     'j': 'o',
     'k': 'o',
     'l': 'o',
     'm': 'o',
     'n': 'o',
     'o': 'o', // i guess :^?
     'p': 'o',
     'q': 'e',
     'r': 'e',
     's': 'e',
     't': 'e',
     'u': 'e',
     'v': 'e',
     'w': 'e',
     'x': 'e',
     'y': 'j',
     'z': 'o',
      };


      const result = text.replace(/[abcdefghijklmnopqrstuvwxyz]/g, (matched) => replacementMap[matched]);
    
      return result
    }
  }

  Scratch.extensions.register(new Extension());
})(Scratch);