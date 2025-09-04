
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/dictionary";
import { cars } from "@/lib/data";
import CarFilterView from "@/components/shared/car-filter-view";

export default async function DaftarMobilPage(props: { params: Promise<{ lang: Locale }>}) {
    const params = await props.params;

    const {
        lang
    } = params;

    const dict = await getDictionary(lang);

    return (
        <CarFilterView lang={lang} dict={dict} cars={cars} />
    );
}
