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
var os = __importStar(require("os"));
var cluster = __importStar(require("cluster"));
var App_1 = __importDefault(require("./providers/App"));
// import NativeEvent from './exception/NativeEvent';
if (cluster.isMaster) {
    /**
     * Catches the process events
     */
    // NativeEvent.process();
    /**
     * Clear the console before the app runs
     */
    App_1.default.clearConsole();
    /**
     * Load Configuration
     */
    App_1.default.loadConfiguration();
    /**
     * Find the number of available CPUS
     */
    var CPUS = os.cpus();
    /**
     * Fork the process, the number of times we have CPUs available
     */
    CPUS.forEach(function () { return cluster.fork(); });
    /**
     * Catches the cluster events
     */
    // NativeEvent.cluster(cluster);
    /**
     * Run the Worker every minute
     * Note: we normally start worker after
     * the entire app is loaded
     */
    setTimeout(function () { return App_1.default.loadWorker(); }, 1000 * 60);
}
else {
    /**
     * Run the Database pool
     */
    App_1.default.loadDatabase();
    /**
     * Run the Server on Clusters
     */
    App_1.default.loadServer();
}
