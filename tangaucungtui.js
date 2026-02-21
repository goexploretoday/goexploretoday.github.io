(function() {
    // 1. SCHEMA SEO TỔNG HỢP (Nhạc, Công Nghệ, Đồ Xài, MMO, Affiliate)
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://tangaucungtui.github.io/#website",
          "url": "https://tangaucungtui.github.io/",
          "name": "Tán Gẫu Cùng Tui",
          "description": "Hub chia sẻ Nhạc Instrumental, Đời sống công nghệ, Góc đồ tui xài (Affiliate) và Kiếm tiền MMO.",
          "inLanguage": "vi-VN"
        },
        {
          "@type": "ItemList",
          "name": "Danh Mục Khám Phá",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Nhạc Instrumental", "url": "https://tangaucungtui.github.io/nhac-instrumental.html" },
            { "@type": "ListItem", "position": 2, "name": "Đời Sống Công Nghệ", "url": "https://tangaucungtui.github.io/doi-song-cong-nghe.html" },
            { "@type": "ListItem", "position": 3, "name": "Góc Đồ Tui Xài (Affiliate)", "url": "https://tangaucungtui.github.io/goc-do-tui-xai.html" },
            { "@type": "ListItem", "position": 4, "name": "Kiếm Tiền MMO", "url": "https://tangaucungtui.github.io/kiem-tien-mmo.html" }
          ]
        }
      ]
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    // 2. NÚT ĐIỀU HƯỚNG BAY (Floating Button) - Tự động hiện trên mọi trang con
    window.addEventListener('load', function() {
        const btn = document.createElement("a");
        btn.innerHTML = "💰 Kiếm Tiền & Đồ Xịn";
        btn.href = "kiem-tien-mmo.html";
        btn.style = "position:fixed; bottom:20px; right:20px; background:linear-gradient(135deg, #e84118, #c23616); color:#fff; padding:12px 22px; border-radius:30px; text-decoration:none; z-index:9999; box-shadow: 0 4px 15px rgba(232, 65, 24, 0.4); font-weight:bold; font-family:sans-serif; transition: 0.3s; border: 2px solid #fff;";
        
        // Hiệu ứng nhịp tim (Pulse) thu hút chú ý vào Affiliate/MMO
        const style = document.createElement("style");
        style.innerText = `@keyframes pulse { 0% {transform: scale(1);} 50% {transform: scale(1.08);} 100% {transform: scale(1);} }`;
        document.head.appendChild(style);
        btn.style.animation = "pulse 2s infinite";
        
        document.body.appendChild(btn);
    });
})();
