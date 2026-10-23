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
