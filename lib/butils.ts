import dayjs from "dayjs";
import "dayjs/locale/ko";
import "dayjs/locale/ja";
import "../extend/dayjsExtend";

export default {
  compareArrayOfObjects(array1: any[], array2: any[], keys: string | any[], exact?: boolean): any[] {
    const result = array1.filter((item1) =>
      array2.some((item2) => {
        if (typeof keys === "string" || (Array.isArray(keys) && keys.some((item) => typeof item === "string"))) {
          let match = false;
          (Array.isArray(keys) ? keys : [keys]).forEach((p) => {
            if (item1[p] || item2[p]) {
              if (item1[p] === item2[p]) {
                match = true;
              } else {
                match = false;
                return;
              }
            } else {
              throw new Error("Contains keys that do not exist.");
            }
          });
          return match;
        } else {
          throw new Error("Please check the type of keys.");
        }
      })
    );

    if (exact) {
      return result.map((item) => {
        return (Array.isArray(keys) ? keys : [keys]).reduce((newObject, name) => {
          newObject[name] = item[name];
          return newObject;
        }, {});
      });
    } else {
      return result;
    }
  },

  numberWithCommas(number: number): string {
    return number
      .toString()
      .replace(/[^-.0-9]/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },

  dateDisplay(date: string, day: number | string, format?: "ll"): string {
    const nowDate = new Date();
    const compareDate = new Date(date);

    const dayGap = nowDate.getTime() - compareDate.getTime();

    const calDayGap = Math.abs(dayGap / (24 * 60 * 60 * 1000));

    return calDayGap >= day ? dayjs(date).format(format) : dayjs(date).fromNow();
  },
};
