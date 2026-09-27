import { test } from 'node:test';
import assert from 'node:assert/strict';
import { resolveMedia } from './media';

test('placeholder media never resolves to a fabricated URL', () => {
  assert.equal(resolveMedia(null, null), null);
  assert.equal(resolveMedia('youtube', null), null);
});
test('local MP4 and WebM, including signed HTTPS URLs', () => {
  assert.deepEqual(resolveMedia('local', '/media/film.webm'), { kind: 'file', src: '/media/film.webm' });
  assert.equal(resolveMedia('local', 'https://media.example.test/film.mp4?signature=abc')?.kind, 'file');
  assert.equal(resolveMedia('local', '//untrusted.test/film.mp4'), null);
  assert.equal(resolveMedia('local', 'javascript:alert(1)'), null);
});
test('YouTube watch, short, and embed links share the same adapter', () => {
  for (const url of ['https://youtube.com/watch?v=abcdefghijk', 'https://youtu.be/abcdefghijk', 'https://youtube.com/shorts/abcdefghijk']) {
    assert.equal(resolveMedia('youtube', url)?.src, 'https://www.youtube-nocookie.com/embed/abcdefghijk?autoplay=1&rel=0');
  }
  assert.equal(resolveMedia('youtube', 'https://youtube.com.attacker.test/watch?v=abcdefghijk'), null);
});
test('Vimeo preserves unlisted access hashes', () => {
  assert.equal(resolveMedia('vimeo', 'https://vimeo.com/123456/abcd1234')?.src, 'https://player.vimeo.com/video/123456?autoplay=1&h=abcd1234');
  assert.equal(resolveMedia('vimeo', 'https://player.vimeo.com/video/123456?h=abcd1234')?.src, 'https://player.vimeo.com/video/123456?autoplay=1&h=abcd1234');
});
test('Drive embeds remain embeds rather than direct streaming URLs', () => {
  assert.deepEqual(resolveMedia('google-drive', 'https://drive.google.com/file/d/test_file-id/view?usp=sharing'), { kind: 'embed', src: 'https://drive.google.com/file/d/test_file-id/preview' });
  assert.equal(resolveMedia('google-drive', 'https://drive.google.com/open?id=test_file-id')?.kind, 'embed');
  assert.equal(resolveMedia('google-drive', 'https://evil.test/file/d/test_file-id/view'), null);
});
