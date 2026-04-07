const fs = require('fs');

function convert(html) {
    let body = html;
    body = body.replace(/class=/g, 'className=');
    body = body.replace(/viewbox=/gi, 'viewBox=');
    body = body.replace(/<img(.*?)>/gi, (m, p1) => {
        if(p1.endsWith('/')) return m;
        return `<img${p1} />`;
    });
    body = body.replace(/<input(.*?)>/gi, (m, p1) => {
        if(p1.endsWith('/')) return m;
        return `<input${p1} />`;
    });
    body = body.replace(/<br>/gi, '<br />');
    body = body.replace(/<hr>/gi, '<hr />');
    body = body.replace(/<!--(.*?)-->/gs, '{/*$1*/}');
    body = body.replace(/style="([^"]*)"/g, (m, p1) => {
        if(p1.includes('font-variation-settings')) {
            return `style={{ fontVariationSettings: "'FILL' 1" }}`;
        }
        if(p1.includes('background-image: radial-gradient')) {
            return `style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(0, 33, 71, 0.05) 1px, transparent 0)", backgroundSize: "40px 40px" }}`;
        }
        return m;
    });
    return body;
}

const inputFile = process.argv[2];
const outputFile = process.argv[3];

let content = fs.readFileSync(inputFile, 'utf8');

const match = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
if(!match) { console.log('no body'); process.exit(1); }

let bodyContent = match[1];

// Find header and footer
let headerEnd = bodyContent.indexOf('</nav>');
if (headerEnd !== -1) {
    headerEnd += 6;
} else {
    // some screens might not have nav, default to 0
    headerEnd = 0;
}

let footerStart = bodyContent.indexOf('<footer');
if (footerStart === -1) {
    // some screens might not have footer, default to length
    footerStart = bodyContent.length;
}

// Ensure whatsapp is skipped too
let whatsappStart = bodyContent.indexOf('<!-- Floating WhatsApp -->');
let mainEnd = whatsappStart !== -1 && whatsappStart < footerStart ? whatsappStart : footerStart;

let mainHtml = bodyContent.slice(headerEnd, mainEnd);

mainHtml = convert(mainHtml);

const pageJsx = `
export default function Page() {
  return (
    <main className="min-h-screen pt-20">
      ${mainHtml}
    </main>
  );
}
`;

// Make sure output dir exists
const path = require('path');
const dir = path.dirname(outputFile);
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync(outputFile, pageJsx);

console.log('Converted ' + inputFile + ' to ' + outputFile);
