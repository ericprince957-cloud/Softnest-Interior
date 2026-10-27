export const WHATSAPP_NUMBER = "2349135765244";

export function whatsappLink(fabricName: string): string {
  const message = `Hi Softnest, I am interested in getting a quote for ${fabricName}. Please share availability.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function formatNaira(amount: number): string {
  return `₦${amount.toLocaleString("en-NG")}/yard`;
}
