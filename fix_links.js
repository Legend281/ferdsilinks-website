const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for(const file of files) {
        const fullPath = path.join(dir, file);
        if(fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if(fullPath.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;
            
            // Fix malformed <Link="/something"> to <Link href="/something">
            const regex = /<Link="(\/[^"]*)">(.*?)<\/Link>/g;
            if (regex.test(content)) {
                content = content.replace(regex, '<Link href="$1">$2</Link>');
                modified = true;
            }
            // Fix <Linkhref="/...
            const regex2 = /<Linkhref="(\/[^"]*)">(.*?)<\/Link>/g;
            if (regex2.test(content)) {
                content = content.replace(regex2, '<Link href="$1">$2</Link>');
                modified = true;
            }

            if(modified) {
                fs.writeFileSync(fullPath, content);
                console.log('Fixed', fullPath);
            }
        }
    }
}
processDir(path.join('src', 'app'));
