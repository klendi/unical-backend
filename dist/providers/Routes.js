"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Locals_1 = __importDefault(require("./Locals"));
var routes_1 = __importDefault(require("../routes"));
var Logger_1 = __importDefault(require("../middlewares/Logger"));
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.prototype.mountApi = function (_express) {
        var apiPrefix = Locals_1.default.config().apiPrefix;
        Logger_1.default.info("Routes :: Mounting API Routes...");
        return _express.use("/" + apiPrefix, routes_1.default);
    };
    return Routes;
}());
exports.default = new Routes();
