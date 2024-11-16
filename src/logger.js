const fs = require('fs');
const chalk = require('chalk');
const path = require('path');

class Logger {
    constructor() {
        const ProjectName = this.getProjectName() ?? "logger";
        this.pathLog = `log/${ProjectName}.log`;
        this.pathProject = process.cwd();
        this.buildLogFile();
    }

    getProjectName() {
        try {
            const packageJsonPath = path.resolve(process.cwd(), 'package.json');
            return JSON.parse(fs.readFileSync(packageJsonPath, 'utf8')).name;
        } catch (error) {
            console.error('Could not read package.json or find project name:', error.message);
        }
    }

    buildLogFile() {
        const logDirectory = path.join(this.pathProject, "log");
        if (!fs.existsSync(logDirectory)) {
            fs.mkdirSync(logDirectory, { recursive: true });
        }
        const logFilePath = path.join(this.pathProject, this.pathLog);
        if (!fs.existsSync(logFilePath)) {
            fs.writeFileSync(logFilePath, "");
            this.info("The log file has been successfully created.");
        }
    }

    date() {
        const date = new Date();

        const jour = String(date.getDate()).padStart(2, '0');
        const mois = String(date.getMonth() + 1).padStart(2, '0');
        const annee = String(date.getFullYear()).slice(-2);

        const heures = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');module.exports = Logger; // For CommonJS
        exports.default = Logger; // For ES Modules
        const secondes = String(date.getSeconds()).padStart(2, '0');
        const miliseconde = String(date.getMilliseconds()).padStart(2, '0');

        return `[${jour}-${mois}-${annee}T${heures}:${minutes}:${secondes}.${miliseconde}Z]`;
    }

    info(message) {
        const mes = this.date() + " INFO: " + message;
        fs.appendFileSync(path.join(this.pathProject, this.pathLog), mes + "\n");
        console.log(chalk.green(mes));
    }

    warn(message) {
        const mes = this.date() + " WARN: " + message;
        fs.appendFileSync(path.join(this.pathProject, this.pathLog), mes + "\n");
        console.log(chalk.yellow(mes));
    }

    error(message) {
        const mes = this.date() + " ERROR: " + message;
        fs.appendFileSync(path.join(this.pathProject, this.pathLog), mes + "\n");
        console.log(chalk.red(mes));
    }

    debug(message) {
        const mes = this.date() + " DEBUG: " + message;
        fs.appendFileSync(path.join(this.pathProject, this.pathLog), mes + "\n");
        console.log(chalk.blue(mes));
    }

    trace(message) {
        const mes = this.date() + " TRACE: " + message;
        fs.appendFileSync(path.join(this.pathProject, this.pathLog), mes + "\n");
        console.log(chalk.cyan(mes));
    }
}

const logger = new Logger()

module.exports = logger; // For CommonJS
exports.default = logger; // For ES Modules
