
export const chapter4 = {
  class: "2nd PUC",
  chapter_number: "4",
  chapter_title: "Determinants",
  sections: [
    {
      section_title: "4.1 Introduction",
      content: "In this chapter, we shall study determinants up to order three only with real entries. Also, we will study various properties of determinants, minors, cofactors and applications of determinants in finding the area of a triangle, adjoint and inverse of a square matrix, consistency and inconsistency of system of linear equations and solution of linear equations in two or three variables using inverse of a matrix."
    },
    {
      section_title: "4.2 Determinant",
      content: "To every square matrix A = [aij] of order n, we can associate a number (real or complex) called determinant of the square matrix A.",
      exercises: {
        title: "EXERCISE 4.1",
        questions: [
          { id: "1", text: "Evaluate the determinant | 2 4; -5 -1 |" },
          { id: "2", text: "Evaluate the determinants:\n(i) | cosθ -sinθ; sinθ cosθ |\n(ii) | x²-x+1 x-1; x+1 x+1 |" },
          { id: "3", text: "If A = [ 1 2; 4 2 ], then show that | 2A | = 4 | A |" },
          { id: "4", text: "If A = [ 1 0 1; 0 1 2; 0 0 4 ], then show that | 3 A | = 27 | A |" },
          { id: "5", text: "Evaluate the determinants\n(i) | 3 -1 -2; 0 0 -1; 3 -5 0 |\n(ii) | 3 -4 5; 1 1 -2; 2 3 1 |\n(iii) | 0 1 2; -1 0 -3; -2 3 0 |\n(iv) | 2 -1 -2; 0 2 -1; 3 -5 0 |" },
          { id: "6", text: "If A = [ 1 1 -2; 2 1 -3; 5 4 -9 ], find | A |" },
          { id: "7", text: "Find values of x, if\n(i) | 2 4; 5 1 | = | 2x 4; 6 x |\n(ii) | 2 3; 4 5 | = | x 3; 2x 5 |" },
          { id: "8", text: "If | x 2; 18 x | = | 6 2; 18 6 |, then x is equal to\n(A) 6\n(B) ± 6\n(C) -6\n(D) 0" }
        ]
      }
    },
    {
        section_title: "4.3 Properties of Determinants",
        content: "In this section, we will study some properties of determinants which simplifies its evaluation by obtaining maximum number of zeros in a row or a column.",
        exercises: {
            title: "EXERCISE 4.2",
            questions: [
                {id: "1", text: "Using the property of determinants and without expanding, prove that: | x a x+a; y b y+b; z c z+c | = 0"},
                {id: "2", text: "Using the property of determinants and without expanding, prove that: | a-b b-c c-a; b-c c-a a-b; c-a a-b b-c | = 0"},
                {id: "3", text: "Using the property of determinants and without expanding, prove that: | 2 7 65; 3 8 75; 5 9 86 | = 0"},
                {id: "4", text: "Using the property of determinants and without expanding, prove that: | 1 bc a(b+c); 1 ca b(c+a); 1 ab c(a+b) | = 0"},
                {id: "5", text: "Using the property of determinants and without expanding, prove that: | b+c q+r y+z; c+a r+p z+x; a+b p+q x+y | = 2 | a p x; b q y; c r z |"},
                {id: "6", text: "Using the property of determinants and without expanding, prove that: | 0 a -b; -a 0 -c; b c 0 | = 0"},
                {id: "7", text: "Using the property of determinants and without expanding, prove that: | -a² ab ac; ba -b² bc; ca cb -c² | = 4a²b²c²"},
                {id: "8", text: "By using properties of determinants, show that:\n(i) | 1 a a²; 1 b b²; 1 c c² | = (a – b) (b – c) (c – a)\n(ii) | 1 1 1; a b c; a³ b³ c³ | = (a – b) (b – c) (c – a) (a + b + c)"},
                {id: "9", text: "By using properties of determinants, show that: | x x² yz; y y² zx; z z² xy | = (x – y) (y – z) (z – x) (xy + yz + zx)"},
                {id: "10", text: "By using properties of determinants, show that:\n(i) | x+4 2x 2x; 2x x+4 2x; 2x 2x x+4 | = (5x+4)(4-x)²\n(ii) | y+k y y; y y+k y; y y y+k | = k²(3y+k)"},
                {id: "11", text: "By using properties of determinants, show that:\n(i) | a-b-c 2a 2a; 2b b-c-a 2b; 2c 2c c-a-b | = (a+b+c)³\n(ii) | x+y+2z x y; z y+z+2x y; z x z+x+2y | = 2(x+y+z)³"},
                {id: "12", text: "By using properties of determinants, show that: | 1 x x²; x² 1 x; x x² 1 | = (1-x³) ²"},
                {id: "13", text: "By using properties of determinants, show that: | 1+a²-b² 2ab -2b; 2ab 1-a²+b² 2a; 2b -2a 1-a²-b² | = (1+a²+b²)³"},
                {id: "14", text: "By using properties of determinants, show that: | a²+1 ab ac; ab b²+1 bc; ca cb c²+1 | = 1+a²+b²+c²"},
                {id: "15", text: "Let A be a square matrix of order 3 × 3, then | kA| is equal to\n(A) k| A |\n(B) k²| A |\n(C) k³| A |\n(D) 3k | A |"},
                {id: "16", text: "Which of the following is correct\n(A) Determinant is a square matrix.\n(B) Determinant is a number associated to a matrix.\n(C) Determinant is a number associated to a square matrix.\n(D) None of these"}
            ]
        }
    },
    {
        section_title: "4.4 Area of a Triangle",
        content: "In earlier classes, we have studied that the area of a triangle whose vertices are (x₁, y₁), (x₂, y₂) and (x₃, y₃), is given by the expression 1/2 [x₁(y₂–y₃) + x₂(y₃–y₁) + x₃(y₁–y₂)]. Now this expression can be written in the form of a determinant.",
        exercises: {
            title: "EXERCISE 4.3",
            questions: [
                {id: "1", text: "Find area of the triangle with vertices at the point given in each of the following :\n(i) (1, 0), (6, 0), (4, 3)\n(ii) (2, 7), (1, 1), (10, 8)\n(iii) (–2, –3), (3, 2), (–1, –8)"},
                {id: "2", text: "Show that points A (a, b + c), B (b, c + a), C (c, a + b) are collinear."},
                {id: "3", text: "Find values of k if area of triangle is 4 sq. units and vertices are\n(i) (k, 0), (4, 0), (0, 2)\n(ii) (–2, 0), (0, 4), (0, k)"},
                {id: "4", text: "(i) Find equation of line joining (1, 2) and (3, 6) using determinants.\n(ii) Find equation of line joining (3, 1) and (9, 3) using determinants."},
                {id: "5", text: "If area of triangle is 35 sq units with vertices (2, – 6), (5, 4) and (k, 4). Then k is\n(A) 12\n(B) –2\n(C) –12, –2\n(D) 12, –2"}
            ]
        }
    },
    {
        section_title: "4.5 Minors and Cofactors",
        content: "Minor of an element aij of a determinant is the determinant obtained by deleting its ith row and jth column in which element aij lies. Cofactor of an element aij, denoted by Aij is defined by Aij = (–1)^(i+j) Mij.",
        definitions: [
            {id: "1", title: "Definition 1: Minor", text: "Minor of an element aij of a determinant is the determinant obtained by deleting its ith row and jth column in which element aij lies. Minor of an element aij is denoted by Mij."},
            {id: "2", title: "Definition 2: Cofactor", text: "Cofactor of an element aij, denoted by Aij is defined by Aij = (–1)^(i+j) Mij, where Mij is minor of aij."}
        ],
        exercises: {
            title: "EXERCISE 4.4",
            questions: [
                {id: "1", text: "Write Minors and Cofactors of the elements of following determinants:\n(i) | 2 -4; 0 3 |\n(ii) | a c; b d |"},
                {id: "2", text: "Write Minors and Cofactors of the elements of following determinants:\n(i) | 1 0 0; 0 1 0; 0 0 1 |\n(ii) | 1 0 4; 3 5 -1; 0 1 2 |"},
                {id: "3", text: "Using Cofactors of elements of second row, evaluate ∆ = | 5 3 8; 2 0 1; 1 2 3 |"},
                {id: "4", text: "Using Cofactors of elements of third column, evaluate ∆ = | 1 x yz; 1 y zx; 1 z xy |"},
                {id: "5", text: "If ∆ = | a11 a12 a13; a21 a22 a23; a31 a32 a33 | and Aij is Cofactors of aij, then value of ∆ is given by\n(A) a11 A31+ a12 A32 + a13 A33\n(B) a11 A11+ a12 A21 + a13 A31\n(C) a21 A11 + a22 A12 + a23 A13\n(D) a11 A11 + a21 A21 + a31 A31"}
            ]
        }
    },
    {
        section_title: "4.6 Adjoint and Inverse of a Matrix",
        content: "The adjoint of a square matrix A is defined as the transpose of the matrix of cofactors. A square matrix A is invertible if and only if A is nonsingular matrix.",
        definitions: [
            {id: "3", title: "Definition 3: Adjoint", text: "The adjoint of a square matrix A = [aij] is defined as the transpose of the matrix [Aij], where Aij is the cofactor of the element aij."},
            {id: "4", title: "Definition 4: Singular Matrix", text: "A square matrix A is said to be singular if |A| = 0."},
            {id: "5", title: "Definition 5: Non-Singular Matrix", text: "A square matrix A is said to be non-singular if |A| ≠ 0."}
        ],
        exercises: {
            title: "EXERCISE 4.5",
            questions: [
                {id: "1", text: "Find adjoint of the matrix [ 1 2; 3 4 ]"},
                {id: "2", text: "Find adjoint of the matrix [ 1 -1 2; 2 3 5; -2 0 1 ]"},
                {id: "3", text: "Verify A (adj A) = (adj A) A = | A| I for [ 2 3; -4 -6 ]"},
                {id: "4", text: "Verify A (adj A) = (adj A) A = | A| I for [ 1 -1 2; 3 0 -2; 1 0 3 ]"},
                {id: "5", text: "Find the inverse of the matrix (if it exists): [ 2 -2; 4 3 ]"},
                {id: "6", text: "Find the inverse of the matrix (if it exists): [ -1 5; -3 2 ]"},
                {id: "7", text: "Find the inverse of the matrix (if it exists): [ 1 2 3; 0 2 4; 0 0 5 ]"},
                {id: "8", text: "Find the inverse of the matrix (if it exists): [ 1 0 0; 3 3 0; 5 2 -1 ]"},
                {id: "9", text: "Find the inverse of the matrix (if it exists): [ 2 1 3; 4 -1 0; -7 2 1 ]"},
                {id: "10", text: "Find the inverse of the matrix (if it exists): [ 1 -1 2; 0 2 -3; 3 -2 4 ]"},
                {id: "11", text: "Find the inverse of the matrix (if it exists): [ 1 0 0; 0 cosα sinα; 0 sinα -cosα ]"},
                {id: "12", text: "Let A = [ 3 7; 2 5 ] and B = [ 6 8; 7 9 ]. Verify that (AB)⁻¹ = B⁻¹ A⁻¹."},
                {id: "13", text: "If A = [ 3 1; -1 2 ], show that A² – 5A + 7I = O. Hence find A⁻¹."},
                {id: "14", text: "For the matrix A = [ 3 2; 1 1 ], find the numbers a and b such that A² + aA + bI = O."},
                {id: "15", text: "For the matrix A = [ 1 1 1; 1 2 -3; 2 -1 3 ]. Show that A³ – 6A² + 5A + 11 I = O. Hence, find A⁻¹."},
                {id: "16", text: "If A = [ 2 -1 1; -1 2 -1; 1 -1 2 ]. Verify that A³ – 6A² + 9A – 4I = O and hence find A⁻¹"},
                {id: "17", text: "Let A be a nonsingular square matrix of order 3 × 3. Then |adj A| is equal to\n(A) | A |\n(B) | A |²\n(C) | A |³\n(D) 3|A|"},
                {id: "18", text: "If A is an invertible matrix of order 2, then det (A⁻¹) is equal to\n(A) det (A)\n(B) 1/det (A)\n(C) 1\n(D) 0"}
            ]
        }
    },
    {
        section_title: "4.7 Applications of Determinants and Matrices",
        content: "In this section, we shall discuss application of determinants and matrices for solving the system of linear equations in two or three variables and for checking the consistency of the system of linear equations.",
        exercises: {
            title: "EXERCISE 4.6",
            questions: [
                {id: "1", text: "Examine the consistency of the system of equations: x + 2y = 2; 2x + 3y = 3"},
                {id: "2", text: "Examine the consistency of the system of equations: 2x – y = 5; x + y = 4"},
                {id: "3", text: "Examine the consistency of the system of equations: x + 3y = 5; 2x + 6y = 8"},
                {id: "4", text: "Examine the consistency of the system of equations: x + y + z = 1; 2x + 3y + 2z = 2; ax + ay + 2az = 4"},
                {id: "5", text: "Examine the consistency of the system of equations: 3x – y – 2z = 2; 2y – z = –1; 3x – 5y = 3"},
                {id: "6", text: "Examine the consistency of the system of equations: 5x – y + 4z = 5; 2x + 3y + 5z = 2; 5x – 2y + 6z = –1"},
                {id: "7", text: "Solve system of linear equations, using matrix method: 5x + 2y = 4; 7x + 3y = 5"},
                {id: "8", text: "Solve system of linear equations, using matrix method: 2x – y = –2; 3x + 4y = 3"},
                {id: "9", text: "Solve system of linear equations, using matrix method: 4x – 3y = 3; 3x – 5y = 7"},
                {id: "10", text: "Solve system of linear equations, using matrix method: 5x + 2y = 3; 3x + 2y = 5"},
                {id: "11", text: "Solve system of linear equations, using matrix method: 2x + y + z = 1; x – 2y – z = 3/2; 3y – 5z = 9"},
                {id: "12", text: "Solve system of linear equations, using matrix method: x – y + z = 4; 2x + y – 3z = 0; x + y + z = 2"},
                {id: "13", text: "Solve system of linear equations, using matrix method: 2x + 3y + 3z = 5; x – 2y + z = – 4; 3x – y – 2z = 3"},
                {id: "14", text: "Solve system of linear equations, using matrix method: x – y + 2z = 7; 3x + 4y – 5z = – 5; 2x – y + 3z = 12"},
                {id: "15", text: "If A = [ 2 -3 5; 3 2 -4; 1 1 -2 ], find A⁻¹. Using A⁻¹ solve the system of equations: 2x – 3y + 5z = 11; 3x + 2y – 4z = – 5; x + y – 2z = – 3"},
                {id: "16", text: "The cost of 4 kg onion, 3 kg wheat and 2 kg rice is ₹ 60. The cost of 2 kg onion, 4 kg wheat and 6 kg rice is ₹ 90. The cost of 6 kg onion 2 kg wheat and 3 kg rice is ₹ 70. Find cost of each item per kg by matrix method."}
            ]
        }
    },
    {
        section_title: "Miscellaneous Examples",
        content: "Miscellaneous examples for Chapter 4.",
        exercises: {
            title: "Miscellaneous Exercise on Chapter 4",
            questions: [
                {id: "1", text: "Prove that the determinant | x sinθ cosθ; -sinθ -x 1; cosθ 1 x | is independent of θ."},
                {id: "2", text: "Without expanding the determinant, prove that | a a² bc; b b² ca; c c² ab | = | 1 a² a³; 1 b² b³; 1 c² c³ |."},
                {id: "3", text: "Evaluate | cosαcosβ cosαsinβ -sinα; -sinβ cosβ 0; sinαcosβ sinαsinβ cosα |."},
                {id: "4", text: "If a, b and c are real numbers, and ∆ = | b+c c+a a+b; c+a a+b b+c; a+b b+c c+a | = 0, Show that either a + b + c = 0 or a = b = c."},
                {id: "5", text: "Solve the equation | x+a x x; x x+a x; x x x+a | = 0, a ≠ 0"},
                {id: "6", text: "Prove that | a² bc ac+c²; a²+ab b² ac; ab b²+bc c² | = 4a²b²c²"},
                {id: "7", text: "If A⁻¹ = [ 3 -1 1; -15 6 -5; 5 -2 2 ] and B = [ 1 2 -2; -1 3 0; 0 -2 1 ], find (AB)⁻¹"},
                {id: "8", text: "Let A = [ 1 2 1; 2 3 1; 1 1 5 ]. Verify that (i) [adj A]⁻¹ = adj (A⁻¹) (ii) (A⁻¹)⁻¹ = A"},
                {id: "9", text: "Evaluate | x y x+y; y x+y x; x+y x y |"},
                {id: "10", text: "Evaluate | 1 x y; 1 x+y y; 1 x x+y |"},
                {id: "11", text: "Using properties of determinants, prove that: | α α² β+γ; β β² γ+α; γ γ² α+β | = (β – γ) (γ – α) (α – β) (α + β + γ)"},
                {id: "12", text: "Using properties of determinants, prove that: | x x² 1+px³; y y² 1+py³; z z² 1+pz³ | = (1 + pxyz) (x – y) (y – z) (z – x), where p is any scalar."},
                {id: "13", text: "Using properties of determinants, prove that: | 3a -a+b -a+c; -b+a 3b -b+c; -c+a -c+b 3c | = 3(a + b + c) (ab + bc + ca)"},
                {id: "14", text: "Using properties of determinants, prove that: | 1 1+p 1+p+q; 2 3+2p 4+3p+2q; 3 6+3p 10+6p+3q | = 1"},
                {id: "15", text: "Using properties of determinants, prove that: | sinα cosα cos(α+δ); sinβ cosβ cos(β+δ); sinγ cosγ cos(γ+δ) | = 0"},
                {id: "16", text: "Solve the system of equations: 2/x + 3/y + 10/z = 4; 4/x - 6/y + 5/z = 1; 6/x + 9/y - 20/z = 2"},
                {id: "17", text: "If a, b, c, are in A.P, then the determinant | x+2 x+3 x+2a; x+3 x+4 x+2b; x+4 x+5 x+2c | is\n(A) 0\n(B) 1\n(C) x\n(D) 2x"},
                {id: "18", text: "If x, y, z are nonzero real numbers, then the inverse of matrix A = [ x 0 0; 0 y 0; 0 0 z ] is\n(A) [ x⁻¹ 0 0; 0 y⁻¹ 0; 0 0 z⁻¹ ]\n(B) xyz [ x⁻¹ 0 0; 0 y⁻¹ 0; 0 0 z⁻¹ ]\n(C) 1/xyz [ x 0 0; 0 y 0; 0 0 z ]\n(D) 1/xyz [ 1 0 0; 0 1 0; 0 0 1 ]"},
                {id: "19", text: "Let A = [ 1 sinθ 1; -sinθ 1 sinθ; -1 -sinθ 1 ], where 0 ≤ θ ≤ 2π. Then\n(A) Det(A) = 0\n(B) Det(A) ∈ (2, ∞)\n(C) Det(A) ∈ (2, 4)\n(D) Det(A) ∈ [2, 4]"}
            ]
        }
    }
  ]
};
