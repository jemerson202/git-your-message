# Question Go Here!
When will I wake up and find out Trump ism't really presiden?

###### Question 7/25/2017
4. What is vue.js?  Why would you choose it over react?


###### Interview Question 8/4/2017

* What do you think of AMD vs CommonJS?
Having been exposed to primarily CommonJS, I feel swayed in accepting that as my preferred method of Javascript module implementation right now.  This is not to say however that AMD does not have some great strengths.  I do think AMD appeals more to an established developer who uses declarative programming techniques because AMD offers clean return functions that are highly usable as constructors.  CommonJS enables the use of modules by importing them into necessary JS files and using their implicit methods, reserved variables, and functions.  Users import the module and then use the module throughout their code, nesting methods and functions as they go.  This can leave readers of the code wondering just exactly where the module is used, how it is used, and can lead to debugging issues.  Sometimes it can be a pain knowing just how, why, and where the module is failing.

AMD offers module use by defining the module being used inside functions, declaring variables used within the module, and then returning functions.  These can be used as constructors and offer a very clean method of utilizing JS modules.  This seems very attractive to me as a programmer but a method that seems like you need to know more about constructors, declarative programming, and utlimately exactly what the module offers so you don't misuse it.  Debugging would be much easier when using AMD as a reader can see exactly where and how the programmer utilized each module.

###### Interview Question 8/8/2017

* What are the pros and cons of using Promises instead of callbacks?

Promises are clean.  Very readable code that reads sequentially.  Most beginner programmers are used to synchronous
code that reads top to bottom and also executes that way.  Both callbacks and promises are synchronous so they don't execute
top to bottom, however promises read that way and are simple to read.  Callbacks get nested and can be very difficult to
follow along with.

Promises also utilize .try and .catch to detect errors.  This is much more useful and cleanly then callbacks.  Consider a big messy
chunk of code using many nested callbacks.  to detect all errors you would have to utilize many if (err) statements that would be hard to detect and overcomplicated.  This is much simpler and easy to read with promises.

```
