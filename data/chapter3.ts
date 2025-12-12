
export const chapter3 = {
  class: "2nd PUC",
  chapter_number: "3",
  chapter_title: "Matrices",
  sections: [
    {
      section_title: "3.1 Introduction",
      content: "The knowledge of matrices is necessary in various branches of mathematics. Matrices are one of the most powerful tools in mathematics. This mathematical tool simplifies our work to a great extent when compared with other straight forward methods."
    },
    {
      section_title: "3.2 Matrix",
      content: "A matrix is an ordered rectangular array of numbers or functions. The numbers or functions are called the elements or the entries of the matrix. We denote matrices by capital letters.",
      definitions: [
        {
            id: "1",
            title: "Definition 1",
            text: "A matrix is an ordered rectangular array of numbers or functions. The numbers or functions are called the elements or the entries of the matrix."
        }
      ]
    },
    {
      section_title: "3.3 Types of Matrices",
      content: "In this section, we shall discuss different types of matrices: Column matrix, Row matrix, Square matrix, Diagonal matrix, Scalar matrix, Identity matrix, and Zero matrix.",
      exercises: {
        title: "EXERCISE 3.1",
        questions: [
          { id: "1", text: "In the matrix A = [ 2 5 19 -7; 35 -2 5/2 12; √3 1 -5 17 ], write: (i) The order of the matrix, (ii) The number of elements, (iii) Write the elements a₁₃, a₂₁, a₃₃, a₂₄, a₂₃." },
          { id: "2", text: "If a matrix has 24 elements, what are the possible orders it can have? What, if it has 13 elements?" },
          { id: "3", text: "If a matrix has 18 elements, what are the possible orders it can have? What, if it has 5 elements?" },
          { id: "4", text: "Construct a 2 × 2 matrix, A = [aij], whose elements are given by:\n(i) aij = (i+j)² / 2\n(ii) aij = i/j\n(iii) aij = (i+2j)² / 2" },
          { id: "5", text: "Construct a 3 × 4 matrix, whose elements are given by:\n(i) aij = 1/2 |-3i + j|\n(ii) aij = 2i - j" },
          { id: "6", text: "Find the values of x, y and z from the following equations:\n(i) [ 4 3; x 5 ] = [ y z; 1 5 ]\n(ii) [ x+y 2; 5+z xy ] = [ 6 2; 5 8 ]\n(iii) [ x+y+z; x+z; y+z ] = [ 9; 5; 7 ]" },
          { id: "7", text: "Find the value of a, b, c and d from the equation:\n[ a-b 2a+c; 2a-b 3c+d ] = [ -1 5; 0 13 ]" },
          { id: "8", text: "A = [aij] m×n is a square matrix, if\n(A) m < n\n(B) m > n\n(C) m = n\n(D) None of these" },
          { id: "9", text: "Which of the given values of x and y make the following pair of matrices equal [ 3x+7 5; y+1 2-3x ], [ 0 y-2; 8 4 ]\n(A) x = -1/3, y = 7\n(B) Not possible to find\n(C) y = 7, x = -2/3\n(D) x = -1/3, y = -2/3" },
          { id: "10", text: "The number of all possible matrices of order 3 × 3 with each entry 0 or 1 is:\n(A) 27\n(B) 18\n(C) 81\n(D) 512" }
        ]
      }
    },
    {
      section_title: "3.4 Operations on Matrices",
      content: "In this section, we shall introduce certain operations on matrices, namely, addition of matrices, multiplication of a matrix by a scalar, difference and multiplication of matrices.",
       exercises: {
        title: "EXERCISE 3.2",
        questions: [
          { id: "1", text: "Let A = [ 2 4; 3 2 ], B = [ 1 3; -2 5 ], C = [ -2 5; 3 4 ]. Find each of the following: (i) A + B (ii) A – B (iii) 3A – C (iv) AB (v) BA" },
          { id: "2", text: "Compute the following:\n(i) [ a b; -b a ] + [ a b; b a ]\n(ii) [ a²+b² b²+c²; a²+c² a²+b² ] + [ 2ab 2bc; -2ac -2ab ]\n(iii) [ -1 4 -6; 8 5 16; 2 8 5 ] + [ 12 7 6; 8 0 5; 3 2 4 ]\n(iv) [ cos²x sin²x; sin²x cos²x ] + [ sin²x cos²x; cos²x sin²x ]" },
          { id: "3", text: "Compute the indicated products.\n(i) [ a b; -b a ] [ a -b; b a ]\n(ii) [ 1; 2; 3 ] [ 2 3 4 ]\n(iii) [ 1 -2; 2 3 ] [ 1 2 3; 2 3 1 ]\n(iv) [ 2 3 4; 3 4 5; 4 5 6 ] [ 1 -3 5; 0 2 4; 3 0 5 ]\n(v) [ 2 1; 3 2; -1 1 ] [ 1 0 1; -1 2 1 ]\n(vi) [ 3 -1 3; -1 0 2 ] [ 2 -3; 1 0; 3 1 ]" },
          { id: "4", text: "If A = [ 1 2 -3; 5 0 2; 1 -1 1 ], B = [ 3 -1 2; 4 2 5; 2 0 3 ] and C = [ 4 1 2; 0 3 2; 1 -2 3 ], then compute (A+B) and (B-C). Also, verify that A + (B-C) = (A+B) - C." },
          { id: "5", text: "If A = [ 2/3 1 5/3; 1/3 2/3 4/3; 7/3 2 2/3 ] and B = [ 2/5 3/5 1; 1/5 2/5 4/5; 7/5 6/5 2/5 ], then compute 3A - 5B." },
          { id: "6", text: "Simplify cosθ [ cosθ sinθ; -sinθ cosθ ] + sinθ [ sinθ -cosθ; cosθ sinθ ]" },
          { id: "7", text: "Find X and Y, if\n(i) X + Y = [ 7 0; 2 5 ] and X - Y = [ 3 0; 0 3 ]\n(ii) 2X + 3Y = [ 2 3; 4 0 ] and 3X + 2Y = [ 2 -2; -1 5 ]" },
          { id: "8", text: "Find X, if Y = [ 3 2; 1 4 ] and 2X + Y = [ 1 0; -3 2 ]" },
          { id: "9", text: "Find x and y, if 2 [ 1 3; 0 x ] + [ y 0; 1 2 ] = [ 5 6; 1 8 ]" },
          { id: "10", text: "Solve the equation for x, y, z and t, if 2 [ x z; y t ] + 3 [ 1 -1; 0 2 ] = 3 [ 3 5; 4 6 ]" },
          { id: "11", text: "If x [ 2; 3 ] + y [ -1; 1 ] = [ 10; 5 ], find the values of x and y." },
          { id: "12", text: "Given 3 [ x y; z w ] = [ x 6; -1 2w ] + [ 4 x+y; z+w 3 ], find the values of x, y, z and w." },
          { id: "13", text: "If F(x) = [ cos x -sin x 0; sin x cos x 0; 0 0 1 ], show that F(x) F(y) = F(x + y)." },
          { id: "14", text: "Show that\n(i) [ 5 -1; 6 7 ] [ 2 1; 3 4 ] ≠ [ 2 1; 3 4 ] [ 5 -1; 6 7 ]\n(ii) [ 1 2 3; 0 1 0; 1 1 0 ] [ -1 1 0; 0 -1 1; 2 3 4 ] ≠ [ -1 1 0; 0 -1 1; 2 3 4 ] [ 1 2 3; 0 1 0; 1 1 0 ]" },
          { id: "15", text: "Find A² - 5A + 6I, if A = [ 2 0 1; 2 1 3; 1 -1 0 ]" },
          { id: "16", text: "If A = [ 1 0 2; 0 2 1; 2 0 3 ], prove that A³ - 6A² + 7A + 2I = 0" },
          { id: "17", text: "If A = [ 3 -2; 4 -2 ] and I = [ 1 0; 0 1 ], find k so that A² = kA - 2I" },
          { id: "18", text: "If A = [ 0 -tan(α/2); tan(α/2) 0 ] and I is the identity matrix of order 2, show that I + A = (I - A) [ cosα -sinα; sinα cosα ]" },
          { id: "19", text: "A trust fund has ₹ 30,000 that must be invested in two different types of bonds. The first bond pays 5% interest per year, and the second bond pays 7% interest per year. Using matrix multiplication, determine how to divide ₹ 30,000 among the two types of bonds. If the trust fund must obtain an annual total interest of: (a) ₹ 1800 (b) ₹ 2000" },
          { id: "20", text: "The bookshop of a particular school has 10 dozen chemistry books, 8 dozen physics books, 10 dozen economics books. Their selling prices are ₹ 80, ₹ 60 and ₹ 40 each respectively. Find the total amount the bookshop will receive from selling all the books using matrix algebra." },
          { id: "21", text: "Assume X, Y, Z, W and P are matrices of order 2 × n, 3 × k, 2 × p, n × 3 and p × k, respectively. The restriction on n, k and p so that PY + WY will be defined are:\n(A) k = 3, p = n\n(B) k is arbitrary, p = 2\n(C) p is arbitrary, k = 3\n(D) k = 2, p = 3" },
          { id: "22", text: "If n = p, then the order of the matrix 7X – 5Z is:\n(A) p × 2\n(B) 2 × n\n(C) n × 3\n(D) p × n" }
        ]
      }
    },
    {
      section_title: "3.5 Transpose of a Matrix",
      content: "If A = [aij] be an m × n matrix, then the matrix obtained by interchanging the rows and columns of A is called the transpose of A. Transpose of the matrix A is denoted by A' or (A^T).",
      definitions: [
        { id: "3", title: "Definition 3", text: "If A = [aij] be an m × n matrix, then the matrix obtained by interchanging the rows and columns of A is called the transpose of A." },
        { id: "4", title: "Definition 4", text: "A square matrix A = [aij] is said to be symmetric if A' = A, that is, [aij] = [aji] for all possible values of i and j." },
        { id: "5", title: "Definition 5", text: "A square matrix A = [aij] is said to be skew symmetric matrix if A' = – A, that is aji = – aij for all possible values of i and j." }
      ],
      exercises: {
        title: "EXERCISE 3.3",
        questions: [
          { id: "1", text: "Find the transpose of each of the following matrices:\n(i) [ 5; 1/2; -1 ]\n(ii) [ 1 -1; 2 3 ]\n(iii) [ -1 5 6; √3 5 6; 2 3 -1 ]" },
          { id: "2", text: "If A = [ -1 2 3; 5 7 9; -2 1 1 ] and B = [ -4 1 -5; 1 2 0; 1 3 1 ], then verify that (i) (A + B)' = A' + B', (ii) (A – B)' = A' – B'" },
          { id: "3", text: "If A' = [ 3 4; -1 2; 0 1 ] and B = [ -1 2 1; 1 2 3 ], then verify that (i) (A + B)' = A' + B' (ii) (A – B)' = A' – B'" },
          { id: "4", text: "If A' = [ -2 3; 1 2 ] and B = [ -1 0; 1 2 ], then find (A + 2B)'" },
          { id: "5", text: "For the matrices A and B, verify that (AB)' = B'A', where\n(i) A = [ 1; -4; 3 ], B = [ -1 2 1 ]\n(ii) A = [ 0; 1; 2 ], B = [ 1 5 7 ]" },
          { id: "6", text: "If (i) A = [ cosα sinα; -sinα cosα ], then verify that A' A = I\n(ii) If A = [ sinα cosα; -cosα sinα ], then verify that A' A = I" },
          { id: "7", text: "(i) Show that the matrix A = [ 1 -1 5; -1 2 1; 5 1 3 ] is a symmetric matrix.\n(ii) Show that the matrix A = [ 0 1 -1; -1 0 1; 1 -1 0 ] is a skew symmetric matrix." },
          { id: "8", text: "For the matrix A = [ 1 5; 6 7 ], verify that\n(i) (A + A') is a symmetric matrix\n(ii) (A – A') is a skew symmetric matrix" },
          { id: "9", text: "Find 1/2 (A + A') and 1/2 (A – A'), when A = [ 0 a b; -a 0 c; -b -c 0 ]" },
          { id: "10", text: "Express the following matrices as the sum of a symmetric and a skew symmetric matrix:\n(i) [ 3 5; 1 -1 ]\n(ii) [ 6 -2 2; -2 3 -1; 2 -1 3 ]\n(iii) [ 3 3 -1; -2 -2 1; -4 -5 2 ]\n(iv) [ 1 5; -1 2 ]" },
          { id: "11", text: "If A, B are symmetric matrices of same order, then AB – BA is a\n(A) Skew symmetric matrix\n(B) Symmetric matrix\n(C) Zero matrix\n(D) Identity matrix" },
          { id: "12", text: "If A = [ cosα -sinα; sinα cosα ], and A + A' = I, then the value of α is\n(A) π/6\n(B) π/3\n(C) π\n(D) 3π/2" }
        ]
      }
    },
    {
      section_title: "3.7 Elementary Operation (Transformation) of a Matrix",
      content: `
There are six operations (transformations) on a matrix, three of which are due to rows and three due to columns, which are known as elementary operations or transformations.

**(i) Interchange of rows or columns:**
The interchange of ith and jth rows is denoted by Ri ↔ Rj.
The interchange of ith and jth columns is denoted by Ci ↔ Cj.

**(ii) Multiplication by a non-zero number:**
The multiplication of each element of the ith row by k (where k ≠ 0) is denoted by Ri → kRi.
Similarly for columns: Ci → kCi.

**(iii) Addition of multiple of another row/column:**
The addition to the elements of ith row, the corresponding elements of jth row multiplied by k, is denoted by Ri → Ri + kRj.
Similarly for columns: Ci → Ci + kCj.
`
    },
    {
      section_title: "3.8 Invertible Matrices",
      content: "If A is a square matrix of order m, and if there exists another square matrix B of the same order m, such that AB = BA = I, then B is called the inverse matrix of A and it is denoted by A⁻¹. In that case A is said to be invertible.",
      definitions: [
        { id: "6", title: "Definition 6", text: "If A is a square matrix of order m, and if there exists another square matrix B of the same order m, such that AB = BA = I, then B is called the inverse matrix of A and it is denoted by A⁻¹. In that case A is said to be invertible." }
      ],
      exercises: {
        title: "EXERCISE 3.4",
        questions: [
          { id: "1", text: "Using elementary transformations, find the inverse of the matrix [ 1 -1; 2 3 ]" },
          { id: "2", text: "Using elementary transformations, find the inverse of the matrix [ 2 1; 1 1 ]" },
          { id: "3", text: "Using elementary transformations, find the inverse of the matrix [ 1 3; 2 7 ]" },
          { id: "4", text: "Using elementary transformations, find the inverse of the matrix [ 2 3; 5 7 ]" },
          { id: "5", text: "Using elementary transformations, find the inverse of the matrix [ 2 1; 7 4 ]" },
          { id: "6", text: "Using elementary transformations, find the inverse of the matrix [ 2 5; 1 3 ]" },
          { id: "7", text: "Using elementary transformations, find the inverse of the matrix [ 3 1; 5 2 ]" },
          { id: "8", text: "Using elementary transformations, find the inverse of the matrix [ 4 5; 3 4 ]" },
          { id: "9", text: "Using elementary transformations, find the inverse of the matrix [ 3 10; 2 7 ]" },
          { id: "10", text: "Using elementary transformations, find the inverse of the matrix [ 3 -1; -4 2 ]" },
          { id: "11", text: "Using elementary transformations, find the inverse of the matrix [ 2 -6; 1 -2 ]" },
          { id: "12", text: "Using elementary transformations, find the inverse of the matrix [ 6 -3; -2 1 ]" },
          { id: "13", text: "Using elementary transformations, find the inverse of the matrix [ 2 -3; -1 2 ]" },
          { id: "14", text: "Using elementary transformations, find the inverse of the matrix [ 2 1; 4 2 ]" },
          { id: "15", text: "Using elementary transformations, find the inverse of the matrix [ 2 -3 3; 2 2 3; 3 -2 2 ]" },
          { id: "16", text: "Using elementary transformations, find the inverse of the matrix [ 1 3 -2; -3 0 -5; 2 5 0 ]" },
          { id: "17", text: "Using elementary transformations, find the inverse of the matrix [ 2 0 -1; 5 1 0; 0 1 3 ]" },
          { id: "18", text: "Matrices A and B will be inverse of each other only if\n(A) AB = BA\n(B) AB = BA = 0\n(C) AB = 0, BA = I\n(D) AB = BA = I" }
        ]
      }
    },
    {
        section_title: "Miscellaneous Examples",
        content: `
**Chapter Summary:**

1.  **Matrix**: An ordered rectangular array of numbers or functions.
2.  **Order**: A matrix having m rows and n columns is of order m × n.
3.  **Types**: Column, Row, Square, Diagonal, Scalar, Identity, Zero matrices.
4.  **Operations**:
    *   **Addition**: Possible if orders are same.
    *   **Multiplication**: Possible if columns of first equals rows of second.
5.  **Transpose (A')**: Obtained by interchanging rows and columns.
    *   (A')' = A
    *   (kA)' = kA'
    *   (A + B)' = A' + B'
    *   (AB)' = B'A'
6.  **Symmetric**: A' = A
7.  **Skew-symmetric**: A' = –A
8.  **Inverse**: If AB = BA = I, then B is the inverse of A (A⁻¹).
        `,
        exercises: {
            title: "Miscellaneous Exercise on Chapter 3",
            questions: [
                {id: "1", text: "Let A = [ 0 1; 0 0 ], show that (aI + bA)ⁿ = aⁿ I + n aⁿ⁻¹ bA, where I is the identity matrix of order 2 and n ∈ N."},
                {id: "2", text: "If A = [ 1 1 1; 1 1 1; 1 1 1 ], prove that Aⁿ = [ 3ⁿ⁻¹ 3ⁿ⁻¹ 3ⁿ⁻¹; 3ⁿ⁻¹ 3ⁿ⁻¹ 3ⁿ⁻¹; 3ⁿ⁻¹ 3ⁿ⁻¹ 3ⁿ⁻¹ ], n ∈ N."},
                {id: "3", text: "If A = [ 3 -4; 1 -1 ], then prove that Aⁿ = [ 1+2n -4n; n 1-2n ], where n is any positive integer."},
                {id: "4", text: "If A and B are symmetric matrices, prove that AB – BA is a skew symmetric matrix."},
                {id: "5", text: "Show that the matrix B'AB is symmetric or skew symmetric according as A is symmetric or skew symmetric."},
                {id: "6", text: "Find the values of x, y, z if the matrix A = [ 0 2y z; x y -z; x -y z ] satisfy the equation A'A = I."},
                {id: "7", text: "For what values of x : [ 1 2 1 ] [ 1 2 0; 2 0 1; 1 0 2 ] [ 0; 2; x ] = O?"},
                {id: "8", text: "If A = [ 3 1; -1 2 ], show that A² – 5A + 7I = 0."},
                {id: "9", text: "Find x, if [ x -5 -1 ] [ 1 0 2; 0 2 1; 2 0 3 ] [ x; 4; 1 ] = O"},
                {id: "10", text: "A manufacturer produces three products x, y, z which he sells in two markets. Annual sales are indicated below:\nMarket I: 10,000, 2,000, 18,000\nMarket II: 6,000, 20,000, 8,000\n(a) If unit sale prices of x, y and z are ₹ 2.50, ₹ 1.50 and ₹ 1.00, respectively, find the total revenue in each market with the help of matrix algebra.\n(b) If the unit costs of the above three commodities are ₹ 2.00, ₹ 1.00 and 50 paise respectively. Find the gross profit."},
                {id: "11", text: "Find the matrix X so that X [ 1 2 3; 4 5 6 ] = [ -7 -8 -9; 2 4 6 ]"},
                {id: "12", text: "If A and B are square matrices of the same order such that AB = BA, then prove by induction that ABⁿ = BⁿA. Further, prove that (AB)ⁿ = AⁿBⁿ for all n ∈ N."},
                {id: "13", text: "If A = [ α β; γ -α ] is such that A² = I, then\n(A) 1 + α² + βγ = 0\n(B) 1 – α² + βγ = 0\n(C) 1 – α² – βγ = 0\n(D) 1 + α² – βγ = 0"},
                {id: "14", text: "If the matrix A is both symmetric and skew symmetric, then\n(A) A is a diagonal matrix\n(B) A is a zero matrix\n(C) A is a square matrix\n(D) None of these"},
                {id: "15", text: "If A is square matrix such that A² = A, then (I + A)³ – 7 A is equal to\n(A) A\n(B) I – A\n(C) I\n(D) 3A"}
            ]
        }
    }
  ]
};
