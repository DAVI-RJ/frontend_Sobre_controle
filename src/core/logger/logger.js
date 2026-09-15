import log from "loglevel";
import remote from "loglevel-plugin-remote";

const isDev = import.meta.env.VITE_MODE !== "production";
log.setLevel(isDev ? "silent" : "warn");

if (!isDev) {
  const customJSON = (log) => ({
    msg: log.message,
    levels: log.level.label,
    stackTrace: log.stackTrace,
  });

  remote.apply(log, { format: customJSON, url: "/logger" });
}

export default log;
