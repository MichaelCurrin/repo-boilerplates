import { Repo } from "@/core/Repo";
import {
  dashShieldPath,
  ENVIRONMENT,
  ghCounterShieldUrl,
  logoQueryParams,
  nodePkgJsonShieldUrl,
  staticDashUrl,
  _decodeAngleBrackets,
  _encodeParam,
  _encodeSeparators,
  _staticParamsUrl,
} from "@/core/shieldsApi";

describe("#_encodeSeparators", () => {
  it("converts a space to an underscore", () => {
    expect(_encodeSeparators("Foo Bar", true)).toBe("Foo_Bar");
  });
  it("will ignore transforming a space", () => {
    expect(_encodeSeparators("Foo Bar", false)).toBe("Foo Bar");
  });

  it("converts a single dash to two", () => {
    expect(_encodeSeparators("Foo-Bar", true)).toBe("Foo--Bar");
  });

  it("converts a single underscore to two", () => {
    expect(_encodeSeparators("Foo_Bar", true)).toBe("Foo__Bar");
  });

  it("converts a mix of space, underscore and a dash correctly", () => {
    expect(_encodeSeparators("Foo Bar_Baz-Buzz", true)).toBe(
      "Foo_Bar__Baz--Buzz"
    );
  });
});

describe("#_decodeAngleBrackets", () => {
  it("decodes a left angle bracket", () => {
    expect(_decodeAngleBrackets("%3E%3D1")).toBe(">%3D1");
  });

  it("decodes a right angle bracket", () => {
    expect(_decodeAngleBrackets("foo%3C1")).toBe("foo<1");
  });
});

describe("#_encodeParam", () => {
  it("converts a space to an underscore", () => {
    expect(_encodeParam("Foo Bar")).toBe("Foo_Bar");
  });

  it("converts a single dash to two", () => {
    expect(_encodeParam("Foo-Bar")).toBe("Foo--Bar");
  });

  it("converts a single underscore to two", () => {
    expect(_encodeParam("Foo_Bar")).toBe("Foo__Bar");
  });

  it("converts a mix of space, underscore and a dash correctly", () => {
    expect(_encodeParam("Foo Bar_Baz-Buzz")).toBe("Foo_Bar__Baz--Buzz");
  });

  // These could appear when putting a URL as a value in the path, so need to be escaped.
  it("encodes special characters correctly", () => {
    expect(_encodeParam("&")).toBe("%26");
    expect(_encodeParam("/")).toBe("%2F");
    expect(_encodeParam("?")).toBe("%3F");
  });

  it("encodes a string correctly without converting angle brackets", () => {
    expect(_encodeParam(">=3")).toBe(">%3D3");
    expect(_encodeParam("<2")).toBe("<2");
  });
});

describe("#dashShieldPath", () => {
  it("combines 2 fields", () => {
    expect(dashShieldPath({ message: "Foo", color: "green" })).toBe(
      "Foo-green"
    );
  });

  it("combines 2 fields", () => {
    expect(
      dashShieldPath({ message: "Foo", color: "green", label: "Bar" })
    ).toBe("Bar-Foo-green");
  });

  it("combines 2 fields and applies encoding", () => {
    expect(
      dashShieldPath({ message: "Foo Bar", color: "green", label: "Baz" })
    ).toBe("Baz-Foo_Bar-green");

    expect(
      dashShieldPath({ message: "Foo", color: "green", label: "Baz-Buzz" })
    ).toBe("Baz--Buzz-Foo-green");

    expect(
      dashShieldPath({ label: "Foo", message: ">=1.0.0", color: "green" })
    ).toBe("Foo->%3D1.0.0-green");
  });
});

describe("#logoParams", () => {
  it("returns null params", () => {
    expect(logoQueryParams({ isLarge: false })).toStrictEqual({});
  });

  it("returns a large badge", () => {
    expect(logoQueryParams({ isLarge: true })).toStrictEqual({
      style: "for-the-badge",
    });
  });

  it("returns a logo name", () => {
    expect(logoQueryParams({ isLarge: false, logo: "foo" })).toStrictEqual({
      logo: "foo",
    });
  });

  it("returns a logo name and logo color", () => {
    expect(
      logoQueryParams({ isLarge: false, logo: "foo", logoColor: "white" })
    ).toStrictEqual({
      logo: "foo",
      logoColor: "white",
    });
  });

  it("returns a logo name and logo color for a large badge", () => {
    expect(
      logoQueryParams({ isLarge: true, logo: "foo", logoColor: "white" })
    ).toStrictEqual({
      style: "for-the-badge",
      logo: "foo",
      logoColor: "white",
    });
  });

  it("ignores a logo color with no logo name", () => {
    expect(
      logoQueryParams({ isLarge: false, logo: "", logoColor: "white" })
    ).toStrictEqual({});
  });
});

describe("#_staticParamsUrl", () => {
  it("returns a valid params URL with empty style params", () => {
    expect(
      _staticParamsUrl(
        {
          label: "Foo",
          message: "Bar",
          color: "green",
        },
        {}
      )
    ).toBe(
      "https://img.shields.io/static/v1?label=Foo&message=Bar&color=green"
    );
  });

  it("returns a valid params URL with style params", () => {
    expect(
      _staticParamsUrl(
        {
          label: "Foo",
          message: "Bar",
          color: "green",
        },
        { fizz: "buzz" }
      )
    ).toBe(
      "https://img.shields.io/static/v1?label=Foo&message=Bar&color=green&fizz=buzz"
    );
  });
});

describe("#staticDashUrl", () => {
  it("returns a valid dash URL with empty style params", () => {
    expect(
      staticDashUrl(
        {
          label: "Foo",
          message: "Bar",
          color: "green",
        },
        {}
      )
    ).toBe("https://img.shields.io/badge/Foo-Bar-green");
  });

  it("returns a valid dash URL with style params", () => {
    expect(
      staticDashUrl(
        {
          label: "Foo",
          message: "Bar",
          color: "green",
        },
        { fizz: "buzz" }
      )
    ).toBe("https://img.shields.io/badge/Foo-Bar-green?fizz=buzz");
  });
});

describe("#ghCounterShieldUrl", () => {
  const repo = {
    username: "MichaelCurrin",
    repoName: "badge-generator",
  };

  it("return a valid stars counter URL", () => {
    expect(ghCounterShieldUrl("stars", repo)).toBe(
      "https://img.shields.io/github/stars/MichaelCurrin/badge-generator?style=social"
    );
  });

  it("return a valid forks counter URL", () => {
    const expectedUrl =
      "https://img.shields.io/github/forks/MichaelCurrin/badge-generator?style=social";

    expect(ghCounterShieldUrl("forks", repo)).toBe(expectedUrl);
  });

  it("return a valid issues counter URL", () => {
    expect(ghCounterShieldUrl("issues", repo)).toBe(
      "https://img.shields.io/github/issues/MichaelCurrin/badge-generator"
    );
  });
});

describe("#nodePkgJsonShieldUrl", () => {
  const repo = new Repo("MichaelCurrin", "badge-generator");

  describe("prod dependency", () => {
    const pkgName = "vue";

    it("return a valid dynamic Node packages URL", () => {
      expect(nodePkgJsonShieldUrl(repo, pkgName, ENVIRONMENT.Prod)).toBe(
        "https://img.shields.io/github/package-json/dependency-version/MichaelCurrin/badge-generator/vue"
      );
    });
  });

  describe("dev dependency", () => {
    const pkgName = "typescript";

    it("return a valid dynamic Node packages URL", () => {
      expect(nodePkgJsonShieldUrl(repo, pkgName, ENVIRONMENT.Dev)).toBe(
        "https://img.shields.io/github/package-json/dependency-version/MichaelCurrin/badge-generator/dev/typescript"
      );
    });
  });
});
