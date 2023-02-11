import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

module.exports = function (api, options) {
    api.chainWebpack((config) => {
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
};
