const fs = require('fs');
const jsxPath = 'src/pages/PrivacyPolicy.jsx';
let jsx = fs.readFileSync(jsxPath, 'utf8');

const svgMatch = jsx.match(/<svg.*?<\/svg>/s);
if (svgMatch) {
  const svg = svgMatch[0];
  const brandMarkCode = `export default function BrandMark({ className = 'h-[26px] w-auto inline-block' }) {
  return (
    ${svg.replace('className="h-[26px] w-auto inline-block"', 'className={className}')}
  )
}
`;
  fs.writeFileSync('src/components/BrandMark.jsx', brandMarkCode);
  
  jsx = jsx.replace(svg, '<BrandMark />');
  jsx = "import BrandMark from '../components/BrandMark'\n" + jsx;
  fs.writeFileSync(jsxPath, jsx);
}
