"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicFacultyController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const pagination_1 = require("../../../constants/pagination");
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const pick_1 = __importDefault(require("../../../shared/pick"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const academicFaculty_constants_1 = require("./academicFaculty.constants");
const academicFaculty_service_1 = require("./academicFaculty.service");
const createAcademicFaculty = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicFaculty_service_1.AcademicFacultyService.createAcademicFaculty(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Academic Faculty Created Successfully',
        data: result,
    });
}));
const getAllAcademicFaculty = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, academicFaculty_constants_1.AcademicFacultyFilterAbleFileds);
    const options = (0, pick_1.default)(req.query, pagination_1.paginationFields);
    const result = yield academicFaculty_service_1.AcademicFacultyService.getAllAcademicFaculty(filters, options);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Academic Facultys Retrieved Successfully',
        meta: result.meta,
        data: result.data,
    });
}));
const getSingleAcademicFaculty = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield academicFaculty_service_1.AcademicFacultyService.getSingleAcademicFaculty(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Academic Faculty Retrieved Successfully',
        data: result,
    });
}));
const updateSingleAcademicFaculty = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const id = req.params.id;
    const result = yield academicFaculty_service_1.AcademicFacultyService.updateSingleAcademicFaculty(data, id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Academic Faculty Updated Successfully',
        data: result,
    });
}));
const deleteSingleAcademicFaculty = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield academicFaculty_service_1.AcademicFacultyService.deleteSingleAcademicFaculty(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Academic Faculty Deleted Successfully',
        data: result,
    });
}));
exports.AcademicFacultyController = {
    createAcademicFaculty,
    getAllAcademicFaculty,
    getSingleAcademicFaculty,
    updateSingleAcademicFaculty,
    deleteSingleAcademicFaculty,
};
