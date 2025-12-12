
export const chapter7 = {
  class: "2nd PUC",
  chapter_number: "7",
  chapter_title: "Integrals",
  sections: [
    {
      section_title: "7.1 Introduction",
      content: "Integration is the inverse process of differentiation. Instead of differentiating a function, we are given the derivative of a function and asked to find its primitive, i.e., the original function. Such a process is called integration or anti differentiation.",
      definitions: [
        {
            id: "1",
            title: "Definition 1: Indefinite Integral",
            text: "The collection of all anti derivatives of f is called the indefinite integral of f with respect to x, denoted by ∫ f(x) dx."
        }
      ],
      exercises: {
        title: "EXERCISE 7.1",
        questions: [
          { id: "1", text: "Find an anti derivative (or integral) of the following functions by the method of inspection: sin 2x" },
          { id: "2", text: "Find an anti derivative (or integral) of the following functions by the method of inspection: cos 3x" },
          { id: "3", text: "Find an anti derivative (or integral) of the following functions by the method of inspection: e^(2x)" },
          { id: "4", text: "Find an anti derivative (or integral) of the following functions by the method of inspection: (ax + b)²" },
          { id: "5", text: "Find an anti derivative (or integral) of the following functions by the method of inspection: sin 2x – 4 e^(3x)" },
          { id: "6", text: "Find the integral: ∫(4e^(3x) + 1) dx" },
          { id: "7", text: "Find the integral: ∫ x²(1 – 1/x²) dx" },
          { id: "8", text: "Find the integral: ∫(ax² + bx + c) dx" },
          { id: "9", text: "Find the integral: ∫(2x² + e^x) dx" },
          { id: "10", text: "Find the integral: ∫(√x – 1/√x)² dx" },
          { id: "11", text: "Find the integral: ∫(x³ + 5x² – 4)/x² dx" },
          { id: "12", text: "Find the integral: ∫(x³ + 3x + 4)/√x dx" },
          { id: "13", text: "Find the integral: ∫(x³ – x² + x – 1)/(x – 1) dx" },
          { id: "14", text: "Find the integral: ∫(1 – x)√x dx" },
          { id: "15", text: "Find the integral: ∫ √x (3x² + 2x + 3) dx" },
          { id: "16", text: "Find the integral: ∫(2x – 3cos x + e^x) dx" },
          { id: "17", text: "Find the integral: ∫(2x² – 3sin x + 5√x) dx" },
          { id: "18", text: "Find the integral: ∫ sec x (sec x + tan x) dx" },
          { id: "19", text: "Find the integral: ∫ sec² x / cosec² x dx" },
          { id: "20", text: "Find the integral: ∫ (2 – 3sin x) / cos² x dx" },
          { id: "21", text: "The anti derivative of (√x + 1/√x) equals:\n(A) 1/3 x^(1/3) + 2x^(1/2) + C\n(B) 2/3 x^(2/3) + 1/2 x² + C\n(C) 2/3 x^(3/2) + 2x^(1/2) + C\n(D) 3/2 x^(3/2) + 1/2 x^(1/2) + C" },
          { id: "22", text: "If d/dx f(x) = 4x³ – 3/x⁴ such that f(2) = 0. Then f(x) is:\n(A) x⁴ + 1/x³ – 129/8\n(B) x³ + 1/x⁴ + 129/8\n(C) x⁴ + 1/x³ + 129/8\n(D) x³ + 1/x⁴ – 129/8" }
        ]
      }
    },
    {
      section_title: "7.3 Methods of Integration",
      content: "Prominent methods of integration are: Integration by Substitution, Integration using Partial Fractions, and Integration by Parts.",
      exercises: {
        title: "EXERCISE 7.2",
        questions: [
            {id: "1", text: "Integrate: 2x / (1 + x²)"},
            {id: "2", text: "Integrate: (log x)² / x"},
            {id: "3", text: "Integrate: 1 / (x + x log x)"},
            {id: "4", text: "Integrate: sin x sin (cos x)"},
            {id: "5", text: "Integrate: sin (ax + b) cos (ax + b)"},
            {id: "6", text: "Integrate: √(ax + b)"},
            {id: "7", text: "Integrate: x √(x + 2)"},
            {id: "8", text: "Integrate: x √(1 + 2x²)"},
            {id: "9", text: "Integrate: (4x + 2) √(x² + x + 1)"},
            {id: "10", text: "Integrate: 1 / (x - √x)"},
            {id: "11", text: "Integrate: x / √(x + 4), x > 0"},
            {id: "12", text: "Integrate: (x³ – 1)^(1/3) x⁵"},
            {id: "13", text: "Integrate: x² / (2 + 3x³)³"},
            {id: "14", text: "Integrate: 1 / (x (log x)^m), x > 0"},
            {id: "15", text: "Integrate: x / (9 – 4x²)"},
            {id: "16", text: "Integrate: e^(2x + 3)"},
            {id: "17", text: "Integrate: x / e^(x²)"},
            {id: "18", text: "Integrate: e^(tan⁻¹ x) / (1 + x²)"},
            {id: "19", text: "Integrate: (e^(2x) – 1) / (e^(2x) + 1)"},
            {id: "20", text: "Integrate: (e^(2x) – e^(-2x)) / (e^(2x) + e^(-2x))"},
            {id: "21", text: "Integrate: tan²(2x – 3)"},
            {id: "22", text: "Integrate: sec²(7 – 4x)"},
            {id: "23", text: "Integrate: sin⁻¹ x / √(1 – x²)"},
            {id: "24", text: "Integrate: (2cos x – 3sin x) / (6cos x + 4sin x)"},
            {id: "25", text: "Integrate: 1 / (cos² x (1 – tan x)²)"},
            {id: "26", text: "Integrate: cos √x / √x"},
            {id: "27", text: "Integrate: √(sin 2x) cos 2x"},
            {id: "28", text: "Integrate: cos x / √(1 + sin x)"},
            {id: "29", text: "Integrate: cot x log sin x"},
            {id: "30", text: "Integrate: sin x / (1 + cos x)"},
            {id: "31", text: "Integrate: sin x / (1 + cos x)²"},
            {id: "32", text: "Integrate: 1 / (1 + cot x)"},
            {id: "33", text: "Integrate: 1 / (1 – tan x)"},
            {id: "34", text: "Integrate: √tan x / (sin x cos x)"},
            {id: "35", text: "Integrate: (1 + log x)² / x"},
            {id: "36", text: "Integrate: (x + 1)(x + log x)² / x"},
            {id: "37", text: "Integrate: x³ sin (tan⁻¹ x⁴) / (1 + x⁸)"},
            {id: "38", text: "∫ (10x⁹ + 10^x log_e 10) / (x¹⁰ + 10^x) dx equals:\n(A) 10^x – x^10 + C\n(B) 10^x + x^10 + C\n(C) (10^x – x^10)⁻¹ + C\n(D) log (10^x + x^10) + C"},
            {id: "39", text: "∫ dx / (sin² x cos² x) equals:\n(A) tan x + cot x + C\n(B) tan x – cot x + C\n(C) tan x cot x + C\n(D) tan x – cot 2x + C"}
        ]
      }
    },
    {
        section_title: "7.3.2 Integration using trigonometric identities",
        content: "When the integrand involves some trigonometric functions, we use known identities to find the integral.",
        exercises: {
            title: "EXERCISE 7.3",
            questions: [
                {id: "1", text: "Integrate: sin²(2x + 5)"},
                {id: "2", text: "Integrate: sin 3x cos 4x"},
                {id: "3", text: "Integrate: cos 2x cos 4x cos 6x"},
                {id: "4", text: "Integrate: sin³(2x + 1)"},
                {id: "5", text: "Integrate: sin³ x cos³ x"},
                {id: "6", text: "Integrate: sin x sin 2x sin 3x"},
                {id: "7", text: "Integrate: sin 4x sin 8x"},
                {id: "8", text: "Integrate: (1 – cos x) / (1 + cos x)"},
                {id: "9", text: "Integrate: cos x / (1 + cos x)"},
                {id: "10", text: "Integrate: sin⁴ x"},
                {id: "11", text: "Integrate: cos⁴ 2x"},
                {id: "12", text: "Integrate: sin² x / (1 + cos x)"},
                {id: "13", text: "Integrate: (cos 2x – cos 2α) / (cos x – cos α)"},
                {id: "14", text: "Integrate: (cos x – sin x) / (1 + sin 2x)"},
                {id: "15", text: "Integrate: tan³ 2x sec 2x"},
                {id: "16", text: "Integrate: tan⁴ x"},
                {id: "17", text: "Integrate: (sin³ x + cos³ x) / (sin² x cos² x)"},
                {id: "18", text: "Integrate: (cos 2x + 2 sin² x) / cos² x"},
                {id: "19", text: "Integrate: 1 / (sin x cos³ x)"},
                {id: "20", text: "Integrate: cos 2x / (cos x + sin x)²"},
                {id: "21", text: "Integrate: sin⁻¹ (cos x)"},
                {id: "22", text: "Integrate: 1 / (cos(x – a) cos(x – b))"},
                {id: "23", text: "∫ (sin² x – cos² x) / (sin² x cos² x) dx is equal to:\n(A) tan x + cot x + C\n(B) tan x + cosec x + C\n(C) – tan x + cot x + C\n(D) tan x + sec x + C"},
                {id: "24", text: "∫ (e^x (1 + x)) / (cos² (e^x x)) dx equals:\n(A) – cot (ex^x) + C\n(B) tan (xe^x) + C\n(C) tan (e^x) + C\n(D) cot (e^x) + C"}
            ]
        }
    },
    {
        section_title: "7.4 Integrals of Some Particular Functions",
        content: "Standard formulae for integrals involving algebraic expressions, especially quadratics.",
        exercises: {
            title: "EXERCISE 7.4",
            questions: [
                {id: "1", text: "Integrate: 3x² / (x^6 + 1)"},
                {id: "2", text: "Integrate: 1 / √(1 + 4x²)"},
                {id: "3", text: "Integrate: 1 / √((2 – x)² + 1)"},
                {id: "4", text: "Integrate: 1 / √(9 – 25x²)"},
                {id: "5", text: "Integrate: 3x / (1 + 2x⁴)"},
                {id: "6", text: "Integrate: x² / (1 – x^6)"},
                {id: "7", text: "Integrate: (x – 1) / √(x² – 1)"},
                {id: "8", text: "Integrate: x² / √(x^6 + a^6)"},
                {id: "9", text: "Integrate: sec² x / √(tan² x + 4)"},
                {id: "10", text: "Integrate: 1 / √(x² + 2x + 2)"},
                {id: "11", text: "Integrate: 1 / (9x² + 6x + 5)"},
                {id: "12", text: "Integrate: 1 / √(7 – 6x – x²)"},
                {id: "13", text: "Integrate: 1 / √((x – 1)(x – 2))"},
                {id: "14", text: "Integrate: 1 / √(8 + 3x – x²)"},
                {id: "15", text: "Integrate: 1 / √((x – a)(x – b))"},
                {id: "16", text: "Integrate: (4x + 1) / √(2x² + x – 3)"},
                {id: "17", text: "Integrate: (x + 2) / √(x² – 1)"},
                {id: "18", text: "Integrate: (5x – 2) / (1 + 2x + 3x²)"},
                {id: "19", text: "Integrate: (6x + 7) / √((x – 5)(x – 4))"},
                {id: "20", text: "Integrate: (x + 2) / √(4x – x²)"},
                {id: "21", text: "Integrate: (x + 2) / √(x² + 2x + 3)"},
                {id: "22", text: "Integrate: (x + 3) / (x² – 2x – 5)"},
                {id: "23", text: "Integrate: (5x + 3) / √(x² + 4x + 10)"},
                {id: "24", text: "∫ dx / (x² + 2x + 2) equals:\n(A) x tan⁻¹(x + 1) + C\n(B) tan⁻¹(x + 1) + C\n(C) (x + 1) tan⁻¹ x + C\n(D) tan⁻¹ x + C"},
                {id: "25", text: "∫ dx / √(9x – 4x²) equals:\n(A) 1/9 sin⁻¹((9x-8)/8) + C\n(B) 1/2 sin⁻¹((8x-9)/9) + C\n(C) 1/3 sin⁻¹((9x-8)/8) + C\n(D) 1/2 sin⁻¹((9x-8)/9) + C"}
            ]
        }
    },
    {
        section_title: "7.5 Integration by Partial Fractions",
        content: "Integration of rational functions by decomposing them into partial fractions.",
        exercises: {
            title: "EXERCISE 7.5",
            questions: [
                {id: "1", text: "Integrate: x / ((x + 1)(x + 2))"},
                {id: "2", text: "Integrate: 1 / (x² – 9)"},
                {id: "3", text: "Integrate: (3x – 1) / ((x – 1)(x – 2)(x – 3))"},
                {id: "4", text: "Integrate: x / ((x – 1)(x – 2)(x – 3))"},
                {id: "5", text: "Integrate: 2x / (x² + 3x + 2)"},
                {id: "6", text: "Integrate: (1 – x²) / (x(1 – 2x))"},
                {id: "7", text: "Integrate: x / ((x² + 1)(x – 1))"},
                {id: "8", text: "Integrate: x / ((x – 1)² (x + 2))"},
                {id: "9", text: "Integrate: (3x + 5) / (x³ – x² – x + 1)"},
                {id: "10", text: "Integrate: (2x – 3) / ((x² – 1)(2x + 3))"},
                {id: "11", text: "Integrate: (5x) / ((x + 1)(x² – 4))"},
                {id: "12", text: "Integrate: (x³ + x + 1) / (x² – 1)"},
                {id: "13", text: "Integrate: 2 / ((1 – x)(1 + x²))"},
                {id: "14", text: "Integrate: (3x – 1) / (x + 2)²"},
                {id: "15", text: "Integrate: 1 / (x⁴ – 1)"},
                {id: "16", text: "Integrate: 1 / (x(x^n + 1))"},
                {id: "17", text: "Integrate: cos x / ((1 – sin x)(2 – sin x))"},
                {id: "18", text: "Integrate: ((x² + 1)(x² + 2)) / ((x² + 3)(x² + 4))"},
                {id: "19", text: "Integrate: 2x / ((x² + 1)(x² + 3))"},
                {id: "20", text: "Integrate: 1 / (x(x⁴ – 1))"},
                {id: "21", text: "Integrate: 1 / (e^x – 1)"},
                {id: "22", text: "∫ x dx / ((x – 1)(x – 2)) equals:\n(A) log | (x – 1)² / (x – 2) | + C\n(B) log | (x – 2)² / (x – 1) | + C\n(C) log | ((x – 1) / (x – 2))² | + C\n(D) log | (x – 1)(x – 2) | + C"},
                {id: "23", text: "∫ dx / (x(x² + 1)) equals:\n(A) log |x| – 1/2 log (x² + 1) + C\n(B) log |x| + 1/2 log (x² + 1) + C\n(C) – log |x| + 1/2 log (x² + 1) + C\n(D) 1/2 log |x| + log (x² + 1) + C"}
            ]
        }
    },
    {
        section_title: "7.6 Integration by Parts",
        content: "Integration of product of two functions.",
        exercises: {
            title: "EXERCISE 7.6",
            questions: [
                {id: "1", text: "Integrate: x sin x"},
                {id: "2", text: "Integrate: x sin 3x"},
                {id: "3", text: "Integrate: x² e^x"},
                {id: "4", text: "Integrate: x log x"},
                {id: "5", text: "Integrate: x log 2x"},
                {id: "6", text: "Integrate: x² log x"},
                {id: "7", text: "Integrate: x sin⁻¹ x"},
                {id: "8", text: "Integrate: x tan⁻¹ x"},
                {id: "9", text: "Integrate: x cos⁻¹ x"},
                {id: "10", text: "Integrate: (sin⁻¹ x)²"},
                {id: "11", text: "Integrate: (x cos⁻¹ x) / √(1 – x²)"},
                {id: "12", text: "Integrate: x sec² x"},
                {id: "13", text: "Integrate: tan⁻¹ x"},
                {id: "14", text: "Integrate: x (log x)²"},
                {id: "15", text: "Integrate: (x² + 1) log x"},
                {id: "16", text: "Integrate: e^x (sin x + cos x)"},
                {id: "17", text: "Integrate: (x e^x) / (1 + x)²"},
                {id: "18", text: "Integrate: e^x (1 + sin x) / (1 + cos x)"},
                {id: "19", text: "Integrate: e^x (1/x – 1/x²)"},
                {id: "20", text: "Integrate: (x – 3) e^x / (x – 1)³"},
                {id: "21", text: "Integrate: e^(2x) sin x"},
                {id: "22", text: "Integrate: sin⁻¹ (2x / (1 + x²))"},
                {id: "23", text: "∫ x² e^(x³) dx equals:\n(A) 1/3 e^(x³) + C\n(B) 1/3 e^(x²) + C\n(C) 1/2 e^(x³) + C\n(D) 1/2 e^(x²) + C"},
                {id: "24", text: "∫ e^x sec x (1 + tan x) dx equals:\n(A) e^x cos x + C\n(B) e^x sec x + C\n(C) e^x sin x + C\n(D) e^x tan x + C"}
            ]
        }
    },
    {
        section_title: "7.6.2 Integrals of some more types",
        content: "Integrals involving √(x² - a²), √(x² + a²), etc.",
        exercises: {
            title: "EXERCISE 7.7",
            questions: [
                {id: "1", text: "Integrate: √(4 – x²)"},
                {id: "2", text: "Integrate: √(1 – 4x²)"},
                {id: "3", text: "Integrate: √(x² + 4x + 6)"},
                {id: "4", text: "Integrate: √(x² + 4x + 1)"},
                {id: "5", text: "Integrate: √(1 – 4x – x²)"},
                {id: "6", text: "Integrate: √(x² + 4x – 5)"},
                {id: "7", text: "Integrate: √(1 + 3x – x²)"},
                {id: "8", text: "Integrate: √(x² + 3x)"},
                {id: "9", text: "Integrate: √(1 + x²/9)"},
                {id: "10", text: "∫ √(1 + x²) dx is equal to\n(A) x/2 √(1+x²) + 1/2 log |x + √(1+x²)| + C\n(B) 2/3 (1+x²)^(3/2) + C\n(C) 2/3 x(1+x²)^(3/2) + C\n(D) x²/2 √(1+x²) + 1/2 x² log |x + √(1+x²)| + C"},
                {id: "11", text: "∫ √(x² – 8x + 7) dx is equal to\n(A) 1/2 (x-4)√(x²-8x+7) + 9 log |x-4+√(x²-8x+7)| + C\n(B) 1/2 (x+4)√(x²-8x+7) + 9 log |x+4+√(x²-8x+7)| + C\n(C) 1/2 (x-4)√(x²-8x+7) - 3√2 log |x-4+√(x²-8x+7)| + C\n(D) 1/2 (x-4)√(x²-8x+7) - 9/2 log |x-4+√(x²-8x+7)| + C"}
            ]
        }
    },
    {
        section_title: "7.7 Definite Integral",
        content: "Definite integral as the limit of a sum.",
        exercises: {
            title: "EXERCISE 7.8",
            questions: [
                {id: "1", text: "Evaluate the definite integral as limit of sums: ∫[a to b] x dx"},
                {id: "2", text: "Evaluate the definite integral as limit of sums: ∫[0 to 5] (x + 1) dx"},
                {id: "3", text: "Evaluate the definite integral as limit of sums: ∫[2 to 3] x² dx"},
                {id: "4", text: "Evaluate the definite integral as limit of sums: ∫[1 to 4] (x² – x) dx"},
                {id: "5", text: "Evaluate the definite integral as limit of sums: ∫[-1 to 1] e^x dx"},
                {id: "6", text: "Evaluate the definite integral as limit of sums: ∫[0 to 4] (x + e^(2x)) dx"}
            ]
        }
    },
    {
        section_title: "7.8 Fundamental Theorem of Calculus",
        content: "Evaluation of definite integrals using anti-derivatives.",
        exercises: {
            title: "EXERCISE 7.9",
            questions: [
                {id: "1", text: "Evaluate the definite integral: ∫[-1 to 1] (x + 1) dx"},
                {id: "2", text: "Evaluate the definite integral: ∫[2 to 3] 1/x dx"},
                {id: "3", text: "Evaluate the definite integral: ∫[1 to 2] (4x³ – 5x² + 6x + 9) dx"},
                {id: "4", text: "Evaluate the definite integral: ∫[0 to π/4] sin 2x dx"},
                {id: "5", text: "Evaluate the definite integral: ∫[0 to π/2] cos 2x dx"},
                {id: "6", text: "Evaluate the definite integral: ∫[4 to 5] e^x dx"},
                {id: "7", text: "Evaluate the definite integral: ∫[0 to π/4] tan x dx"},
                {id: "8", text: "Evaluate the definite integral: ∫[π/6 to π/4] cosec x dx"},
                {id: "9", text: "Evaluate the definite integral: ∫[0 to 1] dx / √(1 – x²)"},
                {id: "10", text: "Evaluate the definite integral: ∫[0 to 1] dx / (1 + x²)"},
                {id: "11", text: "Evaluate the definite integral: ∫[2 to 3] dx / (x² – 1)"},
                {id: "12", text: "Evaluate the definite integral: ∫[0 to π/2] cos² x dx"},
                {id: "13", text: "Evaluate the definite integral: ∫[2 to 3] x dx / (x² + 1)"},
                {id: "14", text: "Evaluate the definite integral: ∫[0 to 1] (2x + 3) / (5x² + 1) dx"},
                {id: "15", text: "Evaluate the definite integral: ∫[0 to 1] x e^(x²) dx"},
                {id: "16", text: "Evaluate the definite integral: ∫[1 to 2] (5x²) / (x² + 4x + 3) dx"},
                {id: "17", text: "Evaluate the definite integral: ∫[0 to π/4] (2sec² x + x³ + 2) dx"},
                {id: "18", text: "Evaluate the definite integral: ∫[0 to π] (sin²(x/2) – cos²(x/2)) dx"},
                {id: "19", text: "Evaluate the definite integral: ∫[0 to 2] (6x + 3) / (x² + 4) dx"},
                {id: "20", text: "Evaluate the definite integral: ∫[0 to 1] (x e^x + sin(πx/4)) dx"},
                {id: "21", text: "∫[1 to √3] dx / (1 + x²) equals\n(A) π/3\n(B) 2π/3\n(C) π/6\n(D) π/12"},
                {id: "22", text: "∫[0 to 2/3] dx / (4 + 9x²) equals\n(A) π/6\n(B) π/12\n(C) π/24\n(D) π/4"}
            ]
        }
    },
    {
        section_title: "7.9 Evaluation of Definite Integrals by Substitution",
        content: "Changing the variable of integration and limits.",
        exercises: {
            title: "EXERCISE 7.10",
            questions: [
                {id: "1", text: "Evaluate the integral: ∫[0 to 1] x / (x² + 1) dx"},
                {id: "2", text: "Evaluate the integral: ∫[0 to π/2] √(sin φ) cos⁵ φ dφ"},
                {id: "3", text: "Evaluate the integral: ∫[0 to 1] sin⁻¹(2x / (1 + x²)) dx"},
                {id: "4", text: "Evaluate the integral: ∫[0 to 2] x√(x + 2) dx (Put x + 2 = t²)"},
                {id: "5", text: "Evaluate the integral: ∫[0 to π/2] sin x / (1 + cos² x) dx"},
                {id: "6", text: "Evaluate the integral: ∫[0 to 2] dx / (x + 4 – x²)"},
                {id: "7", text: "Evaluate the integral: ∫[-1 to 1] dx / (x² + 2x + 5)"},
                {id: "8", text: "Evaluate the integral: ∫[1 to 2] (1/x – 1/2x²) e^(2x) dx"},
                {id: "9", text: "The value of the integral ∫[1/3 to 1] ((x – x³)^(1/3) / x⁴) dx is\n(A) 6\n(B) 0\n(C) 3\n(D) 4"},
                {id: "10", text: "If f(x) = ∫[0 to x] t sin t dt, then f ′(x) is\n(A) cos x + x sin x\n(B) x sin x\n(C) x cos x\n(D) sin x + x cos x"}
            ]
        }
    },
    {
        section_title: "7.10 Some Properties of Definite Integrals",
        content: "Properties like P0 to P7 for definite integrals.",
        exercises: {
            title: "EXERCISE 7.11",
            questions: [
                {id: "1", text: "Evaluate: ∫[0 to π/2] cos² x dx"},
                {id: "2", text: "Evaluate: ∫[0 to π/2] √(sin x) / (√(sin x) + √(cos x)) dx"},
                {id: "3", text: "Evaluate: ∫[0 to π/2] sin^(3/2) x / (sin^(3/2) x + cos^(3/2) x) dx"},
                {id: "4", text: "Evaluate: ∫[0 to π/2] cos⁵ x / (sin⁵ x + cos⁵ x) dx"},
                {id: "5", text: "Evaluate: ∫[-5 to 5] |x + 2| dx"},
                {id: "6", text: "Evaluate: ∫[2 to 8] |x – 5| dx"},
                {id: "7", text: "Evaluate: ∫[0 to 1] x(1 – x)ⁿ dx"},
                {id: "8", text: "Evaluate: ∫[0 to π/4] log(1 + tan x) dx"},
                {id: "9", text: "Evaluate: ∫[0 to 2] x√(2 – x) dx"},
                {id: "10", text: "Evaluate: ∫[0 to π/2] (2log sin x – log sin 2x) dx"},
                {id: "11", text: "Evaluate: ∫[-π/2 to π/2] sin² x dx"},
                {id: "12", text: "Evaluate: ∫[0 to π] x dx / (1 + sin x)"},
                {id: "13", text: "Evaluate: ∫[-π/2 to π/2] sin⁷ x dx"},
                {id: "14", text: "Evaluate: ∫[0 to 2π] cos⁵ x dx"},
                {id: "15", text: "Evaluate: ∫[0 to π/2] (sin x – cos x) / (1 + sin x cos x) dx"},
                {id: "16", text: "Evaluate: ∫[0 to π] log(1 + cos x) dx"},
                {id: "17", text: "Evaluate: ∫[0 to a] √x / (√x + √(a – x)) dx"},
                {id: "18", text: "Evaluate: ∫[0 to 4] |x – 1| dx"},
                {id: "19", text: "Show that ∫[0 to a] f(x)g(x) dx = 2 ∫[0 to a] f(x) dx, if f and g are defined as f(x) = f(a – x) and g(x) + g(a – x) = 4"},
                {id: "20", text: "The value of ∫[-π/2 to π/2] (x³ + x cos x + tan⁵ x + 1) dx is\n(A) 0\n(B) 2\n(C) π\n(D) 1"},
                {id: "21", text: "The value of ∫[0 to π/2] log((4 + 3sin x)/(4 + 3cos x)) dx is\n(A) 2\n(B) 3/4\n(C) 0\n(D) -2"}
            ]
        }
    },
    {
        section_title: "Miscellaneous Examples",
        content: "Additional examples covering the entire chapter.",
        exercises: {
            title: "Miscellaneous Exercise on Chapter 7",
            questions: [
                {id: "1", text: "Integrate: 1 / (x – x³)"},
                {id: "2", text: "Integrate: 1 / √(x + a) + √(x + b)"},
                {id: "3", text: "Integrate: 1 / (x √(ax – x²)) [Hint: Put x = a/t]"},
                {id: "4", text: "Integrate: 1 / (x² (x⁴ + 1)^(3/4))"},
                {id: "5", text: "Integrate: 1 / (x^(1/2) + x^(1/3))"},
                {id: "6", text: "Integrate: 5x / ((x + 1)(x² + 9))"},
                {id: "7", text: "Integrate: sin x / sin(x – a)"},
                {id: "8", text: "Integrate: (e^(5 log x) – e^(4 log x)) / (e^(3 log x) – e^(2 log x))"},
                {id: "9", text: "Integrate: cos x / √(4 – sin² x)"},
                {id: "10", text: "Integrate: sin⁸ x – cos⁸ x / (1 – 2sin² x cos² x)"},
                {id: "11", text: "Integrate: 1 / (cos(x + a) cos(x + b))"},
                {id: "12", text: "Integrate: x³ / √(1 – x⁸)"},
                {id: "13", text: "Integrate: e^x / ((1 + e^x)(2 + e^x))"},
                {id: "14", text: "Integrate: 1 / (x² + 1)(x² + 4)"},
                {id: "15", text: "Integrate: cos³ x e^(log sin x)"},
                {id: "16", text: "Integrate: e^(3 log x) (x⁴ + 1)⁻¹"},
                {id: "17", text: "Integrate: f ′ (ax + b) [f (ax + b)]ⁿ"},
                {id: "18", text: "Integrate: 1 / √(sin³ x sin(x + α))"},
                {id: "19", text: "Integrate: (sin⁻¹ √x – cos⁻¹ √x) / (sin⁻¹ √x + cos⁻¹ √x), x ∈ [0, 1]"},
                {id: "20", text: "Integrate: √( (1 – √x) / (1 + √x) )"},
                {id: "21", text: "Integrate: (2 + sin 2x) / (1 + cos 2x) e^x"},
                {id: "22", text: "Integrate: x² / ((x + 1)²(x + 2))"},
                {id: "23", text: "Integrate: tan⁻¹ √((1 – x) / (1 + x))"},
                {id: "24", text: "Integrate: (√(x² + 1) [log(x² + 1) – 2log x]) / x⁴"},
                {id: "25", text: "Evaluate: ∫[π/2 to π] e^x ((1 – sin x) / (1 – cos x)) dx"},
                {id: "26", text: "Evaluate: ∫[0 to π/4] (sin x cos x) / (cos⁴ x + sin⁴ x) dx"},
                {id: "27", text: "Evaluate: ∫[0 to π/2] cos² x / (cos² x + 4 sin² x) dx"},
                {id: "28", text: "Evaluate: ∫[π/6 to π/3] (sin x + cos x) / √(sin 2x) dx"},
                {id: "29", text: "Evaluate: ∫[0 to 1] dx / (√(1 + x) – √x)"},
                {id: "30", text: "Evaluate: ∫[0 to π/4] (sin x + cos x) / (9 + 16 sin 2x) dx"},
                {id: "31", text: "Evaluate: ∫[0 to π/2] sin 2x tan⁻¹ (sin x) dx"},
                {id: "32", text: "Evaluate: ∫[0 to π] (x tan x) / (sec x + tan x) dx"},
                {id: "33", text: "Evaluate: ∫[1 to 4] [|x – 1| + |x – 2| + |x – 3|] dx"},
                {id: "34", text: "Prove: ∫[1 to 3] dx / (x²(x + 1)) = 2/3 + log(2/3)"},
                {id: "35", text: "Prove: ∫[0 to 1] x e^x dx = 1"},
                {id: "36", text: "Prove: ∫[-1 to 1] x¹⁷ cos⁴ x dx = 0"},
                {id: "37", text: "Prove: ∫[0 to π/2] sin³ x dx = 2/3"},
                {id: "38", text: "Prove: ∫[0 to π/4] 2 tan³ x dx = 1 – log 2"},
                {id: "39", text: "Prove: ∫[0 to 1] sin⁻¹ x dx = π/2 – 1"},
                {id: "40", text: "Evaluate ∫[0 to 1] e^(2 – 3x) dx as a limit of a sum."},
                {id: "41", text: "∫ dx / (e^x + e^(-x)) is equal to\n(A) tan⁻¹ (e^x) + C\n(B) tan⁻¹ (e^(-x)) + C\n(C) log (e^x – e^(-x)) + C\n(D) log (e^x + e^(-x)) + C"},
                {id: "42", text: "∫ (cos 2x) / (sin x + cos x)² dx is equal to\n(A) – 1 / (sin x + cos x) + C\n(B) log |sin x + cos x| + C\n(C) log |sin x – cos x| + C\n(D) 1 / (sin x + cos x)²"},
                {id: "43", text: "If f (a + b – x) = f (x), then ∫[a to b] x f(x) dx is equal to\n(A) (a+b)/2 ∫[a to b] f(b – x) dx\n(B) (a+b)/2 ∫[a to b] f(b + x) dx\n(C) (b-a)/2 ∫[a to b] f(x) dx\n(D) (a+b)/2 ∫[a to b] f(x) dx"},
                {id: "44", text: "The value of ∫[0 to 1] tan⁻¹ ((2x – 1) / (1 + x – x²)) dx is\n(A) 1\n(B) 0\n(C) –1\n(D) π/4"}
            ]
        }
    }
  ]
};
