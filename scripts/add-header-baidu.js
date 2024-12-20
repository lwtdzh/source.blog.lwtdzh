
const cheerio = require('cheerio');

hexo.extend.filter.register('after_render:html', function(str, data) {
  const metaTag = '<meta name="baidu-site-verification" content="codeva-e28AqD3F1C" />';
  const $ = cheerio.load(str);
  // const $ = cheerio.load(str, {
  //   // 启用 XHTML 模式以保留自闭合 / 
  //   xmlMode: true
  // });
  // 在 <head> 中插入 meta 标签
  $('head').append(metaTag);

  return $.html();
});