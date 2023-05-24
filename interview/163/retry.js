// 场景编程题套路 
function retry(promiseFn, times = 3, delay = 500) {
    // 耗时   成功 / times 3 fullfilled
    return new Promise((resolve, reject) => {
        const attempt = () => {
            promiseFn()
                .then(resolve)
                .catch(err => {
                    if (times === 0) {
                        reject(err);
                    } else {
                        times--;
                        setTimeout(attempt, delay);
                    }
                });
        };
        attempt();
    })
}

retry.
    then()