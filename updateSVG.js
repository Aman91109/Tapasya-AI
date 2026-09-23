const fs = require('fs');
const htmlPath = 'C:\\Users\\aman singh\\Downloads\\TAPASYA_AI_Privacy_Policy (1).html';
const html = fs.readFileSync(htmlPath, 'utf8');

const svgMatch = html.match(/<svg class="brand-mark".*?<\/svg>/s);
if (!svgMatch) {
  console.error('SVG not found!');
  process.exit(1);
}

let svg = svgMatch[0];
svg = svg.replace('class="brand-mark"', 'className="h-[26px] w-auto inline-block"');
svg = svg.replace(/fill-rule/g, 'fillRule');
svg = svg.replace(/clip-rule/g, 'clipRule');
svg = svg.replace(/transform/g, 'transform'); 

const jsxPath = 'src/pages/PrivacyPolicy.jsx';
let jsx = fs.readFileSync(jsxPath, 'utf8');

jsx = jsx.replace(/<svg className="w-5 h-5".*?<\/svg>/s, svg);

fs.writeFileSync(jsxPath, jsx);
console.log('Successfully updated PrivacyPolicy.jsx');
