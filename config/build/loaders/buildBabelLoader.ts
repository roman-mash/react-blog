export function buildBabelLoader() {
    return {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    ['i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                            outputPath: 'public/locales/{{locale}}/{{ns}}.json',
                            saveMissing: true,
                        },
                    ],
                ],
            },
        },
    };
}
