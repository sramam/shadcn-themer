// This simply wraps the dynamic import into a worker script, 
// which is then invoked syncronously from shadcn-plugin
import(process.argv[2]).then((c) => console.log(JSON.stringify(c, null, 2)));