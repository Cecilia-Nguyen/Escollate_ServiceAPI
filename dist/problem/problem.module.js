"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProblemModule = void 0;
const common_1 = require("@nestjs/common");
const problem_controller_1 = require("./problem.controller");
const problem_service_1 = require("./problem.service");
let ProblemModule = class ProblemModule {
};
ProblemModule = __decorate([
    (0, common_1.Module)({
        controllers: [problem_controller_1.ProblemController],
        providers: [problem_service_1.ProblemService]
    })
], ProblemModule);
exports.ProblemModule = ProblemModule;
//# sourceMappingURL=problem.module.js.map