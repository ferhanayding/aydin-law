import { notFound } from "next/navigation";

// /tr/olmayan-sayfa gibi yolları dil düzenindeki 404 sayfasına yönlendirir.
export default function CatchAll() {
  notFound();
}
