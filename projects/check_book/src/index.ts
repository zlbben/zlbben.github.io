const puppeteer = require('puppeteer');
const piaotian = require('./selector/piaotian').default
const books = require('./book_config').default
const colors = require('colors')
import fs from 'fs'
import path from 'path'

let histryPath = path.join(__dirname, '../search.json')
let searchHistry = fs.readFileSync(histryPath, { encoding: 'utf8' })

let update: any[] = []
let noUpdate: any[] = []
let updateHistry: any[] = []

async function startUp() {
  const browser = await puppeteer.launch({ devtools: false, });

  await Promise.all(books.map(async (val: { name: string, url: string[] }) => {
    const page = await browser.newPage();
    await page.goto(val.url[0])
    let info = await page.$eval(piaotian.NEW_TEXT, (el: any) => ({ text: el.innerText, href: el.href }))
    info.name = val.name
    info.url = val.url

    if (searchHistry.includes(info.href)) {//未更新
      noUpdate.push(info)
    } else {//已更新
      update.push(info)
    }
    updateHistry.push(info.href)

  }))

  update.map(val => {
    console.log(val.name.bold + '：', val.text.yellow, ' ', val.href, (<any>' 目录：').yellow, val.url)
  })
  console.log()
  noUpdate.map(val => {
    console.log(val.name + '：', val.text, ' ', val.href, ' 目录：', val.url)
  })

  fs.writeFileSync(histryPath, JSON.stringify(updateHistry, undefined, 2), { encoding: 'utf8' })

  await browser.close();
}

startUp()