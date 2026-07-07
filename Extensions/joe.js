(function(Scratch) {
  'use strict';
  const blocksIcon = "https://i.postimg.cc/7Lcv8D5f/IMG-6235.jpg";
  class Extension {
    getInfo() {
      return {
        id: "joe",
        name: "Joeify",
        color1: "#bcbf0b",
        blockIconURI: blocksIcon,
        blocks: [
          {
            opcode: 'joes',
            text: 'Joeify [TXT]',
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              TXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'I Like Apples'
              }
            }
          }
        ]
      };
    }
    joes(args) {
      const text = String(args.TXT);
      const replacementMap = {
        'q': 'j', 'w': 'j', 'e': 'j', 'r': 'j', 't': 'j', 'y': 'j', 'u': 'j', 'i': 'j',
        'o': 'o', 'p': 'o', 'a': 'o', 's': 'o', 'd': 'o', 'f': 'o', 'g': 'o', 'h': 'o',
        'j': 'e', 'k': 'e', 'l': 'e', 'z': 'e', 'x': 'e', 'c': 'e', 'v': 'e', 'b': 'e',
        'n': 'j', 'm': 'o',
      };
      const result = text.replace(/[a-zA-Z]/g, (matched) => {
        const lower = matched.toLowerCase();
        const replacement = replacementMap[lower];
        return matched === lower ? replacement : replacement.toUpperCase();
      });

      return result;
    }
  }
  Scratch.extensions.register(new Extension());
})(Scratch);