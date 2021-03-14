# enrolleeApplication

Plaese find denoAPI folder. It contains back-end service. This microservice was written as a [Deno](https://deno.land/) application.
To run the microservice, download and install Deno and run the following command in this directory from the command line:

```
deno run --allow-net server.ts
```

(Note that you have to be sure to specify `--allow-net` to grant the server network access. This is because Deno is [secure by default](https://deno.land/manual/getting_started/permissions). 👌)

The server will start on port 8080. If you need to change this (maybe you're running something else on port 8080), you can specify the port:

```
deno run --allow-net server.ts --port=8081
```


**💰BONUS CHALLENGE**💰: The internal server error is handled by creating an interceptor which shows appropriate toaster message.

