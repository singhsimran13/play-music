// async getSongs()

async function main() {
  let songs = await fetch("http://127.0.0.1:5500/assets/mp3/");
  let response = await songs.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let atags = div.querySelector("#wrapper").getElementsByTagName("a");

    console.log(div);

  let songInfo = [];
  for (let i = 0; i < atags.length; i++) {
    if (i > 3) {
      let spanElements = atags[i].querySelectorAll("span");

      let [name, , dateTime] = Array.from(spanElements).map(
        (span) => span.innerHTML
      );

      songInfo.push({
        songName: name,
        songDate: dateTime,
      });
    }
  }

  div = document.querySelector(".song-list");
  songInfo.forEach((info) => {
    div.innerHTML = info.songName;
  });

}

main();
