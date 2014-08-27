Package.describe({
  summary: "Wrapper around npm package : dbox",
  version: "0.6.3",
  git: "https://github.com/productiveme/dbox.git"
});

Npm.depends({
  "dbox": "0.6.3"
});

Package.on_use(function (api, where) {
  api.versionsFrom("METEOR@0.9.0");
  api.add_files("dbox.js", "server");
  if(api.export) api.export('dbox');
});
