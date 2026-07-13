const zodiac = [
  {name:'牡羊座',symbol:'♈',gem:'ルビー',color:'#ff4b55',image:'butler-01.png',title:'勇気と始まり',need:'一歩踏み出す勇気がほしい',messages:['完璧な準備より、今日の小さな一歩を選んで。道は歩き始めた人の前に現れます。','怖さを感じるのは、本気で進もうとしている証。あなたの中の炎はもう目覚めています。','誰かの許可を待たなくて大丈夫。あなたが決めた瞬間、新しい物語は始まります。']},
  {name:'牡牛座',symbol:'♉',gem:'エメラルド',color:'#42dc8c',image:'butler-02.png',title:'安心と豊かさ',need:'心を落ち着かせたい',messages:['急がなくても大丈夫。深く根を張る時間も、成長の大切な一部です。','心地よいものを一つ選び、自分に与えてください。自分を満たすことは、わがままではありません。','あなたがすでに持っている豊かさを数えてみて。安心はそこから静かに広がります。']},
  {name:'双子座',symbol:'♊',gem:'シトリン',color:'#ffd44f',image:'butler-03.png',title:'言葉と好奇心',need:'気持ちを言葉にしたい',messages:['心の中の言葉を書き出してみて。答えは、言葉にしたとき輪郭を現します。','新しい会話が風向きを変えます。信頼できる人に、ほんの少し本音を話してみて。','一つに決められない自分も大切な自分。両方の声を、まずは聴いてあげてください。']},
  {name:'蟹座',symbol:'♋',gem:'ムーンストーン',color:'#dff5ff',image:'butler-04.png',title:'癒やしと居場所',need:'優しさと安心がほしい',messages:['あなたが誰かに向けてきた優しさを、今日は自分自身へ向けてください。','休むことは立ち止まることではありません。月の光の中で、心をゆっくり満たして。','守れなかったことより、守ろうとした心を思い出して。あなたの優しさは消えていません。']},
  {name:'獅子座',symbol:'♌',gem:'サンストーン',color:'#ff9c42',image:'butler-05.png',title:'自信と輝き',need:'自分を信じたい',messages:['できたことを一つ、声に出して褒めてください。自信は小さな承認から育ちます。','あなたの光は、誰かと比べるためのものではありません。あなたらしく輝けばいいのです。','遠慮して隠してきた魅力を、今日は少しだけ表に出して。世界はその光を待っています。']},
  {name:'乙女座',symbol:'♍',gem:'サファイア',color:'#5f9cff',image:'butler-06.png',title:'整えと知恵',need:'混乱を整えたい',messages:['全部を一度に解決しなくて大丈夫。今できる一つだけを、丁寧に選びましょう。','あなたの細やかさは才能です。ただし、自分への採点は少し優しくして。','不要なものを一つ手放すと、本当に大切なもののための余白が生まれます。']},
  {name:'天秤座',symbol:'♎',gem:'オパール',color:'#f2a8ff',image:'butler-07.png',title:'調和と選択',need:'人間関係や選択に迷っている',messages:['相手を大切にするように、自分の本音も同じ重さで天秤に載せてください。','正解ではなく、心が穏やかになる選択を。あなたの感覚は答えを知っています。','すべての人に好かれなくても大丈夫。誠実な関係は、本当のあなたから始まります。']},
  {name:'蠍座',symbol:'♏',gem:'ガーネット',color:'#c7285d',image:'butler-08.png',title:'変容と深い力',need:'過去を越えて変わりたい',messages:['終わりは喪失だけではなく、次の自分が生まれるための扉です。','あなたは何度でも生まれ変われます。手放す覚悟が、新しい力を呼び覚まします。','隠してきた感情にも意味があります。否定せず、静かに名前をつけてあげて。']},
  {name:'射手座',symbol:'♐',gem:'ターコイズ',color:'#42e1dd',image:'butler-09.png',title:'希望と冒険',need:'未来への希望がほしい',messages:['遠くを見てください。今いる場所だけが、あなたの世界のすべてではありません。','好奇心が動く方向へ、小さな矢を放って。未来はその先で待っています。','まだ知らない可能性を、ないことにしないで。あなたの旅はこれから広がります。']},
  {name:'山羊座',symbol:'♑',gem:'オニキス',color:'#9da6c6',image:'butler-10.png',title:'継続と達成',need:'目標をやり遂げたい',messages:['ゆっくりでも、続けた一歩は消えません。今日の積み重ねを信じてください。','高い目標ほど、小さな区切りが必要です。まず次の一段だけを見つめて。','責任を背負いすぎていませんか。助けを借りることも、頂へ進む力です。']},
  {name:'水瓶座',symbol:'♒',gem:'アクアマリン',color:'#5ad7ff',image:'butler-11.png',title:'自由とひらめき',need:'新しい発想や自由がほしい',messages:['「普通」から少し離れてみて。あなたにしか見えない道が、そこにあります。','違っていることは、孤独ではなく贈り物。未来は個性的な発想から生まれます。','古い方法が苦しいなら、新しい器を作っていい。あなたには変える力があります。']},
  {name:'魚座',symbol:'♓',gem:'アメジスト',color:'#ad76ff',image:'butler-12.png',title:'夢と直感',need:'心の声を聴きたい',messages:['感じすぎる自分を責めないで。その繊細さは、見えない光を感じる力です。','答えを急がず、夢や直感が語りかける余白を作ってください。','現実と夢の間に橋を架けるのは、小さな行動。今日できる一つを選んで。']}
];

const $ = q => document.querySelector(q);
const doors = $('#doors'), dialog = $('#challengeDialog');
let history = JSON.parse(localStorage.getItem('zodiacPowerHistory') || '[]');
let activeSign = null;
let activeSignIndex = -1;
const pictureBooks = {
  牡羊座: 'https://amzn.asia/d/0b8Mme99'
};
const actionSets = [
  ['5分だけ始めてみる','今日やることを一つ決める','誰かに宣言して一歩踏み出す'],
  ['温かい飲み物で休む','安心できる場所を整える','今ある幸せを三つ数える'],
  ['気持ちを紙に書く','信頼できる人に話す','新しい情報を一つ調べる'],
  ['自分に優しい言葉をかける','今日はしっかり休む','大切な人に気持ちを伝える'],
  ['できたことを一つ褒める','好きな服や色を選ぶ','自分の意見を一度伝える'],
  ['机の上を一か所整える','課題を小さく三つに分ける','不要な予定を一つ手放す'],
  ['自分の本音を確かめる','相手の立場を一度想像する','穏やかに境界線を伝える'],
  ['手放したい感情を書く','変えたいことを一つ決める','過去の自分を許す'],
  ['行ったことのない場所を調べる','気になることを試す','未来の楽しみを一つ決める'],
  ['今日の小さな目標を決める','10分だけ集中する','助けてほしいことを伝える'],
  ['いつもと違う方法を試す','自由なアイデアを三つ書く','自分らしい選択をする'],
  ['静かに深呼吸を三回する','夢や直感をノートに書く','心が喜ぶことを一つする']
];

function render() {
  doors.innerHTML = '';
  zodiac.forEach((z,i) => {
    const b=document.createElement('button');
    b.className='door current'; b.style.setProperty('--gem',z.color);
    b.innerHTML=`<img class="door-image" src="assets/${z.image}?v=20260713" alt="${z.name}の守り人" loading="lazy"><span class="door-symbol">${z.symbol}</span><span class="door-name">${z.need}</span><span class="door-gem">${z.name}の力へ</span>`;
    b.onclick=()=>openSign(i); doors.appendChild(b);
  });
  const latest=history[0];
  $('#progressText').textContent='星座の力とともに';
  $('#progressBar').style.width=latest?'100%':'0';
  $('#discMessage').textContent=latest ? `${latest.name}・${latest.gem}の力が心に宿っています` : 'まだ星の力を受け取っていません';
  const heart=$('#heartCrystal'); heart.style.setProperty('--heart-color',latest?.color||'#bca7e8'); heart.classList.toggle('filled',!!latest);
  const recentPowers = $('#recentPowers');
  recentPowers.innerHTML = '';
  history.slice(0,5).forEach((h) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'recent-power';
    button.style.setProperty('--power', h.color);
    button.title = `${h.name}・${h.gem}の診断メッセージを見る`;
    button.setAttribute('aria-label', `${h.name}の診断メッセージを見る`);
    button.textContent = h.symbol;
    button.onclick = () => {
      $('#discMessage').textContent = `${h.name}の診断メッセージ：${h.message}`;
      recentPowers.querySelectorAll('.recent-power').forEach(item => item.classList.remove('selected'));
      button.classList.add('selected');
    };
    recentPowers.appendChild(button);
  });
  $('#recentPowers').innerHTML=history.slice(0,5).map(h=>`<span style="--power:${h.color}" title="${h.name}・${h.gem}">${h.symbol}</span>`).join('');
}

function renderRecentPowerButtons(){
  const recentPowers = $('#recentPowers');
  recentPowers.innerHTML = '';
  history.slice(0,5).forEach((h) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'recent-power';
    button.style.setProperty('--power', h.color);
    button.title = `${h.name}・${h.gem}の診断メッセージを見る`;
    button.setAttribute('aria-label', `${h.name}の診断メッセージを見る`);
    button.textContent = h.symbol;
    button.onclick = () => {
      $('#discMessage').textContent = `${h.name}の診断メッセージ：${h.message}`;
      recentPowers.querySelectorAll('.recent-power').forEach(item => item.classList.remove('selected'));
      button.classList.add('selected');
    };
    recentPowers.appendChild(button);
  });
}

function renderStable(){
  doors.innerHTML = '';
  zodiac.forEach((z, i) => {
    const b = document.createElement('button');
    b.className = 'door current';
    b.style.setProperty('--gem', z.color);
    b.innerHTML = `<img class="door-image" src="assets/${z.image}?v=20260713" alt="${z.name}の守り人" loading="lazy"><span class="door-symbol">${z.symbol}</span><span class="door-name">${z.need}</span><span class="door-gem">${z.name}の力へ</span>`;
    b.onclick = () => openSign(i);
    doors.appendChild(b);
  });
  const latest = history[0];
  $('#progressText').textContent = '星座の力とともに';
  $('#progressBar').style.width = latest ? '100%' : '0';
  $('#discMessage').textContent = latest ? `${latest.name}・${latest.gem}の力が心に宿っています` : 'まだ星の力を受け取っていません';
  const heart = $('#heartCrystal');
  heart.style.setProperty('--heart-color', latest?.color || '#bca7e8');
  heart.classList.toggle('filled', !!latest);
  renderRecentPowerButtons();
}

function openSign(i){
  activeSignIndex = i;
  activeSign=zodiac[i]; const z=activeSign;
  dialog.style.setProperty('--active-gem',z.color);
  $('#challengeIcon').textContent=z.symbol;
  $('#challengeKicker').textContent=`${z.gem.toUpperCase()}・${z.title}`;
  $('#challengeTitle').textContent=`${z.name}「${z.title}」`;
  $('#guardianImage').src=`assets/${z.image}?v=20260713`; $('#guardianImage').alt=`${z.name}の守り人`;
  $('#guardianName').textContent=`${z.name}の星の守り人`;
  $('#challengeStory').textContent=`「${z.need}」と感じるあなたへ。今できそうな行動を一つ選び、星の的へ矢を放ってください。`;
  $('#feedback').textContent='';
  $('#challengeBody').innerHTML=`<strong>今のあなたが選ぶ行動は？</strong>`;
  actionSets[i].forEach((action,actionIndex)=>{
    const b=document.createElement('button'); b.className='answer'; b.textContent=action;
    b.onclick=()=>shootAction(b,action,actionIndex); $('#challengeBody').appendChild(b);
  });
  dialog.showModal(); const gate=$('#gateOpening'); gate.classList.add('show'); setTimeout(()=>gate.classList.add('open'),100); setTimeout(()=>gate.classList.remove('show','open'),1500);
}

function shootAction(target,action,actionIndex){
  document.querySelectorAll('.action-targets .answer').forEach(b=>b.disabled=true);
  target.classList.add('aimed');
  const arrow=$('#flyingArrow'), bow=document.querySelector('.real-bow');
  const s=bow.getBoundingClientRect(),t=target.getBoundingClientRect();
  const x=s.left+s.width*.55,y=s.top+s.height*.5,tx=t.left+t.width/2,ty=t.top+t.height/2;
  const dx=tx-x,dy=ty-y,d=Math.hypot(dx,dy),a=Math.atan2(dy,dx)*180/Math.PI;
  arrow.style.left=`${x}px`;arrow.style.top=`${y}px`;arrow.style.opacity='1';arrow.style.transform=`rotate(${a}deg)`;
  arrow.animate([{transform:`rotate(${a}deg) translateX(0)`},{transform:`rotate(${a}deg) translateX(${Math.max(0,d-58)}px)`}],{duration:650,easing:'cubic-bezier(.2,.6,.5,1)',fill:'forwards'}).finished.then(()=>{
    arrow.style.opacity='0';arrow.getAnimations().forEach(v=>v.cancel());target.classList.add('hit');
    $('#feedback').textContent=`「${action}」を選びました。${activeSign.gem}の力が目覚めます。`;
    setTimeout(()=>receivePower(action,actionIndex),850);
  });
}

function receivePower(action,actionIndex){
  const z=zodiac[activeSignIndex] || activeSign, message=z.messages[actionIndex];
  history.unshift({index:activeSignIndex,name:z.name,symbol:z.symbol,gem:z.gem,color:z.color,message,action,date:Date.now()}); history=history.slice(0,20);
  localStorage.setItem('zodiacPowerHistory',JSON.stringify(history)); dialog.close(); renderStable();
  const reward=$('#reward'); reward.style.setProperty('--reward-glow',z.color);
  $('#rewardLead').textContent=`${z.gem}「${z.title.split('と')[0]}」を受け取った`;
  $('#rewardName').textContent=`${z.gem} — ${z.name}`; $('#rewardFrom').textContent=`あなたの中に${z.gem}の力が入りました。${z.name}の守り人から、今のあなたへ`;
  $('#rewardMessage').textContent=message;
  const rewardBook = $('#rewardBookRecommendation');
  if (z === zodiac[0]) {
    rewardBook.innerHTML = `<p class="reward-book-kicker">もっと牡羊座の力を知りたい方へ</p><a href="${pictureBooks.牡羊座}" target="_blank" rel="noopener noreferrer">牡羊座の絵本を見る ↗</a>`;
    rewardBook.hidden = false;
  } else {
    rewardBook.hidden = true;
    rewardBook.innerHTML = '';
  }
  reward.classList.add('show');
  setTimeout(()=>reward.classList.add('heart-filled'),900);
  // 結果画面は自動で閉じず、ユーザーが「終了する」を押して閉じる。
}

$('#closeDialog').onclick=()=>dialog.close();
$('#rewardClose').onclick=()=>{
  $('#reward').classList.remove('show','heart-filled');
  const activeIndex = activeSignIndex;
  if (activeIndex >= 0) openSign(activeIndex);
  else renderStable();
};
$('#backToZodiacButton').onclick=()=>{
  dialog.close();
  document.querySelector('.doors-panel').scrollIntoView({behavior:'smooth'});
};
$('#nextDoorButton').onclick=()=>document.querySelector('.doors-panel').scrollIntoView({behavior:'smooth'});
$('#resetButton').onclick=()=>{if(confirm('これまで受け取った星の力の履歴をリセットしますか？')){history=[];localStorage.removeItem('zodiacPowerHistory');renderStable();}};
$('#endingClose').onclick=()=>$('#ending').classList.remove('show');
renderStable();