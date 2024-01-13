namespace NodeJS {
  export interface ProcessEnv {
    NOTION_TOKEN: string;
    NOTION_DATABASE_ID: string;
    GITHUB_ID: string;
    GITHUB_SECRET: string;
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
    CREDENTIAL_USER_NAME: string;
    CREDENTIAL_USER_EMAIL: string;
    CREDENTIAL_USER_PASSWORD: string;
    CREDENTIAL_USER_ROLE: string;
    NEXT_PUBLIC_CREDENTIAL_USER_EMAIL: string;
    OPENAI_API_KEY: string;
    BLOB_READ_WRITE_TOKEN: string;
  }
}
