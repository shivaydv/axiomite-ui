import { Registry } from "./schema";

export const RegistryDemo: Registry["items"] = [
  {
    name: "Button-demo",
    type: "registry:component",
    files: [
      {
        path: "demo/button-demo.tsx",
        type: "registry:component",
      },
    ],
  },
];
