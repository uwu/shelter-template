(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // plugins/hello-world/index.jsx
  var hello_world_exports = {};
  __export(hello_world_exports, {
    onLoad: () => onLoad,
    onUnload: () => onUnload
  });
  var {
    util: {
      log
    }
  } = shelter;
  function onLoad() {
    log("Hello, World from shelter!");
  }
  function onUnload() {
    log("Goodbye, World from shelter!");
  }
  return __toCommonJS(hello_world_exports);
})();
