import { PolarisProvider } from "./components";

import { api } from "./api";
import {
  AppType,
  Provider as GadgetProvider,
} from "@gadgetinc/react-shopify-app-bridge";
import { ProductManager } from "./ProductManager";

export default function App() {
  api.currentSession.get().then(console.log).finally(console.error);
  return (
    <GadgetProvider
      type={AppType.Embedded}
      shopifyApiKey="507bbe7cf7d42405af432c1849c4aebd"
      api={api}
    >
      <PolarisProvider>
        <ProductManager />
      </PolarisProvider>
    </GadgetProvider>
  );
}
