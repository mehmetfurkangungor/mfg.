import type { VideoProvider } from '@/data/projects';
export type MediaSource = { kind: 'file'; src: string } | { kind: 'embed'; src: string };
/** Host adapters keep provider-specific URLs out of rendering components. */
export function resolveMedia(provider: VideoProvider | null, value: string | null): MediaSource | null {
  if (!provider || !value) return null;
  if (provider === 'local') {
    if (!/^(\/[^/]|https:\/\/)/.test(value) || !/\.(mp4|webm)(\?.*)?$/i.test(value)) return null;
    return { kind: 'file', src: value };
  }
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:') return null;
    const host = url.hostname.replace(/^www\./, '');
    if (provider === 'youtube' && ['youtube.com', 'youtu.be', 'youtube-nocookie.com'].includes(host)) {
      const id = host === 'youtu.be' ? url.pathname.split('/')[1] : url.searchParams.get('v') || url.pathname.match(/^\/(?:embed|shorts)\/([^/]+)/)?.[1];
      return id && /^[\w-]{11}$/.test(id) ? { kind: 'embed', src: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0` } : null;
    }
    if (provider === 'vimeo' && ['vimeo.com', 'player.vimeo.com'].includes(host)) {
      const parts = url.pathname.split('/').filter(Boolean);
      const id = parts[0] === 'video' ? parts[1] : parts[0];
      const hash = url.searchParams.get('h') || (parts[0] !== 'video' ? parts[1] : null);
      if (!id || !/^\d+$/.test(id)) return null;
      const params = new URLSearchParams({ autoplay: '1' });
      if (hash && /^[a-zA-Z0-9]+$/.test(hash)) params.set('h', hash);
      return { kind: 'embed', src: `https://player.vimeo.com/video/${id}?${params}` };
    }
    if (provider === 'google-drive' && host === 'drive.google.com') {
      const id = url.pathname.match(/^\/file\/d\/([\w-]+)/)?.[1] || url.searchParams.get('id');
      return id && /^[\w-]+$/.test(id) ? { kind: 'embed', src: `https://drive.google.com/file/d/${id}/preview` } : null;
    }
  } catch { return null; }
  return null;
}
