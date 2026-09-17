export type PrintProduct = {
  retailPrice: number;
  productUID: number;
  itemAttributeUIDs: number[];
};

export const printProducts: Record<string, Record<string, PrintProduct>> = {
  "Fine Art Print": {
    "12×18": { retailPrice: 79, productUID: 431, itemAttributeUIDs: [2061] },
    "16×24": { retailPrice: 179, productUID: 241, itemAttributeUIDs: [2061] },
    "20×30": { retailPrice: 229, productUID: 244, itemAttributeUIDs: [2061] },
    "24×36": { retailPrice: 349, productUID: 246, itemAttributeUIDs: [2061] },
    "30×45": { retailPrice: 449, productUID: 847, itemAttributeUIDs: [2061] },
    "40×60": { retailPrice: 749, productUID: 249, itemAttributeUIDs: [2061] },
  },
  "Gallery Wrap Canvas": {
    "12×18": { retailPrice: 199, productUID: 73, itemAttributeUIDs: [126, 131] },
    "16×24": { retailPrice: 279, productUID: 81, itemAttributeUIDs: [126, 131] },
    "20×30": { retailPrice: 349, productUID: 89, itemAttributeUIDs: [126, 131] },
    "24×36": { retailPrice: 499, productUID: 97, itemAttributeUIDs: [126, 131] },
    "40×60": { retailPrice: 1199, productUID: 107, itemAttributeUIDs: [126, 131] },
  },
  "Metal Print": {
    "12×18": { retailPrice: 179, productUID: 358, itemAttributeUIDs: [657, 651] },
    "16×24": { retailPrice: 279, productUID: 362, itemAttributeUIDs: [657, 651] },
    "20×30": { retailPrice: 399, productUID: 365, itemAttributeUIDs: [661, 651] },
    "24×36": { retailPrice: 549, productUID: 368, itemAttributeUIDs: [661, 651] },
    "30×45": { retailPrice: 799, productUID: 875, itemAttributeUIDs: [661, 651] },
    "40×60": { retailPrice: 1499, productUID: 413, itemAttributeUIDs: [661, 651] },
  },
  "Acrylic Print": {
    "12×18": { retailPrice: 299, productUID: 904, itemAttributeUIDs: [2460, 2459] },
    "16×24": { retailPrice: 399, productUID: 906, itemAttributeUIDs: [2460, 2459] },
    "20×30": { retailPrice: 549, productUID: 907, itemAttributeUIDs: [2866, 2459] },
    "24×36": { retailPrice: 799, productUID: 908, itemAttributeUIDs: [2866, 2459] },
    "40×60": { retailPrice: 1999, productUID: 910, itemAttributeUIDs: [2866, 2459] },
  },
};

export function normalizePrintSize(size: string) {
  return size.trim().replace(/x/gi, "×").replace(/\s+/g, "");
}

export function getPrintProduct(finish: string, size: string) {
  return printProducts[finish]?.[normalizePrintSize(size)];
}
