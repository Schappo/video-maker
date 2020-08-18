const puppeteer = require('puppeteer')
const qs = require('qs')

const baseUrl = 'https://www.google.com/search'
const queryString = 'sxsrf=ALeKk00wadw9MjPtqxGmytvET4PZolrn0Q%3A1597723155444&source=hp&ei=E1I7X8_LGN215OUP45eJ2A0&q=site%3Ainstagram.com+%22florian%C3%B3polis%22+%22yoga%22+%22ingleses%22+followers&oq=site%3A&gs_lcp=CgZwc3ktYWIQAxgAMgQIIxAnMgQIIxAnMgQIIxAnMgQIABBDMgQIABBDMgQIABBDMgUIABCxAzIECAAQQzICCAAyBAgAEEM6BwgjEOoCECc6CAguELEDEIMBOggIABCxAxCDAVDF_yxY5YYtYM6nLWgBcAB4AIABhQGIAfUEkgEDMC41mAEAoAEBqgEHZ3dzLXdperABCg&sclient=psy-ab'
const query = qs.parse(queryString)
const baseXRaySearch = 'site:instagram.com'

async function googleSearch (content) {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  // query.q = `${baseXRaySearch} AND "${content.location}" AND "${content.context}"`
  query.q = `${baseXRaySearch} "yoga" "ingleses"`
  const url = `${baseUrl}?${qs.stringify(query)}`

  await page.goto(url)

  // const element = await page.$$('.g')

  const text = await page.$$eval('.g', elments => elments.map(el => el.textContent))
  console.log(text)
  await browser.close()
}

module.exports = googleSearch
