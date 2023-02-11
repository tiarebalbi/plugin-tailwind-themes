import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";
import { Configuration } from "webpack";

interface Options {
    theme: string;
    config: Configuration;
}

export default function (api: any, options: Options) {
    api.chainWebpack((config: Configuration) => {
        config.module
            .rule("css")
            .oneOf("normal")
            .use("postcss")
            .loader("postcss-loader")
            .options({
                plugins: [
                    tailwind(options.config),
                    autoprefixer,
                ],
            });
    });
}
