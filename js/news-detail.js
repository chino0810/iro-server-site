// URLからニュースIDを取得
const urlParams = new URLSearchParams(window.location.search);
const newsId = urlParams.get('id');

if (newsId) {
    // news.jsonからデータを読み込み
    fetch('news.json')
        .then(response => response.json())
        .then(newsData => {
            // IDに一致するニュースを検索
            const newsItem = newsData.find(item => item.id === newsId);

            if (newsItem) {
                // ニュース情報を表示
                document.getElementById('news-title').textContent = newsItem.title;
                document.getElementById('news-date').textContent = newsItem.date;
                document.getElementById('news-image').src = newsItem.image;
                document.getElementById('news-image').alt = newsItem.title;
                document.getElementById('news-content').textContent = newsItem.content;

                // ページタイトルも更新
                document.title = `${newsItem.title} | Core PvP`;
            } else {
                // ニュースが見つからない場合
                document.getElementById('news-title').textContent = '記事が見つかりません';
                document.getElementById('news-content').textContent = '指定されたニュースは存在しないか、削除された可能性があります。';
            }
        })
        .catch(error => {
            console.error('ニュースの読み込みに失敗しました:', error);
            document.getElementById('news-title').textContent = '読み込みエラー';
            document.getElementById('news-content').textContent = 'ニュースの読み込みに失敗しました。';
        });
} else {
    // IDが指定されていない場合
    document.getElementById('news-title').textContent = 'ニュースIDが指定されていません';
    document.getElementById('news-content').textContent = 'トップページからニュースを選択してください。';
}