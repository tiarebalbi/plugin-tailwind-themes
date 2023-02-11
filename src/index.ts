import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

export default function (api: any, options: any) {
    api.chainWebpack((config: any) => {
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
