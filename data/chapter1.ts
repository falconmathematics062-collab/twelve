
export const chapter1 = {
  class: "2nd PUC",
  chapter_number: "1",
  chapter_title: "Relations and Functions",
  sections: [
    {
      section_title: "1.1 Introduction",
      content: `
Recall that the notion of relations and functions, domain, co-domain and range have been introduced in Class XI along with different types of specific real valued functions and their graphs. The concept of the term ‘relation’ in mathematics has been drawn from the meaning of relation in English language, according to which two objects or quantities are related if there is a recognisable connection or link between the two objects or quantities.

Let A be the set of students of Class XII of a school and B be the set of students of Class XI of the same school. Then some of the examples of relations from A to B are:
- (i) {(a, b) ∈ A × B: a is brother of b}
- (ii) {(a, b) ∈ A × B: a is sister of b}
- (iii) {(a, b) ∈ A × B: age of a is greater than age of b}

If (a, b) ∈ R, we say that a is related to b under the relation R and we write as a R b. In general, (a, b) ∈ R, we do not bother whether there is a recognisable connection or link between a and b. As seen in Class XI, functions are special kind of relations.

In this chapter, we will study different types of relations and functions, composition of functions, invertible functions and binary operations.
      `,
    },
    {
      section_title: "1.2 Types of Relations",
      content: `
In this section, we would like to study different types of relations. We know that a relation in a set A is a subset of A × A. Thus, the empty set φ and A × A are two extreme relations. For illustration, consider a relation R in the set A = {1, 2, 3, 4} given by R = {(a, b): a – b = 10}. This is the empty set, as no pair (a, b) satisfies the condition. Similarly, R' = {(a, b) : |a – b| ≥ 0} is the whole set A × A. These two extreme examples lead us to the following definitions.
      `,
      definitions: [
        {
          id: "1",
          title: "Definition 1: Empty Relation",
          text: "A relation R in a set A is called empty relation, if no element of A is related to any element of A, i.e., R = φ ⊂ A × A."
        },
        {
          id: "2",
          title: "Definition 2: Universal Relation",
          text: "A relation R in a set A is called universal relation, if each element of A is related to every element of A, i.e., R = A × A."
        },
        {
          id: "3",
          title: "Definition 3: Reflexive, Symmetric, Transitive",
          text: `A relation R in a set A is called:
(i) reflexive, if (a, a) ∈ R, for every a ∈ A,
(ii) symmetric, if (a₁, a₂) ∈ R implies that (a₂, a₁) ∈ R, for all a₁, a₂ ∈ A.
(iii) transitive, if (a₁, a₂) ∈ R and (a₂, a₃) ∈ R implies that (a₁, a₃) ∈ R, for all a₁, a₂, a₃ ∈ A.`
        },
        {
          id: "4",
          title: "Definition 4: Equivalence Relation",
          text: "A relation R in a set A is said to be an equivalence relation if R is reflexive, symmetric and transitive."
        }
      ],
      exercises: {
        title: "EXERCISE 1.1",
        questions: [
          { id: "1", text: "Determine whether each of the following relations are reflexive, symmetric and transitive:\n(i) Relation R in the set A = {1, 2, 3, ..., 13, 14} defined as R = {(x, y) : 3x – y = 0}\n(ii) Relation R in the set N of natural numbers defined as R = {(x, y) : y = x + 5 and x < 4}\n(iii) Relation R in the set A = {1, 2, 3, 4, 5, 6} as R = {(x, y) : y is divisible by x}\n(iv) Relation R in the set Z of all integers defined as R = {(x, y) : x – y is an integer}\n(v) Relation R in the set A of human beings in a town at a particular time given by:\n(a) R = {(x, y) : x and y work at the same place}\n(b) R = {(x, y) : x and y live in the same locality}\n(c) R = {(x, y) : x is exactly 7 cm taller than y}\n(d) R = {(x, y) : x is wife of y}\n(e) R = {(x, y) : x is father of y}" },
          { id: "2", text: "Show that the relation R in the set R of real numbers, defined as R = {(a, b) : a ≤ b²} is neither reflexive nor symmetric nor transitive." },
          { id: "3", text: "Check whether the relation R defined in the set {1, 2, 3, 4, 5, 6} as R = {(a, b) : b = a + 1} is reflexive, symmetric or transitive." },
          { id: "4", text: "Show that the relation R in R defined as R = {(a, b) : a ≤ b}, is reflexive and transitive but not symmetric." },
          { id: "5", text: "Check whether the relation R in R defined by R = {(a, b) : a ≤ b³} is reflexive, symmetric or transitive." },
          { id: "6", text: "Show that the relation R in the set {1, 2, 3} given by R = {(1, 2), (2, 1)} is symmetric but neither reflexive nor transitive." },
          { id: "7", text: "Show that the relation R in the set A of all the books in a library of a college, given by R = {(x, y) : x and y have same number of pages} is an equivalence relation." },
          { id: "8", text: "Show that the relation R in the set A = {1, 2, 3, 4, 5} given by R = {(a, b) : |a – b| is even}, is an equivalence relation. Show that all the elements of {1, 3, 5} are related to each other and all the elements of {2, 4} are related to each other. But no element of {1, 3, 5} is related to any element of {2, 4}." },
          { id: "9", text: "Show that each of the relation R in the set A = {x ∈ Z : 0 ≤ x ≤ 12}, given by\n(i) R = {(a, b) : |a – b| is a multiple of 4}\n(ii) R = {(a, b) : a = b}\nis an equivalence relation. Find the set of all elements related to 1 in each case." },
          { id: "10", text: "Give an example of a relation. Which is\n(i) Symmetric but neither reflexive nor transitive.\n(ii) Transitive but neither reflexive nor symmetric.\n(iii) Reflexive and symmetric but not transitive.\n(iv) Reflexive and transitive but not symmetric.\n(v) Symmetric and transitive but not reflexive." },
          { id: "11", text: "Show that the relation R in the set A of points in a plane given by R = {(P, Q) : distance of the point P from the origin is same as the distance of the point Q from the origin}, is an equivalence relation. Further, show that the set of all points related to a point P ≠ (0, 0) is the circle passing through P with origin as centre." },
          { id: "12", text: "Show that the relation R defined in the set A of all triangles as R = {(T₁, T₂) : T₁ is similar to T₂}, is equivalence relation. Consider three right angle triangles T₁ with sides 3, 4, 5, T₂ with sides 5, 12, 13 and T₃ with sides 6, 8, 10. Which triangles among T₁, T₂ and T₃ are related?" },
          { id: "13", text: "Show that the relation R defined in the set A of all polygons as R = {(P₁, P₂) : P₁ and P₂ have same number of sides}, is an equivalence relation. What is the set of all elements in A related to the right angle triangle T with sides 3, 4 and 5?" },
          { id: "14", text: "Let L be the set of all lines in XY plane and R be the relation in L defined as R = {(L₁, L₂) : L₁ is parallel to L₂}. Show that R is an equivalence relation. Find the set of all lines related to the line y = 2x + 4." },
          { id: "15", text: "Let R be the relation in the set {1, 2, 3, 4} given by R = {(1, 2), (2, 2), (1, 1), (4,4), (1, 3), (3, 3), (3, 2)}. Choose the correct answer.\n(A) R is reflexive and symmetric but not transitive.\n(B) R is reflexive and transitive but not symmetric.\n(C) R is symmetric and transitive but not reflexive.\n(D) R is an equivalence relation." },
          { id: "16", text: "Let R be the relation in the set N given by R = {(a, b) : a = b – 2, b > 6}. Choose the correct answer.\n(A) (2, 4) ∈ R\n(B) (3, 8) ∈ R\n(C) (6, 8) ∈ R\n(D) (8, 7) ∈ R" }
        ]
      }
    },
    {
      section_title: "1.3 Types of Functions",
      content: "The notion of a function along with some special functions like identity function, constant function, polynomial function, rational function, modulus function, signum function etc. along with their graphs have been given in Class XI.",
      definitions: [
        {
          id: "5",
          title: "Definition 5: One-One (Injective)",
          text: "A function f : X → Y is defined to be one-one (or injective), if the images of distinct elements of X under f are distinct, i.e., for every x₁, x₂ ∈ X, f(x₁) = f(x₂) implies x₁ = x₂. Otherwise, f is called many-one."
        },
        {
          id: "6",
          title: "Definition 6: Onto (Surjective)",
          text: "A function f : X → Y is said to be onto (or surjective), if every element of Y is the image of some element of X under f, i.e., for every y ∈ Y, there exists an element x in X such that f(x) = y."
        },
        {
          id: "7",
          title: "Definition 7: Bijective",
          text: "A function f : X → Y is said to be one-one and onto (or bijective), if f is both one-one and onto."
        }
      ],
      exercises: {
        title: "EXERCISE 1.2",
        questions: [
          { id: "1", text: "Show that the function f : R* → R* defined by f(x) = 1/x is one-one and onto, where R* is the set of all non-zero real numbers. Is the result true, if the domain R* is replaced by N with co-domain being same as R*?" },
          { id: "2", text: "Check the injectivity and surjectivity of the following functions:\n(i) f : N → N given by f(x) = x²\n(ii) f : Z → Z given by f(x) = x²\n(iii) f : R → R given by f(x) = x²\n(iv) f : N → N given by f(x) = x³\n(v) f : Z → Z given by f(x) = x³" },
          { id: "3", text: "Prove that the Greatest Integer Function f : R → R, given by f(x) = [x], is neither one-one nor onto, where [x] denotes the greatest integer less than or equal to x." },
          { id: "4", text: "Show that the Modulus Function f : R → R, given by f(x) = | x |, is neither one-one nor onto, where | x | is x, if x is positive or 0 and | x | is – x, if x is negative." },
          { id: "5", text: "Show that the Signum Function f : R → R, given by f(x) = { 1 if x > 0; 0 if x = 0; -1 if x < 0 } is neither one-one nor onto." },
          { id: "6", text: "Let A = {1, 2, 3}, B = {4, 5, 6, 7} and let f = {(1, 4), (2, 5), (3, 6)} be a function from A to B. Show that f is one-one." },
          { id: "7", text: "In each of the following cases, state whether the function is one-one, onto or bijective. Justify your answer.\n(i) f : R → R defined by f(x) = 3 – 4x\n(ii) f : R → R defined by f(x) = 1 + x²" },
          { id: "8", text: "Let A and B be sets. Show that f : A × B → B × A such that f(a, b) = (b, a) is bijective function." },
          { id: "9", text: "Let f : N → N be defined by f(n) = { (n+1)/2 if n is odd; n/2 if n is even } for all n ∈ N. State whether the function f is bijective. Justify your answer." },
          { id: "10", text: "Let A = R – {3} and B = R – {1}. Consider the function f : A → B defined by f(x) = (x-2)/(x-3). Is f one-one and onto? Justify your answer." },
          { id: "11", text: "Let f : R → R be defined as f(x) = x⁴. Choose the correct answer.\n(A) f is one-one onto\n(B) f is many-one onto\n(C) f is one-one but not onto\n(D) f is neither one-one nor onto." },
          { id: "12", text: "Let f : R → R be defined as f(x) = 3x. Choose the correct answer.\n(A) f is one-one onto\n(B) f is many-one onto\n(C) f is one-one but not onto\n(D) f is neither one-one nor onto." }
        ]
      }
    },
    {
      section_title: "1.4 Composition of Functions and Invertible Function",
      content: "In this section, we will study composition of functions and the inverse of a bijective function.",
      definitions: [
        {
          id: "8",
          title: "Definition 8: Composition",
          text: "Let f : A → B and g : B → C be two functions. Then the composition of f and g, denoted by gof, is defined as the function gof : A → C given by gof(x) = g(f(x)), ∀ x ∈ A."
        },
        {
          id: "9",
          title: "Definition 9: Invertible Function",
          text: "A function f : X → Y is defined to be invertible, if there exists a function g : Y → X such that gof = Ix and fog = Iy. The function g is called the inverse of f and is denoted by f⁻¹."
        }
      ],
      exercises: {
        title: "EXERCISE 1.3",
        questions: [
          { id: "1", text: "Let f : {1, 3, 4} → {1, 2, 5} and g : {1, 2, 5} → {1, 3} be given by f = {(1, 2), (3, 5), (4, 1)} and g = {(1, 3), (2, 3), (5, 1)}. Write down gof." },
          { id: "2", text: "Let f, g and h be functions from R to R. Show that\n(f + g) o h = foh + goh\n(f . g) o h = (foh) . (goh)" },
          { id: "3", text: "Find gof and fog, if\n(i) f(x) = | x | and g(x) = | 5x – 2 |\n(ii) f(x) = 8x³ and g(x) = x^(1/3)." },
          { id: "4", text: "If f(x) = (4x + 3)/(6x - 4), x ≠ 2/3, show that fof(x) = x, for all x ≠ 2/3. What is the inverse of f?" },
          { id: "5", text: "State with reason whether following functions have inverse\n(i) f : {1, 2, 3, 4} → {10} with f = {(1, 10), (2, 10), (3, 10), (4, 10)}\n(ii) g : {5, 6, 7, 8} → {1, 2, 3, 4} with g = {(5, 4), (6, 3), (7, 4), (8, 2)}\n(iii) h : {2, 3, 4, 5} → {7, 9, 11, 13} with h = {(2, 7), (3, 9), (4, 11), (5, 13)}" },
          { id: "6", text: "Show that f : [–1, 1] → R, given by f(x) = x/(x+2) is one-one. Find the inverse of the function f : [–1, 1] → Range f." },
          { id: "7", text: "Consider f : R → R given by f(x) = 4x + 3. Show that f is invertible. Find the inverse of f." },
          { id: "8", text: "Consider f : R+ → [4, ∞) given by f(x) = x² + 4. Show that f is invertible with the inverse f⁻¹ of f given by f⁻¹(y) = √(y - 4), where R+ is the set of all non-negative real numbers." },
          { id: "9", text: "Consider f : R+ → [– 5, ∞) given by f(x) = 9x² + 6x – 5. Show that f is invertible with f⁻¹(y) = (√(y+6) - 1) / 3." },
          { id: "10", text: "Let f : X → Y be an invertible function. Show that f has unique inverse." },
          { id: "11", text: "Consider f : {1, 2, 3} → {a, b, c} given by f(1) = a, f(2) = b and f(3) = c. Find f⁻¹ and show that (f⁻¹)⁻¹ = f." },
          { id: "12", text: "Let f: X → Y be an invertible function. Show that the inverse of f⁻¹ is f, i.e., (f⁻¹)⁻¹ = f." },
          { id: "13", text: "If f: R → R be given by f(x) = (3 - x³)^(1/3), then fof(x) is\n(A) x^(1/3) \n(B) x³ \n(C) x \n(D) (3 – x³)" },
          { id: "14", text: "Let f : R – {-4/3} → R be a function defined as f(x) = 4x / (3x + 4). The inverse of f is the map g : Range f → R – {-4/3} given by\n(A) g(y) = 3y / (3 - 4y) \n(B) g(y) = 4y / (4 - 3y) \n(C) g(y) = 4y / (3 - 4y) \n(D) g(y) = 3y / (4 - 3y)" }
        ]
      }
    },
    {
      section_title: "1.5 Binary Operations",
      content: "A binary operation * on a set A is a function * : A × A → A. We denote *(a, b) by a * b.",
      definitions: [
        { id: "10", title: "Definition 10", text: "A binary operation * on a set A is a function * : A × A → A. We denote *(a, b) by a * b." },
        { id: "11", title: "Definition 11", text: "A binary operation * on the set X is called commutative, if a * b = b * a, for every a, b ∈ X." },
        { id: "12", title: "Definition 12", text: "A binary operation * : A × A → A is said to be associative if (a * b) * c = a * (b * c), ∀ a, b, c, ∈ A." },
        { id: "13", title: "Definition 13", text: "Given a binary operation * : A × A → A, an element e ∈ A, if it exists, is called identity for the operation *, if a * e = a = e * a, ∀ a ∈ A." },
        { id: "14", title: "Definition 14", text: "Given a binary operation * : A × A → A with the identity element e in A, an element a ∈ A is said to be invertible with respect to the operation *, if there exists an element b in A such that a * b = e = b * a and b is called the inverse of a and is denoted by a⁻¹." }
      ],
      exercises: {
        title: "EXERCISE 1.4",
        questions: [
          { id: "1", text: "Determine whether or not each of the definition of * given below gives a binary operation. In the event that * is not a binary operation, give justification for this.\n(i) On Z+, define * by a * b = a – b\n(ii) On Z+, define * by a * b = ab\n(iii) On R, define * by a * b = ab²\n(iv) On Z+, define * by a * b = | a – b |\n(v) On Z+, define * by a * b = a" },
          { id: "2", text: "For each operation * defined below, determine whether * is binary, commutative or associative.\n(i) On Z, define a * b = a – b\n(ii) On Q, define a * b = ab + 1\n(iii) On Q, define a * b = ab/2\n(iv) On Z+, define a * b = 2^ab\n(v) On Z+, define a * b = a^b\n(vi) On R – {– 1}, define a * b = a / (b + 1)" },
          { id: "3", text: "Consider the binary operation ∧ on the set {1, 2, 3, 4, 5} defined by a ∧ b = min {a, b}. Write the operation table of the operation ∧." },
          { id: "4", text: "Consider a binary operation * on the set {1, 2, 3, 4, 5} given by the multiplication table (Table 1.2 in book). (i) Compute (2 * 3) * 4 and 2 * (3 * 4) (ii) Is * commutative? (iii) Compute (2 * 3) * (4 * 5)." },
          { id: "5", text: "Let *' be the binary operation on the set {1, 2, 3, 4, 5} defined by a *' b = H.C.F. of a and b. Is the operation *' same as the operation * defined in Exercise 4 above? Justify your answer." },
          { id: "6", text: "Let * be the binary operation on N given by a * b = L.C.M. of a and b. Find (i) 5 * 7, 20 * 16 (ii) Is * commutative? (iii) Is * associative? (iv) Find the identity of * in N (v) Which elements of N are invertible for the operation *?" },
          { id: "7", text: "Is * defined on the set {1, 2, 3, 4, 5} by a * b = L.C.M. of a and b a binary operation? Justify your answer." },
          { id: "8", text: "Let * be the binary operation on N defined by a * b = H.C.F. of a and b. Is * commutative? Is * associative? Does there exist identity for this binary operation on N?" },
          { id: "9", text: "Let * be a binary operation on the set Q of rational numbers as follows:\n(i) a * b = a – b\n(ii) a * b = a² + b²\n(iii) a * b = a + ab\n(iv) a * b = (a – b)²\n(v) a * b = ab/4\n(vi) a * b = ab²\nFind which of the binary operations are commutative and which are associative." },
          { id: "10", text: "Find which of the operations given above has identity." },
          { id: "11", text: "Let A = N × N and * be the binary operation on A defined by (a, b) * (c, d) = (a + c, b + d). Show that * is commutative and associative. Find the identity element for * on A, if any." },
          { id: "12", text: "State whether the following statements are true or false. Justify.\n(i) For an arbitrary binary operation * on a set N, a * a = a ∀ a ∈ N.\n(ii) If * is a commutative binary operation on N, then a * (b * c) = (c * b) * a" },
          { id: "13", text: "Consider a binary operation * on N defined as a * b = a³ + b³. Choose the correct answer.\n(A) Is * both associative and commutative?\n(B) Is * commutative but not associative?\n(C) Is * associative but not commutative?\n(D) Is * neither commutative nor associative?" }
        ]
      }
    },
    {
        section_title: "Miscellaneous Examples",
        content: "Miscellaneous examples covering all topics in the chapter.",
        exercises: {
            title: "Miscellaneous Exercise on Chapter 1",
            questions: [
                {id: "1", text: "Let f : R → R be defined as f(x) = 10x + 7. Find the function g : R → R such that g o f = f o g = 1R."},
                {id: "2", text: "Let f : W → W be defined as f(n) = n – 1, if n is odd and f(n) = n + 1, if n is even. Show that f is invertible. Find the inverse of f. Here, W is the set of all whole numbers."},
                {id: "3", text: "If f : R → R is defined by f(x) = x² – 3x + 2, find f (f(x))."},
                {id: "4", text: "Show that the function f : R → {x ∈ R : – 1 < x < 1} defined by f(x) = x / (1 + |x|), x ∈ R is one one and onto function."},
                {id: "5", text: "Show that the function f : R → R given by f(x) = x³ is injective."},
                {id: "6", text: "Give examples of two functions f : N → Z and g : Z → Z such that g o f is injective but g is not injective."},
                {id: "7", text: "Give examples of two functions f : N → N and g : N → N such that g o f is onto but f is not onto."},
                {id: "8", text: "Given a non empty set X, consider P(X) which is the set of all subsets of X. Define the relation R in P(X) as follows: For subsets A, B in P(X), ARB if and only if A ⊂ B. Is R an equivalence relation on P(X)? Justify your answer."},
                {id: "9", text: "Given a non-empty set X, consider the binary operation * : P(X) × P(X) → P(X) given by A * B = A ∩ B ∀ A, B in P(X), where P(X) is the power set of X. Show that X is the identity element for this operation and X is the only invertible element in P(X) with respect to the operation *."},
                {id: "10", text: "Find the number of all onto functions from the set {1, 2, 3, ... , n} to itself."},
                {id: "11", text: "Let S = {a, b, c} and T = {1, 2, 3}. Find F⁻¹ of the following functions F from S to T, if it exists.\n(i) F = {(a, 3), (b, 2), (c, 1)}\n(ii) F = {(a, 2), (b, 1), (c, 1)}"},
                {id: "12", text: "Consider the binary operations * : R × R → R and o : R × R → R defined as a * b = |a – b| and a o b = a, ∀ a, b ∈ R. Show that * is commutative but not associative, o is associative but not commutative. Further, show that ∀ a, b, c ∈ R, a * (b o c) = (a * b) o (a * c). Does o distribute over *? Justify your answer."},
                {id: "13", text: "Given a non-empty set X, let * : P(X) × P(X) → P(X) be defined as A * B = (A – B) ∪ (B – A), ∀ A, B ∈ P(X). Show that the empty set φ is the identity for the operation * and all the elements A of P(X) are invertible with A⁻¹ = A."},
                {id: "14", text: "Define a binary operation * on the set {0, 1, 2, 3, 4, 5} as a * b = { a + b if a + b < 6; a + b - 6 if a + b ≥ 6 }. Show that zero is the identity for this operation and each element a ≠ 0 of the set is invertible with 6 – a being the inverse of a."},
                {id: "15", text: "Let A = {– 1, 0, 1, 2}, B = {– 4, – 2, 0, 2} and f, g : A → B be functions defined by f(x) = x² – x, x ∈ A and g(x) = 2|x - 1/2| - 1, x ∈ A. Are f and g equal? Justify your answer."},
                {id: "16", text: "Let A = {1, 2, 3}. Then number of relations containing (1, 2) and (1, 3) which are reflexive and symmetric but not transitive is\n(A) 1 (B) 2 (C) 3 (D) 4"},
                {id: "17", text: "Let A = {1, 2, 3}. Then number of equivalence relations containing (1, 2) is\n(A) 1 (B) 2 (C) 3 (D) 4"},
                {id: "18", text: "Let f : R → R be the Signum Function defined as f(x) = { 1 if x > 0; 0 if x = 0; -1 if x < 0 } and g : R → R be the Greatest Integer Function given by g(x) = [x]. Then, does fog and gof coincide in (0, 1]?"},
                {id: "19", text: "Number of binary operations on the set {a, b} are\n(A) 10 (B) 16 (C) 20 (D ) 8"}
            ]
        }
    }
  ]
};
