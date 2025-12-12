import en from "./i18n/en.js";
import zh from "./i18n/zh.js";
import MeicanCheckout from "./index.js";

function getResource(locale) {
  switch (locale) {
    case "en-US":
      return en;
    default:
      return zh;
  }
}

export const translate = (language) => {
  const resource = getResource(language);
  return {
    t(key, list = []) {
      let material = resource[key];

      if (material === undefined) {
        return `${key} unmatch`;
      }
      list.forEach((target, index) => {
        material = material.replace(`${index}`, target);
      });
      return material;
    },
  };
};

const i18n = (function () {
  return new Proxy(
    {},
    {
      get(_, name) {
        if (name === "t") {
          console.log(MeicanCheckout, "???");
          console.log("&&&");
          return MeicanCheckout.genI18n().t;
        }

        return MeicanCheckout.genI18n();
      },
    }
  );
})();

export const t = (r) => {
  return i18n.t(r);
};
