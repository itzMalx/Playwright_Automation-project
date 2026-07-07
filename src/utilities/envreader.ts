import dotenv from "dotenv";
import path from "path";

const envPath = path.resolve(__dirname, "../../env/url.env");

const result = dotenv.config({
    path: envPath,
    override: true
});

console.log("ENV Path:", envPath);
console.log("Dotenv Result:", result);
console.log("BASE_URL:", process.env.BASE_URL);
console.log("BROWSER:", process.env.BROWSER);

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