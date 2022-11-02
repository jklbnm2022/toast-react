# react-toast editor 예시 레포지토리

- 최초작성일: 2022.11.01.

## 개발환경

- macos
- vscode

## 사용된 라이브러리

- react v17 : 16도 안되고 18도 안됩니다. 오직 17만 가능합니다.
- react-dom v17 : react 버전에 따라갔습니다. 아직까지는 문제 없습니다.
- react-router-dom v5: v6 가 나오기는 했지만, 다들 익숙할 v5 로 작성했습니다.
- 기타: package.json 확인 부탁드립니다.

## 구성

- editor
- viewer
- 정보: sessionStorage 에 저장합니다. 그래서 에디터에서 쓴 내용을 외부와의 통신 없이 바로 뷰어에서 확인할 수 없습니다.

## 구현

### 에디터 및 뷰어

- 작성 후 저장 (html 형식)
- 한글 적용 (i18n)
- 작성내용 확인
  - sessionStorage 활용

### 외부 이미지 저장

- 이미지는 s3 에 저장하는 백엔드로 보냄.
  - s3에서 이미지 링크를 받아 대체하는 내용을 추가 할 예정입니다.
  - 타 오리진과의 통신을 위해 proxy 추가 (http-proxy-middleware)
- 백엔드 서버에서는
  - 별도의 ec2 nodejs 서버로 image 전송 후
  - sharp 라이브러리를 통해 webp 으로 변환
  - 해당 image를 s3에 저장하고
  - image url 값을 반환
  - 함으로써 문제를 해결하였습니다.

### 배포

- 배포를 위해 build 를 하기 위해서는 env-cmd 세팅이 필요합니다.
- env-cmd 와 GENERATE_SOURCEMAP=false 를 같은 줄에서 세팅하려다 에러가 났습니다.
  - .env 에

```bash
# 실패: GENERATE_SOURCEMAP=false 설정이 적용되지 않은채 build 진행
GENERATE_SOURCEMAP=false && env-cmd -f .env.production react-scripts build

# 성공: 사용할 .env 에 GENERATE_SOURCEMAP=false 입력
env-cmd -f .env.production react-scripts build

```
