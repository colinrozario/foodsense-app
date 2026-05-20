import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { ScanResult } from "@/types/product";

async function fetchProduct(barcode: string): Promise<ScanResult> {
  const { data } = await api.get<ScanResult>(`/products/${barcode}`);
  return data;
}

export function useProduct(barcode: string | null) {
  return useQuery({
    queryKey: ["product", barcode],
    queryFn: () => fetchProduct(barcode!),
    enabled: !!barcode,
  });
}
