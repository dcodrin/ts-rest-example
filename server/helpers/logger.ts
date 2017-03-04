// This is an example of using decorators to enhance functions
// It is being used as a simple logger inside allCourses.ts

export enum LoggingLevel {
    INFO,
    WARN,
    DEBUG,
    TRACE
}

export function Logger(level: LoggingLevel): Function {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        // Keep reference to original function
        const originalFunction: Function = descriptor.value;
        // Enhance original function with logging capabilities
        descriptor.value = function (...args: any[]) {
            // Ensure that the first argument is the request object
            if (args[0] && args[0].method) {
                switch (level) {
                    case LoggingLevel.INFO:
                        console.log(`>> Executed ${args[0].method} request on ${args[0].baseUrl}`);
                        break;
                    case LoggingLevel.DEBUG:
                        console.log(`All arguments: \n`, args);
                        break;
                }
            }
            // Call original function with original arguments and the appropriate context 'this'
            originalFunction.apply(this, args)
        }
    }
}