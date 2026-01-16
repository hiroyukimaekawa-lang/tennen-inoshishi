// ====================================
// IntersectionObserver for Fade-in Animation
// ====================================

document.addEventListener('DOMContentLoaded', function() {
    // IntersectionObserverのオプション設定
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // 要素が10%見えたら発火
    };

    // フェードインアニメーション用のObserver
    const fadeInObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // 一度表示されたら監視を解除（パフォーマンス向上）
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // すべての.fade-in要素を監視対象に追加
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(element => {
        fadeInObserver.observe(element);
    });

    // ====================================
    // スムーススクロール（必要に応じて）
    // ====================================
    // アンカーリンクがある場合のスムーススクロール
    // 今回は1ページ完結なので不要だが、将来の拡張用にコメントアウトで残す
    /*
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    */

    // ====================================
    // スクロールインジケーターのクリックイベント
    // ====================================
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const conceptSection = document.getElementById('concept');
            if (conceptSection) {
                conceptSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});
