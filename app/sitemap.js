import { services } from "@/data/services";

export default function sitemap() {
  const base = "https://bronotravaux.ma";
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/realisations`, changeFrequency: "monthly", priority: 0.8 },
    ...services.map(({ slug }) => ({
      url: `${base}/services/${slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  ];
}
