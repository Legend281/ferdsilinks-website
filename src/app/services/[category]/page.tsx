import { serviceCategories } from '@/data/services';
import ServiceCategoryClient from './ServiceCategoryClient';

export function generateStaticParams() {
    return serviceCategories.map((cat) => ({
        category: cat.slug,
    }));
}

export default async function ServiceCategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    return <ServiceCategoryClient categorySlug={category} />;
}
