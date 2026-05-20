export interface NutritionLabel {
  calories: number;
  totalFat: number;        // grams
  saturatedFat: number;    // grams
  transFat: number;        // grams
  cholesterol: number;     // mg
  sodium: number;          // mg
  totalCarbs: number;      // grams
  dietaryFiber: number;    // grams
  totalSugars: number;     // grams
  addedSugars: number;     // grams
  protein: number;         // grams
  servingSize: string;     // e.g. "1 cup (240ml)"
  servingsPerContainer: number;
}

export interface Product {
  barcode: string;
  name: string;
  brand: string;
  imageUrl?: string;
  nutrition: NutritionLabel;
  allergens: string[];
  ingredients: string;
  scannedAt: string;       // ISO date string
}

export type ScanResult =
  | { status: "success"; product: Product }
  | { status: "not_found"; barcode: string }
  | { status: "error"; message: string };
