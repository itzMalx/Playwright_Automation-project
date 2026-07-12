import winston from "winston";

const { combine, timestamp, printf, colorize } = winston.format;

const logFormat = printf(({ level, message, timestamp }) => {
    return `[${timestamp}] ${level.toUpperCase().padEnd(5)} | ${message}`;
});

export const logger = winston.createLogger({
    level: "info",

    transports: [
        // Console Logger (Colored)
        new winston.transports.Console({
            format: combine(
                colorize(),
                timestamp({
                    format: "DD-MM-YYYY HH:mm:ss"
                }),
                logFormat
            )
        }),

        // File Logger (Plain Text)
        new winston.transports.File({
            filename: "reports/logs/test.log",
            format: combine(
                timestamp({
                    format: "DD-MM-YYYY HH:mm:ss"
                }),
                logFormat
            )
        })
    ]
});