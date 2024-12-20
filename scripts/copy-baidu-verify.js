console.log("Executing copy-baidu-verify.js...")

const fs = require('fs');
const path = require('path');

hexo.extend.filter.register('after_generate', () => {
  const fileName = 'baidu_verify_codeva-e28AqD3F1C.html'; // 替换成你的文件名
  const sourceFile = path.join(hexo.base_dir, fileName);
  const destinationFile = path.join(hexo.public_dir, fileName);

  // 手动创建文件夹，否则会提示找不到文件夹，按理说 'after_generate' 阶段应该有文件夹的，但事实不是
  fs.mkdirSync(hexo.public_dir, { recursive: true });

  fs.copyFile(sourceFile, destinationFile, (err) => {
    if (err) {
      console.error('Error copying file:', err);
    } else {
      console.log('File was copied to public directory successfully.');
    }
  });
});
