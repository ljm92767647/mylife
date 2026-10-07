const spaces=[
 ['01 / 선수 주인 객실','선수 쪽 중앙 침대와 양쪽 수납 공간. 공용 살롱에서 앞쪽으로 이동하는 독립 객실입니다.'],
 ['02 / 살롱 · 다이닝','중앙의 식탁과 이를 감싸는 소파. 갤리와 마주하며, 선수·선미 객실 사이의 공용 생활 공간입니다.'],
 ['03 / 갤리','도면 상단 중앙의 조리 공간. 싱크와 조리대가 살롱에 바로 연결되어 선내 식사 동선을 짧게 만듭니다.'],
 ['04 / 선미 객실 · 도면 상단','중앙 계단 뒤쪽의 객실. 침대와 측면 수납을 갖추며 살롱을 통해 들어갑니다.'],
 ['05 / 선미 객실 · 도면 하단','도면 하단 선미의 두 침상과 수납 공간. 선수 객실과 거리를 두어 함께 탑승한 손님의 공간을 나눕니다.'],
 ['06 / 선수 욕실 · 샤워 공간','선수 객실 입구 쪽의 욕실과 반대편 별도 샤워 공간. 도면의 선미 쪽에도 화장실 설비가 표시되어 있습니다.'],
 ['07 / 중앙 출입 계단','갑판과 실내를 연결하는 계단. 이곳을 중심으로 앞쪽 살롱·선수 객실, 뒤쪽 선미 객실로 이동합니다.']
];
function selectSpace(i){document.getElementById('yacht-space').innerHTML=`<h3>${spaces[i][0]}</h3><p>${spaces[i][1]}</p>`;document.querySelectorAll('.hotspot').forEach(b=>{const on=Number(b.dataset.space)===i;b.classList.toggle('active',on);b.setAttribute('aria-pressed',on)})}
document.querySelectorAll('.hotspot').forEach(b=>b.onclick=()=>selectSpace(Number(b.dataset.space)));selectSpace(0);
const dialog=document.getElementById('plan-dialog');document.getElementById('enlarge-plan').onclick=()=>dialog.showModal();document.getElementById('close-dialog').onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
