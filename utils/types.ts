type Country = {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      sin: string[];
      tam: string[];
    };
  };
  capital: string[];
};

export type { Country };
