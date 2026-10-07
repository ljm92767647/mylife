import {stalls} from './rooms.js';
// All bounding sizes and positions are metres, shared without rescaling by SVG and 3D.
export function furnishings(r){
 const a=[];
 const F=(name,x,z,w,d,h=.8,color='#a89376',kind='box',extra={})=>{const f={name,x:r.x+x,z:r.z+z,w,d,h,color,kind,...extra};a.push(f);return f};
 const chair=(x,z,face='n',name='의자')=>F(name,x,z,.45,.47,.77,'#728a83','chair',{face});
 const sofa=(x,z,face='s',name='4인 소파')=>F(name,x,z,face==='w'||face==='e'?.95:3,face==='w'||face==='e'?3:.95,.85,'#99aaa0','sofa',{face});
 const TV=(x,z,w=1.67,face='s',name='TV')=>F(name,x,z,face==='e'||face==='w'?.101:w,face==='e'||face==='w'?w:.101,1.9,'#213b47','screen',{face,screenHeight:w*9/16});
 const shelf=(x,z,w=1.2,d=.35)=>F('수납 선반',x,z,w,d,2,'#ad987b','shelf');
 const toilet=(x,z)=>{F('변기',x,z,.4,.7,.75,'#f0f3ee','toilet');F('세면대',x+.85,z,.6,.5,.85,'#e0e9e2','sink')};
 const table=(x,z,w,d,name='8인 식탁')=>{F(name,x,z,w,d,.74,'#b99a73','table');for(let i=0;i<3;i++){chair(x+.1+i*(w-.65)/2,z-.65,'s');chair(x+.1+i*(w-.65)/2,z+d+.15,'n')}chair(x-.65,z+d/2-.235,'e');chair(x+w+.2,z+d/2-.235,'w')};
 const PC=(x,z,i)=>{F('PC '+i+' · UTESPELARE 책상',x,z,1.6,.8,.75,'#af987b','table');F('PC '+i+' · 27인치 모니터',x+.49,z+.15,.615,.18,1.22,'#263e4b','screen',{screenHeight:.36,face:'s'});F('키보드',x+.55,z+.53,.45,.15,.78,'#35474b');chair(x+.575,z+1.02,'n','PC '+i+' 의자')};
 if(r.ensuite)toilet(.35,.4);
 if(r.type==='sleep'){
  const big=r.id==='guest-a'||r.id==='guest-b',small=r.id==='guest-c'||r.id==='guest-d';
  if(small){
   F('침대',1.65,2.2,1.4,2,.6,'#eee4ce','bed');F('벽붙임 옷 수납장',.05,.05,1.6,.6,2.1,'#b7a384');
   F('소형 책상',.25,4,1.1,.45,.75,'#b49d7d','table');chair(.57,3.3,'s','책상 의자');TV(.08,1.9,1.11,'e','서쪽 벽 TV');a[a.length-1].h=1.7;
  }else if(big){
   F('퀸 침대',5.75,3.9,1.6,2,.6,'#eee4ce','bed');F('벽붙임 행거',2.6,.05,1.5,.5,1.75,'#81938b','rack');F('벽붙임 옷장',4.3,.05,1.8,.6,2.1,'#b7a384');F('벽붙임 이불장',.05,6.5,.6,1.3,2,'#b6a286','shelf');
   TV(.08,3.9,1.22,'e','서쪽 벽 TV');F('손님 책상',6.35,7.2,1.2,.6,.75,'#b49d7d','table');chair(6.72,6.5,'s','책상 의자');
   for(let i=0;i<5;i++)F('바닥 침구 '+(i+1),1.25+i*.75,3.9,.75,2,.06,'#f0eadb','floorbed');
  }else{
   F('킹 침대',3.9,3.2,1.8,2,.6,'#eee4ce','bed');F('벽붙임 옷장',3.15,.05,2.4,.6,2.1,'#b7a384');F('스타일러',7.35,2.2,.6,.6,1.85,'#bac7c1');F('벽붙임 책장',.05,5.85,.6,.95,2,'#b6a286','shelf');
   F('서재 책상',5.1,6.35,1.6,.6,.75,'#b49d7d','table');chair(5.55,5.65,'s','서재 의자');TV(5.5,6.55,.615,'n','서재 컴퓨터');a[a.length-1].h=1.2;TV(.08,3.5,1.45,'e','서쪽 벽 TV');
  }
 }
 switch(r.id){
 case 'parking':
  [0,3,6,12,18,25,33,40].forEach((i,k)=>{const s=stalls[i];F('P'+s.number+' · SUV 5.06 × 1.98 m',s.x-r.x+.36,s.z-r.z+.22,1.98,5.06,1.8,['#eef0e9','#527585','#293e48'][k%3],'car')});
  for(let i=0;i<8;i++)F('EV '+(i+1)+' 충전기',stalls[i].x-r.x+1.1,-1.8-r.z,.45,.25,1.3,'#3a9b82','charger');break;
 case 'store-b':for(let i=0;i<2;i++)shelf(.3+i*2.7,.3,2.4,.6);shelf(5.3,1.5,.6,4.2);break;
 case 'music':
  F('Yamaha C3X 그랜드 피아노',.55,.6,1.49,1.86,1.01,'#21333d','piano');F('피아노 벤치',.9,2.72,.8,.35,.5,'#4a544f');
  F('Yamaha P-125a 건반',.6,4,1.326,.295,.9,'#283a42','piano');chair(1,4.6,'n','건반 의자');
  F('22인치 베이스 드럼',4.9,1.0,.559,.5,.8,'#9d6550','cylinder');F('스네어 14인치',4.45,1.85,.356,.356,.75,'#ac8c63','cylinder');F('플로어 탐 16인치',5.5,1.8,.406,.406,.8,'#976245','cylinder');F('탐 10인치',4.8,.6,.254,.254,1.1,'#997351','cylinder');F('탐 12인치',5.2,.6,.305,.305,1.05,'#ad7658','cylinder');
  F('드럼 의자',4.93,2,.35,.35,.55,'#344f56','cylinder');for(let i=0;i<3;i++)F('심벌',4.25+i*.75,.35+(i%2)*2.1,.45,.45,1.45,'#b8a260','cymbal');F('마이크',3.3,4,.18,.18,1.65,'#344d55','pole');F('바이올린 · 스탠드',.5,5.3,.25,.6,1.2,'#af7649','violin');break;
 case 'record':
  F('음악방을 향하는 녹음 작업대',.6,1,.75,2.2,.75,'#a48f78','table');TV(.72,1.3,.615,'e','녹음 컴퓨터');a[a.length-1].h=1.22;F('EDM 믹서',.85,2.2,.45,.6,.8,'#35505c','mixer');chair(1.65,1.85,'w','음악방을 향하는 작업 의자');sofa(3.4,1.1,'w','벽쪽 녹음실 소파');shelf(2.7,.15,1.5);break;
 case 'gaming':for(let i=0;i<5;i++)PC(.25+i*1.7,.2,i+1);
  for(let i=0;i<2;i++){F('GTElite 레이싱 리그 '+(i+1),.5+i*1.5,3.1,.825,1.48,.865,'#536472','racing');TV(.55+i*1.5,3.05,.72,'s','레이싱 PC '+(i+1))}sofa(5.1,3.1,'e');TV(8.7,3.4,1.67,'w','Xbox TV');F('Xbox',8.3,5.45,.151,.151,.301,'#263e34');break;
 case 'board':F('72인치 8인 원탁',2.0855,2.1,1.829,1.829,.762,'#b99a73','roundtable');for(let i=0;i<8;i++){const angle=i*Math.PI/4;const f=chair(3+1.43*Math.cos(angle)-.225,3.0145+1.43*Math.sin(angle)-.235,'n','원탁 의자 '+(i+1));f.angle=-angle-Math.PI/2} shelf(.3,.15,5.4);break;
 case 'living':TV(.08,2.1,2.235,'e','서쪽 벽 100인치 TV');F('벽쪽 미디어 콘솔',.18,1.8,.45,3,.5,'#b7a081','table');sofa(4.5,.3,'w');sofa(4.5,3.65,'w');F('커피 테이블 A',2.7,1.2,.8,1.2,.42,'#b99f7e','table');F('커피 테이블 B',2.7,4.55,.8,1.2,.42,'#b99f7e','table');F('PlayStation',.2,3.4,.1,.26,.39,'#e5ece8');for(const z of [1.3,5])F('스피커',.1,z,.32,.25,1.1,'#254047');F('휴식용 원형 티 테이블',8.4,4.75,.8,.8,.55,'#b99f7e','roundtable');chair(7.65,4.9,'e','휴식 의자');chair(9.45,4.9,'w','휴식 의자');break;
 case 'kitchen':
  F('벽면 조리대',2,.15,5.7,.6,.9,'#c2b59b','counter');F('싱크대',4,.18,.8,.5,.94,'#bdc9c1','sink');F('60 cm 쿡탑',6.5,.18,.6,.52,.95,'#31434a','mixer');F('냉장고',7.05,1.2,.9,.72,1.83,'#bac9c5');F('60 cm 오븐',7.15,2,.6,.6,.9,'#384d51');F('60 cm 식기세척기',7.15,2.65,.6,.6,.85,'#aebfba');F('아일랜드',2.8,2.15,3,1.1,.9,'#c1b293','table');table(2.7,6.2,2.35,1);break;
 case 'billiard':F('Brunswick 9 ft 포켓볼',1.6,3.2,1.64465,2.911475,.81915,'#327b70','pooltable');F('4구 당구대',6.2,3.2,1.7,3.10,.8,'#427b9c','carom');for(const x of [.7,5.7]){sofa(x,.15,'s');sofa(x,9.1,'n')}break;
 case 'laundry':F('세탁기',.2,.2,.6,.65,.85,'#e2e9e2','washer');F('건조기',1.1,.2,.6,.65,.85,'#dce5df','washer');break;
 case 'linen-1':case 'store-1':shelf(.2,.2,1.6,.5);break;
 case 'wc-1b':toilet(.3,2.4);break;case 'wc-1':case 'wc-2':case 'wc-dress':toilet(.3,.4);break;
 case 'dressing':F('벽면 락커',.08,.2,.5,2.7,1.9,'#b7a786','shelf');F('탈의 벤치',.9,3.7,2.3,.45,.45,'#a99373','table');break;
 case 'shower':for(let i=0;i<5;i++)F('샤워 부스 '+(i+1),.1+i*.975,.2,.9,1.2,2.1,'#95b6b3','shower');break;
 case 'spa-in':case 'spa-out':
  F(r.id==='spa-out'?'5인 히노끼탕':'5인 실내 온천탕',1,1.1,3.4,2.9,.85,r.id==='spa-out'?'#ba9d76':'#acc6c0','bath',{waterW:3,waterD:2.5});
  if(r.id==='spa-in'){F('물침대',5.3,.85,1.8,2,.5,'#dce5cf','bed');TV(1.1,6.29,1.45,'n','복도 쪽 벽 TV');for(let i=0;i<3;i++)F('좌식 샤워 '+(i+1),5+i*.95,3.4,.9,1.1,1.1,'#9ebcb5','seatedshower');F('배기 환풍기',7.2,.05,.3,.08,2.7,'#859d97','fan');}else{F('온천 벤치',5.4,1.2,2,.5,.45,'#c1ad8e','table')}break;
 case 'spa-service':shelf(.2,.2,2,.5);F('온천 순환 설비',.5,1.2,1,1,1.2,'#869f9c');break;
 case 'sun-n':case 'sun-s':for(let i=0;i<4;i++)F('선베드 '+(i+1),1+i*3.45,.25,.7,2,.42,'#efe2c8','sunbed',{face:r.id==='sun-n'?'s':'n'});break;
 case 'bbq':table(3.5,2,2.5,1,'Bok 규격 8인 야외 식탁');F('BBQ',10.2,.7,1.3,.65,.95,'#586762','grill');break;
 case 'lawn':F('10인 사용 목표 그늘막 A · DOD 규격',1.5,1.5,5.2,5.2,2.5,'#cbbb95','canopy');F('10인 사용 목표 그늘막 B · DOD 규격',11,1.5,5.2,5.2,2.5,'#cbbb95','canopy');F('Coleman 4–5인 텐트',1.85,2.4,4.5,3,1.85,'#c2ae81','tent');table(12.3,3.2,1.6,.8,'8인 Quechua 접이식 식탁');F('캠핑 보조 테이블',11.3,1.75,.9,.6,.7,'#b3a281','table');F('Celestron 8SE · 관측 여유 영역',14.9,5.3,1.2,1.2,1.5,'#a4b8b7','telescope',{tubeLength:.432,tubeDiameter:.232});F('캠핑 장비 수납',11.3,5.5,1,.5,.6,'#879984');break;
 case 'fire-zone':F('캠프파이어',1.6,1.6,.8,.8,.3,'#a28c68','fire');break;
 case 'tennis':for(let i=0;i<10;i++)chair(r.w-1.55,4+i*1.15,'w','코트를 향하는 관람 의자 '+(i+1));break;
 case 'futsal':case 'basket':for(let i=0;i<10;i++)chair(4+i*1.15,r.d-1.55,'n','코트를 향하는 관람 의자 '+(i+1));break;
 case 'sports-store':shelf(.2,.2,5.5,.5);F('탁구대',1.4,4,2.74,1.525,.76,'#446e87','pingpong');F('냉장고',4.8,10,.7,.7,1.8,'#b3c5be');F('배구 네트 수납',.3,10,2.5,.5,.6,'#98a99f');F('배드민턴 네트 수납',.3,11,2.5,.5,.6,'#97a79f');for(let i=0;i<4;i++)F('공',.5+i*.3,1,.22,.22,.22,'#b39a67','cylinder');break;
 case 'sports-wc':toilet(.5,.5);toilet(3.5,.5);break;
 case 'gym':
  F('복싱 링 플랫폼',.7,.7,7.8,7.8,.7,'#8aaba8','ring');for(let i=0;i<2;i++)F('샌드백 '+(i+1),10.1,1.5+i*3,.4,.4,2,'#536b75','bag');
  for(let i=0;i<2;i++){F('Rogue 랙 '+(i+1),14.3,1.5+i*6,1.2446,1.2192,2.34315,'#52666b','rack');F('Rogue 벤치 '+(i+1),14.6,2+i*6,.62865,1.4351,.4445,'#7c8c89','bench');F('2.2 m 바벨',13.82,1.8+i*6,2.2,.05,1.5,'#5b686b','barbell')}
  F('무게별 덤벨 거치대',12.3,13.6,1.022,.503,.762,'#5a6a70','dumbbells');F('동쪽 벽 전체 거울',17.91,.08,.08,15.84,3.9,'#b8d8db','mirror');break;
 }
 return a;
}
