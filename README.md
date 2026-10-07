# mylife

MY LIFESTYLE 웹사이트입니다. My Homes, 부산 외곽 펜션의 평면도·3D, BAVARIA C46 요트 소개로 구성되어 있습니다.

## 실행

빌드나 패키지 설치 없이 정적 웹서버로 실행할 수 있습니다.

```sh
python -m http.server 8000 --directory dist
```

브라우저에서 http://localhost:8000 을 열면 됩니다. 파일을 직접 여는 대신 웹서버를 사용해야 3D 모듈이 정상적으로 로드됩니다.

## 페이지

- `dist/index.html`: 원하는 집 3곳
- `dist/residence.html`: 전체 부지, B1, 1층, 2층 평면도와 Three.js 3D
- `dist/yacht.html`: BAVARIA C46 소개, 제원과 도면

평면도를 확대해 끌어 이동하거나 공간을 선택해 설비와 치수를 확인할 수 있습니다. 마당 정문은 수영장과 캠핑장 사이의 2m 통로에 연결됩니다. 지하주차장은 44대, 침실은 1층 2개·2층 3개이며 모두 남향 창을 갖춥니다.

실제 규격을 참고한 개념 설계입니다. 맞춤 건물·수영장·온천의 치수는 설계값이며 실제 시공용 도면이 아닙니다.

## 자료

이미지 출처는 `dist/assets/sources.txt`, Three.js 라이선스는 `dist/vendor/LICENSE-three.txt`에 있습니다. 제조사 치수 참고 링크는 공간 설계 페이지에 포함되어 있습니다.
