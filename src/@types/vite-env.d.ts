
interface ImportMetaEnv {
    readonly PLASMO_PUBLIC_API_URL: string;
    readonly PLASMO_PUBLIC_API_KEY: string;
}

interface ImportMeta{
    readonly env: ImportMetaEnv;
}
