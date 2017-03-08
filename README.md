# Sigma.js for Apache Zeppelin 

Sigma.js Spell Visualization for Apache Zeppelin.

## Example

Type some Graph JSON in a paragraph and click on `run`.

PS: Current Zeppelin release needs to be patch for this to work (see [ZEPPELIN-...](https://issues.apache.org/jira/browse/ZEPPELIN-...))

```
%sigma
{
  "nodes":[
    {"label":"n-1","x":-100,"y":"0","id":"1","attributes":{},"color":"red","size":10},
    {"label":"n-2","x":0,"y":0,"id":"2","attributes":{},"color":"yellow","size":10},
    {"label":"n-3","x":0,"y":-100,"id":"3","attributes":{},"color":"green","size":10.0},
    {"label":"n-4","x":-100,"y":-100,"id":"4","attributes":{},"color":"green","size":10.0}
  ],
  "edges":[
    {"source":"1","target":"2","id":"1-2","color":"red","size":10.0},
    {"source":"1","target":"3","id":"1-3","color":"green","size":10.0},
    {"source":"4","target":"3","id":"4-1","color":"green","size":10.0}
  ]
}
```

![](https://raw.githubusercontent.com/datalayer/zeppelin-sigma-spell/master/image/screenshot-1.png)
