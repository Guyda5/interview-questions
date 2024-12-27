import { nodesSum } from ".";

xtest("nodesSum", () => {
  const sampleInput = {
    key1: {
      key11: {
        key111: 10,
        key112: {
          key1121: 20,
          key1122: {
            key11221: 15,
          },
        },
      },
      key12: 5,
    },
    key2: 30,
    key3: {
      key31: {
        key311: {
          key3111: 8,
          key3112: 12,
        },
      },
      key32: 6,
      key33: {
        key331: 25,
        key332: {
          key3321: 10,
          key3322: 5,
        },
      },
    },
    key4: {
      key41: 7,
      key42: {
        key421: {
          key4211: 3,
          key4212: 9,
        },
      },
      key43: 4,
    },
    key5: 50,
  };

  expect(nodesSum(sampleInput)).toBe(219);
});
