# Instructions

`cache-function` should return a function that invokes `cb`.

If the returned function is invoked with arguments that it has already seen
then it should return the cached result and not invoke `cb` again.

`cb` should only ever be invoked once for a given set of arguments.

# Requirements

### **What are some good real-life use cases for such a function?**

caching the results of transparent functions which have the same output for a given argument will ensure faster execution.
can be used in dynamic programming , 

### **What *extra* test cases can you add to the test file?**

*Add relevant test-cases in the test file*