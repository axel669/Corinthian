let complex;

complex = (real = 0, imag = 0) => ({real, imag, isComplex: true});
complex.mag = z => Math.sqrt(z.real ** 2 + z.imag ** 2);
complex.neg = z => complex(-z.real, -z.imag);
complex.add = (a, b) => complex(a.real + b.real, a.imag + b.imag);
complex.sub = (a, b) => complex(a.real - b.real, a.imag - b.imag);
complex.mul = (a, b) => {
    if (a.imag === 0) {
        return complex(a.real * b.real, a.real * b.imag);
    }
    if (b.imag === 0) {
        return complex(a.real * b.real, a.imag * b.real);
    }

    return complex(
        a.real * b.real - a.imag * b.imag,
        a.imag * b.real + a.real * b.imag
    );
};
complex.div = (a, b) => {
    if (b.imag === 0) {
        return complex(a.real / b.real, a.imag / b.real);
    }

    const lensq = b.real ** 2 + b.imag ** 2;

    return complex(
        (a.real * b.real + a.imag * b.imag) / lensq,
        (a.imag * b.real - a.real * b.imag) / lensq
    );
};
complex.mod = (a, b) => {
    return complex.add(
        a,
        complex.mul(
            b,
            complex.ceil(
                complex.neg(complex.div(a, b))
            )
        )
    );
};
complex.pow = (a, b) => {
    //    real ^ z
    if (a.imag === 0) {
        //    real ^ real
        if (b.imag === 0) {
            //    root of a negative
            if (a.real < 0 && Math.abs(b.real) < 1) {
                let firstTerm;
                let secondTerm;

                firstTerm = complex(complex.mag(a));
                firstTerm = complex.pow(firstTerm, b);

                secondTerm = complex.mul(complex.iPi, b);
                secondTerm = complex.pow(complex.e, secondTerm);
                return complex.mul(firstTerm, secondTerm);
            }
            return complex(a.real ** b.real);
        }
        let log;
        let coef;

        coef = a.real ** b.real;
        log = Math.log(a.real);

        return complex(
            coef * Math.cos(b.imag * log),
            coef * Math.sin(b.imag * log)
        );
    }

    let firstTerm;
    let secondTerm;

    firstTerm = complex.mag(a);
    firstTerm = complex.pow(firstTerm, b);

    secondTerm = complex(0, Math.atan2(a.imag, a.real));
    secondTerm = complex.mul(secondTerm, b);
    secondTerm = complex.pow(complex.e, secondTerm);

    return complex.mul(firstTerm, secondTerm);
};

complex.ceil = z => complex(Math.ceil(z.real), Math.ceil(z.imag));
complex.floor = z => complex(Math.floor(z.real), Math.floor(z.imag));
complex.round = z => complex(Math.round(z.real), Math.round(z.imag));

complex.exp = z => {
    if (z.imag === 0) {
        return complex(Math.exp(z.real));
    }
    return complex.pow(
        complex.e,
        z
    );
};

let {sin, cos, tan, sinh, cosh, tanh} = Math;
let fixTrig = func => (n => parseFloat(func(n).toFixed(14)));
sin = fixTrig(sin);
cos = fixTrig(cos);
tan = fixTrig(tan);

complex.sin = z => {
    if (z.imag === 0) {
        return complex(sin(z.real));
    }
    if (z.real === 0) {
        return complex(0, sinh(z.imag));
    }
    return complex(
        sin(z.real) * cosh(z.imag),
        cos(z.real) * sinh(z.imag)
    );
};
complex.cos = z => {
    if (z.imag === 0) {
        return complex(cos(z.real));
    }
    if (z.real === 0) {
        return complex(0, cosh(z.imag));
    }
    return complex(
        cos(z.real) * cosh(z.imag),
        sin(z.real) * sinh(z.imag)
    );
};
complex.tan = z => {
    if (z.imag === 0) {
        return complex(tan(z.real));
    }
    return complex.div(
        complex.sin(z),
        complex.cos(z)
    );
};

complex.sinh = z => {
    if (z.imag === 0) {
        return complex(sinh(z.real));
    }
    return complex(
        sinh(z.real) * cos(z.imag),
        cosh(z.real) * sin(z.imag)
    );
};
complex.cosh = z => {
    if (z.imag === 0) {
        return complex(cosh(z.real));
    }
    return complex(
        cosh(z.real) * cos(z.imag),
        sinh(z.real) * sin(z.imag)
    );
};
complex.tanh = z => {
    if (z.imag === 0) {
        return complex(tanh(z.real));
    }
    return complex.div(
        complex.sinh(z),
        complex.cosh(z)
    );
};

complex.ln = z => {
    if (z.imag === 0) {
        return complex(Math.log(z.real));
    }
    let realPart;
    let imagPart;

    realPart = complex.mag(z);
    realPart = Math.log(realPart);

    imagPart = Math.atan2(z.imag, z.real);

    return complex(realPart, imagPart);
};
complex.log = (z, base) => {
    if (base.isComplex !== true) {
        base = complex.ten;
    }

    return complex.div(
        complex.ln(z),
        complex.ln(base)
    );
};

complex.half = complex(0.5);
complex.iPi = complex(0, Math.PI);
complex.e = complex(Math.E);
complex.one = complex(1);
complex.ten = complex(10);

window.complex = complex;
