const appendFilePath = (directory, parentDirectory = "") => {
  const { contents: directoryContents, name: directoryName } = directory;
  return directoryContents.map(item => {
    const { name, type } = item;
    return type === "directory"
      ?  { ...item, contents : appendFilePath(item, `${parentDirectory}/${name}`) }
      : { ...item, path: `/${parentDirectory}/${name}` };
  });
};

const transformData = games => {
  return games.map(game => {
    const { type, name } = game;
    return type === "directory"
      ? { ...game, contents: appendFilePath(game, name) }
      : { ...game, path: `/${name}` };
  });
};

const games = [
  {
    type: "directory",
    name: "rock-the-dock",
    contents: [
      { type: "file", name: "appmanifest.json" },
      { type: "file", name: "c2runtime.js" },
      { type: "file", name: "data.js" },
      { type: "file", name: "favicon.png" },
      { type: "file", name: "games_SDK.js" },
      { type: "file", name: "gamezop.js" },
      { type: "file", name: "icon-114.png" },
      { type: "file", name: "icon-128.png" },
      { type: "file", name: "icon-16.png" },
      { type: "file", name: "icon-256.png" },
      { type: "file", name: "icon-32.png" },
      { type: "file", name: "icon.png" },
      {
        type: "directory",
        name: "icons",
        contents: [
          { type: "file", name: "icon16x16.png" },
          { type: "file", name: "icon48x48.png" },
          { type: "file", name: "icon60x60.png" },
          { type: "file", name: "RocktheDock_128.png" }
        ]
      },

      {
        type: "directory",
        name: "images",
        contents: [
          { type: "file", name: "base-sheet0.png" },
          { type: "file", name: "bg-sheet0.png" },
          { type: "file", name: "blank-sheet0.png" },
          { type: "file", name: "buttons2-sheet0.png" },
          { type: "file", name: "camera-sheet0.png" },
          { type: "file", name: "clound-sheet0.png" },
          { type: "file", name: "defaultblock-sheet0.png" },
          { type: "file", name: "defaultblock-sheet1.png" },
          { type: "file", name: "defaultfnt.png" },
          { type: "file", name: "fin-sheet0.png" },
          { type: "file", name: "gre.png" },
          { type: "file", name: "loaderbg-sheet0.png" },
          { type: "file", name: "logo_loadedtiled.png" },
          { type: "file", name: "logo_loading-sheet0.png" },
          { type: "file", name: "particles.png" },
          { type: "file", name: "placementmsg-sheet0.png" },
          { type: "file", name: "rotate-sheet0.png" },
          { type: "file", name: "seagull-sheet0.png" },
          { type: "file", name: "seagull-sheet1.png" },
          { type: "file", name: "shipcabin-sheet0.png" },
          { type: "file", name: "stars-sheet0.png" },
          { type: "file", name: "startblock-sheet0.png" },
          { type: "file", name: "sun-sheet0.png" },
          { type: "file", name: "title-sheet0.png" },
          { type: "file", name: "watereffect-sheet0.png" },
          { type: "file", name: "water-sheet0.png" }
        ]
      },
      { type: "file", name: "index.html" },
      { type: "file", name: "jiogames.js" },
      { type: "file", name: "jquery-2.1.1.min.js" },
      { type: "file", name: "loading-logo.png" },
      { type: "file", name: "manifest.webapp" },
      {
        type: "directory",
        name: "media",
        contents: [
          { type: "file", name: "a1_07138.m4a" },
          { type: "file", name: "a1_07138.ogg" },
          { type: "file", name: "a5_02038.m4a" },
          { type: "file", name: "a5_02038.ogg" },
          { type: "file", name: "a5_02040.m4a" },
          { type: "file", name: "a5_02040.ogg" },
          { type: "file", name: "a5_04117.m4a" },
          { type: "file", name: "a5_04117.ogg" },
          { type: "file", name: "bgloop1.m4a" },
          { type: "file", name: "bgloop1.ogg" },
          { type: "file", name: "star1.m4a" },
          { type: "file", name: "star1.ogg" }
        ]
      },
      { type: "file", name: "offline.appcache" },
      { type: "file", name: "offlineClient.js" },
      { type: "file", name: "offline.js" },
      { type: "file", name: "sw.js" }
    ]
  }
];

console.log(transformData(games));
