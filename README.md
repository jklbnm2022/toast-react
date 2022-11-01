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
- 기본적인 문서작성
    - 작성 후 저장 (html 형식)
- 한글 적용 (i18n)
- 작성내용 확인

## 추가 예정
- toast editor 는 외부 이미지를 base64 로 저장합니다.
    - 그렇지만 이걸 그대로 DB에 올리면 말이 안되겠죠.
    - 이미지는 s3 에 저장하고, s3에서 이미지 링크를 받아 대체하는 내용을 추가 할 예정입니다.
        - 그 과정에서 proxy 도 추가 예정입니다.
    - 될지는 모르겠지만 image 저장 시 png 나 jpg 가 아닌 webp 형식 저장도 고려하는 중입니다.
        - 다른 프로젝트에서는
            - 별도의 ec2 nodejs 서버로 image 전송 후
            - sharp 라이브러리를 통해 webp 으로 변환
            - 해당 image를 s3에 저장하고
            - image url 값을 반환
            - 함으로써 문제를 해결하였습니다.
- 배포
    - 배포를 위해 build 를 하기 위해서는 env-cmd 세팅이 필요합니다.