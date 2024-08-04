// in dom we have two identical structure, rootA and rootB is the rote node of those
// no in rootA we have nodeA node, now we have to find nodeB which is same as node A / or in same path of nodeA
<div>
  <div id="rootA">
    <div>
      <div></div>
      <div>
        <div>
          <div id="nodeA">Node A</div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
  <div id="rootB">
    <div id="rootB1">
      <div id="rootB12"></div>
      <div id="rootB2">
        <div id="rootB21">
          <div id="nodeB">Node B</div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</div>;

function findNodeB(rootA, rootB, nodeA) {
  console.log({
    rootA,
    rootB,
    nodeA,
  });
  if (rootA.id == nodeA.id) return rootB;
  for (let i = 0; i < rootA.childElementCount; i++) {
    let re = findNodeB(rootA.children[i], rootB.children[i], nodeA);
    if (re) return re;
  }
}

let rootA = document.getElementById("rootA");
let rootB = document.getElementById("rootB");
let nodeB = document.getElementById("nodeA");

console.log(findNodeB(rootA, rootB, nodeA));
