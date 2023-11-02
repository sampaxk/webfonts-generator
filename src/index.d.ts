declare module "webfonts-generator";

export interface WebfontsGeneratorOptions {
    files: Array<string>
    dest: string,
    fontName: string
    css: boolean,
    cssDest: string,
    cssTemplate: string,
    html: boolean,
}

export default function webfontsGenerator(options: WebfontsGeneratorOptions, callback: (error?: any) => void);