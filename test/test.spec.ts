import butils from "../lib";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import "dayjs/locale/ja";
import "dayjs/locale/en";

describe("compare Array of Object", () => {
  test("compareArrayOfObjects", () => {
    const result1 = [
      { id: 1, name: "Sandra", type: "user", username: "sandra" },
      { id: 2, name: "John", type: "admin", username: "johnny2" },
      { id: 3, name: "Peter", type: "user", username: "pete" },
      { id: 4, name: "Bobby", type: "user", username: "be_bob" },
    ];

    const result2 = [
      { id: 2, name: "John", email: "johnny@example.com" },
      { id: 4, name: "Bobby", email: "bobby@example.com" },
    ];

    const result = butils.compareArrayOfObjects(result1, result2, ["id"], true);

    expect(result).toEqual([{ id: 2 }, { id: 4 }]);
  });
});

describe("thousand test", () => {
  test("thousand", () => {
    const number1 = 1234;
    const number2 = 1234567890;

    const result1 = butils.numberWithCommas(number1);
    const result2 = butils.numberWithCommas(number2);

    expect(result1).toBe("1,234");
    expect(result2).toBe("1,234,567,890");
  });
});

describe("dayjs ko test", () => {
  beforeEach(() => {
    dayjs.locale("ko");
  });

  test("days ago - ko", () => {
    expect(
      butils.dateDisplay(
        dayjs()
          .subtract(1, "d")
          .toString(),
        28
      )
    ).toBe("하루 전");

    expect(
      butils.dateDisplay(
        dayjs()
          .subtract(6, "d")
          .toString(),
        28
      )
    ).toBe("6일 전");
  });

  test("weeks ago - ko", () => {
    expect(
      butils.dateDisplay(
        dayjs()
          .subtract(1, "w")
          .toString(),
        28
      )
    ).toBe("1주 전");

    expect(
      butils.dateDisplay(
        dayjs()
          .subtract(3, "w")
          .toString(),
        28
      )
    ).toBe("3주 전");
  });
});

describe("dayjs en test", () => {
  beforeEach(() => {
    dayjs.locale("en");
  });

  test("days ago - en", () => {
    expect(
      butils.dateDisplay(
        dayjs()
          .subtract(1, "d")
          .toString(),
        28
      )
    ).toBe("a day ago");

    expect(
      butils.dateDisplay(
        dayjs()
          .subtract(6, "d")
          .toString(),
        28
      )
    ).toBe("6 days ago");
  });

  test("weeks ago - en", () => {
    expect(
      butils.dateDisplay(
        dayjs()
          .subtract(1, "w")
          .toString(),
        28
      )
    ).toBe("a week ago");

    expect(
      butils.dateDisplay(
        dayjs()
          .subtract(3, "w")
          .toString(),
        28
      )
    ).toBe("3 weeks ago");
  });
});

describe("dayjs ja test", () => {
  beforeEach(() => {
    dayjs.locale("ja");
  });

  test("days ago - ja", () => {
    expect(
      butils.dateDisplay(
        dayjs()
          .subtract(1, "d")
          .toString(),
        28
      )
    ).toBe("1日前");

    expect(
      butils.dateDisplay(
        dayjs()
          .subtract(6, "d")
          .toString(),
        28
      )
    ).toBe("6日前");
  });

  test("weeks ago - ja", () => {
    expect(
      butils.dateDisplay(
        dayjs()
          .subtract(1, "w")
          .toString(),
        28
      )
    ).toBe("1週間前");

    expect(
      butils.dateDisplay(
        dayjs()
          .subtract(3, "w")
          .toString(),
        28
      )
    ).toBe("3週間前");
  });
});
