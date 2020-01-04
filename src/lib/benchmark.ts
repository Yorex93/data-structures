interface FunctionInput {
    func: Function,
    args: any[],
}

interface BenchmarkResult {
    functionName: string;
    duration: number;
    result: string;
}

export function hrTimeToMilis (time: [number, number]) {
    console.log(time);
    return (time[0]*1000) + (time[1]/1000)
}


export function checkPerformance (inputs: FunctionInput[]) : BenchmarkResult[] {
    let results : BenchmarkResult[] = [];
    inputs.forEach(input => {
        let start = process.hrtime();
        let result = input.func.apply(null, input.args);
        let end = process.hrtime(start);

        results.push({
            functionName: input.func.name,
            duration: hrTimeToMilis(end),
            result: result ? result.toString() : undefined,
        });
    });

    results.sort((a, b) => a.duration - b.duration);
    return results;
}