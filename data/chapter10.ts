
export const chapter10 = {
  class: "2nd PUC",
  chapter_number: "10",
  chapter_title: "Vector Algebra",
  sections: [
    {
      section_title: "10.1 Introduction",
      content: "In mathematics, physics and engineering, we frequently come across with both types of quantities, namely, scalar quantities and vector quantities."
    },
    {
      section_title: "10.2 Some Basic Concepts",
      content: "A quantity that has magnitude as well as direction is called a vector.",
      exercises: {
        title: "EXERCISE 10.1",
        questions: [
          { id: "1", text: "Represent graphically a displacement of 40 km, 30° east of north." },
          { id: "2", text: "Classify the following measures as scalars and vectors.\n(i) 10 kg\n(ii) 2 meters north-west\n(iii) 40°\n(iv) 40 watt\n(v) 10⁻¹⁹ coulomb\n(vi) 20 m/s²" },
          { id: "3", text: "Classify the following as scalar and vector quantities.\n(i) time period\n(ii) distance\n(iii) force\n(iv) velocity\n(v) work done" },
          { id: "4", text: "In Fig 10.6 (a square), identify the following vectors.\n(i) Coinitial\n(ii) Equal\n(iii) Collinear but not equal" },
          { id: "5", text: "Answer the following as true or false.\n(i) a and – a are collinear.\n(ii) Two collinear vectors are always equal in magnitude.\n(iii) Two vectors having same magnitude are collinear.\n(iv) Two collinear vectors having the same magnitude are equal." }
        ]
      }
    },
    {
      section_title: "10.3 Types of Vectors",
      content: "Zero Vector, Unit Vector, Coinitial Vectors, Collinear Vectors, Equal Vectors, Negative of a Vector."
    },
    {
      section_title: "10.4 Addition of Vectors",
      content: "Triangle law and Parallelogram law of vector addition."
    },
    {
      section_title: "10.5 Multiplication of a Vector by a Scalar",
      content: "Product of vector by a scalar. Components of a vector. Vector joining two points. Section formula.",
      exercises: {
        title: "EXERCISE 10.2",
        questions: [
          { id: "1", text: "Compute the magnitude of the following vectors:\na = i + j + k; b = 2i – 7j – 3k; c = 1/√3 i + 1/√3 j – 1/√3 k" },
          { id: "2", text: "Write two different vectors having same magnitude." },
          { id: "3", text: "Write two different vectors having same direction." },
          { id: "4", text: "Find the values of x and y so that the vectors 2i + 3j and xi + yj are equal." },
          { id: "5", text: "Find the scalar and vector components of the vector with initial point (2, 1) and terminal point (– 5, 7)." },
          { id: "6", text: "Find the sum of the vectors a = i – 2j + k, b = – 2i + 4j + 5k and c = i – 6j – 7k." },
          { id: "7", text: "Find the unit vector in the direction of the vector a = i + j + 2k." },
          { id: "8", text: "Find the unit vector in the direction of vector PQ, where P and Q are the points (1, 2, 3) and (4, 5, 6), respectively." },
          { id: "9", text: "For given vectors, a = 2i – j + 2k and b = – i + j – k, find the unit vector in the direction of the vector a + b." },
          { id: "10", text: "Find a vector in the direction of vector 5i – j + 2k which has magnitude 8 units." },
          { id: "11", text: "Show that the vectors 2i – 3j + 4k and – 4i + 6j – 8k are collinear." },
          { id: "12", text: "Find the direction cosines of the vector i + 2j + 3k." },
          { id: "13", text: "Find the direction cosines of the vector joining the points A (1, 2, –3) and B(–1, –2, 1), directed from A to B." },
          { id: "14", text: "Show that the vector i + j + k is equally inclined to the axes OX, OY and OZ." },
          { id: "15", text: "Find the position vector of a point R which divides the line joining two points P and Q whose position vectors are i + 2j – k and – i + j + k respectively, in the ratio 2 : 1\n(i) internally\n(ii) externally" },
          { id: "16", text: "Find the position vector of the mid point of the vector joining the points P(2, 3, 4) and Q(4, 1, –2)." },
          { id: "17", text: "Show that the points A, B and C with position vectors, a = 3i – 4j – 4k, b = 2i – j + k and c = i – 3j – 5k, respectively form the vertices of a right angled triangle." },
          { id: "18", text: "In triangle ABC, which of the following is not true:\n(A) AB + BC + CA = 0\n(B) AB + BC – AC = 0\n(C) AB + BC – CA = 0\n(D) AB – CB + CA = 0" },
          { id: "19", text: "If a and b are two collinear vectors, then which of the following are incorrect:\n(A) b = λa, for some scalar λ\n(B) a = ±b\n(C) the respective components of a and b are not proportional\n(D) both the vectors have same direction, but different magnitudes." }
        ]
      }
    },
    {
      section_title: "10.6 Product of Two Vectors",
      content: "Scalar (dot) product and Vector (cross) product.",
      exercises: {
        title: "EXERCISE 10.3",
        questions: [
          { id: "1", text: "Find the angle between two vectors a and b with magnitudes √3 and 2, respectively having a . b = √6." },
          { id: "2", text: "Find the angle between the vectors i – 2j + 3k and 3i – 2j + k." },
          { id: "3", text: "Find the projection of the vector i – j on the vector i + j." },
          { id: "4", text: "Find the projection of the vector i + 3j + 7k on the vector 7i – j + 8k." },
          { id: "5", text: "Show that each of the given three vectors is a unit vector:\n1/7(2i + 3j + 6k), 1/7(3i – 6j + 2k), 1/7(6i + 2j – 3k)\nAlso, show that they are mutually perpendicular to each other." },
          { id: "6", text: "Find |a| and |b|, if (a + b) . (a – b) = 8 and |a| = 8|b|." },
          { id: "7", text: "Evaluate the product (3a – 5b) . (2a + 7b)." },
          { id: "8", text: "Find the magnitude of two vectors a and b, having the same magnitude and such that the angle between them is 60° and their scalar product is 1/2." },
          { id: "9", text: "Find |x|, if for a unit vector a, (x – a) . (x + a) = 12." },
          { id: "10", text: "If a = 2i + 2j + 3k, b = – i + 2j + k and c = 3i + j are such that a + λb is perpendicular to c, then find the value of λ." },
          { id: "11", text: "Show that |a|b + |b|a is perpendicular to |a|b – |b|a, for any two nonzero vectors a and b." },
          { id: "12", text: "If a . a = 0 and a . b = 0, then what can be concluded about the vector b?" },
          { id: "13", text: "If a, b, c are unit vectors such that a + b + c = 0, find the value of a . b + b . c + c . a." },
          { id: "14", text: "If either vector a = 0 or b = 0, then a . b = 0. But the converse need not be true. Justify your answer with an example." },
          { id: "15", text: "If the vertices A, B, C of a triangle ABC are (1, 2, 3), (–1, 0, 0), (0, 1, 2), respectively, then find ∠ABC." },
          { id: "16", text: "Show that the points A(1, 2, 7), B(2, 6, 3) and C(3, 10, –1) are collinear." },
          { id: "17", text: "Show that the vectors 2i – j + k, i – 3j – 5k and 3i – 4j – 4k form the vertices of a right angled triangle." },
          { id: "18", text: "If a is a nonzero vector of magnitude ‘a’ and λ a nonzero scalar, then λa is unit vector if\n(A) λ = 1\n(B) λ = – 1\n(C) a = |λ|\n(D) a = 1/|λ|" }
        ]
      }
    },
    {
      section_title: "10.6.3 Vector (or cross) product of two vectors",
      content: "Definition and properties of vector product.",
      exercises: {
        title: "EXERCISE 10.4",
        questions: [
          { id: "1", text: "Find |a × b|, if a = i – 7j + 7k and b = 3i – 2j + 2k." },
          { id: "2", text: "Find a unit vector perpendicular to each of the vector a + b and a – b, where a = 3i + 2j + 2k and b = i + 2j – 2k." },
          { id: "3", text: "If a unit vector a makes angles π/3 with i, π/4 with j and an acute angle θ with k, then find θ and hence, the components of a." },
          { id: "4", text: "Show that (a – b) × (a + b) = 2 (a × b)" },
          { id: "5", text: "Find λ and µ if (2i + 6j + 27k) × (i + λj + µk) = 0." },
          { id: "6", text: "Given that a . b = 0 and a × b = 0. What can you conclude about the vectors a and b?" },
          { id: "7", text: "Let the vectors a, b, c be given as a = a1i + a2j + a3k, b = b1i + b2j + b3k, c = c1i + c2j + c3k. Then show that a × (b + c) = a × b + a × c." },
          { id: "8", text: "If either a = 0 or b = 0, then a × b = 0. Is the converse true? Justify your answer with an example." },
          { id: "9", text: "Find the area of the triangle with vertices A(1, 1, 2), B(2, 3, 5) and C(1, 5, 5)." },
          { id: "10", text: "Find the area of the parallelogram whose adjacent sides are determined by the vectors a = i – j + 3k and b = 2i – 7j + k." },
          { id: "11", text: "Let the vectors a and b be such that |a| = 3 and |b| = √2/3, then a × b is a unit vector, if the angle between a and b is\n(A) π/6\n(B) π/4\n(C) π/3\n(D) π/2" },
          { id: "12", text: "Area of a rectangle having vertices A, B, C and D with position vectors -i + 1/2j + 4k, i + 1/2j + 4k, i - 1/2j + 4k and -i - 1/2j + 4k, respectively is\n(A) 1/2\n(B) 1\n(C) 2\n(D) 4" }
        ]
      }
    },
    {
      section_title: "Miscellaneous Examples",
      content: "Miscellaneous examples on Vector Algebra.",
      exercises: {
        title: "Miscellaneous Exercise on Chapter 10",
        questions: [
          { id: "1", text: "Write down a unit vector in XY-plane, making an angle of 30° with the positive direction of x-axis." },
          { id: "2", text: "Find the scalar components and magnitude of the vector joining the points P(x₁, y₁, z₁) and Q(x₂, y₂, z₂)." },
          { id: "3", text: "A girl walks 4 km towards west, then she walks 3 km in a direction 30° east of north and stops. Determine the girl’s displacement from her initial point of departure." },
          { id: "4", text: "If a = b + c, then is it true that |a| = |b| + |c|? Justify your answer." },
          { id: "5", text: "Find the value of x for which x(i + j + k) is a unit vector." },
          { id: "6", text: "Find a vector of magnitude 5 units, and parallel to the resultant of the vectors a = 2i + 3j – k and b = i – 2j + k." },
          { id: "7", text: "If a = i + j + k, b = 2i – j + 3k and c = i – 2j + k, find a unit vector parallel to the vector 2a – b + 3c." },
          { id: "8", text: "Show that the points A(1, – 2, – 8), B(5, 0, –2) and C(11, 3, 7) are collinear, and find the ratio in which B divides AC." },
          { id: "9", text: "Find the position vector of a point R which divides the line joining two points P and Q whose position vectors are (2a + b) and (a – 3b) externally in the ratio 1 : 2. Also, show that P is the mid point of the line segment RQ." },
          { id: "10", text: "The two adjacent sides of a parallelogram are 2i – 4j + 5k and i – 2j – 3k. Find the unit vector parallel to its diagonal. Also, find its area." },
          { id: "11", text: "Show that the direction cosines of a vector equally inclined to the axes OX, OY and OZ are ±(1/√3, 1/√3, 1/√3)." },
          { id: "12", text: "Let a = i + 4j + 2k, b = 3i – 2j + 7k and c = 2i – j + 4k. Find a vector d which is perpendicular to both a and b, and c . d = 15." },
          { id: "13", text: "The scalar product of the vector i + j + k with a unit vector along the sum of vectors 2i + 4j – 5k and λi + 2j + 3k is equal to one. Find the value of λ." },
          { id: "14", text: "If a, b, c are mutually perpendicular vectors of equal magnitudes, show that the vector a + b + c is equally inclined to a, b and c." },
          { id: "15", text: "Prove that (a + b) . (a + b) = |a|² + |b|², if and only if a, b are perpendicular, given a ≠ 0, b ≠ 0." },
          { id: "16", text: "If θ is the angle between two vectors a and b, then a . b ≥ 0 only when\n(A) 0 < θ < π/2\n(B) 0 ≤ θ ≤ π/2\n(C) 0 < θ < π\n(D) 0 ≤ θ ≤ π" },
          { id: "17", text: "Let a and b be two unit vectors and θ is the angle between them. Then a + b is a unit vector if\n(A) θ = π/4\n(B) θ = π/3\n(C) θ = π/2\n(D) θ = 2π/3" },
          { id: "18", text: "The value of i . (j × k) + j . (i × k) + k . (i × j) is\n(A) 0\n(B) –1\n(C) 1\n(D) 3" },
          { id: "19", text: "If θ is the angle between any two vectors a and b, then |a . b| = |a × b| when θ is equal to\n(A) 0\n(B) π/4\n(C) π/2\n(D) π" }
        ]
      }
    }
  ]
};
