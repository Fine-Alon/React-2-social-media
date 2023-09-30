declare module "*.module.css" {
    const content: Record<string, string>;
    export default content;
}

declare module "*.gif" {
    const value: string; // Импортированный файл будет строкой с путем к изображению
    export default value;
}