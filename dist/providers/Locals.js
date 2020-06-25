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
Object.defineProperty(exports, "__esModule", { value: true });
var path = __importStar(require("path"));
var dotenv = __importStar(require("dotenv"));
var Locals = /** @class */ (function () {
    function Locals() {
    }
    Locals.config = function () {
        dotenv.config({ path: path.join(__dirname, "../../.env") });
        var url = process.env.APP_URL || "http://localhost:" + process.env.PORT;
        var port = process.env.PORT || 4040;
        var appSecret = process.env.APP_SECRET || "This is your responsibility!";
        var mongooseUrl = process.env.MONGOOSE_URL;
        var maxUploadLimit = process.env.APP_MAX_UPLOAD_LIMIT || "50mb";
        var maxParameterLimit = process.env.APP_MAX_PARAMETER_LIMIT || "50mb";
        var year = new Date().getFullYear();
        var isCORSEnabled = process.env.CORS_ENABLED || true;
        var jwtExpiresIn = process.env.JWT_EXPIRES_IN || 3;
        var apiPrefix = process.env.API_PREFIX || "api";
        var logDays = process.env.LOG_DAYS || 10;
        var redisHttpPort = process.env.REDIS_PORT || 6379;
        var redisHttpHost = process.env.REDIS_HOST || "127.0.0.1";
        var redisPrefix = process.env.REDIS_DB || "q";
        var redisDB = process.env.REDIS_PREFIX || 3;
        return {
            appSecret: appSecret,
            apiPrefix: apiPrefix,
            isCORSEnabled: isCORSEnabled,
            jwtExpiresIn: jwtExpiresIn,
            logDays: logDays,
            maxUploadLimit: maxUploadLimit,
            maxParameterLimit: maxParameterLimit,
            mongooseUrl: mongooseUrl,
            name: name,
            port: port,
            redisDB: redisDB,
            redisHttpPort: redisHttpPort,
            redisHttpHost: redisHttpHost,
            redisPrefix: redisPrefix,
            url: url,
        };
    };
    /**
     * Injects your config to the app's locals
     */
    Locals.init = function (_express) {
        _express.locals.app = this.config();
        return _express;
    };
    return Locals;
}());
exports.default = Locals;
