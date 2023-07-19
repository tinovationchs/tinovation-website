import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
  const guides = import.meta.glob(`/src/guides/*.md`);

  const slugFromPath = (path: string) => path.match(/([\w-]+)\.(md)/i)?.[1] ?? null;

  let match: { path?: string; resolver?: App.MdsvexResolver } = {};
  for (const [path, resolver] of Object.entries(guides)) {
    if (slugFromPath(path) === params.id) {
      match = { path, resolver: resolver as unknown as App.MdsvexResolver };
      break;
    }
  }

  const guide = await match?.resolver?.();

  if (!guide || !guide.metadata.published) {
    throw error(404); // Couldn't resolve the post
  }

  return {
    component: guide.default,
    metadata: guide.metadata,
  };
};
