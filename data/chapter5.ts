
export const chapter5 = {
  class: "2nd PUC",
  chapter_number: "5",
  chapter_title: "Continuity and Differentiability",
  sections: [
    {
      section_title: "5.1 Introduction",
      content: "This chapter is essentially a continuation of our study of differentiation of functions in Class XI. We introduce the very important concepts of continuity, differentiability and relations between them."
    },
    {
      section_title: "5.2 Continuity",
      content: "We start the section with two informal examples to get a feel of continuity.",
      definitions: [
        {
            id: "1",
            title: "Definition 1: Continuity at a Point",
            text: "Suppose f is a real function on a subset of the real numbers and let c be a point in the domain of f. Then f is continuous at c if lim(x→c) f(x) = f(c)."
        },
        {
            id: "2",
            title: "Definition 2: Continuity of a Function",
            text: "A real function f is said to be continuous if it is continuous at every point in the domain of f."
        }
      ],
      exercises: {
        title: "EXERCISE 5.1",
        questions: [
          { id: "1", text: "Prove that the function f(x) = 5x – 3 is continuous at x = 0, at x = – 3 and at x = 5." },
          { id: "2", text: "Examine the continuity of the function f(x) = 2x² – 1 at x = 3." },
          { id: "3", text: "Examine the following functions for continuity.\n(a) f(x) = x – 5\n(b) f(x) = 1/(x-5), x ≠ 5\n(c) f(x) = (x²-25)/(x+5), x ≠ -5\n(d) f(x) = | x – 5 |" },
          { id: "4", text: "Prove that the function f(x) = xⁿ is continuous at x = n, where n is a positive integer." },
          { id: "5", text: "Is the function f defined by f(x) = { x if x ≤ 1; 5 if x > 1 } continuous at x = 0? At x = 1? At x = 2?" },
          { id: "6", text: "Find all points of discontinuity of f, where f is defined by f(x) = { 2x+3 if x ≤ 2; 2x-3 if x > 2 }" },
          { id: "7", text: "Find all points of discontinuity of f, where f(x) = { |x|+3 if x ≤ -3; -2x if -3 < x < 3; 6x+2 if x ≥ 3 }" },
          { id: "8", text: "Find all points of discontinuity of f, where f(x) = { |x|/x if x ≠ 0; 0 if x = 0 }" },
          { id: "9", text: "Find all points of discontinuity of f, where f(x) = { x/|x| if x < 0; -1 if x ≥ 0 }" },
          { id: "10", text: "Find all points of discontinuity of f, where f(x) = { x+1 if x ≥ 1; x²+1 if x < 1 }" },
          { id: "11", text: "Find all points of discontinuity of f, where f(x) = { x³-3 if x ≤ 2; x²+1 if x > 2 }" },
          { id: "12", text: "Find all points of discontinuity of f, where f(x) = { x¹⁰-1 if x ≤ 1; x² if x > 1 }" },
          { id: "13", text: "Is the function defined by f(x) = { x+5 if x ≤ 1; x-5 if x > 1 } a continuous function?" },
          { id: "14", text: "Discuss the continuity of the function f, where f is defined by f(x) = { 3 if 0 ≤ x ≤ 1; 4 if 1 < x < 3; 5 if 3 ≤ x ≤ 10 }" },
          { id: "15", text: "Discuss the continuity of the function f, where f(x) = { 2x if x < 0; 0 if 0 ≤ x ≤ 1; 4x if x > 1 }" },
          { id: "16", text: "Discuss the continuity of the function f, where f(x) = { -2 if x ≤ -1; 2x if -1 < x ≤ 1; 2 if x > 1 }" },
          { id: "17", text: "Find the relationship between a and b so that the function f defined by f(x) = { ax+1 if x ≤ 3; bx+3 if x > 3 } is continuous at x = 3." },
          { id: "18", text: "For what value of λ is the function defined by f(x) = { λ(x²-2x) if x ≤ 0; 4x+1 if x > 0 } continuous at x = 0? What about continuity at x = 1?" },
          { id: "19", text: "Show that the function defined by g(x) = x – [x] is discontinuous at all integral points. Here [x] denotes the greatest integer less than or equal to x." },
          { id: "20", text: "Is the function defined by f(x) = x² – sin x + 5 continuous at x = π?" },
          { id: "21", text: "Discuss the continuity of the following functions:\n(a) f(x) = sin x + cos x\n(b) f(x) = sin x – cos x\n(c) f(x) = sin x . cos x" },
          { id: "22", text: "Discuss the continuity of the cosine, cosecant, secant and cotangent functions." },
          { id: "23", text: "Find all points of discontinuity of f, where f(x) = { sin x / x if x < 0; x+1 if x ≥ 0 }" },
          { id: "24", text: "Determine if f defined by f(x) = { x² sin(1/x) if x ≠ 0; 0 if x = 0 } is a continuous function?" },
          { id: "25", text: "Examine the continuity of f, where f is defined by f(x) = { sin x - cos x if x ≠ 0; -1 if x = 0 }" },
          { id: "26", text: "Find the value of k so that the function f is continuous at x = π/2: f(x) = { (k cos x)/(π-2x) if x ≠ π/2; 3 if x = π/2 }" },
          { id: "27", text: "Find the value of k so that the function f is continuous at x = 2: f(x) = { kx² if x ≤ 2; 3 if x > 2 }" },
          { id: "28", text: "Find the value of k so that the function f is continuous at x = π: f(x) = { kx+1 if x ≤ π; cos x if x > π }" },
          { id: "29", text: "Find the value of k so that the function f is continuous at x = 5: f(x) = { kx+1 if x ≤ 5; 3x-5 if x > 5 }" },
          { id: "30", text: "Find the values of a and b such that the function defined by f(x) = { 5 if x ≤ 2; ax+b if 2 < x < 10; 21 if x ≥ 10 } is a continuous function." },
          { id: "31", text: "Show that the function defined by f(x) = cos(x²) is a continuous function." },
          { id: "32", text: "Show that the function defined by f(x) = | cos x | is a continuous function." },
          { id: "33", text: "Examine that sin | x | is a continuous function." },
          { id: "34", text: "Find all the points of discontinuity of f defined by f(x) = | x | – | x + 1 |." }
        ]
      }
    },
    {
      section_title: "5.3 Differentiability",
      content: "Recall the following facts from previous class. We had defined the derivative of a real function as follows: Suppose f is a real function and c is a point in its domain. The derivative of f at c is defined by f'(c) = lim(h→0) [f(c+h) - f(c)]/h.",
      exercises: {
        title: "EXERCISE 5.2",
        questions: [
            {id: "1", text: "Differentiate the functions with respect to x: sin(x² + 5)" },
            {id: "2", text: "Differentiate the functions with respect to x: cos(sin x)" },
            {id: "3", text: "Differentiate the functions with respect to x: sin(ax + b)" },
            {id: "4", text: "Differentiate the functions with respect to x: sec(tan(√x))" },
            {id: "5", text: "Differentiate the functions with respect to x: sin(ax + b) / cos(cx + d)" },
            {id: "6", text: "Differentiate the functions with respect to x: cos(x³) . sin²(x⁵)" },
            {id: "7", text: "Differentiate the functions with respect to x: 2√(cot(x²))" },
            {id: "8", text: "Differentiate the functions with respect to x: cos(√x)" },
            {id: "9", text: "Prove that the function f given by f(x) = | x – 1|, x ∈ R is not differentiable at x = 1." },
            {id: "10", text: "Prove that the greatest integer function defined by f(x) = [x], 0 < x < 3 is not differentiable at x = 1 and x = 2." }
        ]
      }
    },
    {
        section_title: "5.3.2 Derivatives of implicit functions",
        content: "When a relationship between x and y is expressed in a way that it is easy to solve for y and write y = f(x), we say that y is given as an explicit function of x. Otherwise it is implicit.",
        exercises: {
            title: "EXERCISE 5.3",
            questions: [
                {id: "1", text: "Find dy/dx in the following: 2x + 3y = sin x"},
                {id: "2", text: "Find dy/dx in the following: 2x + 3y = sin y"},
                {id: "3", text: "Find dy/dx in the following: ax + by² = cos y"},
                {id: "4", text: "Find dy/dx in the following: xy + y² = tan x + y"},
                {id: "5", text: "Find dy/dx in the following: x² + xy + y² = 100"},
                {id: "6", text: "Find dy/dx in the following: x³ + x²y + xy² + y³ = 81"},
                {id: "7", text: "Find dy/dx in the following: sin² y + cos xy = κ"},
                {id: "8", text: "Find dy/dx in the following: sin² x + cos² y = 1"},
                {id: "9", text: "Find dy/dx in the following: y = sin⁻¹(2x/(1+x²))"},
                {id: "10", text: "Find dy/dx in the following: y = tan⁻¹((3x-x³)/(1-3x²)), -1/√3 < x < 1/√3"},
                {id: "11", text: "Find dy/dx in the following: y = cos⁻¹((1-x²)/(1+x²)), 0 < x < 1"},
                {id: "12", text: "Find dy/dx in the following: y = sin⁻¹((1-x²)/(1+x²)), 0 < x < 1"},
                {id: "13", text: "Find dy/dx in the following: y = cos⁻¹(2x/(1+x²)), -1 < x < 1"},
                {id: "14", text: "Find dy/dx in the following: y = sin⁻¹(2x√(1-x²)), -1/√2 < x < 1/√2"},
                {id: "15", text: "Find dy/dx in the following: y = sec⁻¹(1/(2x²-1)), 0 < x < 1/√2"}
            ]
        }
    },
    {
        section_title: "5.4 Exponential and Logarithmic Functions",
        content: "Exponential function with base 10 is called the common exponential function. Using e as the base we obtain the natural exponential function y = eˣ.",
        definitions: [
            {id: "3", title: "Definition 3: Exponential Function", text: "The exponential function with positive base b > 1 is the function y = f(x) = bˣ"},
            {id: "4", title: "Definition 4: Logarithm", text: "Let b > 1 be a real number. Then we say logarithm of a to base b is x if bˣ = a. Logarithm of a to base b is denoted by log_b a."}
        ],
        exercises: {
            title: "EXERCISE 5.4",
            questions: [
                {id: "1", text: "Differentiate the following w.r.t. x: eˣ / sin x"},
                {id: "2", text: "Differentiate the following w.r.t. x: e^(sin⁻¹ x)"},
                {id: "3", text: "Differentiate the following w.r.t. x: e^(x³)"},
                {id: "4", text: "Differentiate the following w.r.t. x: sin (tan⁻¹ e⁻ˣ)"},
                {id: "5", text: "Differentiate the following w.r.t. x: log (cos eˣ)"},
                {id: "6", text: "Differentiate the following w.r.t. x: eˣ + e^(x²) + ... + e^(x⁵)"},
                {id: "7", text: "Differentiate the following w.r.t. x: √(e^√x), x > 0"},
                {id: "8", text: "Differentiate the following w.r.t. x: log (log x), x > 1"},
                {id: "9", text: "Differentiate the following w.r.t. x: (cos x) / (log x), x > 0"},
                {id: "10", text: "Differentiate the following w.r.t. x: cos (log x + eˣ), x > 0"}
            ]
        }
    },
    {
        section_title: "5.5 Logarithmic Differentiation",
        content: "In this section, we will learn to differentiate certain special class of functions given in the form y = f(x) = [u(x)]^v(x). By taking logarithm (to base e) the above may be rewritten as log y = v(x) log [u(x)].",
        exercises: {
            title: "EXERCISE 5.5",
            questions: [
                {id: "1", text: "Differentiate w.r.t. x: cos x . cos 2x . cos 3x"},
                {id: "2", text: "Differentiate w.r.t. x: √((x-1)(x-2) / (x-3)(x-4)(x-5))"},
                {id: "3", text: "Differentiate w.r.t. x: (log x)^(cos x)"},
                {id: "4", text: "Differentiate w.r.t. x: xˣ – 2^(sin x)"},
                {id: "5", text: "Differentiate w.r.t. x: (x + 3)² . (x + 4)³ . (x + 5)⁴"},
                {id: "6", text: "Differentiate w.r.t. x: (x + 1/x)ˣ + x^(1 + 1/x)"},
                {id: "7", text: "Differentiate w.r.t. x: (log x)ˣ + x^(log x)"},
                {id: "8", text: "Differentiate w.r.t. x: (sin x)ˣ + sin⁻¹ √x"},
                {id: "9", text: "Differentiate w.r.t. x: x^(sin x) + (sin x)^(cos x)"},
                {id: "10", text: "Differentiate w.r.t. x: x^(x cos x) + (x² + 1)/(x² - 1)"},
                {id: "11", text: "Differentiate w.r.t. x: (x cos x)ˣ + (x sin x)^(1/x)"},
                {id: "12", text: "Find dy/dx of the function: xʸ + yˣ = 1"},
                {id: "13", text: "Find dy/dx of the function: yˣ = xʸ"},
                {id: "14", text: "Find dy/dx of the function: (cos x)ʸ = (cos y)ˣ"},
                {id: "15", text: "Find dy/dx of the function: xy = e^(x-y)"},
                {id: "16", text: "Find the derivative of the function given by f(x) = (1 + x) (1 + x²) (1 + x⁴) (1 + x⁸) and hence find f ′(1)."},
                {id: "17", text: "Differentiate (x² – 5x + 8) (x³ + 7x + 9) in three ways mentioned below:\n(i) by using product rule\n(ii) by expanding the product to obtain a single polynomial.\n(iii) by logarithmic differentiation.\nDo they all give the same answer?"},
                {id: "18", text: "If u, v and w are functions of x, then show that d/dx (u. v. w) = du/dx v. w + u . dv/dx . w + u . v dw/dx in two ways - first by repeated application of product rule, second by logarithmic differentiation."}
            ]
        }
    },
    {
        section_title: "5.6 Derivatives of Functions in Parametric Forms",
        content: "Sometimes the relation between two variables is neither explicit nor implicit, but some link of a third variable with each of the two variables, separately, establishes a relation between the first two variables. The third variable is called the parameter.",
        exercises: {
            title: "EXERCISE 5.6",
            questions: [
                {id: "1", text: "If x and y are connected parametrically by the equations, without eliminating the parameter, Find dy/dx: x = 2at², y = at⁴"},
                {id: "2", text: "If x and y are connected parametrically by the equations, without eliminating the parameter, Find dy/dx: x = a cos θ, y = b cos θ"},
                {id: "3", text: "If x and y are connected parametrically by the equations, without eliminating the parameter, Find dy/dx: x = sin t, y = cos 2t"},
                {id: "4", text: "If x and y are connected parametrically by the equations, without eliminating the parameter, Find dy/dx: x = 4t, y = 4/t"},
                {id: "5", text: "If x and y are connected parametrically by the equations, without eliminating the parameter, Find dy/dx: x = cos θ – cos 2θ, y = sin θ – sin 2θ"},
                {id: "6", text: "If x and y are connected parametrically by the equations, without eliminating the parameter, Find dy/dx: x = a (θ – sin θ), y = a (1 + cos θ)"},
                {id: "7", text: "If x and y are connected parametrically by the equations, without eliminating the parameter, Find dy/dx: x = sin³ t / √(cos 2t), y = cos³ t / √(cos 2t)"},
                {id: "8", text: "If x and y are connected parametrically by the equations, without eliminating the parameter, Find dy/dx: x = a (cos t + log tan t/2), y = a sin t"},
                {id: "9", text: "If x and y are connected parametrically by the equations, without eliminating the parameter, Find dy/dx: x = a sec θ, y = b tan θ"},
                {id: "10", text: "If x and y are connected parametrically by the equations, without eliminating the parameter, Find dy/dx: x = a (cos θ + θ sin θ), y = a (sin θ – θ cos θ)"},
                {id: "11", text: "If x = √(a^(sin⁻¹ t)), y = √(a^(cos⁻¹ t)), show that dy/dx = -y/x"}
            ]
        }
    },
    {
        section_title: "5.7 Second Order Derivative",
        content: "If dy/dx = f'(x) is differentiable, we may differentiate it again w.r.t. x. Then, the left hand side becomes d/dx (dy/dx) which is called the second order derivative of y w.r.t. x and is denoted by d²y/dx².",
        exercises: {
            title: "EXERCISE 5.7",
            questions: [
                {id: "1", text: "Find the second order derivatives of the function: x² + 3x + 2"},
                {id: "2", text: "Find the second order derivatives of the function: x²⁰"},
                {id: "3", text: "Find the second order derivatives of the function: x . cos x"},
                {id: "4", text: "Find the second order derivatives of the function: log x"},
                {id: "5", text: "Find the second order derivatives of the function: x³ log x"},
                {id: "6", text: "Find the second order derivatives of the function: eˣ sin 5x"},
                {id: "7", text: "Find the second order derivatives of the function: e⁶ˣ cos 3x"},
                {id: "8", text: "Find the second order derivatives of the function: tan⁻¹ x"},
                {id: "9", text: "Find the second order derivatives of the function: log (log x)"},
                {id: "10", text: "Find the second order derivatives of the function: sin (log x)"},
                {id: "11", text: "If y = 5 cos x – 3 sin x, prove that d²y/dx² + y = 0"},
                {id: "12", text: "If y = cos⁻¹ x, Find d²y/dx² in terms of y alone."},
                {id: "13", text: "If y = 3 cos (log x) + 4 sin (log x), show that x² y₂ + xy₁ + y = 0"},
                {id: "14", text: "If y = Aeᵐˣ + Beⁿˣ, show that d²y/dx² - (m + n) dy/dx + mny = 0"},
                {id: "15", text: "If y = 500e⁷ˣ + 600e⁻⁷ˣ, show that d²y/dx² = 49y"},
                {id: "16", text: "If eʸ (x + 1) = 1, show that d²y/dx² = (dy/dx)²"},
                {id: "17", text: "If y = (tan⁻¹ x)², show that (x² + 1)² y₂ + 2x (x² + 1) y₁ = 2"}
            ]
        }
    },
    {
        section_title: "5.8 Mean Value Theorem",
        content: "Rolle's Theorem and Mean Value Theorem (MVT).",
        exercises: {
            title: "EXERCISE 5.8",
            questions: [
                {id: "1", text: "Verify Rolle’s theorem for the function f(x) = x² + 2x – 8, x ∈ [– 4, 2]."},
                {id: "2", text: "Examine if Rolle’s theorem is applicable to any of the following functions. Can you say some thing about the converse of Rolle’s theorem from these example?\n(i) f(x) = [x] for x ∈ [5, 9]\n(ii) f(x) = [x] for x ∈ [– 2, 2]\n(iii) f(x) = x² – 1 for x ∈ [1, 2]"},
                {id: "3", text: "If f : [– 5, 5] → R is a differentiable function and if f′(x) does not vanish anywhere, then prove that f(– 5) ≠ f(5)."},
                {id: "4", text: "Verify Mean Value Theorem, if f(x) = x² – 4x – 3 in the interval [a, b], where a = 1 and b = 4."},
                {id: "5", text: "Verify Mean Value Theorem, if f(x) = x³ – 5x² – 3x in the interval [a, b], where a = 1 and b = 3. Find all c ∈ (1, 3) for which f′(c) = 0."},
                {id: "6", text: "Examine the applicability of Mean Value Theorem for all three functions given in the above exercise 2."}
            ]
        }
    },
    {
        section_title: "Miscellaneous Examples",
        content: "Miscellaneous examples for Chapter 5.",
        exercises: {
            title: "Miscellaneous Exercise on Chapter 5",
            questions: [
                {id: "1", text: "Differentiate w.r.t. x the function: (3x² – 9x + 5)⁹"},
                {id: "2", text: "Differentiate w.r.t. x the function: sin³ x + cos⁶ x"},
                {id: "3", text: "Differentiate w.r.t. x the function: (5x)^(3 cos 2x)"},
                {id: "4", text: "Differentiate w.r.t. x the function: sin⁻¹(x√x), 0 ≤ x ≤ 1"},
                {id: "5", text: "Differentiate w.r.t. x the function: cos⁻¹(x/2) / √(2x + 7), – 2 < x < 2"},
                {id: "6", text: "Differentiate w.r.t. x the function: cot⁻¹[ (√(1+sin x) + √(1-sin x)) / (√(1+sin x) - √(1-sin x)) ], 0 < x < π/2"},
                {id: "7", text: "Differentiate w.r.t. x the function: (log x)^(log x), x > 1"},
                {id: "8", text: "Differentiate w.r.t. x the function: cos (a cos x + b sin x), for some constant a and b."},
                {id: "9", text: "Differentiate w.r.t. x the function: (sin x – cos x)^(sin x – cos x), π/4 < x < 3π/4"},
                {id: "10", text: "Differentiate w.r.t. x the function: xˣ + x^a + aˣ + a^a, for some fixed a > 0 and x > 0"},
                {id: "11", text: "Differentiate w.r.t. x the function: x^(x²-3) + (x-3)^(x²), for x > 3"},
                {id: "12", text: "Find dy/dx, if y = 12 (1 – cos t), x = 10 (t – sin t), -π/2 < t < π/2"},
                {id: "13", text: "Find dy/dx, if y = sin⁻¹ x + sin⁻¹ √(1-x²), 0 < x < 1"},
                {id: "14", text: "If x√(1+y) + y√(1+x) = 0, for , – 1 < x < 1, prove that dy/dx = -1 / (1+x)²"},
                {id: "15", text: "If (x – a)² + (y – b)² = c², for some c > 0, prove that [1 + (dy/dx)²]^(3/2) / (d²y/dx²) is a constant independent of a and b."},
                {id: "16", text: "If cos y = x cos (a + y), with cos a ≠ ± 1, prove that dy/dx = cos²(a+y) / sin a."},
                {id: "17", text: "If x = a (cos t + t sin t) and y = a (sin t – t cos t), find d²y/dx²."},
                {id: "18", text: "If f(x) = | x |³, show that f\"(x) exists for all real x and find it."},
                {id: "19", text: "Using mathematical induction prove that d/dx (xⁿ) = nxⁿ⁻¹ for all positive integers n."},
                {id: "20", text: "Using the fact that sin (A + B) = sin A cos B + cos A sin B and the differentiation, obtain the sum formula for cosines."},
                {id: "21", text: "Does there exist a function which is continuous everywhere but not differentiable at exactly two points? Justify your answer."},
                {id: "22", text: "If y = | f(x) g(x) h(x); l m n; a b c |, prove that dy/dx = | f'(x) g'(x) h'(x); l m n; a b c |"},
                {id: "23", text: "If y = e^(a cos⁻¹ x), – 1 ≤ x ≤ 1, show that (1 – x²) d²y/dx² - x dy/dx - a²y = 0"}
            ]
        }
    }
  ]
};
