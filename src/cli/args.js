const parseArgs = () => {
    const [nodeExecPath, executedFilePath, ...args] = process.argv

    const envValues = args.reduce((prev, cur, index) => {
        return prev + (
            (index + 1) % 2 === 0 
                ? `${cur}${index === args.length - 1 ? '' : ', '}` 
                : cur.substring(2) + ' is ')
    }, '');

    console.log(envValues); 
};

parseArgs();