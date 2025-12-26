// news.jsonからニュースデータを読み込み
const newsList = document.getElementById('news-list');

if (newsList) {
    fetch('news.json')
        .then(response => response.json())
        .then(newsData => {
            newsData.forEach(item => {
                const card = document.createElement('a');
                card.className = 'news-card';
                card.href = `news.html?id=${item.id}`;

                card.innerHTML = `
                    <div class="news-image">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <div class="news-info">
                        <span>${item.date}</span>
                        <h3>${item.title}</h3>
                    </div>
                `;

                newsList.appendChild(card);
            });
        })
        .catch(error => {
            console.error('ニュースの読み込みに失敗しました:', error);
        });
}