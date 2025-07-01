import { _posts } from '../../src/_mock/_data';
import { CONFIG } from '../../src/config-global';
import { BlogView } from '../../src/sections/blog/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Blog - ${CONFIG.appName}`}</title>

      <BlogView posts={_posts} />
    </>
  );
}