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
            
            // The previous regex generated: <Link href="`/team">`Join Our Team</Link>
            const regexClean = /<Link href="`([^"]*)">`(.*?)<\/Link>/g;
            if (regexClean.test(content)) {
                content = content.replace(regexClean, '<Link href="$1">$2</Link>');
                modified = true;
            }

            if(modified) {
                fs.writeFileSync(fullPath, content);
                console.log('Cleaned', fullPath);
            }
        }
    }
}
processDir(path.join('src', 'app'));
