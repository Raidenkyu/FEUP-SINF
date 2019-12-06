
function run () {
    const input = process.argv[2];

    let inputArray = input.split(/\+|-/);

    inputArray.forEach((e) => {
        console.log(`case ${e}:`);
    });

}

run();
