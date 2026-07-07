(function(Scratch) {
  'use strict';
  const blocksIcon = "https://i.postimg.cc/qRsyMrTj/Untitled-07-07-2026-01-41-47.png";
  class Extension {
    getInfo() {
      return {
        id: "textify",
        name: "Textify",
        color1: "#097aeb",
        color2: "#1374ba",
        color3: "#ffffff",
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