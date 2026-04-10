const fs = require('fs');
const path = require('path');

const mappings = [
    { match: /<Link(.*?)href="#"(.*?)>(.*?)(Get a Quote|Contact Us)(.*?)<\/Link>/gis, replace: '<Link="/contact"></Link>' },
    { match: /<Link(.*?)href="#"(.*?)>(.*?)(Join Our Team|Careers|Work With Us)(.*?)<\/Link>/gis, replace: '<Link="/careers"></Link>' },
    { match: /<Link(.*?)href="#"(.*?)>(.*?)(Explore Training|View Courses|Training Hub)(.*?)<\/Link>/gis, replace: '<Link="/training"></Link>' },
    { match: /<Link(.*?)href="#"(.*?)>(.*?)(View All Projects|View Work|Our Portfolio)(.*?)<\/Link>/gis, replace: '<Link="/portfolio"></Link>' },
    { match: /<Link(.*?)href="#"(.*?)>(.*?)(Read More|Latest News|Blog)(.*?)<\/Link>/gis, replace: '<Link="/blog"></Link>' },
    { match: /<Link(.*?)href="#"(.*?)>(.*?)(Our Team|Leadership)(.*?)<\/Link>/gis, replace: '<Link="/team"></Link>' },
    { match: /<Link(.*?)href="#"(.*?)>(.*?)(Learn More|All Services|View Services|Explore)(.*?)<\/Link>/gis, replace: '<Link="/services"></Link>' },
    // Catch-all for "About" if nothing else matched.
    { match: /<Link(.*?)href="#"(.*?)>(.*?)(About Us|Who We Are)(.*?)<\/Link>/gis, replace: '<Link="/about"></Link>' }
];

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for(const file of files) {
        const fullPath = path.join(dir, file);
        if(fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if(fullPath.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;
            
            for(const rule of mappings) {
                let initial = content;
                content = content.replace(rule.match, rule.replace);
                if(content !== initial) modified = true;
            }
            
            if(modified) {
                fs.writeFileSync(fullPath, content);
                console.log('Remapped links in:', fullPath);
            }
        }
    }
}

processDir(path.join('src', 'app'));
console.log('Remapping complete.');
