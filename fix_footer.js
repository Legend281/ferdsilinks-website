const fs = require('fs');
let content = fs.readFileSync('src/components/layout/Footer.tsx', 'utf8');

if(!content.includes('import Link')) {
    content = "import Link from 'next/link';\n" + content;
}
content = content.replace(/<a /g, '<Link ').replace(/<\/a>/g, '</Link>');

fs.writeFileSync('src/components/layout/Footer.tsx', content);
console.log('Footer injected!');
