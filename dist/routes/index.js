"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Api = /** @class */ (function () {
    function Api() {
        this.apiRouter = express_1.Router();
        this.initate();
    }
    Api.prototype.initate = function () {
        //  Router with authentication middleware imported from ''../middleware module
        // this.apiRouter.use('/users',  [Tokencheck, TokenVerify],UserRouter);
        // this.apiRouter.use('/users',UserRouter);
    };
    return Api;
}());
exports.default = new Api().apiRouter;
