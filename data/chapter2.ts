
export const chapter2 = {
  class: "2nd PUC",
  chapter_number: "2",
  chapter_title: "Inverse Trigonometric Functions",
  sections: [
    {
      section_title: "2.1 Introduction",
      content: `
In Chapter 1, we have studied that the inverse of a function f, denoted by f⁻¹, exists if f is one-one and onto. There are many functions which are not one-one, onto or both and hence we can not talk of their inverses. In Class XI, we studied that trigonometric functions are not one-one and onto over their natural domains and ranges and hence their inverses do not exist. In this chapter, we shall study about the restrictions on domains and ranges of trigonometric functions which ensure the existence of their inverses and observe their behaviour through graphical representations. Besides, some elementary properties will also be discussed.
      `
    },
    {
      section_title: "2.2 Basic Concepts",
      content: `
In Class XI, we have studied trigonometric functions, which are defined as follows:
- sine function, i.e., sine : R → [– 1, 1]
- cosine function, i.e., cos : R → [– 1, 1]
- tangent function, i.e., tan : R – { x : x = (2n + 1) π/2, n ∈ Z} → R
- cotangent function, i.e., cot : R – { x : x = nπ, n ∈ Z} → R
- secant function, i.e., sec : R – { x : x = (2n + 1) π/2, n ∈ Z} → R – (– 1, 1)
- cosecant function, i.e., cosec : R – { x : x = nπ, n ∈ Z} → R – (– 1, 1)

The inverse trigonometric functions (principal value branches) along with their domains and ranges are:
- y = sin⁻¹ x: Domain [-1, 1], Range [-π/2, π/2]
- y = cos⁻¹ x: Domain [-1, 1], Range [0, π]
- y = cosec⁻¹ x: Domain R - (-1, 1), Range [-π/2, π/2] - {0}
- y = sec⁻¹ x: Domain R - (-1, 1), Range [0, π] - {π/2}
- y = tan⁻¹ x: Domain R, Range (-π/2, π/2)
- y = cot⁻¹ x: Domain R, Range (0, π)
      `,
      exercises: {
        title: "EXERCISE 2.1",
        questions: [
          { id: "1", text: "Find the principal value of sin⁻¹(-1/2)" },
          { id: "2", text: "Find the principal value of cos⁻¹(√3/2)" },
          { id: "3", text: "Find the principal value of cosec⁻¹(2)" },
          { id: "4", text: "Find the principal value of tan⁻¹(-√3)" },
          { id: "5", text: "Find the principal value of cos⁻¹(-1/2)" },
          { id: "6", text: "Find the principal value of tan⁻¹(-1)" },
          { id: "7", text: "Find the principal value of sec⁻¹(2/√3)" },
          { id: "8", text: "Find the principal value of cot⁻¹(√3)" },
          { id: "9", text: "Find the principal value of cos⁻¹(-1/√2)" },
          { id: "10", text: "Find the principal value of cosec⁻¹(-√2)" },
          { id: "11", text: "Find the value of: tan⁻¹(1) + cos⁻¹(-1/2) + sin⁻¹(-1/2)" },
          { id: "12", text: "Find the value of: cos⁻¹(1/2) + 2 sin⁻¹(1/2)" },
          { id: "13", text: "If sin⁻¹ x = y, then\n(A) 0 ≤ y ≤ π\n(B) -π/2 ≤ y ≤ π/2\n(C) 0 < y < π\n(D) -π/2 < y < π/2" },
          { id: "14", text: "tan⁻¹(√3) - sec⁻¹(-2) is equal to\n(A) π\n(B) -π/3\n(C) π/3\n(D) 2π/3" },
        ]
      }
    },
    {
      section_title: "2.3 Properties of Inverse Trigonometric Functions",
      content: "In this section, we shall prove some important properties of inverse trigonometric functions. Results are valid within the principal value branches.",
      exercises: {
        title: "EXERCISE 2.2",
        questions: [
          { id: "1", text: "Prove that 3sin⁻¹ x = sin⁻¹ (3x – 4x³), x ∈ [-1/2, 1/2]" },
          { id: "2", text: "Prove that 3cos⁻¹ x = cos⁻¹ (4x³ – 3x), x ∈ [1/2, 1]" },
          { id: "3", text: "Prove that tan⁻¹(2/11) + tan⁻¹(7/24) = tan⁻¹(1/2)" },
          { id: "4", text: "Prove that 2 tan⁻¹(1/2) + tan⁻¹(1/7) = tan⁻¹(31/17)" },
          { id: "5", text: "Write the function in the simplest form: tan⁻¹(√(1+x²) - 1) / x, x ≠ 0" },
          { id: "6", text: "Write the function in the simplest form: tan⁻¹(1/√(x²-1)), |x| > 1" },
          { id: "7", text: "Write the function in the simplest form: tan⁻¹(√((1-cos x)/(1+cos x))), 0 < x < π" },
          { id: "8", text: "Write the function in the simplest form: tan⁻¹((cos x - sin x)/(cos x + sin x)), 0 < x < π" },
          { id: "9", text: "Write the function in the simplest form: tan⁻¹(x / √(a²-x²)), |x| < a" },
          { id: "10", text: "Write the function in the simplest form: tan⁻¹((3a²x - x³)/(a³ - 3ax²)), a > 0; -a/√3 < x < a/√3" },
          { id: "11", text: "Find the value of: tan⁻¹[2 cos (2 sin⁻¹(1/2))]" },
          { id: "12", text: "Find the value of: cot (tan⁻¹ a + cot⁻¹ a)" },
          { id: "13", text: "Find the value of: tan (1/2 [sin⁻¹(2x/(1+x²)) + cos⁻¹((1-y²)/(1+y²))]), |x|<1, y>0, xy<1" },
          { id: "14", text: "If sin(sin⁻¹(1/5) + cos⁻¹ x) = 1, then find the value of x." },
          { id: "15", text: "If tan⁻¹((x-1)/(x-2)) + tan⁻¹((x+1)/(x+2)) = π/4, then find the value of x." },
          { id: "16", text: "Find the value of the expression: sin⁻¹(sin(2π/3))" },
          { id: "17", text: "Find the value of the expression: tan⁻¹(tan(3π/4))" },
          { id: "18", text: "Find the value of the expression: tan(sin⁻¹(3/5) + cot⁻¹(3/2))" },
          { id: "19", text: "cos⁻¹(cos(7π/6)) is equal to\n(A) 7π/6\n(B) 5π/6\n(C) π/3\n(D) π/6" },
          { id: "20", text: "sin(π/3 - sin⁻¹(-1/2)) is equal to\n(A) 1/2\n(B) 1/3\n(C) 1/4\n(D) 1" },
          { id: "21", text: "tan⁻¹√3 - cot⁻¹(-√3) is equal to\n(A) π\n(B) -π/2\n(C) 0\n(D) 2√3" }
        ]
      }
    },
    {
        section_title: "Miscellaneous Examples",
        content: "Miscellaneous examples for Inverse Trigonometric Functions.",
        exercises: {
            title: "Miscellaneous Exercise on Chapter 2",
            questions: [
                {id: "1", text: "Find the value of: cos⁻¹(cos(13π/6))"},
                {id: "2", text: "Find the value of: tan⁻¹(tan(7π/6))"},
                {id: "3", text: "Prove that 2 sin⁻¹(3/5) = tan⁻¹(24/7)"},
                {id: "4", text: "Prove that sin⁻¹(8/17) + sin⁻¹(3/5) = tan⁻¹(77/36)"},
                {id: "5", text: "Prove that cos⁻¹(4/5) + cos⁻¹(12/13) = cos⁻¹(33/65)"},
                {id: "6", text: "Prove that cos⁻¹(12/13) + sin⁻¹(3/5) = sin⁻¹(56/65)"},
                {id: "7", text: "Prove that tan⁻¹(63/16) = sin⁻¹(5/13) + cos⁻¹(3/5)"},
                {id: "8", text: "Prove that tan⁻¹(1/5) + tan⁻¹(1/7) + tan⁻¹(1/3) + tan⁻¹(1/8) = π/4"},
                {id: "9", text: "Prove that tan⁻¹√x = 1/2 cos⁻¹((1-x)/(1+x)), x ∈ [0, 1]"},
                {id: "10", text: "Prove that cot⁻¹[ (√(1+sin x) + √(1-sin x)) / (√(1+sin x) - √(1-sin x)) ] = x/2, x ∈ (0, π/4)"},
                {id: "11", text: "Prove that tan⁻¹[ (√(1+x) - √(1-x)) / (√(1+x) + √(1-x)) ] = π/4 - 1/2 cos⁻¹x, -1/√2 ≤ x ≤ 1"},
                {id: "12", text: "Prove that 9π/8 - 9/4 sin⁻¹(1/3) = 9/4 sin⁻¹(2√2/3)"},
                {id: "13", text: "Solve the following equation: 2tan⁻¹(cos x) = tan⁻¹(2 cosec x)"},
                {id: "14", text: "Solve the following equation: tan⁻¹((1-x)/(1+x)) = 1/2 tan⁻¹x, (x > 0)"},
                {id: "15", text: "sin(tan⁻¹ x), |x| < 1 is equal to\n(A) x / √(1-x²)\n(B) 1 / √(1-x²)\n(C) 1 / √(1+x²)\n(D) x / √(1+x²)"},
                {id: "16", text: "sin⁻¹(1-x) - 2sin⁻¹x = π/2, then x is equal to\n(A) 0, 1/2\n(B) 1, 1/2\n(C) 0\n(D) 1/2"},
                {id: "17", text: "tan⁻¹(x/y) - tan⁻¹((x-y)/(x+y)) is equal to\n(A) π/2\n(B) π/3\n(C) π/4\n(D) -3π/4"}
            ]
        }
    }
  ]
};
