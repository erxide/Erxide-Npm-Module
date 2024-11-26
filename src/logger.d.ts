declare module "erxide" {
    /**
     * Logger class for managing logs in applications.
     */
    class logger {
        /**
       * Creates a new Logger instance.
       */
        constructor();

        /**
       * Log an informational message.
       * @param message - The message to log.
       */
        info(message: string): void;

        /**
       * Log a warning message.
       * @param message - The message to log.
       */
        warn(message: string): void;

        /**
       * Log an error message.
       * @param message - The message to log.
       */
        error(message: string): void;

        /**
       * Log a debug message.
       * @param message - The message to log.
       */
        debug(message: string): void;

        /**
       * Log a trace message.
       * @param message - The message to log.
       */
        trace(message: string): void;
    }

    export = logger; // For CommonJS
}
