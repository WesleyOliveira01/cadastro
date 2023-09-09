import Header from "@/components/Header";
import { FormularioProvider } from "@/contexts/form";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FormularioProvider>
      <Header />
      <Component {...pageProps} />
    </FormularioProvider>
  );
}
