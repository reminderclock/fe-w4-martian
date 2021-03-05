1. 함수형 프로그래밍 정의?
   함수형 프로그래밍(functional programming)은 자료 처리를 수학적 함수의 계산으로 취급하고 상태와 가변 데이터를 멀리하는 프로그래밍 패러다임의 하나이다.
   외부에 영향을 받지 않는 프로그래밍 기법
2. 함수형 프로그래밍의 예시코드
   increment2(a) {
   return a + 1;
   }

---

- 커링(아래 코드 커링예시)
- 커링은 인자를 여러개 받는 함수를 분리하여, 인자를 하나씩만 받는 함수의 체인으로 만드는 방법이다.
- 함수형 프로그래밍 기법 중 하나로 함수를 재사용하는데 유용하게 쓰일 수 있는 기법이다.
- 자바스크립트 내부에는 커링이 내장되어 있지 않지만 자바스크립트로도 구현이 가능하다.

---

```const getContentTemplate = content => (
  user => (
    `Hello ${user}
    ${content}`
  )
);
const contentTemplate = getContentTemplate(`For your birthday we have gifted you 100 free points!`);
const templateForMark = contentTemplate(‘Mark’);
getContentTemplate(contentTemplate)(templateForMark);
```

3. 함수형 프로그래밍의 가치 또는 의미는?
   예측가능하다, 연산시점이 중심이된다. 외부값에 영향을 받지 않아서 값이 오류를 줄여줄수 있다.
