export interface InstagramPost {
  id: string;
  caption?: string;
  mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  mediaUrl: string;
  thumbnailUrl?: string;
  permalink: string;
  timestamp: string;
}

interface GraphMediaItem {
  id: string;
  caption?: string;
  media_type: InstagramPost['mediaType'];
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}

const GRAPH_FIELDS = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp';

/**
 * Busca as publicações mais recentes do Instagram profissional via Graph API.
 * Executa somente no servidor (nunca expor o token no cliente). Retorna
 * `null` quando as credenciais não estão configuradas — o chamador deve
 * tratar isso ocultando a seção ou mostrando apenas um CTA para o perfil.
 */
export async function fetchInstagramPosts(limit = 6): Promise<InstagramPost[] | null> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;

  if (!token || !userId) {
    return null;
  }

  try {
    const url = `https://graph.instagram.com/${userId}/media?fields=${GRAPH_FIELDS}&access_token=${token}&limit=${limit}`;
    const response = await fetch(url, { next: { revalidate: 3600 } });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as { data?: GraphMediaItem[] };

    return (data.data ?? [])
      .filter((item) => item.media_type !== 'VIDEO' || item.thumbnail_url)
      .map((item) => ({
        id: item.id,
        caption: item.caption,
        mediaType: item.media_type,
        mediaUrl: item.media_type === 'VIDEO' ? item.thumbnail_url ?? item.media_url : item.media_url,
        thumbnailUrl: item.thumbnail_url,
        permalink: item.permalink,
        timestamp: item.timestamp,
      }));
  } catch {
    return null;
  }
}
