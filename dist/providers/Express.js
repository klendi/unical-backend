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
var express = __importStar(require("express"));
var Locals_1 = __importDefault(require("./Locals"));
var Routes_1 = __importDefault(require("./Routes"));
// import Bootstrap from '../middlewares/Kernel';
// import ExceptionHandler from '../exception/Handler';
var Express = /** @class */ (function () {
    /**
     * Initializes the express server
     */
    function Express() {
        //@ts-ignore
        this.express = express();
        this.mountDotEnv();
        this.mountMiddlewares();
        this.mountRoutes();
    }
    Express.prototype.mountDotEnv = function () {
        this.express = Locals_1.default.init(this.express);
    };
    /**
     * Mounts all the defined middlewares
     */
    Express.prototype.mountMiddlewares = function () {
        // this.express = Bootstrap.init(this.express);
    };
    /**
     * Mounts all the defined routes
     */
    Express.prototype.mountRoutes = function () {
        this.express = Routes_1.default.mountApi(this.express);
    };
    /**
     * Starts the express server
     */
    Express.prototype.init = function () {
        var port = Locals_1.default.config().port;
        // Registering Exception / Error Handlers
        // this.express.use(ExceptionHandler.logErrors);
        // this.express.use(ExceptionHandler.errorHandler);
        // this.express = ExceptionHandler.notFoundHandler(this.express);
        // Start the server on the specified port
        this.express.listen(port, function (_error) {
            if (_error) {
                return console.log("Error: ", _error);
            }
            return console.log("\x1b[33m%s\x1b[0m", "Server :: Running @ 'http://localhost:" + port + "'");
        });
    };
    return Express;
}());
/** Export the express module */
exports.default = new Express();
