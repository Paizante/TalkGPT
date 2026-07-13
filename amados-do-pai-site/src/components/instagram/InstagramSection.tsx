import Image from 'next/image';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { fetchInstagramPosts } from '@/lib/instagram';
import { social } from '@/content/site';

export default async function InstagramSection() {
  if (!social.instagramUrl) {
    return null;
  }

  const posts = await fetchInstagramPosts(6);

  return (
    <section className="bg-ivory py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Acontece na Amados do Pai</p>
          <h2 className="mt-3 text-3xl font-semibold text-evergreen sm:text-4xl">
            Acompanhe atividades, momentos e novidades
          </h2>
          <p className="mt-4 text-warm-gray">
            Siga nosso Instagram oficial{social.instagramUsername ? ` (${social.instagramUsername})` : ''} para
            ver o dia a dia da Associação.
          </p>
        </div>

        {posts && posts.length > 0 ? (
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {posts.map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noreferrer noopener"
                className="group relative aspect-square overflow-hidden rounded-xl bg-beige"
              >
                <Image
                  src={post.mediaUrl}
                  alt={post.caption?.slice(0, 120) || 'Publicação do Instagram da Associação Amados do Pai'}
                  fill
                  sizes="(min-width: 1024px) 16vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  unoptimized
                />
              </a>
            ))}
          </div>
        ) : null}

        <div className="mt-10 flex justify-center">
          <Button href={social.instagramUrl} variant="primary">
            Seguir no Instagram
          </Button>
        </div>
      </Container>
    </section>
  );
}
