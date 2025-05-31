import { c as createComponent, r as renderTemplate } from '../chunks/astro/server_vTs-PX_-.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/home/projects/withastro-astro-j861w8eh/src/pages/about/index.astro", void 0);

const $$file = "/home/projects/withastro-astro-j861w8eh/src/pages/about/index.astro";
const $$url = "/portfolio-site-photo/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
