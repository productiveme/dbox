Package.describe({
  summary: "Wrapper around npm package dbox - A Node.JS convenience wrapper around the Dropbox API. Simplifies OAuth handshake and removes HTTP ceremony."
});

Npm.depends({
  "dbox": "0.6.3"
});

Package.on_use(function (api, where) {
  api.add_files("dbox.js", "server");
	if(api.export) api.export('dbox');
});
