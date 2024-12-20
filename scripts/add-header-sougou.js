
const cheerio = require('cheerio');

hexo.extend.filter.register('after_render:html', function(str, data) {
  const metaTag = '<meta name="sogou_site_verification" content="2uG2AWf4qU" />';
  // const $ = cheerio.load(str, {
  //   // 启用 XHTML 模式以保留自闭合 / 
  //   xmlMode: true
  // });
  const $ = cheerio.load(str);

  // 在 <head> 中插入 meta 标签
  $('head').append(metaTag);

  return $.html();
});