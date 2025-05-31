import 'glightbox/dist/css/glightbox.css';
import GLightbox from 'glightbox';

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
