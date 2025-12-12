
export const chapter9 = {
  class: "2nd PUC",
  chapter_number: "9",
  chapter_title: "Differential Equations",
  sections: [
    {
      section_title: "9.1 Introduction",
      content: "An equation involving derivative (derivatives) of the dependent variable with respect to independent variable (variables) is called a differential equation."
    },
    {
      section_title: "9.2 Basic Concepts",
      content: "Order and degree of a differential equation.",
      definitions: [
        {id: "1", title: "Order", text: "Order of a differential equation is defined as the order of the highest order derivative of the dependent variable with respect to the independent variable involved in the given differential equation."},
        {id: "2", title: "Degree", text: "By the degree of a differential equation, when it is a polynomial equation in derivatives, we mean the highest power (positive integral index) of the highest order derivative involved in the given differential equation."}
      ],
      exercises: {
        title: "EXERCISE 9.1",
        questions: [
          { id: "1", text: "Determine order and degree (if defined): d⁴y/dx⁴ + sin(y''') = 0" },
          { id: "2", text: "Determine order and degree (if defined): y' + 5y = 0" },
          { id: "3", text: "Determine order and degree (if defined): (ds/dt)⁴ + 3s d²s/dt² = 0" },
          { id: "4", text: "Determine order and degree (if defined): (d²y/dx²)² + cos(dy/dx) = 0" },
          { id: "5", text: "Determine order and degree (if defined): d²y/dx² = cos 3x + sin 3x" },
          { id: "6", text: "Determine order and degree (if defined): (y''')² + (y'')³ + (y')⁴ + y⁵ = 0" },
          { id: "7", text: "Determine order and degree (if defined): y''' + 2y'' + y' = 0" },
          { id: "8", text: "Determine order and degree (if defined): y' + y = e^x" },
          { id: "9", text: "Determine order and degree (if defined): y'' + (y')² + 2y = 0" },
          { id: "10", text: "Determine order and degree (if defined): y'' + 2y' + sin y = 0" },
          { id: "11", text: "The degree of the differential equation (d²y/dx²)³ + (dy/dx)² + sin(dy/dx) + 1 = 0 is\n(A) 3\n(B) 2\n(C) 1\n(D) not defined" },
          { id: "12", text: "The order of the differential equation 2x² d²y/dx² - 3 dy/dx + y = 0 is\n(A) 2\n(B) 1\n(C) 0\n(D) not defined" }
        ]
      }
    },
    {
      section_title: "9.3 General and Particular Solutions of a Differential Equation",
      content: "The solution which contains arbitrary constants is called the general solution. The solution free from arbitrary constants is called a particular solution.",
      exercises: {
        title: "EXERCISE 9.2",
        questions: [
          { id: "1", text: "Verify that y = e^x + 1 is a solution of y'' – y' = 0" },
          { id: "2", text: "Verify that y = x² + 2x + C is a solution of y' – 2x – 2 = 0" },
          { id: "3", text: "Verify that y = cos x + C is a solution of y' + sin x = 0" },
          { id: "4", text: "Verify that y = √(1 + x²) is a solution of y' = xy / (1 + x²)" },
          { id: "5", text: "Verify that y = Ax is a solution of xy' = y (x ≠ 0)" },
          { id: "6", text: "Verify that y = x sin x is a solution of xy' = y + x √(x² – y²)" },
          { id: "7", text: "Verify that xy = log y + C is a solution of y' = y² / (1 – xy) (xy ≠ 1)" },
          { id: "8", text: "Verify that y – cos y = x is a solution of (y sin y + cos y + x) y' = y" },
          { id: "9", text: "Verify that x + y = tan⁻¹y is a solution of y²y' + y² + 1 = 0" },
          { id: "10", text: "Verify that y = √(a² – x²) is a solution of x + y dy/dx = 0 (y ≠ 0)" },
          { id: "11", text: "The number of arbitrary constants in the general solution of a differential equation of fourth order are:\n(A) 0\n(B) 2\n(C) 3\n(D) 4" },
          { id: "12", text: "The number of arbitrary constants in the particular solution of a differential equation of third order are:\n(A) 3\n(B) 2\n(C) 1\n(D) 0" }
        ]
      }
    },
    {
      section_title: "9.4 Formation of a Differential Equation whose General Solution is given",
      content: "To form a differential equation from a given function, we differentiate the function successively as many times as the number of arbitrary constants and then eliminate the constants.",
      exercises: {
        title: "EXERCISE 9.3",
        questions: [
          { id: "1", text: "Form a differential equation representing the given family of curves: x/a + y/b = 1" },
          { id: "2", text: "Form a differential equation representing the given family of curves: y² = a(b² – x²)" },
          { id: "3", text: "Form a differential equation representing the given family of curves: y = a e^(3x) + b e^(– 2x)" },
          { id: "4", text: "Form a differential equation representing the given family of curves: y = e^(2x) (a + bx)" },
          { id: "5", text: "Form a differential equation representing the given family of curves: y = e^x (a cos x + b sin x)" },
          { id: "6", text: "Form the differential equation of the family of circles touching the y-axis at origin." },
          { id: "7", text: "Form the differential equation of the family of parabolas having vertex at origin and axis along positive y-axis." },
          { id: "8", text: "Form the differential equation of the family of ellipses having foci on y-axis and centre at origin." },
          { id: "9", text: "Form the differential equation of the family of hyperbolas having foci on x-axis and centre at origin." },
          { id: "10", text: "Form the differential equation of the family of circles having centre on y-axis and radius 3 units." },
          { id: "11", text: "Which of the following differential equations has y = c₁e^x + c₂e^(-x) as the general solution?\n(A) d²y/dx² + y = 0\n(B) d²y/dx² - y = 0\n(C) d²y/dx² + 1 = 0\n(D) d²y/dx² - 1 = 0" },
          { id: "12", text: "Which of the following differential equations has y = x as one of its particular solution?\n(A) d²y/dx² - x² dy/dx + xy = x\n(B) d²y/dx² + x dy/dx + xy = x\n(C) d²y/dx² - x² dy/dx + xy = 0\n(D) d²y/dx² + x dy/dx + xy = 0" }
        ]
      }
    },
    {
      section_title: "9.5 Methods of Solving First Order, First Degree Differential Equations",
      content: "Differential equations with variables separable.",
      exercises: {
        title: "EXERCISE 9.4",
        questions: [
          { id: "1", text: "Find the general solution: dy/dx = (1 – cos x) / (1 + cos x)" },
          { id: "2", text: "Find the general solution: dy/dx = √(4 – y²) (– 2 < y < 2)" },
          { id: "3", text: "Find the general solution: dy/dx + y = 1 (y ≠ 1)" },
          { id: "4", text: "Find the general solution: sec² x tan y dx + sec² y tan x dy = 0" },
          { id: "5", text: "Find the general solution: (e^x + e^(-x)) dy – (e^x – e^(-x)) dx = 0" },
          { id: "6", text: "Find the general solution: dy/dx = (1 + x²)(1 + y²)" },
          { id: "7", text: "Find the general solution: y log y dx – x dy = 0" },
          { id: "8", text: "Find the general solution: x⁵ dy/dx = – y⁵" },
          { id: "9", text: "Find the general solution: dy/dx = sin⁻¹ x" },
          { id: "10", text: "Find the general solution: e^x tan y dx + (1 – e^x) sec² y dy = 0" },
          { id: "11", text: "Find a particular solution: (x³ + x² + x + 1) dy/dx = 2x² + x; y = 1 when x = 0" },
          { id: "12", text: "Find a particular solution: x(x² – 1) dy/dx = 1; y = 0 when x = 2" },
          { id: "13", text: "Find a particular solution: cos(dy/dx) = a (a ∈ R); y = 1 when x = 0" },
          { id: "14", text: "Find a particular solution: dy/dx = y tan x; y = 1 when x = 0" },
          { id: "15", text: "Find the equation of a curve passing through the point (0, 0) and whose differential equation is y' = e^x sin x." },
          { id: "16", text: "For the differential equation xy dy/dx = (x + 2)(y + 2), find the solution curve passing through the point (1, –1)." },
          { id: "17", text: "Find the equation of a curve passing through the point (0, –2) given that at any point (x, y) on the curve, the product of the slope of its tangent and y coordinate of the point is equal to the x coordinate of the point." },
          { id: "18", text: "At any point (x, y) of a curve, the slope of the tangent is twice the slope of the line segment joining the point of contact to the point (– 4, –3). Find the equation of the curve given that it passes through (–2, 1)." },
          { id: "19", text: "The volume of spherical balloon being inflated changes at a constant rate. If initially its radius is 3 units and after 3 seconds it is 6 units. Find the radius of balloon after t seconds." },
          { id: "20", text: "In a bank, principal increases continuously at the rate of r% per year. Find the value of r if Rs 100 double itself in 10 years (log_e 2 = 0.6931)." },
          { id: "21", text: "In a bank, principal increases continuously at the rate of 5% per year. An amount of Rs 1000 is deposited with this bank, how much will it worth after 10 years (e^0.5 = 1.648)." },
          { id: "22", text: "In a culture, the bacteria count is 1,00,000. The number is increased by 10% in 2 hours. In how many hours will the count reach 2,00,000, if the rate of growth of bacteria is proportional to the number present?" },
          { id: "23", text: "The general solution of the differential equation dy/dx = e^(x+y) is\n(A) e^x + e^(-y) = C\n(B) e^x + e^y = C\n(C) e^(-x) + e^y = C\n(D) e^(-x) + e^(-y) = C" }
        ]
      }
    },
    {
      section_title: "9.5.2 Homogeneous differential equations",
      content: "A differential equation of the form dy/dx = F(x, y) is said to be homogenous if F(x, y) is a homogenous function of degree zero.",
      exercises: {
        title: "EXERCISE 9.5",
        questions: [
          { id: "1", text: "Show that the given differential equation is homogeneous and solve: (x² + xy) dy = (x² + y²) dx" },
          { id: "2", text: "Show that the given differential equation is homogeneous and solve: y' = (x + y) / x" },
          { id: "3", text: "Show that the given differential equation is homogeneous and solve: (x – y) dy – (x + y) dx = 0" },
          { id: "4", text: "Show that the given differential equation is homogeneous and solve: (x² – y²) dx + 2xy dy = 0" },
          { id: "5", text: "Show that the given differential equation is homogeneous and solve: x² dy/dx = x² – 2y² + xy" },
          { id: "6", text: "Show that the given differential equation is homogeneous and solve: x dy – y dx = √(x² + y²) dx" },
          { id: "7", text: "Show that the given differential equation is homogeneous and solve: {x cos(y/x) + y sin(y/x)} y dx = {y sin(y/x) - x cos(y/x)} x dy" },
          { id: "8", text: "Show that the given differential equation is homogeneous and solve: x dy/dx - y + x sin(y/x) = 0" },
          { id: "9", text: "Show that the given differential equation is homogeneous and solve: y dx + x log(y/x) dy - 2x dy = 0" },
          { id: "10", text: "Show that the given differential equation is homogeneous and solve: (1 + e^(x/y)) dx + e^(x/y) (1 - x/y) dy = 0" },
          { id: "11", text: "Find the particular solution: (x + y) dy + (x – y) dx = 0; y = 1 when x = 1" },
          { id: "12", text: "Find the particular solution: x² dy + (xy + y²) dx = 0; y = 1 when x = 1" },
          { id: "13", text: "Find the particular solution: [x sin²(y/x) - y] dx + x dy = 0; y = π/4 when x = 1" },
          { id: "14", text: "Find the particular solution: dy/dx - y/x + cosec(y/x) = 0; y = 0 when x = 1" },
          { id: "15", text: "Find the particular solution: 2xy + y² - 2x² dy/dx = 0; y = 2 when x = 1" },
          { id: "16", text: "A homogeneous differential equation of the form dx/dy = h(x/y) can be solved by making the substitution.\n(A) y = vx\n(B) v = yx\n(C) x = vy\n(D) x = v" },
          { id: "17", text: "Which of the following is a homogeneous differential equation?\n(A) (4x + 6y + 5) dy – (3y + 2x + 4) dx = 0\n(B) (xy) dx – (x³ + y³) dy = 0\n(C) (x³ + 2y²) dx + 2xy dy = 0\n(D) y² dx + (x² – xy – y²) dy = 0" }
        ]
      }
    },
    {
      section_title: "9.5.3 Linear differential equations",
      content: "A differential equation of the form dy/dx + Py = Q, where P and Q are constants or functions of x only, is known as a first order linear differential equation.",
      exercises: {
        title: "EXERCISE 9.6",
        questions: [
          { id: "1", text: "Find the general solution: dy/dx + 2y = sin x" },
          { id: "2", text: "Find the general solution: dy/dx + 3y = e^(-2x)" },
          { id: "3", text: "Find the general solution: dy/dx + y/x = x²" },
          { id: "4", text: "Find the general solution: dy/dx + (sec x) y = tan x (0 ≤ x < π/2)" },
          { id: "5", text: "Find the general solution: cos² x dy/dx + y = tan x (0 ≤ x < π/2)" },
          { id: "6", text: "Find the general solution: x dy/dx + 2y = x² log x" },
          { id: "7", text: "Find the general solution: x log x dy/dx + y = 2/x log x" },
          { id: "8", text: "Find the general solution: (1 + x²) dy + 2xy dx = cot x dx (x ≠ 0)" },
          { id: "9", text: "Find the general solution: x dy/dx + y - x + xy cot x = 0 (x ≠ 0)" },
          { id: "10", text: "Find the general solution: (x + y) dy/dx = 1" },
          { id: "11", text: "Find the general solution: y dx + (x – y²) dy = 0" },
          { id: "12", text: "Find the general solution: (x + 3y²) dy/dx = y (y > 0)." },
          { id: "13", text: "Find a particular solution: dy/dx + 2y tan x = sin x; y = 0 when x = π/3" },
          { id: "14", text: "Find a particular solution: (1 + x²) dy/dx + 2xy = 1/(1+x²); y = 0 when x = 1" },
          { id: "15", text: "Find a particular solution: dy/dx - 3y cot x = sin 2x; y = 2 when x = π/2" },
          { id: "16", text: "Find the equation of a curve passing through the origin given that the slope of the tangent to the curve at any point (x, y) is equal to the sum of the coordinates of the point." },
          { id: "17", text: "Find the equation of a curve passing through the point (0, 2) given that the sum of the coordinates of any point on the curve exceeds the magnitude of the slope of the tangent to the curve at that point by 5." },
          { id: "18", text: "The Integrating Factor of the differential equation x dy/dx - y = 2x² is\n(A) e^(-x)\n(B) e^(-y)\n(C) 1/x\n(D) x" },
          { id: "19", text: "The Integrating Factor of the differential equation (1 – y²) dx/dy + yx = ay (-1 < y < 1) is\n(A) 1/(y²-1)\n(B) 1/√(y²-1)\n(C) 1/(1-y²)\n(D) 1/√(1-y²)" }
        ]
      }
    },
    {
      section_title: "Miscellaneous Examples",
      content: "Miscellaneous examples on Differential Equations.",
      exercises: {
        title: "Miscellaneous Exercise on Chapter 9",
        questions: [
          { id: "1", text: "For each of the differential equations given below, indicate its order and degree (if defined).\n(i) d²y/dx² + 5x (dy/dx)² - 6y = log x\n(ii) (dy/dx)³ - 4 (dy/dx)² + 7y = sin x\n(iii) d⁴y/dx⁴ - sin(d³y/dx³) = 0" },
          { id: "2", text: "For each of the exercises given below, verify that the given function (implicit or explicit) is a solution of the corresponding differential equation.\n(i) xy = a e^x + b e^(-x) + x² : x d²y/dx² + 2 dy/dx - xy + x² - 2 = 0\n(ii) y = e^x (a cos x + b sin x) : d²y/dx² - 2 dy/dx + 2y = 0\n(iii) y = x sin 3x : d²y/dx² + 9y - 6 cos 3x = 0\n(iv) x² = 2y² log y : (x² + y²) dy/dx - xy = 0" },
          { id: "3", text: "Form the differential equation representing the family of curves given by (x – a)² + 2y² = a², where a is an arbitrary constant." },
          { id: "4", text: "Prove that x² – y² = c (x² + y²)² is the general solution of differential equation (x³ – 3x y²) dx = (y³ – 3x²y) dy, where c is a parameter." },
          { id: "5", text: "Form the differential equation of the family of circles in the first quadrant which touch the coordinate axes." },
          { id: "6", text: "Find the general solution of the differential equation dy/dx + √(1-y²)/√(1-x²) = 0." },
          { id: "7", text: "Show that the general solution of the differential equation dy/dx + (y²+y+1)/(x²+x+1) = 0 is given by (x + y + 1) = A (1 – x – y – 2xy), where A is parameter." },
          { id: "8", text: "Find the equation of the curve passing through the point (0, π/4) whose differential equation is sin x cos y dx + cos x sin y dy = 0." },
          { id: "9", text: "Find the particular solution of the differential equation (1 + e^(2x)) dy + (1 + y²) e^x dx = 0, given that y = 1 when x = 0." },
          { id: "10", text: "Solve the differential equation y e^(x/y) dx = (x e^(x/y) + y²) dy (y ≠ 0)." },
          { id: "11", text: "Find a particular solution of the differential equation (x – y) (dx + dy) = dx – dy, given that y = –1, when x = 0. (Hint: put x – y = t)" },
          { id: "12", text: "Solve the differential equation [e^(-2√x)/√x - y/√x] dx/dy = 1 (x ≠ 0)." },
          { id: "13", text: "Find a particular solution of the differential equation dy/dx + y cot x = 4x cosec x (x ≠ 0), given that y = 0 when x = π/2." },
          { id: "14", text: "Find a particular solution of the differential equation (x + 1) dy/dx = 2 e^(-y) – 1, given that y = 0 when x = 0." },
          { id: "15", text: "The population of a village increases continuously at the rate proportional to the number of its inhabitants present at any time. If the population of the village was 20, 000 in 1999 and 25000 in the year 2004, what will be the population of the village in 2009?" },
          { id: "16", text: "The general solution of the differential equation (y dx - x dy) / y = 0 is\n(A) xy = C\n(B) x = Cy²\n(C) y = Cx\n(D) y = Cx²" },
          { id: "17", text: "The general solution of a differential equation of the type dx/dy + P₁x = Q₁ is\n(A) y e^(∫P₁ dy) = ∫ (Q₁ e^(∫P₁ dy)) dy + C\n(B) y e^(∫P₁ dx) = ∫ (Q₁ e^(∫P₁ dx)) dx + C\n(C) x e^(∫P₁ dy) = ∫ (Q₁ e^(∫P₁ dy)) dy + C\n(D) x e^(∫P₁ dx) = ∫ (Q₁ e^(∫P₁ dx)) dx + C" },
          { id: "18", text: "The general solution of the differential equation e^x dy + (y e^x + 2x) dx = 0 is\n(A) x e^y + x² = C\n(B) x e^y + y² = C\n(C) y e^x + x² = C\n(D) y e^y + x² = C" }
        ]
      }
    }
  ]
};
