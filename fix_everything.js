const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for(const file of files) {
        const fullPath = path.join(dir, file);
        if(fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if(fullPath.endsWith('page.tsx')) {
            // skip the root page.tsx
            if(fullPath === path.join('src', 'app', 'page.tsx')) continue;
            
            let content = fs.readFileSync(fullPath, 'utf8');
            
            // 1. Fix the overlapping issue
            content = content.replace('<div className=\"pt-0 flex-1\">', '<main className=\"pt-24 space-y-4\">');
            // We need to replace the last </div> before ); with </main>
            const lastDivIdx = content.lastIndexOf('</div>');
            if(lastDivIdx !== -1) {
                content = content.substring(0, lastDivIdx) + '</main>' + content.substring(lastDivIdx + 6);
            }
            
            // 2. Next.js Link
            if(!content.includes('import Link')) {
                content = "import Link from 'next/link';\n" + content;
            }
            content = content.replace(/<a /g, '<Link ').replace(/<\/a>/g, '</Link>');
            
            // 3. FadeIn Animations
            if(!content.includes('import { FadeIn }')) {
                content = "import { FadeIn } from '@/components/FadeIn';\n" + content;
            }
            content = content.replace(/<section /g, '<FadeIn><section ').replace(/<\/section>/g, '</section></FadeIn>');
            
            fs.writeFileSync(fullPath, content);
            console.log('Fixed', fullPath);
        }
    }
}

processDir(path.join('src', 'app'));
