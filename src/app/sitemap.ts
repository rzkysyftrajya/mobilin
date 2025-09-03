import { MetadataRoute } from 'next';
import { i18n } from '@/i18n-config';
import { provinces } from '@/lib/provinces';
import { blogPosts, cars, destinationAreas } from '@/lib/data';
import { cities } from '@/lib/cities';
import { services } from '@/lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mobilinaja.com';

  const staticRoutes = [
    '/',
    '/tentang-kami',
    '/daftar-mobil',
    '/kontak',
    '/blog',
    '/faq',
    '/testimonial',
    '/karier',
    '/kebijakan-privasi',
    '/syarat-ketentuan',
    '/destinasi',
    '/layanan',
  ].flatMap(path => i18n.locales.map(locale => ({
      url: `${baseUrl}/${locale}${path === '/' ? '' : path}`,
      lastModified: new Date(),
  })));


  const provinceRoutes = provinces.flatMap((province) =>
    i18n.locales.map(locale => ({
      url: `${baseUrl}/${locale}/rental-mobil/${province.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );
  
  const cityRoutes = cities.flatMap((city) =>
    i18n.locales.map(locale => ({
      url: `${baseUrl}/${locale}/rental-mobil/${city.provinceSlug}/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  const carRoutes = cars.flatMap((car) =>
    i18n.locales.map(locale => ({
      url: `${baseUrl}/${locale}/mobil/${car.name.toLowerCase().replace(/ /g, '-')}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    }))
  );

  const blogRoutes = blogPosts.flatMap((post) =>
    i18n.locales.map(locale => ({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))
  );
  
  const destinationRoutes = destinationAreas.flatMap((dest) =>
    i18n.locales.map(locale => ({
        url: `${baseUrl}/${locale}/destinasi/${dest.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))
  );
  
  const serviceRoutes = services.flatMap((service) =>
    i18n.locales.map(locale => ({
        url: `${baseUrl}/${locale}/layanan/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))
  );

  return [...staticRoutes, ...provinceRoutes, ...cityRoutes, ...carRoutes, ...blogRoutes, ...destinationRoutes, ...serviceRoutes];
}
