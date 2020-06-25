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
var bodyParser = __importStar(require("body-parser"));
var Logger_1 = __importDefault(require("./Logger"));
var Locals_1 = __importDefault(require("../providers/Locals"));
var Http = /** @class */ (function () {
    function Http() {
    }
    Http.mount = function (_express) {
        Logger_1.default.info("Booting the 'HTTP' middleware...");
        // Enables the request body parser
        _express.use(bodyParser.json({
            limit: Locals_1.default.config().maxUploadLimit,
        }));
        _express.use(bodyParser.urlencoded({
            limit: Locals_1.default.config().maxUploadLimit,
            parameterLimit: Locals_1.default.config().maxParameterLimit,
            extended: false,
        }));
        // Disable the x-powered-by header in response
        _express.disable("x-powered-by");
        return _express;
    };
    return Http;
}());
exports.default = Http;
