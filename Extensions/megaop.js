(function (Scratch) {
  'use strict';

  const Cast = Scratch.Cast;

  class extension {
    getInfo() {
      return {
        id: 'burgerkingwithextrafriesyummyandaapple',
        name: 'Mega Operators',
        color1: '#1ac90a',
        color2: '#125c0b',
        blocks: [
          { blockType: Scratch.BlockType.LABEL, text: 'Math' },

          {
            opcode: 'clamp',
            blockType: Scratch.BlockType.REPORTER,
            text: 'clamp [NUM] between [MIN] and [MAX]',
            arguments: {
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 },
              MIN: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              MAX: { type: Scratch.ArgumentType.NUMBER, defaultValue: 10 }
            }
          },
          {
            opcode: 'lerp',
            blockType: Scratch.BlockType.REPORTER,
            text: 'lerp from [A] to [B] by [T]',
            arguments: {
              A: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              B: { type: Scratch.ArgumentType.NUMBER, defaultValue: 10 },
              T: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0.5 }
            }
          },
          {
            opcode: 'mapRange',
            blockType: Scratch.BlockType.REPORTER,
            text: 'map [VALUE] from range ([IN_MIN] to [IN_MAX]) to range ([OUT_MIN] to [OUT_MAX])',
            arguments: {
              VALUE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 },
              IN_MIN: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              IN_MAX: { type: Scratch.ArgumentType.NUMBER, defaultValue: 10 },
              OUT_MIN: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              OUT_MAX: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 }
            }
          },
          {
            opcode: 'roundTo',
            blockType: Scratch.BlockType.REPORTER,
            text: 'round [NUM] to [DECIMALS] decimal places',
            arguments: {
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3.14159 },
              DECIMALS: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 }
            }
          },
          {
            opcode: 'trueMod',
            blockType: Scratch.BlockType.REPORTER,
            text: '[A] mod [B] (always positive)',
            arguments: {
              A: { type: Scratch.ArgumentType.NUMBER, defaultValue: -7 },
              B: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 }
            }
          },
          {
            opcode: 'power',
            blockType: Scratch.BlockType.REPORTER,
            text: '[BASE] to the power of [EXP]',
            arguments: {
              BASE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 },
              EXP: { type: Scratch.ArgumentType.NUMBER, defaultValue: 10 }
            }
          },
          {
            opcode: 'nthRoot',
            blockType: Scratch.BlockType.REPORTER,
            text: '[N]th root of [NUM]',
            arguments: {
              N: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 },
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 27 }
            }
          },
          {
            opcode: 'logBase',
            blockType: Scratch.BlockType.REPORTER,
            text: 'log base [BASE] of [NUM]',
            arguments: {
              BASE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 },
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 8 }
            }
          },
          {
            opcode: 'gcd',
            blockType: Scratch.BlockType.REPORTER,
            text: 'GCD of [A] and [B]',
            arguments: {
              A: { type: Scratch.ArgumentType.NUMBER, defaultValue: 12 },
              B: { type: Scratch.ArgumentType.NUMBER, defaultValue: 18 }
            }
          },
          {
            opcode: 'lcm',
            blockType: Scratch.BlockType.REPORTER,
            text: 'LCM of [A] and [B]',
            arguments: {
              A: { type: Scratch.ArgumentType.NUMBER, defaultValue: 4 },
              B: { type: Scratch.ArgumentType.NUMBER, defaultValue: 6 }
            }
          },
          {
            opcode: 'factorial',
            blockType: Scratch.BlockType.REPORTER,
            text: 'factorial of [NUM]',
            arguments: {
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 }
            }
          },
          {
            opcode: 'isPrime',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[NUM] is prime?',
            arguments: {
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 7 }
            }
          },
          {
            opcode: 'sign',
            blockType: Scratch.BlockType.REPORTER,
            text: 'sign of [NUM]',
            arguments: {
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: -5 }
            }
          },
          {
            opcode: 'distance2d',
            blockType: Scratch.BlockType.REPORTER,
            text: 'distance from ([X1], [Y1]) to ([X2], [Y2])',
            arguments: {
              X1: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              Y1: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              X2: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 },
              Y2: { type: Scratch.ArgumentType.NUMBER, defaultValue: 4 }
            }
          },
          {
            opcode: 'hypot',
            blockType: Scratch.BlockType.REPORTER,
            text: 'hypotenuse of legs [A] and [B]',
            arguments: {
              A: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 },
              B: { type: Scratch.ArgumentType.NUMBER, defaultValue: 4 }
            }
          },
          {
            opcode: 'degToRad',
            blockType: Scratch.BlockType.REPORTER,
            text: '[DEG] degrees to radians',
            arguments: {
              DEG: { type: Scratch.ArgumentType.NUMBER, defaultValue: 180 }
            }
          },
          {
            opcode: 'radToDeg',
            blockType: Scratch.BlockType.REPORTER,
            text: '[RAD] radians to degrees',
            arguments: {
              RAD: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3.14159 }
            }
          },
          {
            opcode: 'randomFloat',
            blockType: Scratch.BlockType.REPORTER,
            text: 'random decimal from [MIN] to [MAX]',
            arguments: {
              MIN: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              MAX: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 }
            }
          },
          {
            opcode: 'isBetween',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is [NUM] between [MIN] and [MAX]?',
            arguments: {
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 },
              MIN: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              MAX: { type: Scratch.ArgumentType.NUMBER, defaultValue: 10 }
            }
          },

          {
            opcode: 'isEven',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is [NUM] even?',
            arguments: {
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 4 }
            }
          },
          {
            opcode: 'isOdd',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is [NUM] odd?',
            arguments: {
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 }
            }
          },
          {
            opcode: 'digitSum',
            blockType: Scratch.BlockType.REPORTER,
            text: 'digit sum of [NUM]',
            arguments: {
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 12345 }
            }
          },
          {
            opcode: 'toOrdinal',
            blockType: Scratch.BlockType.REPORTER,
            text: '[NUM] as ordinal',
            arguments: {
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 21 }
            }
          },
          {
            opcode: 'randomInt',
            blockType: Scratch.BlockType.REPORTER,
            text: 'random integer from [MIN] to [MAX]',
            arguments: {
              MIN: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
              MAX: { type: Scratch.ArgumentType.NUMBER, defaultValue: 10 }
            }
          },
          {
            opcode: 'wrapNumber',
            blockType: Scratch.BlockType.REPORTER,
            text: 'wrap [NUM] between [MIN] and [MAX]',
            arguments: {
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 12 },
              MIN: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              MAX: { type: Scratch.ArgumentType.NUMBER, defaultValue: 10 }
            }
          },

          { blockType: Scratch.BlockType.LABEL, text: 'Numbers Lists' },

          {
            opcode: 'sumOfList',
            blockType: Scratch.BlockType.REPORTER,
            text: 'sum of numbers [NUMS]',
            arguments: {
              NUMS: { type: Scratch.ArgumentType.STRING, defaultValue: '1,2,3,4,5' }
            }
          },
          {
            opcode: 'averageOfList',
            blockType: Scratch.BlockType.REPORTER,
            text: 'average of numbers [NUMS]',
            arguments: {
              NUMS: { type: Scratch.ArgumentType.STRING, defaultValue: '1,2,3,4,5' }
            }
          },
          {
            opcode: 'medianOfList',
            blockType: Scratch.BlockType.REPORTER,
            text: 'median of numbers [NUMS]',
            arguments: {
              NUMS: { type: Scratch.ArgumentType.STRING, defaultValue: '1,2,3,4,5' }
            }
          },
          {
            opcode: 'stdDevOfList',
            blockType: Scratch.BlockType.REPORTER,
            text: 'standard deviation of numbers [NUMS]',
            arguments: {
              NUMS: { type: Scratch.ArgumentType.STRING, defaultValue: '1,2,3,4,5' }
            }
          },
          {
            opcode: 'minOfList',
            blockType: Scratch.BlockType.REPORTER,
            text: 'smallest of numbers [NUMS]',
            arguments: {
              NUMS: { type: Scratch.ArgumentType.STRING, defaultValue: '1,2,3,4,5' }
            }
          },
          {
            opcode: 'maxOfList',
            blockType: Scratch.BlockType.REPORTER,
            text: 'largest of numbers [NUMS]',
            arguments: {
              NUMS: { type: Scratch.ArgumentType.STRING, defaultValue: '1,2,3,4,5' }
            }
          },

          { blockType: Scratch.BlockType.LABEL, text: 'Strings' },

          {
            opcode: 'reverseString',
            blockType: Scratch.BlockType.REPORTER,
            text: 'reverse [TEXT]',
            arguments: {
              TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'hello' }
            }
          },
          {
            opcode: 'capitalize',
            blockType: Scratch.BlockType.REPORTER,
            text: 'capitalize [TEXT]',
            arguments: {
              TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'hello world' }
            }
          },
          {
            opcode: 'titleCase',
            blockType: Scratch.BlockType.REPORTER,
            text: 'title case [TEXT]',
            arguments: {
              TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'hello world' }
            }
          },
          {
            opcode: 'toCamelCase',
            blockType: Scratch.BlockType.REPORTER,
            text: 'to camelCase [TEXT]',
            arguments: {
              TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'hello world' }
            }
          },
          {
            opcode: 'toSnakeCase',
            blockType: Scratch.BlockType.REPORTER,
            text: 'to snake_case [TEXT]',
            arguments: {
              TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'hello world' }
            }
          },
          {
            opcode: 'countOccurrences',
            blockType: Scratch.BlockType.REPORTER,
            text: 'count occurrences of [SEARCH] in [TEXT]',
            arguments: {
              TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'banana' },
              SEARCH: { type: Scratch.ArgumentType.STRING, defaultValue: 'a' }
            }
          },
          {
            opcode: 'replaceAll',
            blockType: Scratch.BlockType.REPORTER,
            text: 'in [TEXT] replace all [SEARCH] with [REPLACE]',
            arguments: {
              TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'banana' },
              SEARCH: { type: Scratch.ArgumentType.STRING, defaultValue: 'a' },
              REPLACE: { type: Scratch.ArgumentType.STRING, defaultValue: 'o' }
            }
          },
          {
            opcode: 'padStart',
            blockType: Scratch.BlockType.REPORTER,
            text: 'pad [TEXT] to length [LENGTH] with [PAD] at start',
            arguments: {
              TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: '7' },
              LENGTH: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 },
              PAD: { type: Scratch.ArgumentType.STRING, defaultValue: '0' }
            }
          },
          {
            opcode: 'padEnd',
            blockType: Scratch.BlockType.REPORTER,
            text: 'pad [TEXT] to length [LENGTH] with [PAD] at end',
            arguments: {
              TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: '7' },
              LENGTH: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 },
              PAD: { type: Scratch.ArgumentType.STRING, defaultValue: '0' }
            }
          },
          {
            opcode: 'repeatString',
            blockType: Scratch.BlockType.REPORTER,
            text: 'repeat [TEXT] [TIMES] times',
            arguments: {
              TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'ab' },
              TIMES: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 }
            }
          },
          {
            opcode: 'isPalindrome',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is [TEXT] a palindrome?',
            arguments: {
              TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'racecar' }
            }
          },
          {
            opcode: 'trimText',
            blockType: Scratch.BlockType.REPORTER,
            text: 'trim whitespace from [TEXT]',
            arguments: {
              TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: '  hi  ' }
            }
          },
          {
            opcode: 'removeWhitespace',
            blockType: Scratch.BlockType.REPORTER,
            text: 'remove all whitespace from [TEXT]',
            arguments: {
              TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'h e l l o' }
            }
          },
          {
            opcode: 'indexOfAll',
            blockType: Scratch.BlockType.REPORTER,
            text: 'all indexes of [SEARCH] in [TEXT]',
            arguments: {
              TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'banana' },
              SEARCH: { type: Scratch.ArgumentType.STRING, defaultValue: 'a' }
            }
          },
          {
            opcode: 'onlyDigits',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is [TEXT] only digits?',
            arguments: {
              TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: '12345' }
            }
          },
          {
            opcode: 'onlyLetters',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is [TEXT] only letters?',
            arguments: {
              TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'hello' }
            }
          },
          {
            opcode: 'charCodeAtIndex',
            blockType: Scratch.BlockType.REPORTER,
            text: 'char code of letter at position [INDEX] in [TEXT]',
            arguments: {
              TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'hello' },
              INDEX: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 }
            }
          },
          {
            opcode: 'fromCharCode',
            blockType: Scratch.BlockType.REPORTER,
            text: 'character from code [CODE]',
            arguments: {
              CODE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 65 }
            }
          },
          {
            opcode: 'levenshteinDistance',
            blockType: Scratch.BlockType.REPORTER,
            text: 'edit distance between [TEXT1] and [TEXT2]',
            arguments: {
              TEXT1: { type: Scratch.ArgumentType.STRING, defaultValue: 'kitten' },
              TEXT2: { type: Scratch.ArgumentType.STRING, defaultValue: 'sitting' }
            }
          },

          {
            opcode: 'truncateText',
            blockType: Scratch.BlockType.REPORTER,
            text: 'truncate [TEXT] to [LENGTH] characters with [SUFFIX]',
            arguments: {
              TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'This is a long sentence' },
              LENGTH: { type: Scratch.ArgumentType.NUMBER, defaultValue: 10 },
              SUFFIX: { type: Scratch.ArgumentType.STRING, defaultValue: '...' }
            }
          },
          {
            opcode: 'countVowels',
            blockType: Scratch.BlockType.REPORTER,
            text: 'count vowels in [TEXT]',
            arguments: {
              TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'hello world' }
            }
          },
          {
            opcode: 'isAnagram',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is [TEXT1] an anagram of [TEXT2]?',
            arguments: {
              TEXT1: { type: Scratch.ArgumentType.STRING, defaultValue: 'listen' },
              TEXT2: { type: Scratch.ArgumentType.STRING, defaultValue: 'silent' }
            }
          },
          {
            opcode: 'shuffleString',
            blockType: Scratch.BlockType.REPORTER,
            text: 'shuffle characters of [TEXT]',
            arguments: {
              TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'hello' }
            }
          },

          { blockType: Scratch.BlockType.LABEL, text: 'Logic' },

          {
            opcode: 'xor',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] xor [B]',
            arguments: {
              A: { type: Scratch.ArgumentType.BOOLEAN, defaultValue: true },
              B: { type: Scratch.ArgumentType.BOOLEAN, defaultValue: false }
            }
          },
          {
            opcode: 'xnor',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] xnor [B]',
            arguments: {
              A: { type: Scratch.ArgumentType.BOOLEAN, defaultValue: true },
              B: { type: Scratch.ArgumentType.BOOLEAN, defaultValue: false }
            }
          },
          {
            opcode: 'nand',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] nand [B]',
            arguments: {
              A: { type: Scratch.ArgumentType.BOOLEAN, defaultValue: true },
              B: { type: Scratch.ArgumentType.BOOLEAN, defaultValue: false }
            }
          },
          {
            opcode: 'nor',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] nor [B]',
            arguments: {
              A: { type: Scratch.ArgumentType.BOOLEAN, defaultValue: true },
              B: { type: Scratch.ArgumentType.BOOLEAN, defaultValue: false }
            }
          },
          {
            opcode: 'typeOfValue',
            blockType: Scratch.BlockType.REPORTER,
            text: 'type of [VALUE]',
            arguments: {
              VALUE: { type: Scratch.ArgumentType.STRING, defaultValue: '42' }
            }
          },
          {
            opcode: 'isNumeric',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is [VALUE] a valid number?',
            arguments: {
              VALUE: { type: Scratch.ArgumentType.STRING, defaultValue: '42' }
            }
          }
        ]
      };
    }

    clamp(args) {
      const n = Cast.toNumber(args.NUM);
      const min = Cast.toNumber(args.MIN);
      const max = Cast.toNumber(args.MAX);
      return Math.min(Math.max(n, Math.min(min, max)), Math.max(min, max));
    }

    lerp(args) {
      const a = Cast.toNumber(args.A);
      const b = Cast.toNumber(args.B);
      const t = Cast.toNumber(args.T);
      return a + (b - a) * t;
    }

    mapRange(args) {
      const value = Cast.toNumber(args.VALUE);
      const inMin = Cast.toNumber(args.IN_MIN);
      const inMax = Cast.toNumber(args.IN_MAX);
      const outMin = Cast.toNumber(args.OUT_MIN);
      const outMax = Cast.toNumber(args.OUT_MAX);
      if (inMax - inMin === 0) return outMin;
      return ((value - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
    }

    roundTo(args) {
      const num = Cast.toNumber(args.NUM);
      const decimals = Math.max(0, Math.floor(Cast.toNumber(args.DECIMALS)));
      const factor = Math.pow(10, decimals);
      return Math.round(num * factor) / factor;
    }

    trueMod(args) {
      const a = Cast.toNumber(args.A);
      const b = Cast.toNumber(args.B);
      if (b === 0) return NaN;
      return ((a % b) + b) % b;
    }

    power(args) {
      return Math.pow(Cast.toNumber(args.BASE), Cast.toNumber(args.EXP));
    }

    nthRoot(args) {
      const n = Cast.toNumber(args.N);
      const num = Cast.toNumber(args.NUM);
      if (n === 0) return NaN;
      if (num < 0) {
        if (Math.round(n) % 2 === 1) {
          return -Math.pow(-num, 1 / n);
        }
        return NaN;
      }
      return Math.pow(num, 1 / n);
    }

    logBase(args) {
      const base = Cast.toNumber(args.BASE);
      const num = Cast.toNumber(args.NUM);
      if (base <= 0 || base === 1 || num <= 0) return NaN;
      return Math.log(num) / Math.log(base);
    }

    gcd(args) {
      let a = Math.abs(Math.round(Cast.toNumber(args.A)));
      let b = Math.abs(Math.round(Cast.toNumber(args.B)));
      while (b) {
        [a, b] = [b, a % b];
      }
      return a;
    }

    lcm(args) {
      const a = Math.abs(Math.round(Cast.toNumber(args.A)));
      const b = Math.abs(Math.round(Cast.toNumber(args.B)));
      if (a === 0 || b === 0) return 0;
      const gcdVal = this.gcd({ A: a, B: b });
      return Math.abs(a * b) / gcdVal;
    }

    factorial(args) {
      let n = Math.round(Cast.toNumber(args.NUM));
      if (n < 0) return NaN;
      if (n > 170) return Infinity;
      let result = 1;
      for (let i = 2; i <= n; i++) result *= i;
      return result;
    }

    isPrime(args) {
      let n = Math.round(Cast.toNumber(args.NUM));
      if (n < 2) return false;
      if (n === 2) return true;
      if (n % 2 === 0) return false;
      for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) return false;
      }
      return true;
    }

    sign(args) {
      const n = Cast.toNumber(args.NUM);
      return Math.sign(n);
    }

    distance2d(args) {
      const x1 = Cast.toNumber(args.X1);
      const y1 = Cast.toNumber(args.Y1);
      const x2 = Cast.toNumber(args.X2);
      const y2 = Cast.toNumber(args.Y2);
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    hypot(args) {
      return Math.hypot(Cast.toNumber(args.A), Cast.toNumber(args.B));
    }

    degToRad(args) {
      return Cast.toNumber(args.DEG) * (Math.PI / 180);
    }

    radToDeg(args) {
      return Cast.toNumber(args.RAD) * (180 / Math.PI);
    }

    randomFloat(args) {
      const min = Cast.toNumber(args.MIN);
      const max = Cast.toNumber(args.MAX);
      const lo = Math.min(min, max);
      const hi = Math.max(min, max);
      return lo + Math.random() * (hi - lo);
    }

    isBetween(args) {
      const n = Cast.toNumber(args.NUM);
      const min = Cast.toNumber(args.MIN);
      const max = Cast.toNumber(args.MAX);
      return n >= Math.min(min, max) && n <= Math.max(min, max);
    }

    isEven(args) {
      return Math.round(Cast.toNumber(args.NUM)) % 2 === 0;
    }

    isOdd(args) {
      return Math.round(Cast.toNumber(args.NUM)) % 2 !== 0;
    }

    digitSum(args) {
      const num = Math.abs(Math.round(Cast.toNumber(args.NUM)));
      return String(num)
        .split('')
        .reduce((sum, d) => sum + Number(d), 0);
    }

    toOrdinal(args) {
      const num = Math.round(Cast.toNumber(args.NUM));
      const abs = Math.abs(num);
      const rem100 = abs % 100;
      const rem10 = abs % 10;
      let suffix = 'th';
      if (rem100 < 11 || rem100 > 13) {
        if (rem10 === 1) suffix = 'st';
        else if (rem10 === 2) suffix = 'nd';
        else if (rem10 === 3) suffix = 'rd';
      }
      return `${num}${suffix}`;
    }

    randomInt(args) {
      const min = Math.round(Cast.toNumber(args.MIN));
      const max = Math.round(Cast.toNumber(args.MAX));
      const lo = Math.min(min, max);
      const hi = Math.max(min, max);
      return Math.floor(Math.random() * (hi - lo + 1)) + lo;
    }

    wrapNumber(args) {
      const num = Cast.toNumber(args.NUM);
      const min = Math.min(Cast.toNumber(args.MIN), Cast.toNumber(args.MAX));
      const max = Math.max(Cast.toNumber(args.MIN), Cast.toNumber(args.MAX));
      const range = max - min;
      if (range === 0) return min;
      return ((((num - min) % range) + range) % range) + min;
    }

    _parseNums(str) {
      return Cast.toString(str)
        .split(',')
        .map(s => s.trim())
        .filter(s => s.length > 0)
        .map(s => Cast.toNumber(s));
    }

    sumOfList(args) {
      const nums = this._parseNums(args.NUMS);
      return nums.reduce((a, b) => a + b, 0);
    }

    averageOfList(args) {
      const nums = this._parseNums(args.NUMS);
      if (nums.length === 0) return 0;
      return nums.reduce((a, b) => a + b, 0) / nums.length;
    }

    medianOfList(args) {
      const nums = this._parseNums(args.NUMS).sort((a, b) => a - b);
      if (nums.length === 0) return 0;
      const mid = Math.floor(nums.length / 2);
      if (nums.length % 2 === 0) {
        return (nums[mid - 1] + nums[mid]) / 2;
      }
      return nums[mid];
    }

    stdDevOfList(args) {
      const nums = this._parseNums(args.NUMS);
      if (nums.length === 0) return 0;
      const mean = nums.reduce((a, b) => a + b, 0) / nums.length;
      const variance = nums.reduce((sum, n) => sum + Math.pow(n - mean, 2), 0) / nums.length;
      return Math.sqrt(variance);
    }

    minOfList(args) {
      const nums = this._parseNums(args.NUMS);
      if (nums.length === 0) return 0;
      return Math.min(...nums);
    }

    maxOfList(args) {
      const nums = this._parseNums(args.NUMS);
      if (nums.length === 0) return 0;
      return Math.max(...nums);
    }

    reverseString(args) {
      return Cast.toString(args.TEXT).split('').reverse().join('');
    }

    capitalize(args) {
      const text = Cast.toString(args.TEXT);
      if (text.length === 0) return text;
      return text.charAt(0).toUpperCase() + text.slice(1);
    }

    titleCase(args) {
      const text = Cast.toString(args.TEXT);
      return text.replace(/\w\S*/g, w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
    }

    toCamelCase(args) {
      const text = Cast.toString(args.TEXT);
      const words = text.split(/[^a-zA-Z0-9]+/).filter(Boolean);
      return words
        .map((w, i) => (i === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()))
        .join('');
    }

    toSnakeCase(args) {
      const text = Cast.toString(args.TEXT);
      const words = text.split(/[^a-zA-Z0-9]+/).filter(Boolean);
      return words.map(w => w.toLowerCase()).join('_');
    }

    countOccurrences(args) {
      const text = Cast.toString(args.TEXT);
      const search = Cast.toString(args.SEARCH);
      if (search.length === 0) return 0;
      let count = 0;
      let pos = 0;
      while ((pos = text.indexOf(search, pos)) !== -1) {
        count++;
        pos += search.length;
      }
      return count;
    }

    replaceAll(args) {
      const text = Cast.toString(args.TEXT);
      const search = Cast.toString(args.SEARCH);
      const replace = Cast.toString(args.REPLACE);
      if (search.length === 0) return text;
      return text.split(search).join(replace);
    }

    padStart(args) {
      const text = Cast.toString(args.TEXT);
      const length = Math.max(0, Math.round(Cast.toNumber(args.LENGTH)));
      const pad = Cast.toString(args.PAD) || ' ';
      return text.padStart(length, pad);
    }

    padEnd(args) {
      const text = Cast.toString(args.TEXT);
      const length = Math.max(0, Math.round(Cast.toNumber(args.LENGTH)));
      const pad = Cast.toString(args.PAD) || ' ';
      return text.padEnd(length, pad);
    }

    repeatString(args) {
      const text = Cast.toString(args.TEXT);
      const times = Math.max(0, Math.round(Cast.toNumber(args.TIMES)));
      return text.repeat(times);
    }

    isPalindrome(args) {
      const text = Cast.toString(args.TEXT).toLowerCase().replace(/[^a-z0-9]/g, '');
      return text === text.split('').reverse().join('');
    }

    trimText(args) {
      return Cast.toString(args.TEXT).trim();
    }

    removeWhitespace(args) {
      return Cast.toString(args.TEXT).replace(/\s+/g, '');
    }

    indexOfAll(args) {
      const text = Cast.toString(args.TEXT);
      const search = Cast.toString(args.SEARCH);
      if (search.length === 0) return '';
      const indexes = [];
      let pos = 0;
      while ((pos = text.indexOf(search, pos)) !== -1) {
        indexes.push(pos + 1); // 1-indexed like Scratch
        pos += search.length;
      }
      return indexes.join(',');
    }

    onlyDigits(args) {
      const text = Cast.toString(args.TEXT);
      return text.length > 0 && /^[0-9]+$/.test(text);
    }

    onlyLetters(args) {
      const text = Cast.toString(args.TEXT);
      return text.length > 0 && /^[a-zA-Z]+$/.test(text);
    }

    charCodeAtIndex(args) {
      const text = Cast.toString(args.TEXT);
      const index = Math.round(Cast.toNumber(args.INDEX)) - 1;
      if (index < 0 || index >= text.length) return NaN;
      return text.charCodeAt(index);
    }

    fromCharCode(args) {
      const code = Math.round(Cast.toNumber(args.CODE));
      return String.fromCharCode(code);
    }

    levenshteinDistance(args) {
      const a = Cast.toString(args.TEXT1);
      const b = Cast.toString(args.TEXT2);
      const m = a.length;
      const n = b.length;
      const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
      for (let i = 0; i <= m; i++) dp[i][0] = i;
      for (let j = 0; j <= n; j++) dp[0][j] = j;
      for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
          if (a[i - 1] === b[j - 1]) {
            dp[i][j] = dp[i - 1][j - 1];
          } else {
            dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
          }
        }
      }
      return dp[m][n];
    }

    truncateText(args) {
      const text = Cast.toString(args.TEXT);
      const length = Math.max(0, Math.round(Cast.toNumber(args.LENGTH)));
      const suffix = Cast.toString(args.SUFFIX);
      if (text.length <= length) return text;
      return text.slice(0, length) + suffix;
    }

    countVowels(args) {
      const text = Cast.toString(args.TEXT);
      const matches = text.match(/[aeiouAEIOU]/g);
      return matches ? matches.length : 0;
    }

    isAnagram(args) {
      const normalize = s =>
        Cast.toString(s)
          .toLowerCase()
          .replace(/[^a-z0-9]/g, '')
          .split('')
          .sort()
          .join('');
      return normalize(args.TEXT1) === normalize(args.TEXT2);
    }

    shuffleString(args) {
      const chars = Cast.toString(args.TEXT).split('');
      for (let i = chars.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [chars[i], chars[j]] = [chars[j], chars[i]];
      }
      return chars.join('');
    }

    xor(args) {
      return Cast.toBoolean(args.A) !== Cast.toBoolean(args.B);
    }

    xnor(args) {
      return Cast.toBoolean(args.A) === Cast.toBoolean(args.B);
    }

    nand(args) {
      return !(Cast.toBoolean(args.A) && Cast.toBoolean(args.B));
    }

    nor(args) {
      return !(Cast.toBoolean(args.A) || Cast.toBoolean(args.B));
    }

    typeOfValue(args) {
      const value = args.VALUE;
      const str = Cast.toString(value);
      if (str === 'true' || str === 'false') return 'boolean';
      if (str.trim() !== '' && !isNaN(Number(str))) return 'number';
      return 'string';
    }

    isNumeric(args) {
      const str = Cast.toString(args.VALUE).trim();
      if (str === '') return false;
      return !isNaN(Number(str));
    }
  }

  Scratch.extensions.register(new extension());
})(Scratch);