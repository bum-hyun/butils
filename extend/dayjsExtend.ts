import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import localizedFormat from "dayjs/plugin/localizedFormat";

const config = {
  thresholds: [
    { l: "s", r: 1 },
    { l: "m", r: 1 },
    { l: "mm", r: 59, d: "minute" },
    { l: "h", r: 1 },
    { l: "hh", r: 23, d: "hour" },
    { l: "d", r: 1 },
    { l: "dd", r: 6, d: "day" },
    { l: "w", r: 1 },
    { l: "ww", r: 3, d: "week" },
    { l: "M", r: 1 },
    { l: "MM", r: 11, d: "month" },
    { l: "y" },
    { l: "yy", d: "year" },
  ],
  rounding: Math.floor,
};

dayjs.extend(relativeTime, config);
dayjs.extend(updateLocale);
dayjs.extend(localizedFormat);

dayjs.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    w: function(): string {
      return "a week";
    },
    ww: function(number: number): string {
      return number + " weeks";
    },
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years",
  },
});

dayjs.updateLocale("ko", {
  relativeTime: {
    future: "%s 후",
    past: "%s 전",
    s: "몇 초",
    m: "1분",
    mm: "%d분",
    h: "한 시간",
    hh: "%d시간",
    d: "하루",
    dd: "%d일",
    w: function(): string {
      return "1주";
    },
    ww: function(number: number): string {
      return number + "주";
    },
    M: "한 달",
    MM: "%d달",
    y: "일 년",
    yy: "%d년",
  },
});

dayjs.updateLocale("ja", {
  relativeTime: {
    future: "%s後",
    past: "%s前",
    s: "数秒",
    m: "1分",
    mm: "%d分",
    h: "1時間",
    hh: "%d時間",
    d: "1日",
    dd: "%d日",
    w: function(): string {
      return "1週間";
    },
    ww: function(number: number): string {
      return number + "週間";
    },
    M: "1ヶ月",
    MM: "%dヶ月",
    y: "1年",
    yy: "%d年",
  },
});
