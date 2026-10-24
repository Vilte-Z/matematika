const CURRICULUM = {
  "11-B": {
    "Skaičiai ir skaičiavimai": [
      "Skaičių aibės",
      "Realiojo skaičiaus modulis",
      "Šaknys ir laipsniai",
      "Logaritmai",
      "Trigonometrijos pagrindai"
    ],
    "Modeliai ir sąryšiai": [
      "Progresijos",
      "Funkcijos ir jų grafikai",
      "Laipsninės ir šaknies funkcijos",
      "Rodiklinės ir logaritminės funkcijos",
      "Trigonometrinės funkcijos",
      "Racionaliosios ir iracionaliosios lygtys",
      "Rodiklinės ir logaritminės lygtys",
      "Racionaliosios nelygybės",
      "Rodiklinės ir logaritminės nelygybės"
    ]
  },
  "11-A": {
    "Skaičiai ir skaičiavimai": [
      "Skaičių aibės ir aibių veiksmai",
      "Modulis ir reiškiniai su moduliu",
      "Laipsniai ir šaknys",
      "Logaritmai ir jų savybės",
      "Trigonometrinės formulės"
    ],
    "Modeliai ir sąryšiai": [
      "Progresijos",
      "Funkcijų savybės ir transformacijos",
      "Laipsninės ir šaknies funkcijos",
      "Rodiklinės ir logaritminės funkcijos",
      "Trigonometrinės funkcijos",
      "Racionaliosios ir iracionaliosios lygtys",
      "Rodiklinės ir logaritminės lygtys",
      "Nelygybės ir jų sistemos",
      "Tekstiniai uždaviniai"
    ]
  },
  "12-B": {
    "Modeliai ir sąryšiai": [
      "Trigonometrinės lygtys",
      "Funkcijos išvestinė",
      "Išvestinių taikymas",
      "Funkcijos tyrimas"
    ],
    "Geometrija ir matavimai": [
      "Erdvės figūros",
      "Paviršiaus plotas ir tūris"
    ],
    "Duomenys ir tikimybės": [
      "Tikimybės ir jų interpretavimas",
      "Duomenų analizė ir statistika"
    ]
  },
  "12-A": {
    "Modeliai ir sąryšiai": [
      "Trigonometrinės lygtys ir nelygybės",
      "Funkcijos riba ir tolydumas",
      "Funkcijos išvestinė",
      "Išvestinių taikymas",
      "Funkcijų tyrimas",
      "Pirmykštė funkcija ir integralas",
      "Integralo taikymas"
    ],
    "Geometrija ir matavimai": [
      "Vektoriai erdvėje",
      "Erdvės geometrija",
      "Erdvės figūrų paviršiaus plotas ir tūris"
    ],
    "Duomenys ir tikimybės": [
      "Kombinatorika",
      "Tikimybės ir sąlyginė tikimybė",
      "Atsitiktiniai dydžiai ir statistika"
    ]
  }
};


const QUESTIONS = [
    {
        id: 1001,
        course: "11-A",
        topic: "Laipsniai ir šaknys",
        question: String.raw`Suprastinkite: $\frac{12^{18}}{8^9}$`,
        options: [
            String.raw`$3^9$`,
            String.raw`$18^9$`,
            String.raw`$4^9$`,
            String.raw`$96^9$`
        ],
        correct: 1
    },

    {
        id: 1002,
        course: "11-A",
        topic: "Laipsniai ir šaknys",
        question: String.raw`Suprastinkite: $\frac{50^{24}}{10^{12}}$`,
        options: [
            String.raw`$5^{12}$`,
            String.raw`$500^{12}$`,
            String.raw`$25^{12}$`,
            String.raw`$250^{12}$`
        ],
        correct: 3
    },

    {
        id: 1003,
        course: "11-A",
        topic: "Laipsniai ir šaknys",
        question: String.raw`Apskaičiuokite: $2^{120}\cdot4^{15}\cdot2^{40}\cdot\left(\frac12\right)^{-20}$`,
        options: [
            String.raw`$2^{210}$`,
            String.raw`$2^{170}$`,
            String.raw`$2^{190}$`,
            String.raw`$2^{150}$`
        ],
        correct: 0
    },

    {
        id: 1004,
        course: "11-A",
        topic: "Laipsniai ir šaknys",
        question: String.raw`Suprastinkite: $3^{200}\cdot9^{30}\cdot3^{100}\cdot\left(\frac13\right)^{-40}$`,
        options: [
            String.raw`$9^{180}$`,
            String.raw`$3^{320}$`,
            String.raw`$9^{200}$`,
            String.raw`$3^{280}$`
        ],
        correct: 2
    },

    {
        id: 1005,
        course: "11-A",
        topic: "Laipsniai ir šaknys",
        question: String.raw`Suprastinkite: $\left(\frac1{16}\right)^a\cdot(2^3)^b$`,
        options: [
            String.raw`$2^{4a+3b}$`,
            String.raw`$2^{3b-4a}$`,
            String.raw`$2^{4a-3b}$`,
            String.raw`$2^{3b-2a}$`
        ],
        correct: 1
    },

    {
        id: 1006,
        course: "11-A",
        topic: "Laipsniai ir šaknys",
        question: String.raw`Suprastinkite: $\left(\frac1{125}\right)^x\cdot(5^2)^y$`,
        options: [
            String.raw`$5^{3x+2y}$`,
            String.raw`$5^{2x-3y}$`,
            String.raw`$5^{3y-2x}$`,
            String.raw`$5^{2y-3x}$`
        ],
        correct: 3
    },

    {
        id: 1007,
        course: "11-A",
        topic: "Laipsniai ir šaknys",
        question: String.raw`Apskaičiuokite: $\left(3^{\frac27}\right)^2\cdot3^{\frac37}\cdot3^{-\frac67}$`,
        options: [
            String.raw`$\sqrt[7]{3}$`,
            String.raw`$\frac13$`,
            String.raw`$\sqrt[7]{9}$`,
            String.raw`$3$`
        ],
        correct: 0
    },

    {
        id: 1008,
        course: "11-A",
        topic: "Laipsniai ir šaknys",
        question: String.raw`Apskaičiuokite: $\left(5^{\frac38}\right)^2\cdot5^{\frac14}\cdot5^{-\frac54}$`,
        options: [
            String.raw`$\sqrt[4]{5}$`,
            String.raw`$\frac15$`,
            String.raw`$\frac1{\sqrt[4]{5}}$`,
            String.raw`$\sqrt5$`
        ],
        correct: 2
    },

    {
        id: 1009,
        course: "11-A",
        topic: "Laipsniai ir šaknys",
        question: String.raw`Suprastinkite: $\sqrt[3]{2\sqrt{2\sqrt2}}$`,
        options: [
            String.raw`$\sqrt[12]{2^5}$`,
            String.raw`$\sqrt[12]{2^7}$`,
            String.raw`$\sqrt[6]{2^5}$`,
            String.raw`$\sqrt[4]{2^3}$`
        ],
        correct: 1
    },

    {
        id: 1010,
        course: "11-A",
        topic: "Laipsniai ir šaknys",
        question: String.raw`Suprastinkite: $\sqrt[4]{3\sqrt[3]{3\sqrt3}}$`,
        options: [
            String.raw`$\sqrt[8]{3^5}$`,
            String.raw`$\sqrt[6]{3^5}$`,
            String.raw`$\sqrt[12]{3^5}$`,
            String.raw`$\sqrt[8]{27}$`
        ],
        correct: 3
    },

    {
        id: 1011,
        course: "11-A",
        topic: "Laipsniai ir šaknys",
        question: String.raw`Jei $\sqrt[3]{3}=m$, apskaičiuokite: $\left(\sqrt[3]{9}\cdot\left(\sqrt[4]{27}\right)^2\right)^4$`,
        options: [
            String.raw`$m^{26}$`,
            String.raw`$m^{18}$`,
            String.raw`$3m^{12}$`,
            String.raw`$m^{35}$`
        ],
        correct: 0
    },

    {
        id: 1012,
        course: "11-A",
        topic: "Laipsniai ir šaknys",
        question: String.raw`Jei $\sqrt[3]{5}=m$, apskaičiuokite: $\left(\sqrt[3]{25}\cdot\left(\sqrt[4]{5}\right)^3\right)^4$`,
        options: [
            String.raw`$m^{12}$`,
            String.raw`$m^{20}$`,
            String.raw`$m^{17}$`,
            String.raw`$5m^{14}$`
        ],
        correct: 2
    },

    {
        id: 1013,
        course: "11-A",
        topic: "Laipsniai ir šaknys",
        question: String.raw`Apskaičiuokite: $\frac{3^{51}\cdot3^{51}\cdot3^{51}}{3^{50}+3^{50}+3^{50}}:\left(9^{\frac12}\right)^{102}$`,
        options: [
            String.raw`$3$`,
            String.raw`$1$`,
            String.raw`$9$`,
            String.raw`$\frac13$`
        ],
        correct: 1
    },

    {
        id: 1014,
        course: "11-A",
        topic: "Laipsniai ir šaknys",
        question: String.raw`Apskaičiuokite: $\frac{5^{41}\cdot5^{41}\cdot5^{41}}{5^{40}+5^{40}+5^{40}+5^{40}+5^{40}}:\left(25^{\frac12}\right)^{81}$`,
        options: [
            String.raw`$25$`,
            String.raw`$1$`,
            String.raw`$\frac15$`,
            String.raw`$5$`
        ],
        correct: 3
    },

    {
        id: 1015,
        course: "11-A",
        topic: "Laipsniai ir šaknys",
        question: String.raw`Suprastinkite: $\frac{\sqrt{\sqrt[3]{\sqrt[4]{16}}}\cdot\sqrt[3]{8}}{\sqrt[6]{4}}$`,
        options: [
            String.raw`$\sqrt[4]{8}$`,
            String.raw`$\sqrt[6]{16}$`,
            String.raw`$\sqrt[3]{4}$`,
            String.raw`$\sqrt[6]{2}$`
        ],
        correct: 0
    },

    {
        id: 1016,
        course: "11-A",
        topic: "Laipsniai ir šaknys",
        question: String.raw`Suprastinkite: $\frac{\sqrt{\sqrt[3]{\sqrt{64}}}\cdot\sqrt[4]{16}}{\sqrt[6]{8}}$`,
        options: [
            String.raw`$4$`,
            String.raw`$\sqrt2$`,
            String.raw`$2$`,
            String.raw`$2\sqrt2$`
        ],
        correct: 2
    }
];


const additionalQuestions = [
    {
        id: 1017,
        question: String.raw`Apskaičiuokite: $\frac{8}{3+\sqrt5}+\frac{8}{3-\sqrt5}$`,
        options: [
            String.raw`$8$`,
            String.raw`$12$`,
            String.raw`$6\sqrt5$`,
            String.raw`$4$`
        ],
        correct: 1
    },

    {
        id: 1018,
        question: String.raw`Apskaičiuokite: $\frac{5}{\sqrt6+1}-\frac{5}{\sqrt6-1}$`,
        options: [
            String.raw`$2$`,
            String.raw`$-5$`,
            String.raw`$-2$`,
            String.raw`$5\sqrt6$`
        ],
        correct: 2
    },

    {
        id: 1019,
        question: String.raw`Raskite $x$: $\left(\sqrt[4]{\sqrt[x]{16}}\right)^{12}=8$`,
        options: [
            String.raw`$3$`,
            String.raw`$6$`,
            String.raw`$8$`,
            String.raw`$4$`
        ],
        correct: 3
    },

    {
        id: 1020,
        question: String.raw`Raskite $x$: $\left(\sqrt[3]{\sqrt[x]{64}}\right)^6=16$`,
        options: [
            String.raw`$3$`,
            String.raw`$4$`,
            String.raw`$6$`,
            String.raw`$9$`
        ],
        correct: 0
    },

    {
        id: 1021,
        question: String.raw`Suprastinkite: $\sqrt{(\sqrt3-4)^2}+\sqrt[4]{16}$`,
        options: [
            String.raw`$\sqrt3-2$`,
            String.raw`$2+\sqrt3$`,
            String.raw`$6-\sqrt3$`,
            String.raw`$6+\sqrt3$`
        ],
        correct: 2
    },

    {
        id: 1022,
        question: String.raw`Suprastinkite: $\sqrt{19-6\sqrt{10}}$`,
        options: [
            String.raw`$3-\sqrt{10}$`,
            String.raw`$\sqrt{10}-3$`,
            String.raw`$\sqrt{10}+3$`,
            String.raw`$10-3\sqrt2$`
        ],
        correct: 1
    },

    {
        id: 1023,
        question: String.raw`Suprastinkite: $\sqrt{14-4\sqrt{10}}$`,
        options: [
            String.raw`$2-\sqrt{10}$`,
            String.raw`$\sqrt{10}+2$`,
            String.raw`$4-\sqrt{10}$`,
            String.raw`$\sqrt{10}-2$`
        ],
        correct: 3
    },

    {
        id: 1024,
        question: String.raw`Suprastinkite: $\sqrt[5]{(\sqrt5-6)^5}-\sqrt[3]{8}+\sqrt[4]{(2-\sqrt5)^4}$`,
        options: [
            String.raw`$2\sqrt5-10$`,
            String.raw`$-6$`,
            String.raw`$-8$`,
            String.raw`$2\sqrt5-6$`
        ],
        correct: 0
    },

    {
        id: 1025,
        question: String.raw`Suprastinkite: $\sqrt[3]{(4-\sqrt7)^3}+\sqrt[6]{64}-\sqrt{(\sqrt7-5)^2}$`,
        options: [
            String.raw`$1-2\sqrt7$`,
            String.raw`$11-2\sqrt7$`,
            String.raw`$1$`,
            String.raw`$3$`
        ],
        correct: 2
    },

    {
        id: 1026,
        question: String.raw`Suprastinkite, kai vardiklis nelygus nuliui: $\frac{b^{108}-b^{109}}{109-b-108}$`,
        options: [
            String.raw`$b^{109}$`,
            String.raw`$-b^{108}$`,
            String.raw`$b^{107}$`,
            String.raw`$b^{108}$`
        ],
        correct: 3
    },

    {
        id: 1027,
        question: String.raw`Suprastinkite, kai vardiklis nelygus nuliui: $\frac{x^{57}-x^{58}}{58-x-57}$`,
        options: [
            String.raw`$x^{58}$`,
            String.raw`$x^{57}$`,
            String.raw`$-x^{57}$`,
            String.raw`$x^{56}$`
        ],
        correct: 1
    },

    {
        id: 1028,
        question: String.raw`Suprastinkite: $\frac{m^2-8m+16}{m^3-64}$`,
        options: [
            String.raw`$\frac{m-4}{m^2+4m+16}$`,
            String.raw`$\frac{m+4}{m^2+4m+16}$`,
            String.raw`$\frac1{m-4}$`,
            String.raw`$m-4$`
        ],
        correct: 0
    },

    {
        id: 1029,
        question: String.raw`Suprastinkite: $\frac{x^6-27}{x^4+3x^2+9}$`,
        options: [
            String.raw`$x^2+3$`,
            String.raw`$x^3-3$`,
            String.raw`$x^2-3$`,
            String.raw`$x^4-9$`
        ],
        correct: 2
    },

    {
        id: 1030,
        question: String.raw`Suprastinkite: $\frac{a^2-10a+25}{a^3-125}$`,
        options: [
            String.raw`$\frac{a+5}{a^2+5a+25}$`,
            String.raw`$\frac{a-5}{a^2+5a+25}$`,
            String.raw`$\frac1{a-5}$`,
            String.raw`$a-5$`
        ],
        correct: 1
    },

    {
        id: 1031,
        question: String.raw`Suprastinkite, kai $a,b>0$ ir $a\ne b$: $\frac{(a^{\frac34}-b^{\frac34})(a^{\frac34}+b^{\frac34})}{a^{\frac12}-b^{\frac12}}-\sqrt{ab}$`,
        options: [
            String.raw`$a-b$`,
            String.raw`$a+b+\sqrt{ab}$`,
            String.raw`$\sqrt a+\sqrt b$`,
            String.raw`$a+b$`
        ],
        correct: 3
    },

    {
        id: 1032,
        question: String.raw`Suprastinkite, kai $x,y>0$ ir $x\ne y$: $\frac{(x^{\frac34}-y^{\frac34})(x^{\frac34}+y^{\frac34})}{x^{\frac12}-y^{\frac12}}-x-y$`,
        options: [
            String.raw`$\sqrt{xy}$`,
            String.raw`$x+y$`,
            String.raw`$\sqrt x+\sqrt y$`,
            String.raw`$xy$`
        ],
        correct: 0
    }
];

QUESTIONS.push(
    ...additionalQuestions.map(q => ({
        ...q,
        course: "11-A",
        topic: "Laipsniai ir šaknys"
    }))
);


const logarithmQuestions = [
    // 1. Logaritmų skaičiavimas

    {
        id: 3001,
        question: String.raw`Apskaičiuokite: $\log_{\sqrt3}(9\sqrt3)$`,
        options: [
            String.raw`$3$`,
            String.raw`$4$`,
            String.raw`$5$`,
            String.raw`$6$`
        ],
        correct: 2
    },

    {
        id: 3002,
        question: String.raw`Apskaičiuokite: $\log_{\sqrt2}(8\sqrt2)$`,
        options: [
            String.raw`$5$`,
            String.raw`$6$`,
            String.raw`$8$`,
            String.raw`$7$`
        ],
        correct: 3
    },

    // 2. Logaritmų sudėtis ir atimtis

    {
        id: 3003,
        question: String.raw`Apskaičiuokite: $\log_{\sqrt3}(12\sqrt3)-\log_{\sqrt3}4$`,
        options: [
            String.raw`$2$`,
            String.raw`$3$`,
            String.raw`$4$`,
            String.raw`$1$`
        ],
        correct: 1
    },

    {
        id: 3004,
        question: String.raw`Apskaičiuokite: $\frac{3\lg2-\lg32}{\lg5+\lg20}$`,
        options: [
            String.raw`$-1$`,
            String.raw`$-\lg2$`,
            String.raw`$\frac12$`,
            String.raw`$1$`
        ],
        correct: 1
    },

    {
        id: 3005,
        question: String.raw`Apskaičiuokite: $\frac{\lg4+\lg25}{2\lg2+\lg5}$`,
        options: [
            String.raw`$1$`,
            String.raw`$\frac{2}{\lg20}$`,
            String.raw`$\frac12$`,
            String.raw`$4$`
        ],
        correct: 1
    },

    {
        id: 3006,
        question: String.raw`Apskaičiuokite: $\frac{3\log_5 2-\log_5 40}{\log_5 4+\log_5 25}$`,
        options: [
            String.raw`$-1$`,
            String.raw`$0$`,
            String.raw`$\frac12$`,
            String.raw`$-\frac{1}{\log_5 100}$`
        ],
        correct: 3
    },

    // 3. Logaritmai ir laipsniai

    {
        id: 3007,
        question: String.raw`Apskaičiuokite: $\sqrt3\left(\log_2 24-\log_2 3+3^{\log_3 4}\right)^{\log_9 3}$`,
        options: [
            String.raw`$6$`,
            String.raw`$\sqrt{21}$`,
            String.raw`$6\sqrt3$`,
            String.raw`$12$`
        ],
        correct: 1
    },

    {
        id: 3008,
        question: String.raw`Apskaičiuokite: $64^{\frac13-\frac12\log_4 2}+9^{\log_3 2}+81^{\frac14+\log_{81}3}$`,
        options: [
            String.raw`$11$`,
            String.raw`$12$`,
            String.raw`$13+\sqrt2$`,
            String.raw`$14$`
        ],
        correct: 2
    },

    {
        id: 3009,
        question: String.raw`Apskaičiuokite: $27^{\frac13}+16^{\log_4 3}+32^{\frac15}$`,
        options: [
            String.raw`$10$`,
            String.raw`$12$`,
            String.raw`$14$`,
            String.raw`$16$`
        ],
        correct: 2
    },

    // 4. Logaritminių reiškinių prastinimas

    {
        id: 3010,
        question: String.raw`Suprastinkite, kai $x>0$, $x\ne1$: $\frac{\lg^2(x^4)}{\lg^3(x^2)}\cdot\lg\sqrt{x}$`,
        options: [
            String.raw`$1$`,
            String.raw`$2$`,
            String.raw`$\frac12$`,
            String.raw`$4$`
        ],
        correct: 0
    },

    {
        id: 3011,
        question: String.raw`Suprastinkite, kai $x>0$, $x\ne1$: $\frac{\lg^3(x^2)}{\lg^2(x^3)}\cdot\lg\sqrt{x}$`,
        options: [
            String.raw`$\frac29(\lg x)^2$`,
            String.raw`$\frac49(\lg x)^2$`,
            String.raw`$\frac49\lg x$`,
            String.raw`$\frac23\lg x$`
        ],
        correct: 1
    },

    // 5. Logaritminės lygtys

    {
        id: 3012,
        question: String.raw`Raskite $x$: $\log_3x=2\log_3 6+\log_3 9-\log_3 12$`,
        options: [
            String.raw`$9$`,
            String.raw`$18$`,
            String.raw`$24$`,
            String.raw`$27$`
        ],
        correct: 3
    },

    {
        id: 3013,
        question: String.raw`Raskite $x$: $\log_2x=3\log_2 3+\frac12\log_2 16-\log_2 9$`,
        options: [
            String.raw`$6$`,
            String.raw`$9$`,
            String.raw`$12$`,
            String.raw`$18$`
        ],
        correct: 2
    },

    // 6. Logaritmų reiškimas per duotus dydžius

    {
        id: 3014,
        question: String.raw`Žinoma, kad $\lg2=a$, $\lg3=b$. Išreikškite: $\log_4 18$`,
        options: [
            String.raw`$\frac{a+2b}{2a}$`,
            String.raw`$\frac{2a+b}{a}$`,
            String.raw`$\frac{a+b}{2a}$`,
            String.raw`$\frac{2b-a}{2a}$`
        ],
        correct: 0
    },

    {
        id: 3015,
        question: String.raw`Žinoma, kad $\log_3 2=a$. Išreikškite: $\log_2\frac{16}{27}$`,
        options: [
            String.raw`$\frac{4a+3}{a}$`,
            String.raw`$\frac{4a-3}{a}$`,
            String.raw`$\frac{3a-4}{a}$`,
            String.raw`$4-3a$`
        ],
        correct: 1
    },

    {
        id: 3016,
        question: String.raw`Žinoma, kad $\log_5 3=a$. Išreikškite: $\log_{25}\frac{27}{5}$`,
        options: [
            String.raw`$\frac{3a-1}{2}$`,
            String.raw`$\frac{3a+1}{2}$`,
            String.raw`$3a-1$`,
            String.raw`$\frac{a-3}{2}$`
        ],
        correct: 0
    },

    // 7. Logaritmo pagrindo keitimas

    {
        id: 3017,
        question: String.raw`Jei $\log_2 5=a$, tai $\log_5 40=$`,
        options: [
            String.raw`$\frac{3+a}{a}$`,
            String.raw`$\frac{3-a}{a}$`,
            String.raw`$\frac{a+2}{3}$`,
            String.raw`$3a+1$`
        ],
        correct: 0
    },

    {
        id: 3018,
        question: String.raw`Jei $\log_6 25=a$, tai $\log_{30}5=$`,
        options: [
            String.raw`$\frac{a}{a+2}$`,
            String.raw`$\frac{2a}{a+2}$`,
            String.raw`$\frac{a+2}{2a}$`,
            String.raw`$\frac{a}{2a+1}$`
        ],
        correct: 0
    },

    {
        id: 3019,
        question: String.raw`Jei $\log_4 7=m$, tai $\frac{\log_3 49}{\log_3 8}=$`,
        options: [
            String.raw`$\frac m3$`,
            String.raw`$\frac{4m}3$`,
            String.raw`$\frac{2m}3$`,
            String.raw`$\frac{3m}4$`
        ],
        correct: 1
    },

    {
        id: 3020,
        question: String.raw`Jei $\log_3 2=m$, tai $\frac{\log_3 80-\log_3 5}{\log_{\frac14}9}=$`,
        options: [
            String.raw`$-m$`,
            String.raw`$-4m^2$`,
            String.raw`$2m^2$`,
            String.raw`$-m^2$`
        ],
        correct: 1
    }
];

// Pridedame uždavinius prie 11-A logaritmų temos

QUESTIONS.push(
    ...logarithmQuestions.map(q => ({
        ...q,
        course: "11-A",
        topic: "Logaritmai ir jų savybės"
    }))
);


const additionalLogarithmQuestions = [

    // 1. Laipsnių ir logaritmų ryšys

    {
        id: 3021,
        question: String.raw`Žinoma, kad $2^x=13$ ir $13^y=64$. Kam lygi sandauga $x\cdot y$?`,
        options: [
            String.raw`$3$`,
            String.raw`$6$`,
            String.raw`$12$`,
            String.raw`$8$`
        ],
        correct: 1
    },

    {
        id: 3022,
        question: String.raw`Žinoma, kad $5^a=18$ ir $18^b=125$. Kam lygi sandauga $a\cdot b$?`,
        options: [
            String.raw`$3$`,
            String.raw`$5$`,
            String.raw`$6$`,
            String.raw`$9$`
        ],
        correct: 0
    },

    {
        id: 3023,
        question: String.raw`Žinoma, kad $3^m=11$ ir $11^n=81$. Kam lygi sandauga $m\cdot n$?`,
        options: [
            String.raw`$2$`,
            String.raw`$3$`,
            String.raw`$9$`,
            String.raw`$4$`
        ],
        correct: 3
    },

    // 2. Logaritmų apibrėžimo taikymas

    {
        id: 3024,
        question: String.raw`Žinoma, kad $\log_{\frac15}a=-2$ ir $\lg b=3$. Apskaičiuokite $a+b$.`,
        options: [
            String.raw`$1025$`,
            String.raw`$125$`,
            String.raw`$1005$`,
            String.raw`$225$`
        ],
        correct: 0
    },

    {
        id: 3025,
        question: String.raw`Žinoma, kad $\log_{\frac13}a=-4$ ir $\log_2b=5$. Apskaičiuokite $a+b$.`,
        options: [
            String.raw`$89$`,
            String.raw`$113$`,
            String.raw`$97$`,
            String.raw`$243$`
        ],
        correct: 1
    },

    // 3. Logaritminės lygtys su nežinomu pagrindu

    {
        id: 3026,
        question: String.raw`Raskite $x$, jei $\log_x16=-\frac12$.`,
        options: [
            String.raw`$\frac14$`,
            String.raw`$\frac1{16}$`,
            String.raw`$\frac1{256}$`,
            String.raw`$256$`
        ],
        correct: 2
    },

    {
        id: 3027,
        question: String.raw`Raskite $x$, jei $\log_x27=-\frac32$.`,
        options: [
            String.raw`$\frac19$`,
            String.raw`$\frac13$`,
            String.raw`$9$`,
            String.raw`$\frac1{27}$`
        ],
        correct: 0
    },

    {
        id: 3028,
        question: String.raw`Raskite $x$, jei $\log_{8\sqrt[3]{2}}x=-\frac49$.`,
        options: [
            String.raw`$\frac18$`,
            String.raw`$\frac1{\sqrt[3]{8}}$`,
            String.raw`$2^{-\frac{40}{27}}$`,
            String.raw`$\frac1{\sqrt[3]{16}}$`
        ],
        correct: 2
    },

    // 4. Laipsniniai reiškiniai su logaritmais

    {
        id: 3029,
        question: String.raw`Apskaičiuokite: $5^{2+2\log_{25}9+3\log_{\frac15}25}$.`,
        options: [
            String.raw`$\frac9{625}$`,
            String.raw`$\frac9{25}$`,
            String.raw`$\frac{81}{625}$`,
            String.raw`$\frac{25}{9}$`
        ],
        correct: 0
    },

    {
        id: 3030,
        question: String.raw`Apskaičiuokite: $3^{2+2\log_9 16+\log_{\frac13}27}$.`,
        options: [
            String.raw`$16$`,
            String.raw`$48$`,
            String.raw`$\frac{16}{3}$`,
            String.raw`$144$`
        ],
        correct: 2
    },

    // 5. Logaritmų santykiai

    {
        id: 3031,
        question: String.raw`Apskaičiuokite, kai $a>0$, $a\ne1$: $\frac{\log_a\sqrt[4]{a^{12}}}{\log_a\frac1{\sqrt[3]{a}}}$.`,
        options: [
            String.raw`$-3$`,
            String.raw`$-6$`,
            String.raw`$9$`,
            String.raw`$-9$`
        ],
        correct: 3
    },

    {
        id: 3032,
        question: String.raw`Apskaičiuokite, kai $a>0$, $a\ne1$: $\frac{\log_a\sqrt[3]{a^8}}{\log_a\frac1{\sqrt[6]{a}}}$.`,
        options: [
            String.raw`$-16$`,
            String.raw`$-8$`,
            String.raw`$16$`,
            String.raw`$-4$`
        ],
        correct: 0
    },

    // 6. Duotos logaritmų reikšmės

    {
        id: 3033,
        question: String.raw`Duota: $\log_b16=c$, $\log_a125=a$, $a^c=64$. Raskite $b^a$.`,
        options: [
            String.raw`$2$`,
            String.raw`$4$`,
            String.raw`$25$`,
            String.raw`$16$`
        ],
        correct: 2
    },

    {
        id: 3034,
        question: String.raw`Duota: $\log_b27=c$, $\log_a16=a$, $a^c=81$. Raskite $b^a$.`,
        options: [
            String.raw`$3$`,
            String.raw`$8$`,
            String.raw`$27$`,
            String.raw`$81$`
        ],
        correct: 1
    },

    // 7. Logaritmų sandaugos

    {
        id: 3035,
        question: String.raw`Apskaičiuokite: $\log_3 4\cdot\log_4 5\cdot\log_5 6\cdot\log_6 9$.`,
        options: [
            String.raw`$2$`,
            String.raw`$3$`,
            String.raw`$6$`,
            String.raw`$9$`
        ],
        correct: 0
    },

    {
        id: 3036,
        question: String.raw`Apskaičiuokite: $\log_2 3\cdot\log_3 5\cdot\log_5 8\cdot\log_8 32$.`,
        options: [
            String.raw`$3$`,
            String.raw`$4$`,
            String.raw`$5$`,
            String.raw`$8$`
        ],
        correct: 2
    }

];

// Pridedame prie 11-A logaritmų temos

QUESTIONS.push(
    ...additionalLogarithmQuestions.map(q => ({
        ...q,
        course: "11-A",
        topic: "Logaritmai ir jų savybės"
    }))
);
