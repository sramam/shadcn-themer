// This simply wraps the dynamic import into a worker script, 
// which is then invoked synchronously from shadcn-plugin
import(process.argv[2]).then((c) => console.log(JSON.stringify(c.default, null, 2)));