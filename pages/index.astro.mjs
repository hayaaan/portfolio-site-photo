import { c as createComponent, m as maybeRenderHead, a as renderScript, r as renderTemplate, b as createAstro, d as addAttribute, e as renderHead, f as renderSlot, g as renderComponent } from '../chunks/astro/server_vTs-PX_-.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                 */
import GLightbox from 'glightbox';
export { renderers } from '../renderers.mjs';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> <div class="logo"> <div class="logo-text">HAYAKARI YOSUKE</div> <div class="logo-badge">PHOTO</div> </div> <nav> <div class="menu-trigger"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="#E3E3E3"></path> </svg> </div> <div class="menu-modal" id="menuModal"> <div class="backdrop" id="backdrop"></div> <div class="menu-inner" id="menuInner"> <div class="modal-close" id="modalClose"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="#E3E3E3"></path> </svg> </div> <ul class="list-unstyled"> <li><a href="#">HOME</a></li> <li><a href="#">LANDSCAPE</a></li> <li><a href="#">ABOUT</a></li> <li><a href="#">CONTACT</a></li> </ul> </div> </div> </nav> </header> ${renderScript($$result, "/home/projects/withastro-astro-j861w8eh/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/projects/withastro-astro-j861w8eh/src/components/Header.astro", void 0);

const lightbox = GLightbox({
  touchNavigation: true,
  onOpen: () => {
    // ライトボックス表示後にオーバーレイへクリックイベント追加
    setTimeout(() => {
      const overlay = document.querySelector('.gcontainer');
      if (overlay) {
        overlay.addEventListener('click', (e) => {
          const target = e.target;
          if (target.closest('.gslide-image img')) {
            return;
          }
          lightbox.close();
        });
      }
    }, 500); // DOM描画完了待ちのために少し遅延
  }
});

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro Basics</title>${renderHead()}</head> <body> <div class="wrapper"> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "/home/projects/withastro-astro-j861w8eh/src/layouts/Layout.astro", void 0);

const $$Main = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main> ${renderSlot($$result, $$slots["default"])} </main>`;
}, "/home/projects/withastro-astro-j861w8eh/src/components/Main.astro", void 0);

const $$Mainvisual = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1 class="title"> <div class="title-1">HAYAKARI YOSUKE</div> <div class="title-2">PORTFOLIO</div> <div class="logo-badge">PHOTO</div> </h1>`;
}, "/home/projects/withastro-astro-j861w8eh/src/components/Mainvisual.astro", void 0);

const $$MaincontentsLandscape = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="contents"> <div class="section-header"> <div class="section-title">LANDSCAPE</div> <a href="#" class="more"> <span style="align-self: flex-start">more</span><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.40001 8.5L5.33334 5.43333L6.26668 4.5L10.2667 8.5L6.26668 12.5L5.33334 11.5667L8.40001 8.5Z" fill="#E3E3E3"></path> </svg> </a> </div> <div class="section-body"> <ul class="img-list list-unstyled"> <li> <a href="/public/assets/images/200521.jpg" class="glightbox" data-gallery="gallery1"> <img src="/public/assets/images/200521.jpg" alt="image"> </a> </li> <li> <a href="/public/assets/images/200521.jpg" class="glightbox" data-gallery="gallery1"> <img src="/public/assets/images/200521.jpg" alt="image"> </a> </li> <li> <a href="/public/assets/images/200521.jpg" class="glightbox" data-gallery="gallery1"> <img src="/public/assets/images/200521.jpg" alt="image"> </a> </li> <li> <a href="/public/assets/images/200521.jpg" class="glightbox1" data-gallery="gallery1"> <img src="/public/assets/images/200521.jpg" alt="image"> </a> </li> </ul> </div> </section>`;
}, "/home/projects/withastro-astro-j861w8eh/src/components/Maincontents-landscape.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer> <ul class="breadcrumbs list-unstyled"> <li><a href="#">HOME</a></li> <li><a href="#">LANDSCAPE</a></li> <li><a href="#">ABOUT</a></li> </ul> <nav> <ul class="list-unstyled"> <li><a href="#">HOME</a></li> <li><a href="#">LANDSCAPE</a></li> <li><a href="#">ABOUT</a></li> </ul> </nav> <div class="logo-block"> <div class="logo"> <div class="logo-text">HAYAKARI YOSUKE</div> <div class="logo-badge">PHOTO</div> </div> </div> <div class="copyright-block"> <div class="copyright">Copyright© 2025 Yosuke Hayakari</div> </div> </footer>`;
}, "/home/projects/withastro-astro-j861w8eh/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Mainvisual", $$Mainvisual, {})} ${renderComponent($$result3, "Maincontents", $$MaincontentsLandscape, {})} ` })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/projects/withastro-astro-j861w8eh/src/pages/index.astro", void 0);

const $$file = "/home/projects/withastro-astro-j861w8eh/src/pages/index.astro";
const $$url = "/portfolio-site-photo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
