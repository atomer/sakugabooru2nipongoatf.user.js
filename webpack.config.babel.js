import webpack from "webpack";

export default {
    entry: "./src/app.js",
    output: {
        path: "./dist",
        filename: "sakugabooru2nipongoatf.user.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel"
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: "json"
            }
        ]
    }
}