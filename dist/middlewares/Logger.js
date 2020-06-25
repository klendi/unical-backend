"use strict";
/**
 * Creates & maintains the log
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var Logger = /** @class */ (function () {
    function Logger() {
        this.today = new Date();
        var _dateString = this.today.getFullYear() + "-" + (this.today.getMonth() + 1) + "-" + this.today.getDate();
        var _timeString = this.today.getHours() + ":" + this.today.getMinutes() + ":" + this.today.getSeconds();
        this.baseDir = path.join(__dirname, "../../.logs/");
        this.fileName = _dateString + ".log";
        this.linePrefix = "[" + _dateString + " " + _timeString + "]";
    }
    // Adds INFO prefix string to the log string
    Logger.prototype.info = function (_string) {
        return this.addLog("INFO", _string);
    };
    // Adds WARN prefix string to the log string
    Logger.prototype.warn = function (_string) {
        return this.addLog("WARN", _string);
    };
    // Adds ERROR prefix string to the log string
    Logger.prototype.error = function (_string) {
        // Line break and show the first line
        console.log("\x1b[31m%s\x1b[0m", "[ERROR] :: " + _string.split(/r?\n/)[0]);
        return this.addLog("ERROR", _string);
    };
    // Adds the custom prefix string to the log string
    Logger.prototype.custom = function (_filename, _string) {
        return this.addLog(_filename, _string);
    };
    /**
     * Creates the file if does not exist, and
     * append the log kind & string into the file.
     */
    Logger.prototype.addLog = function (_kind, _string) {
        var _that = this;
        _kind = _kind.toUpperCase();
        fs.open("" + _that.baseDir + _that.fileName, "a", function (_err, _fileDescriptor) {
            if (!_err && _fileDescriptor) {
                // Append to file and close it
                fs.appendFile(_fileDescriptor, _that.linePrefix + " [" + _kind + "] " + _string + "\n", function (_err) {
                    if (!_err) {
                        fs.close(_fileDescriptor, function (_err) {
                            if (!_err) {
                                return true;
                            }
                            else {
                                return console.log("\x1b[31m%s\x1b[0m", "Error closing log file that was being appended");
                            }
                        });
                    }
                    else {
                        return console.log("\x1b[31m%s\x1b[0m", "Error appending to the log file");
                    }
                });
            }
            else {
                return console.log("\x1b[31m%s\x1b[0m", "Error cloudn't open the log file for appending");
            }
        });
    };
    /**
     * Deletes the log files older than 'X' days
     *
     * Note: 'X' is defined in .env file
     */
    Logger.prototype.clean = function () {
        //
    };
    return Logger;
}());
exports.default = new Logger();
