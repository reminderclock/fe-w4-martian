class MyPromise {
    constructor(initialStr) {
        this.cbList = [];
        // cb를 순서대로 실행 -> 비동기로 실행
        setTimeout(()=> {
            return this.cbList.reduce((acc, cb)=> cb(acc), initialStr);
        }, 0)
    }
    // 자기자신을 반환
    then(cb) {
        // 콜백을 추가해줘야한다.
        this.cbList.push(cb);
        return this;
    }
}
console.log('start');
new MyPromise('hello')
.then((v)=> v+'world')
.then((v) => v+' and crong')
.then((v)=>console.log(v));
console.log('end');

