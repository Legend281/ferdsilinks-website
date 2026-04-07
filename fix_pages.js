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
            if (p1.includes('#c4c6cf')) {
                return `style={{ backgroundImage: "radial-gradient(#c4c6cf 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }}`;
            } else {
                return `style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(0, 33, 71, 0.05) 1px, transparent 0)", backgroundSize: "40px 40px" }}`;
            }
        }
        if(p1.includes('background-image: linear-gradient(rgba')) {
            // Found a literal background image in one of the files
            return `style={{ backgroundImage: \`${p1}\` }}`;
        }
        return m;
    });
    
    // Quick fix for unescaped apostrophes and entities in text nodes that break Next.js
    // This is a naive replacement but usually covers 99% of text issues in these files.
    // By replacing bare apostrophes with &apos; we make jsx happy.
    // First, temporarily substitute attributes to avoid breaking them
    // Actually, just leaving them or wrapping the content in a div usually works, 
    // but Next.js specifically hates ' in text nodes like "Empowering Africa's"
    body = body.replace(/Africa's/g, "Africa&apos;s");
    body = body.replace(/don't/g, "don&apos;t");
    body = body.replace(/We're/g, "We&apos;re");
    body = body.replace(/we're/g, "we&apos;re");
    body = body.replace(/you're/g, "you&apos;re");
    body = body.replace(/It's/g, "It&apos;s");
    body = body.replace(/it's/g, "it&apos;s");
    body = body.replace(/let's/g, "let&apos;s");
    body = body.replace(/Let's/g, "Let&apos;s");
    body = body.replace(/Buea's/g, "Buea&apos;s");
    body = body.replace(/Cameroon's/g, "Cameroon&apos;s");
    body = body.replace(/world's/g, "world&apos;s");
    body = body.replace(/didn't/g, "didn&apos;t");
    
    return body;
}

const map = [
    { in: 'stitch_ferdsilinks_corporate_website/ferdsilinks_about_us/code.html', out: 'src/app/about/page.tsx' },
    { in: 'stitch_ferdsilinks_corporate_website/ferdsilinks_services/code.html', out: 'src/app/services/page.tsx' },
    { in: 'stitch_ferdsilinks_corporate_website/training_hub_1/code.html', out: 'src/app/training/page.tsx' },
    { in: 'stitch_ferdsilinks_corporate_website/ferdsilinks_blog/code.html', out: 'src/app/blog/page.tsx' },
    { in: 'stitch_ferdsilinks_corporate_website/ferdsilinks_podcast/code.html', out: 'src/app/podcast/page.tsx' },
    { in: 'stitch_ferdsilinks_corporate_website/contact_ferdsilinks/code.html', out: 'src/app/contact/page.tsx' },
    { in: 'stitch_ferdsilinks_corporate_website/ferdsilinks_portfolio/code.html', out: 'src/app/portfolio/page.tsx' },
    { in: 'stitch_ferdsilinks_corporate_website/ferdsilinks_team/code.html', out: 'src/app/team/page.tsx' },
    { in: 'stitch_ferdsilinks_corporate_website/ferdsilinks_careers/code.html', out: 'src/app/careers/page.tsx' },
    { in: 'stitch_ferdsilinks_corporate_website/course_detail_data_science_1/code.html', out: 'src/app/training/[course]/page.tsx' },
    { in: 'stitch_ferdsilinks_corporate_website/blog_post_future_of_data_in_africa/code.html', out: 'src/app/blog/[post]/page.tsx' }
];

for(const p of map) {
    let content = fs.readFileSync(p.in, 'utf8');
    const mainMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
    let mainHtml = '';
    
    // If there is no main tag, fallback to body extraction
    if(mainMatch) {
       mainHtml = mainMatch[1];
    } else {
       const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
       let bc = bodyMatch[1];
       let hEnd = bc.indexOf('</header>');
       if(hEnd !== -1) { bc = bc.slice(hEnd + 9); }
       else {
           let nEnd = bc.indexOf('</nav>');
           if (nEnd !== -1) bc = bc.slice(nEnd + 6);
       }
       let fStart = bc.indexOf('<footer');
       if(fStart !== -1) bc = bc.slice(0, fStart);
       let wStart = bc.indexOf('<!-- Floating WhatsApp -->');
       if(wStart !== -1) bc = bc.slice(0, wStart);
       mainHtml = bc;
    }
    
    mainHtml = convert(mainHtml);
    
    const pageJsx = `
export default function Page() {
  return (
    <div className="pt-0 flex-1">
      ${mainHtml}
    </div>
  );
}
    `;
    const path = require('path');
    const dir = path.dirname(p.out);
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(p.out, pageJsx);
    console.log('Fixed', p.out);
}
