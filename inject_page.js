const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Add missing imports
if(!content.includes('import Link')) {
    content = "import Link from 'next/link';\nimport { FadeIn } from '@/components/FadeIn';\n" + content;
}

// 2. Replace a tags with Link
content = content.replace(/<a /g, '<Link ').replace(/<\/a>/g, '</Link>');

// 3. Wrap sections in FadeIn
content = content.replace(/<section /g, '<FadeIn><section ').replace(/<\/section>/g, '</section></FadeIn>');

// 4. Inject the Glassmorphic stat overlay on the Hero image
const overlay = `
<div className="absolute -bottom-6 -left-6 bg-white/20 dark:bg-[#000a1e]/40 backdrop-blur-md border border-white/30 p-6 rounded-2xl shadow-2xl flex items-center gap-4 animate-pulse-slow z-20">
    <div className="w-12 h-12 bg-[#cf7000] rounded-full flex items-center justify-center text-white font-bold text-xl drop-shadow-lg">
        +
    </div>
    <div>
        <p className="font-headline font-black text-2xl text-primary dark:text-white leading-none mb-1">142%</p>
        <p className="font-label text-xs uppercase text-on-surface-variant dark:text-gray-300 tracking-wider font-bold">Projected Growth</p>
    </div>
</div>
`;
content = content.replace('mix-blend-multiply"></div>\n</div>', 'mix-blend-multiply"></div>\n</div>\n' + overlay);

fs.writeFileSync('src/app/page.tsx', content);
console.log('Homepage injected!');
