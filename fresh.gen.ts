// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import { DecoManifest } from "$live/types.ts";
import * as $0 from "./routes/[...catchall].tsx";
import * as $1 from "./routes/_app.tsx";
import * as $2 from "./routes/_middleware.ts";
import * as $3 from "./routes/index.tsx";
import * as $$0 from "./islands/HeroBanner.tsx";
import * as $$1 from "./islands/LiveControls.tsx";
import * as $$$0 from "./sections/GetStarted.tsx";
import * as $$$1 from "./sections/Head.tsx";
import * as $$$2 from "./sections/Header.tsx";
import * as $$$3 from "./sections/HeroBanner.tsx";
import * as $$$4 from "./sections/Informacoes.tsx";
import * as $$$5 from "./sections/Markdown.tsx";
import * as $$$6 from "./sections/QuillText.tsx";
import * as $$$$0 from "./functions/LoadGitHubRaw.ts";

const manifest: DecoManifest = {
  routes: {
    "./routes/[...catchall].tsx": $0,
    "./routes/_app.tsx": $1,
    "./routes/_middleware.ts": $2,
    "./routes/index.tsx": $3,
  },
  islands: {
    "./islands/HeroBanner.tsx": $$0,
    "./islands/LiveControls.tsx": $$1,
  },
  sections: {
    "./sections/GetStarted.tsx": $$$0,
    "./sections/Head.tsx": $$$1,
    "./sections/Header.tsx": $$$2,
    "./sections/HeroBanner.tsx": $$$3,
    "./sections/Informacoes.tsx": $$$4,
    "./sections/Markdown.tsx": $$$5,
    "./sections/QuillText.tsx": $$$6,
  },
  functions: { "./functions/LoadGitHubRaw.ts": $$$$0 },
  schemas: {
    "./sections/GetStarted.tsx": {
      "inputSchema": {
        "title": " Get Started",
        "type": "object",
        "properties": {
          "enableInspectVSCode": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Enable Inspect V S Code",
          },
        },
        "required": [],
      },
      "outputSchema": null,
    },
    "./sections/Head.tsx": {
      "inputSchema": {
        "title": " Head",
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
          },
          "description": {
            "type": "string",
            "title": "Description",
          },
          "url": {
            "type": "string",
            "title": "Url",
          },
          "imageUrl": {
            "type": "string",
            "title": "Image Url",
          },
          "faviconUrl": {
            "type": "string",
            "title": "Favicon Url",
          },
          "styleUrls": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "Style Urls",
          },
          "themeColor": {
            "type": "string",
            "title": "Theme Color",
          },
        },
        "required": [
          "title",
          "description",
          "url",
          "imageUrl",
          "faviconUrl",
          "styleUrls",
          "themeColor",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Header.tsx": {
      "inputSchema": {
        "title": " Header",
        "type": "object",
        "properties": {
          "imageProps": {
            "title": "Image Props",
            "type": "object",
            "properties": {
              "altText": {
                "type": [
                  "string",
                  "null",
                ],
                "title": "Alt Text",
              },
              "title": {
                "type": [
                  "string",
                  "null",
                ],
                "title": "Title",
              },
              "src": {
                "format": "image-uri",
                "type": "string",
                "title": "Src",
              },
              "className": {
                "type": "string",
                "title": "Class Name",
              },
              "preCarregarImagem": {
                "type": [
                  "boolean",
                  "null",
                ],
                "title": "Pre Carregar Imagem",
              },
            },
            "required": [
              "src",
              "className",
            ],
          },
        },
        "required": [
          "imageProps",
        ],
      },
      "outputSchema": null,
    },
    "./sections/HeroBanner.tsx": {
      "inputSchema": {
        "title": " Hero Banner",
        "type": "object",
        "properties": {
          "mainMenu": {
            "title": "Main Menu",
            "type": "object",
            "properties": {
              "navItem": {
                "type": "array",
                "items": {
                  "title": "navItemProps",
                  "type": "object",
                  "properties": {
                    "itemName": {
                      "type": [
                        "string",
                        "null",
                      ],
                      "title": "Item Name",
                      "description": "Nome item do menu",
                    },
                    "itemUrl": {
                      "type": [
                        "string",
                        "null",
                      ],
                      "title": "Item Url",
                      "description":
                        "Url do item do menu - não utilize caracteres especiais",
                    },
                  },
                  "required": [],
                },
                "title": "Nav Item",
              },
            },
            "required": [],
          },
          "imageProps": {
            "title": "Image Props",
            "type": "object",
            "properties": {
              "altText": {
                "type": [
                  "string",
                  "null",
                ],
                "title": "Alt Text",
              },
              "title": {
                "type": [
                  "string",
                  "null",
                ],
                "title": "Title",
              },
              "src": {
                "format": "image-uri",
                "type": "string",
                "title": "Src",
              },
              "className": {
                "type": "string",
                "title": "Class Name",
              },
              "preCarregarImagem": {
                "type": [
                  "boolean",
                  "null",
                ],
                "title": "Pre Carregar Imagem",
              },
            },
            "required": [
              "src",
              "className",
            ],
          },
          "videoProps": {
            "title": "Video Props",
            "type": "object",
            "properties": {
              "poster": {
                "format": "image-uri",
                "type": "string",
                "title": "Poster",
                "description": "imagem poster do vídeo",
              },
              "altText": {
                "type": [
                  "string",
                  "null",
                ],
                "title": "Alt Text",
                "description": "SEO texto alternative",
              },
              "seoTitle": {
                "type": "string",
                "title": "Seo Title",
                "description": "SEO texto title",
              },
              "videoUrl": {
                "type": [
                  "string",
                  "null",
                ],
                "title": "Video Url",
                "description": "url do vídeo no yutube",
              },
            },
            "required": [
              "poster",
              "seoTitle",
            ],
          },
        },
        "required": [
          "imageProps",
          "videoProps",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Informacoes.tsx": {
      "inputSchema": {
        "title": " Informacoes",
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
          },
        },
        "required": [
          "title",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Markdown.tsx": {
      "inputSchema": {
        "title": " Markdown",
        "type": "object",
        "properties": {
          "text": {
            "type": "string",
            "title": "Text",
          },
        },
        "required": [
          "text",
        ],
      },
      "outputSchema": null,
    },
    "./sections/QuillText.tsx": {
      "inputSchema": {
        "title": " Quill Text",
        "type": "object",
        "properties": {
          "html": {
            "format": "html",
            "type": "string",
            "title": "Html",
          },
        },
        "required": [
          "html",
        ],
      },
      "outputSchema": null,
    },
    "./functions/LoadGitHubRaw.ts": {
      "inputSchema": {
        "title": " Load Git Hub Raw",
        "type": "object",
        "properties": {
          "repo": {
            "type": "string",
            "title": "Repo",
            "description": "Complete user/repo format",
          },
          "branch": {
            "type": "string",
            "title": "Branch",
            "description": "Branch",
          },
          "path": {
            "type": "string",
            "title": "Path",
            "description":
              "Path to fetch, or leave blank and add :path route param.",
          },
        },
        "required": [
          "repo",
          "branch",
          "path",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "5b1cd5713a375e18bb93e9635b8a2dc5fc2672cf",
          },
        },
        "additionalProperties": true,
      },
    },
  },
  baseUrl: import.meta.url,
  config,
};

// live — this exposes the manifest so the live server can render components dynamically
globalThis.manifest = manifest;

export default manifest;
