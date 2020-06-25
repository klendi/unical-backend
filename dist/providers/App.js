"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = __importStar(require("path"));
var dotenv = __importStar(require("dotenv"));
var Express_1 = __importDefault(require("./Express"));
var Logger_1 = __importDefault(require("../middlewares/Logger"));
var App = /** @class */ (function () {
    function App() {
    }
    // Clear the console
    App.prototype.clearConsole = function () {
        process.stdout.write("\x1B[2J\x1B[0f");
    };
    // Loads your dotenv file
    App.prototype.loadConfiguration = function () {
        Logger_1.default.info("Configuration :: Booting @ Master...");
        dotenv.config({ path: path.join(__dirname, "../../.env") });
    };
    // Loads your Server
    App.prototype.loadServer = function () {
        Logger_1.default.info("Server :: Booting @ Master...");
        Express_1.default.init();
    };
    // Loads the Database Pool
    App.prototype.loadDatabase = function () {
        Logger_1.default.info("Database :: Booting @ Master...");
        // Database.init();
    };
    // Loads the Worker Cluster
    App.prototype.loadWorker = function () {
        Logger_1.default.info("Worker :: Booting @ Master...");
    };
    return App;
}());
exports.default = new App();
