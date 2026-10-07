// Coordinates in metres. Parcels meet at x=38; there is no intervening alley.
export const parcels=[{id:'home',name:'주택 부지',x:-2,z:-2,w:40,d:44},{id:'sports',name:'운동시설 부지',x:38,z:-2,w:70,d:75}];
export const estateOutline=[[-2,-2],[108,-2],[108,73],[38,73],[38,42],[-2,42]];
export const ramp={x:-8,z:-2,w:6,d:34.8,landing:{x:-8,z:32.8,w:12,d:6}};
export const gardenPath={x:16,z:23.8,w:2,d:18.2};
export const gates=[
 {id:'home-gate',name:'주택 대문',x:-.75,z:-2,axis:'x',width:2.4,vehicle:false},
 {id:'garden-gate',name:'마당 정문',x:16,z:42,axis:'x',width:2,vehicle:false},
 {id:'link-gate',name:'두 부지 연결문',x:38,z:32,axis:'z',width:1.5,vehicle:false},
 {id:'sports-walk',name:'운동시설 사람 출입구',x:102,z:73,axis:'x',width:1.5,vehicle:false},
 {id:'sports-car',name:'운동시설 차량 출입구',x:79,z:73,axis:'x',width:6,vehicle:true},
 {id:'garage-gate',name:'담장 밖 지하주차장 진출입',x:-8,z:-2,axis:'x',width:6,vehicle:true}
];
export const fenceSegments=[
 {x:-2,z:-2,axis:'x',length:40},{x:-2,z:-2,axis:'z',length:44},{x:-2,z:42,axis:'x',length:40},
 {x:38,z:-2,axis:'z',length:75},{x:38,z:-2,axis:'x',length:70},{x:108,z:-2,axis:'z',length:75},{x:38,z:73,axis:'x',length:70}
];
export function fencePieces(){return fenceSegments.flatMap(s=>{const start=s.axis==='x'?s.x:s.z,end=start+s.length;const cuts=gates.filter(g=>g.axis===s.axis&&Math.abs((s.axis==='x'?g.z:g.x)-(s.axis==='x'?s.z:s.x))<.001).sort((a,b)=>(s.axis==='x'?a.x:a.z)-(s.axis==='x'?b.x:b.z));let at=start,out=[];for(const g of cuts){const t=g.axis==='x'?g.x:g.z;if(t>at)out.push({...s,start:at,end:Math.min(t,end)});at=Math.max(at,t+g.width)}if(at<end)out.push({...s,start:at,end});return out.filter(p=>p.end>p.start)})}
const outsideRows=[{x:39.5,z:25.5,count:14},{x:85.5,z:20,count:8},{x:39.5,z:66,count:14}];
export const outdoorStalls=outsideRows.flatMap((row,j)=>Array.from({length:row.count},(_,i)=>({number:outsideRows.slice(0,j).reduce((n,r)=>n+r.count,0)+i+1,x:row.x+i*2.7,z:row.z,w:2.7,d:5.5})));
export const outdoorAisles=[{x:39.5,z:31,w:38,d:6},{x:85.5,z:25.5,w:21.6,d:6},{x:77.5,z:25.5,w:8,d:47.5},{x:39.5,z:60,w:38,d:6}];
// 44 bays: four 11-bay rows. Only the basement footprint needed by this layout.
export const garageOutline=[[-5,-2],[38,-2],[38,39],[-5,39]];
export const garageAisles=[{x:-5,z:-2,w:6,d:40.8},{x:1,z:3.5,w:29.7,d:6},{x:1,z:22.5,w:29.7,d:6}];
export const undergroundStalls=Array.from({length:44},(_,i)=>({number:i+1,x:1+i%11*2.7,z:[-2,9.5,17,28.5][Math.floor(i/11)],w:2.7,d:5.5,ev:i<8}));
