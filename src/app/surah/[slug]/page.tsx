export default function Page({ params }: { params: { slug: string } }) {
  return <div>Surah: {params.slug}</div>;
}
