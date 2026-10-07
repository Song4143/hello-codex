// hello-codex 示例脚本
const name = process.argv[2] || 'Codex';

console.log(`你好，${name}！`);
console.log('这是一个可以被 Git 记录、被 VS Code 编辑、被 Codex 修改的小项目。');
console.log('当前时间：' + new Date().toLocaleString('zh-CN'));