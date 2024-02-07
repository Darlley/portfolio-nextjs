import { createSwaggerSpec } from "next-swagger-doc";

import "server-only";

export const getApiDocs = async () => {
  const spec = createSwaggerSpec({
    apiFolder: "app/api",
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Darlley's Curriculum",
        description: "Curriculum vitae of Darlley Brito",
        version: "1.0.0",
      },
      servers: [{ url: "https://darlley.dev/api" }],
      paths: {
        "/curriculum": {
          get: {
            summary: "Get Darlley's Curriculum",
            responses: {
              200: {
                description: "OK",
                content: {
                  "application/json": {
                    schema: { $ref: "#/components/schemas/Curriculum" },
                  },
                },
              },
            },
          },
        },
      },
      components: {
        schemas: {
          Curriculum: {
            type: "object",
            properties: {
              firstName: { type: "string" },
              lastName: { type: "string" },
              title: { type: "string" },
              profileImage: { type: "string" },
              education: {
                type: "array",
                items: { $ref: "#/components/schemas/Education" },
              },
              skills: {
                type: "array",
                items: { type: "string" },
              },
              experience: {
                type: "array",
                items: { $ref: "#/components/schemas/Experience" },
              },
              languages: {
                type: "array",
                items: { type: "string" },
              },
              contact: { $ref: "#/components/schemas/Contact" },
              social: { $ref: "#/components/schemas/Social" },
              profileText: { type: "string" },
              download: { type: "string" },
            },
          },
          Education: {
            type: "object",
            properties: {
              period: { type: "string" },
              institution: { type: "string" },
              details: { type: "string" },
            },
          },
          Experience: {
            type: "object",
            properties: {
              period: { type: "string" },
              company: { type: "string" },
              role: { type: "string" },
              description: { type: "string" },
            },
          },
          Contact: {
            type: "object",
            properties: {
              email: { type: "string" },
              location: { type: "string" },
            },
          },
          Social: {
            type: "object",
            properties: {
              linkedin: { type: "string" },
              github: { type: "string" },
              figma: { type: "string" },
              tiktok: { type: "string" },
              instagram: { type: "string" },
              facebook: { type: "string" },
              twitter: { type: "string" },
              medium: { type: "string" },
              youtube: { type: "string" },
              skoob: { type: "string" },
              blogspot: { type: "string" },
            },
          },
        },
      },
    },
  });
  return spec;
};
