
function* loopRange(from, to) {
    for (let i = from; i <= to; i++) {
    yield i;
    }
    return to + 1;  //for sẽ ko chạy return <true> --> ko in ra 11
    }
    const range = loopRange(0, 10);
    for (const i of range) {
    console.log(i);
    }
    // Log from 0 to 10