// ボタン要素を取得
const btn = document.getElementById('btn');

// ボタンがクリックされたときに実行する処理を定義
btn.addEventListener('click', () => {
  const text = document.getElementById('text');
  text.textContent = 'ボタンをクリックしました';
});
