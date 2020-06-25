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
var cors = __importStar(require("cors"));
var Logger_1 = __importDefault(require("./Logger"));
var Locals_1 = __importDefault(require("../providers/Locals"));
var CORS = /** @class */ (function () {
    function CORS() {
    }
    CORS.prototype.mount = function (_express) {
        Logger_1.default.info("Booting the 'CORS' middleware...");
        var options = {
            origin: Locals_1.default.config().url,
            optionsSuccessStatus: 200,
        };
        //@ts-ignore
        _express.use(cors(options));
        return _express;
    };
    return CORS;
}());
exports.default = new CORS();
