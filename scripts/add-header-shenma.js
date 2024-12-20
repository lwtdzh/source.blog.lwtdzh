
const cheerio = require('cheerio');

hexo.extend.filter.register('after_render:html', function(str, data) {
  const metaTag = '<meta name="shenma-site-verification" content="136a7c5fb5356dea89b9bb68bd7b7742_1734701671">';
  const $ = cheerio.load(str);
  // const $ = cheerio.load(str, {
  //   // 启用 XHTML 模式以保留自闭合 / 
  //   xmlMode: true
  // });
  // 在 <head> 中插入 meta 标签
  $('head').append(metaTag);

  return $.html();
});