/**
 * step 1: create one map and add all start and end index, (default value [], add <tag> </tag>)
 * step 2: while creating map, need to check if any key/index of map lies in between current current [start, end]
 * and if it does then we have to unshift </tag> and push <tag> ( kyoki agar koi bich mein start ho rha hai to uske pehle apna tag close kro and new tab start hone ke bad apna tag continue kro )
 * in below example, [4,9] ka jb turn aayega tb map{2,8} key hoga to 8 [4,9] ke bich mein aa rha to 8th wale array mein unshif and push krna padega "i"
 */

const result = prettyHTML("0123456789", [
  [2, 8, "b"],
  [4, 9, "i"],
]);

function prettyHTML(string, markup) {
  const map = {};
  for (let i = 0; i < markup.length; i++) {
    const [start, end, tag] = markup[i];
    if (map[start]) {
      map[start].push(`<${tag}>`);
    } else {
      map[start] = [`<${tag}>`];
    }
    if (map[end + 1]) {
      map[end + 1].push(`<'/'${tag}>`);
    } else {
      map[end + 1] = [`</${tag}>`];
    }

    for (let index in map) {
      console.log(start, end, index);
      if (start < index && index <= end) {
        map[index].unshift(`</${tag}>`);
        map[index].push(`<${tag}>`);
      }
    }
    console.log(JSON.parse(JSON.stringify(map)));
  }
  let html = "";
  for (let i = 0; i <= string.length; i++) {
    let stri = string[i] || "";
    html += map[i] ? `${map[i].join("") + stri}` : stri;
  }
  console.log(html);
}
