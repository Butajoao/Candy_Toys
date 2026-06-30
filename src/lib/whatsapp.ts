const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5500000000000";

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const globalWhatsappMessage =
  "Olá, tenho interesse em comprar Candy Toy para minha loja. Vim pelo site e gostaria de receber o catálogo B2B.";

export function productWhatsappMessage(productName: string) {
  return `Olá, tenho interesse no produto ${productName} para revenda. Pode me enviar condições comerciais?`;
}
