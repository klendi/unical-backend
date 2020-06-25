"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CORS_1 = __importDefault(require("./CORS"));
var Http_1 = __importDefault(require("./Http"));
var Locals_1 = __importDefault(require("../providers/Locals"));
var Kernel = /** @class */ (function () {
    function Kernel() {
    }
    Kernel.init = function (_express) {
        // Check if CORS is enabled
        if (Locals_1.default.config().isCORSEnabled) {
            // Mount CORS middleware
            _express = CORS_1.default.mount(_express);
        }
        // Mount basic express apis middleware
        _express = Http_1.default.mount(_express);
        return _express;
    };
    return Kernel;
}());
exports.default = Kernel;
