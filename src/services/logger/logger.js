import log from "loglevel";
import remote from "loglevel-plugin-remote";

const isDev = import.meta.env.LOG_LEVEL !== "production";
log.setLevel(isDev ? "debug" : "warn");

const customJSON = (log) => ({
  msg: log.message,
  levels: log.level.label,
  stackTrace: log.stackTrace,
});

remote.apply(log, { format: customJSON, url: "/logger" });

export default log;
