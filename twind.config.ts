import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      gridTemplateColumns: {
        sidebar: "200px auto",
      },
      gridTemplateRows: {
        header: "64px auto",
      },
      colors: {
        'x5-green': '#5FAF2D',
        'x5-green-hover': '#488522',
      },
    },
  },
} as Options;
