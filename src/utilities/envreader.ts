import dotenv from "dotenv";
import path from "path";

dotenv.config({
    path: path.resolve(__dirname, "../../../env/url.env")
});

export class EnvReader {
    static getBaseUrl(): string {
        const baseUrl = process.env.BASE_URL;
        if (!baseUrl) {
            throw new Error("BASE_URL is not defined in url.env");
        }
        return baseUrl;
    }
    static getBrowser(): string {
        const browser = process.env.BROWSER;
        if (!browser) {
            throw new Error("BROWSER is not defined in url.env");
        }
        return browser;
    }
}