
export const chapter6 = {
  class: "2nd PUC",
  chapter_number: "6",
  chapter_title: "Application of Derivatives",
  sections: [
    {
      section_title: "6.1 Introduction",
      content: "In this chapter, we will study applications of the derivative in various disciplines, e.g., in engineering, science, social science, and many other fields."
    },
    {
      section_title: "6.2 Rate of Change of Quantities",
      content: "Recall that by the derivative ds/dt, we mean the rate of change of distance s with respect to the time t.",
      exercises: {
        title: "EXERCISE 6.1",
        questions: [
          { id: "1", text: "Find the rate of change of the area of a circle with respect to its radius r when (a) r = 3 cm (b) r = 4 cm" },
          { id: "2", text: "The volume of a cube is increasing at the rate of 8 cm³/s. How fast is the surface area increasing when the length of an edge is 12 cm?" },
          { id: "3", text: "The radius of a circle is increasing uniformly at the rate of 3 cm/s. Find the rate at which the area of the circle is increasing when the radius is 10 cm." },
          { id: "4", text: "An edge of a variable cube is increasing at the rate of 3 cm/s. How fast is the volume of the cube increasing when the edge is 10 cm long?" },
          { id: "5", text: "A stone is dropped into a quiet lake and waves move in circles at the speed of 5 cm/s. At the instant when the radius of the circular wave is 8 cm, how fast is the enclosed area increasing?" },
          { id: "6", text: "The radius of a circle is increasing at the rate of 0.7 cm/s. What is the rate of increase of its circumference?" },
          { id: "7", text: "The length x of a rectangle is decreasing at the rate of 5 cm/minute and the width y is increasing at the rate of 4 cm/minute. When x = 8cm and y = 6cm, find the rates of change of (a) the perimeter, and (b) the area of the rectangle." },
          { id: "8", text: "A balloon, which always remains spherical on inflation, is being inflated by pumping in 900 cubic centimetres of gas per second. Find the rate at which the radius of the balloon increases when the radius is 15 cm." },
          { id: "9", text: "A balloon, which always remains spherical has a variable radius. Find the rate at which its volume is increasing with the radius when the later is 10 cm." },
          { id: "10", text: "A ladder 5 m long is leaning against a wall. The bottom of the ladder is pulled along the ground, away from the wall, at the rate of 2cm/s. How fast is its height on the wall decreasing when the foot of the ladder is 4 m away from the wall?" },
          { id: "11", text: "A particle moves along the curve 6y = x³ + 2. Find the points on the curve at which the y-coordinate is changing 8 times as fast as the x-coordinate." },
          { id: "12", text: "The radius of an air bubble is increasing at the rate of 1/2 cm/s. At what rate is the volume of the bubble increasing when the radius is 1 cm?" },
          { id: "13", text: "A balloon, which always remains spherical, has a variable diameter 3/2 (2x + 1). Find the rate of change of its volume with respect to x." },
          { id: "14", text: "Sand is pouring from a pipe at the rate of 12 cm³/s. The falling sand forms a cone on the ground in such a way that the height of the cone is always one-sixth of the radius of the base. How fast is the height of the sand cone increasing when the height is 4 cm?" },
          { id: "15", text: "The total cost C(x) in Rupees associated with the production of x units of an item is given by C(x) = 0.007x³ – 0.003x² + 15x + 4000. Find the marginal cost when 17 units are produced." },
          { id: "16", text: "The total revenue in Rupees received from the sale of x units of a product is given by R(x) = 13x² + 26x + 15. Find the marginal revenue when x = 7." },
          { id: "17", text: "The rate of change of the area of a circle with respect to its radius r at r = 6 cm is\n(A) 10π\n(B) 12π\n(C) 8π\n(D) 11π" },
          { id: "18", text: "The total revenue in Rupees received from the sale of x units of a product is given by R(x) = 3x² + 36x + 5. The marginal revenue, when x = 15 is\n(A) 116\n(B) 96\n(C) 90\n(D) 126" }
        ]
      }
    },
    {
      section_title: "6.3 Increasing and Decreasing Functions",
      content: "In this section, we will use differentiation to find out whether a function is increasing or decreasing or none.",
      definitions: [
        {id: "1", title: "Definition 1", text: "Let I be an interval contained in the domain of a real valued function f. Then f is said to be\n(i) increasing on I if x₁ < x₂ in I ⇒ f(x₁) < f(x₂) for all x₁, x₂ ∈ I.\n(ii) decreasing on I, if x₁, x₂ in I ⇒ f(x₁) > f(x₂) for all x₁, x₂ ∈ I.\n(iii) constant on I, if f(x) = c for all x ∈ I, where c is a constant."}
      ],
      exercises: {
        title: "EXERCISE 6.2",
        questions: [
          { id: "1", text: "Show that the function given by f(x) = 3x + 17 is increasing on R." },
          { id: "2", text: "Show that the function given by f(x) = e^(2x) is increasing on R." },
          { id: "3", text: "Show that the function given by f(x) = sin x is\n(a) increasing in (0, π/2)\n(b) decreasing in (π/2, π)\n(c) neither increasing nor decreasing in (0, π)" },
          { id: "4", text: "Find the intervals in which the function f given by f(x) = 2x² – 3x is\n(a) increasing\n(b) decreasing" },
          { id: "5", text: "Find the intervals in which the function f given by f(x) = 2x³ – 3x² – 36x + 7 is\n(a) increasing\n(b) decreasing" },
          { id: "6", text: "Find the intervals in which the following functions are strictly increasing or decreasing:\n(a) x² + 2x – 5\n(b) 10 – 6x – 2x²\n(c) –2x³ – 9x² – 12x + 1\n(d) 6 – 9x – x²\n(e) (x + 1)³ (x – 3)³" },
          { id: "7", text: "Show that y = log(1 + x) - 2x/(2+x), x > – 1, is an increasing function of x throughout its domain." },
          { id: "8", text: "Find the values of x for which y = [x(x – 2)]² is an increasing function." },
          { id: "9", text: "Prove that y = 4sinθ/(2+cosθ) - θ is an increasing function of θ in [0, π/2]." },
          { id: "10", text: "Prove that the logarithmic function is increasing on (0, ∞)." },
          { id: "11", text: "Prove that the function f given by f(x) = x² – x + 1 is neither strictly increasing nor decreasing on (– 1, 1)." },
          { id: "12", text: "Which of the following functions are decreasing on (0, π/2)?\n(A) cos x\n(B) cos 2x\n(C) cos 3x\n(D) tan x" },
          { id: "13", text: "On which of the following intervals is the function f given by f(x) = x¹⁰⁰ + sin x – 1 decreasing ?\n(A) (0, 1)\n(B) (π/2, π)\n(C) (0, π/2)\n(D) None of these" },
          { id: "14", text: "For what values of a the function f given by f(x) = x² + ax + 1 is increasing on [1, 2]?" },
          { id: "15", text: "Let I be any interval disjoint from [–1, 1]. Prove that the function f given by f(x) = x + 1/x is increasing on I." },
          { id: "16", text: "Prove that the function f given by f(x) = log sin x is increasing on (0, π/2) and decreasing on (π/2, π)." },
          { id: "17", text: "Prove that the function f given by f (x) = log |cos x| is decreasing on (0, π/2) and increasing on (3π/2, 2π)." },
          { id: "18", text: "Prove that the function given by f (x) = x³ – 3x² + 3x – 100 is increasing in R." },
          { id: "19", text: "The interval in which y = x² e⁻ˣ is increasing is\n(A) (– ∞, ∞)\n(B) (– 2, 0)\n(C) (2, ∞)\n(D) (0, 2)" }
        ]
      }
    },
    {
      section_title: "6.4 Tangents and Normals",
      content: "In this section, we shall use differentiation to find the equation of the tangent line and the normal line to a curve at a given point.",
      exercises: {
        title: "EXERCISE 6.3",
        questions: [
          { id: "1", text: "Find the slope of the tangent to the curve y = 3x⁴ – 4x at x = 4." },
          { id: "2", text: "Find the slope of the tangent to the curve y = (x-1)/(x-2), x ≠ 2 at x = 10." },
          { id: "3", text: "Find the slope of the tangent to curve y = x³ – x + 1 at the point whose x-coordinate is 2." },
          { id: "4", text: "Find the slope of the tangent to the curve y = x³ – 3x + 2 at the point whose x-coordinate is 3." },
          { id: "5", text: "Find the slope of the normal to the curve x = a cos³ θ, y = a sin³ θ at θ = π/4." },
          { id: "6", text: "Find the slope of the normal to the curve x = 1 - a sin θ, y = b cos² θ at θ = π/2." },
          { id: "7", text: "Find points at which the tangent to the curve y = x³ – 3x² – 9x + 7 is parallel to the x-axis." },
          { id: "8", text: "Find a point on the curve y = (x – 2)² at which the tangent is parallel to the chord joining the points (2, 0) and (4, 4)." },
          { id: "9", text: "Find the point on the curve y = x³ – 11x + 5 at which the tangent is y = x – 11." },
          { id: "10", text: "Find the equation of all lines having slope – 1 that are tangents to the curve y = 1/(x-1), x ≠ 1." },
          { id: "11", text: "Find the equation of all lines having slope 2 which are tangents to the curve y = 1/(x-3), x ≠ 3." },
          { id: "12", text: "Find the equations of all lines having slope 0 which are tangent to the curve y = 1/(x²-2x+3)." },
          { id: "13", text: "Find points on the curve x²/9 + y²/16 = 1 at which the tangents are (i) parallel to x-axis (ii) parallel to y-axis." },
          { id: "14", text: "Find the equations of the tangent and normal to the given curves at the indicated points:\n(i) y = x⁴ – 6x³ + 13x² – 10x + 5 at (0, 5)\n(ii) y = x⁴ – 6x³ + 13x² – 10x + 5 at (1, 3)\n(iii) y = x³ at (1, 1)\n(iv) y = x² at (0, 0)\n(v) x = cos t, y = sin t at t = π/4" },
          { id: "15", text: "Find the equation of the tangent line to the curve y = x² – 2x + 7 which is\n(a) parallel to the line 2x – y + 9 = 0\n(b) perpendicular to the line 5y – 15x = 13." },
          { id: "16", text: "Show that the tangents to the curve y = 7x³ + 11 at the points where x = 2 and x = – 2 are parallel." },
          { id: "17", text: "Find the points on the curve y = x³ at which the slope of the tangent is equal to the y-coordinate of the point." },
          { id: "18", text: "For the curve y = 4x³ – 2x⁵, find all the points at which the tangent passes through the origin." },
          { id: "19", text: "Find the points on the curve x² + y² – 2x – 3 = 0 at which the tangents are parallel to the x-axis." },
          { id: "20", text: "Find the equation of the normal at the point (am², am³) for the curve ay² = x³." },
          { id: "21", text: "Find the equation of the normals to the curve y = x³ + 2x + 6 which are parallel to the line x + 14y + 4 = 0." },
          { id: "22", text: "Find the equations of the tangent and normal to the parabola y² = 4ax at the point (at², 2at)." },
          { id: "23", text: "Prove that the curves x = y² and xy = k cut at right angles if 8k² = 1." },
          { id: "24", text: "Find the equations of the tangent and normal to the hyperbola x²/a² - y²/b² = 1 at the point (x₀, y₀)." },
          { id: "25", text: "Find the equation of the tangent to the curve y = √(3x-2) which is parallel to the line 4x - 2y + 5 = 0." },
          { id: "26", text: "The slope of the normal to the curve y = 2x² + 3 sin x at x = 0 is\n(A) 3\n(B) 1/3\n(C) -3\n(D) -1/3" },
          { id: "27", text: "The line y = x + 1 is a tangent to the curve y² = 4x at the point\n(A) (1, 2)\n(B) (2, 1)\n(C) (1, – 2)\n(D) (– 1, 2)" }
        ]
      }
    },
    {
      section_title: "6.5 Approximations",
      content: "In this section, we will use differentials to approximate values of certain quantities.",
      exercises: {
        title: "EXERCISE 6.4",
        questions: [
          { id: "1", text: "Using differentials, find the approximate value of each of the following up to 3 places of decimal.\n(i) √25.3\n(ii) √49.5\n(iii) √0.6\n(iv) (0.009)^(1/3)\n(v) (0.999)^(1/10)\n(vi) (15)^(1/4)\n(vii) (26)^(1/3)\n(viii) (255)^(1/4)\n(ix) (82)^(1/4)\n(x) (401)^(1/2)\n(xi) (0.0037)^(1/2)\n(xii) (26.57)^(1/3)\n(xiii) (81.5)^(1/4)\n(xiv) (3.968)^(3/2)\n(xv) (32.15)^(1/5)" },
          { id: "2", text: "Find the approximate value of f(2.01), where f (x) = 4x² + 5x + 2." },
          { id: "3", text: "Find the approximate value of f (5.001), where f(x) = x³ – 7x² + 15." },
          { id: "4", text: "Find the approximate change in the volume V of a cube of side x metres caused by increasing the side by 1%." },
          { id: "5", text: "Find the approximate change in the surface area of a cube of side x metres caused by decreasing the side by 1%." },
          { id: "6", text: "If the radius of a sphere is measured as 7 m with an error of 0.02 m, then find the approximate error in calculating its volume." },
          { id: "7", text: "If the radius of a sphere is measured as 9 m with an error of 0.03 m, then find the approximate error in calculating its surface area." },
          { id: "8", text: "If f(x) = 3x² + 15x + 5, then the approximate value of f (3.02) is\n(A) 47.66\n(B) 57.66\n(C) 67.66\n(D) 77.66" },
          { id: "9", text: "The approximate change in the volume of a cube of side x metres caused by increasing the side by 3% is\n(A) 0.06 x³ m³\n(B) 0.6 x³ m³\n(C) 0.09 x³ m³\n(D) 0.9 x³ m³" }
        ]
      }
    },
    {
      section_title: "6.6 Maxima and Minima",
      content: "In this section, we will use the concept of derivatives to calculate the maximum or minimum values of various functions.",
      definitions: [
        {id: "3", title: "Definition 3: Maxima/Minima", text: "Let f be a function defined on an interval I. Then\n(a) f is said to have a maximum value in I, if there exists a point c in I such that f(c) ≥ f(x), for all x ∈ I.\n(b) f is said to have a minimum value in I, if there exists a point c in I such that f(c) ≤ f(x), for all x ∈ I."}
      ],
      exercises: {
        title: "EXERCISE 6.5",
        questions: [
          { id: "1", text: "Find the maximum and minimum values, if any, of the following functions given by\n(i) f(x) = (2x – 1)² + 3\n(ii) f(x) = 9x² + 12x + 2\n(iii) f(x) = – (x – 1)² + 10\n(iv) g(x) = x³ + 1" },
          { id: "2", text: "Find the maximum and minimum values, if any, of the following functions given by\n(i) f(x) = |x + 2 | – 1\n(ii) g(x) = – | x + 1| + 3\n(iii) h(x) = sin(2x) + 5\n(iv) f(x) = |sin 4x + 3|\n(v) h(x) = x + 1, x ∈ (– 1, 1)" },
          { id: "3", text: "Find the local maxima and local minima, if any, of the following functions. Find also the local maximum and the local minimum values, as the case may be:\n(i) f(x) = x²\n(ii) g(x) = x³ – 3x\n(iii) h(x) = sin x + cos x, 0 < x < π/2\n(iv) f(x) = sin x – cos x, 0 < x < 2π\n(v) f(x) = x³ – 6x² + 9x + 15\n(vi) g(x) = x/2 + 2/x, x > 0\n(vii) g(x) = 1/(x²+2)\n(viii) f(x) = x√(1-x), x > 0" },
          { id: "4", text: "Prove that the following functions do not have maxima or minima:\n(i) f(x) = eˣ\n(ii) g(x) = log x\n(iii) h (x) = x³ + x² + x +1" },
          { id: "5", text: "Find the absolute maximum value and the absolute minimum value of the following functions in the given intervals:\n(i) f(x) = x³, x ∈ [– 2, 2]\n(ii) f (x) = sin x + cos x , x ∈ [0, π]\n(iii) f (x) = 4x - 1/2 x², x ∈ [-2, 9/2]\n(iv) f(x) = (x-1)² + 3, x ∈ [-3, 1]" },
          { id: "6", text: "Find the maximum profit that a company can make, if the profit function is given by p(x) = 41 – 72x – 18x²" },
          { id: "7", text: "Find both the maximum value and the minimum value of 3x⁴ – 8x³ + 12x² – 48x + 25 on the interval [0, 3]." },
          { id: "8", text: "At what points in the interval [0, 2π], does the function sin 2x attain its maximum value?" },
          { id: "9", text: "What is the maximum value of the function sin x + cos x?" },
          { id: "10", text: "Find the maximum value of 2x³ – 24x + 107 in the interval [1, 3]. Find the maximum value of the same function in [–3, –1]." },
          { id: "11", text: "It is given that at x = 1, the function x⁴ – 62x² + ax + 9 attains its maximum value, on the interval [0, 2]. Find the value of a." },
          { id: "12", text: "Find the maximum and minimum values of x + sin 2x on [0, 2π]." },
          { id: "13", text: "Find two numbers whose sum is 24 and whose product is as large as possible." },
          { id: "14", text: "Find two positive numbers x and y such that x + y = 60 and xy³ is maximum." },
          { id: "15", text: "Find two positive numbers x and y such that their sum is 35 and the product x²y⁵ is a maximum." },
          { id: "16", text: "Find two positive numbers whose sum is 16 and the sum of whose cubes is minimum." },
          { id: "17", text: "A square piece of tin of side 18 cm is to be made into a box without top, by cutting a square from each corner and folding up the flaps to form the box. What should be the side of the square to be cut off so that the volume of the box is the maximum possible." },
          { id: "18", text: "A rectangular sheet of tin 45 cm by 24 cm is to be made into a box without top, by cutting off square from each corner and folding up the flaps. What should be the side of the square to be cut off so that the volume of the box is maximum?" },
          { id: "19", text: "Show that of all the rectangles inscribed in a given fixed circle, the square has the maximum area." },
          { id: "20", text: "Show that the right circular cylinder of given surface and maximum volume is such that its height is equal to the diameter of the base." },
          { id: "21", text: "Of all the closed cylindrical cans (right circular), of a given volume of 100 cubic centimetres, find the dimensions of the can which has the minimum surface area?" },
          { id: "22", text: "A wire of length 28 m is to be cut into two pieces. One of the pieces is to be made into a square and the other into a circle. What should be the length of the two pieces so that the combined area of the square and the circle is minimum?" },
          { id: "23", text: "Prove that the volume of the largest cone that can be inscribed in a sphere of radius R is 8/27 of the volume of the sphere." },
          { id: "24", text: "Show that the right circular cone of least curved surface and given volume has an altitude equal to √2 time the radius of the base." },
          { id: "25", text: "Show that the semi-vertical angle of the cone of the maximum volume and of given slant height is tan⁻¹ √2." },
          { id: "26", text: "Show that semi-vertical angle of right circular cone of given surface area and maximum volume is sin⁻¹(1/3)." },
          { id: "27", text: "The point on the curve x² = 2y which is nearest to the point (0, 5) is\n(A) (2√2, 4)\n(B) (2√2, 0)\n(C) (0, 0)\n(D) (2, 2)" },
          { id: "28", text: "For all real values of x, the minimum value of (1-x+x²)/(1+x+x²) is\n(A) 0\n(B) 1\n(C) 3\n(D) 1/3" },
          { id: "29", text: "The maximum value of [x(x-1) + 1]^(1/3), 0 ≤ x ≤ 1 is\n(A) (1/3)^(1/3)\n(B) 1/2\n(C) 1\n(D) 0" }
        ]
      }
    },
    {
        section_title: "Miscellaneous Examples",
        content: "Miscellaneous examples for Chapter 6.",
        exercises: {
            title: "Miscellaneous Exercise on Chapter 6",
            questions: [
                {id: "1", text: "Using differentials, find the approximate value of each of the following:\n(a) (17/81)^(1/4)\n(b) (33)^(-1/5)"},
                {id: "2", text: "Show that the function given by f(x) = (log x)/x has maximum at x = e."},
                {id: "3", text: "The two equal sides of an isosceles triangle with fixed base b are decreasing at the rate of 3 cm per second. How fast is the area decreasing when the two equal sides are equal to the base?"},
                {id: "4", text: "Find the equation of the normal to curve x² = 4y which passes through the point (1, 2)."},
                {id: "5", text: "Show that the normal at any point θ to the curve x = a cosθ + a θ sin θ, y = a sinθ – aθ cosθ is at a constant distance from the origin."},
                {id: "6", text: "Find the intervals in which the function f given by f(x) = (4sin x - 2x - x cos x) / (2 + cos x) is (i) increasing (ii) decreasing."},
                {id: "7", text: "Find the intervals in which the function f given by f(x) = x³ + 1/x³ , x ≠ 0 is (i) increasing (ii) decreasing."},
                {id: "8", text: "Find the maximum area of an isosceles triangle inscribed in the ellipse x²/a² + y²/b² = 1 with its vertex at one end of the major axis."},
                {id: "9", text: "A tank with rectangular base and rectangular sides, open at the top is to be constructed so that its depth is 2 m and volume is 8 m³. If building of tank costs Rs 70 per sq metres for the base and Rs 45 per square metre for sides. What is the cost of least expensive tank?"},
                {id: "10", text: "The sum of the perimeter of a circle and square is k, where k is some constant. Prove that the sum of their areas is least when the side of square is double the radius of the circle."},
                {id: "11", text: "A window is in the form of a rectangle surmounted by a semicircular opening. The total perimeter of the window is 10 m. Find the dimensions of the window to admit maximum light through the whole opening."},
                {id: "12", text: "A point on the hypotenuse of a triangle is at distance a and b from the sides of the triangle. Show that the minimum length of the hypotenuse is (a^(2/3) + b^(2/3))^(3/2)."},
                {id: "13", text: "Find the points at which the function f given by f(x) = (x – 2)⁴ (x + 1)³ has\n(i) local maxima\n(ii) local minima\n(iii) point of inflexion"},
                {id: "14", text: "Find the absolute maximum and minimum values of the function f given by f(x) = cos² x + sin x, x ∈ [0, π]"},
                {id: "15", text: "Show that the altitude of the right circular cone of maximum volume that can be inscribed in a sphere of radius r is 4r/3."},
                {id: "16", text: "Let f be a function defined on [a, b] such that f ′(x) > 0, for all x ∈ (a, b). Then prove that f is an increasing function on (a, b)."},
                {id: "17", text: "Show that the height of the cylinder of maximum volume that can be inscribed in a sphere of radius R is 2R/√3. Also find the maximum volume."},
                {id: "18", text: "Show that height of the cylinder of greatest volume which can be inscribed in a right circular cone of height h and semi vertical angle α is one-third that of the cone and the greatest volume of cylinder is 4/27 π h³ tan²α."},
                {id: "19", text: "A cylindrical tank of radius 10 m is being filled with wheat at the rate of 314 cubic metre per hour. Then the depth of the wheat is increasing at the rate of\n(A) 1 m/h\n(B) 0.1 m/h\n(C) 1.1 m/h\n(D) 0.5 m/h"},
                {id: "20", text: "The slope of the tangent to the curve x = t² + 3t – 8, y = 2t² – 2t – 5 at the point (2,– 1) is\n(A) 22/7\n(B) 6/7\n(C) 7/6\n(D) -6/7"},
                {id: "21", text: "The line y = mx + 1 is a tangent to the curve y² = 4x if the value of m is\n(A) 1\n(B) 2\n(C) 3\n(D) 1/2"},
                {id: "22", text: "The normal at the point (1,1) on the curve 2y + x² = 3 is\n(A) x + y = 0\n(B) x – y = 0\n(C) x + y +1 = 0\n(D) x – y = 1"},
                {id: "23", text: "The normal to the curve x² = 4y passing (1,2) is\n(A) x + y = 3\n(B) x – y = 3\n(C) x + y = 1\n(D) x – y = 1"},
                {id: "24", text: "The points on the curve 9y² = x³, where the normal to the curve makes equal intercepts with the axes are\n(A) (4, ±8/3)\n(B) (4, -8/3)\n(C) (4, ±3/8)\n(D) (±4, 3/8)"}
            ]
        }
    }
  ]
};
