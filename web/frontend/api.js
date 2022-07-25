import {
  BrowserSessionStorageType,
  Client,
} from "@gadget-client/embedded-cli-v3";

export const api = new Client({
  authenticationMode: {
    browserSession: {
      storageType: BrowserSessionStorageType.Temporary,
    },
  },
});
