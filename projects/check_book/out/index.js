#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer = require('puppeteer');
const piaotian = require('./selector/piaotian').default;
const books = require('./book_config').default;
const colors = require('colors');
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
let histryPath = path_1.default.join(__dirname, '../search.json');
let searchHistry = fs_1.default.readFileSync(histryPath, { encoding: 'utf8' });
let update = [];
let noUpdate = [];
let updateHistry = [];
function startUp() {
    return __awaiter(this, void 0, void 0, function* () {
        const browser = yield puppeteer.launch({ devtools: false });
        let hasError = false;
        try {
            yield Promise.all(books.map((val) => __awaiter(this, void 0, void 0, function* () {
                const page = yield browser.newPage();
                yield page.goto(val.url[0], { timeout: 0 });
                let info = yield page.$eval(piaotian.BIQUGE, (el) => ({
                    text: el.innerText,
                    href: el.href
                }));
                info.name = val.name;
                info.url = val.url;
                if (searchHistry.includes(info.href)) {
                    //未更新
                    noUpdate.push(info);
                }
                else {
                    //已更新
                    update.push(info);
                }
                updateHistry.push(info.href);
            })));
        }
        catch (error) {
            hasError = true;
        }
        if (hasError) {
            yield browser.close();
            return;
        }
        update.map(val => {
            console.log(val.name.bold + '：', val.text.yellow, ' ', val.href, ' 目录：'.yellow, val.url);
        });
        console.log();
        noUpdate.map(val => {
            console.log(val.name + '：', val.text, ' ', val.href, ' 目录：', val.url);
        });
        fs_1.default.writeFileSync(histryPath, JSON.stringify(updateHistry, undefined, 2), {
            encoding: 'utf8'
        });
        yield browser.close();
    });
}
startUp();
