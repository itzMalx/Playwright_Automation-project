import dotenv from "dotenv";
import path from "path";

dotenv.config({
    path: path.resolve(__dirname, "../../../env/url.env")
});

export class EnvReader {
    static getBaseUrl(): string {
        return process.env.BASE_URL!;
    }
}