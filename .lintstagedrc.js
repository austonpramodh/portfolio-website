const path = require('path')

// get the absolute path
const getAbsolutePath = (relativePath) => path.resolve(__dirname, relativePath)

const buildEslintCommand = (filenames) =>{
console.log(`next lint --file ${filenames
  .map((f) => path.relative(process.cwd(), f))
  .join(' --file ')}`);

  return `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`
  }

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
}