
export const chapter13 = {
  class: "2nd PUC",
  chapter_number: "13",
  chapter_title: "Probability",
  sections: [
    {
      section_title: "13.1 Introduction",
      content: "In this chapter, we shall discuss the important concept of conditional probability of an event given that another event has occurred, which will be helpful in understanding the Bayes' theorem, multiplication rule of probability and independence of events."
    },
    {
      section_title: "13.2 Conditional Probability",
      content: "If E and F are two events associated with the same sample space of a random experiment, the conditional probability of the event E given that F has occurred, i.e. P (E|F) is given by P(E|F) = P(E ∩ F) / P(F) provided P(F) ≠ 0.",
      exercises: {
        title: "EXERCISE 13.1",
        questions: [
          { id: "1", text: "Given that E and F are events such that P(E) = 0.6, P(F) = 0.3 and P(E ∩ F) = 0.2, find P(E|F) and P(F|E)" },
          { id: "2", text: "Compute P(A|B), if P(B) = 0.5 and P (A ∩ B) = 0.32" },
          { id: "3", text: "If P(A) = 0.8, P (B) = 0.5 and P(B|A) = 0.4, find (i) P(A ∩ B) (ii) P(A|B) (iii) P(A ∪ B)" },
          { id: "4", text: "Evaluate P(A ∪ B), if 2P(A) = P(B) = 5/13 and P(A|B) = 2/5" },
          { id: "5", text: "If P(A) = 6/11, P(B) = 5/11 and P(A ∪ B) = 7/11, find (i) P(A∩B) (ii) P(A|B) (iii) P(B|A)" },
          { id: "6", text: "A coin is tossed three times, where (i) E : head on third toss , F : heads on first two tosses (ii) E : at least two heads , F : at most two heads (iii) E : at most two tails , F : at least one tail. Determine P(E|F)." },
          { id: "7", text: "Two coins are tossed once, where (i) E : tail appears on one coin, F : one coin shows head (ii) E : no tail appears, F : no head appears. Determine P(E|F)." },
          { id: "8", text: "A die is thrown three times, E : 4 appears on the third toss, F : 6 and 5 appears respectively on first two tosses. Determine P(E|F)." },
          { id: "9", text: "Mother, father and son line up at random for a family picture E : son on one end, F : father in middle. Determine P(E|F)." },
          { id: "10", text: "A black and a red dice are rolled. (a) Find the conditional probability of obtaining a sum greater than 9, given that the black die resulted in a 5. (b) Find the conditional probability of obtaining the sum 8, given that the red die resulted in a number less than 4." },
          { id: "11", text: "A fair die is rolled. Consider events E = {1,3,5}, F = {2,3} and G = {2,3,4,5}. Find (i) P(E|F) and P(F|E) (ii) P(E|G) and P(G|E) (iii) P((E ∪ F)|G) and P((E ∩ F)|G)" },
          { id: "12", text: "Assume that each born child is equally likely to be a boy or a girl. If a family has two children, what is the conditional probability that both are girls given that (i) the youngest is a girl, (ii) at least one is a girl?" },
          { id: "13", text: "An instructor has a question bank consisting of 300 easy True / False questions, 200 difficult True / False questions, 500 easy multiple choice questions and 400 difficult multiple choice questions. If a question is selected at random from the question bank, what is the probability that it will be an easy question given that it is a multiple choice question?" },
          { id: "14", text: "Given that the two numbers appearing on throwing two dice are different. Find the probability of the event ‘the sum of numbers on the dice is 4’." },
          { id: "15", text: "Consider the experiment of throwing a die, if a multiple of 3 comes up, throw the die again and if any other number comes, toss a coin. Find the conditional probability of the event ‘the coin shows a tail’, given that ‘at least one die shows a 3’." },
          { id: "16", text: "If P(A) = 1/2, P(B) = 0, then P(A|B) is\n(A) 0\n(B) 1/2\n(C) not defined\n(D) 1" },
          { id: "17", text: "If A and B are events such that P(A|B) = P(B|A), then\n(A) A ⊂ B but A ≠ B\n(B) A = B\n(C) A ∩ B = φ\n(D) P(A) = P(B)" }
        ]
      }
    },
    {
      section_title: "13.3 Multiplication Theorem on Probability",
      content: "P(E ∩ F) = P(E) P(F|E) = P(F) P(E|F) provided P(E) ≠ 0 and P(F) ≠ 0."
    },
    {
      section_title: "13.4 Independent Events",
      content: "Two events E and F are said to be independent, if P(F|E) = P (F) provided P (E) ≠ 0 and P (E|F) = P (E) provided P (F) ≠ 0. Or P(E ∩ F) = P(E) . P (F).",
      exercises: {
        title: "EXERCISE 13.2",
        questions: [
          { id: "1", text: "If P(A) = 3/5 and P (B) = 1/5, find P (A ∩ B) if A and B are independent events." },
          { id: "2", text: "Two cards are drawn at random and without replacement from a pack of 52 playing cards. Find the probability that both the cards are black." },
          { id: "3", text: "A box of oranges is inspected by examining three randomly selected oranges drawn without replacement. If all the three oranges are good, the box is approved for sale, otherwise, it is rejected. Find the probability that a box containing 15 oranges out of which 12 are good and 3 are bad ones will be approved for sale." },
          { id: "4", text: "A fair coin and an unbiased die are tossed. Let A be the event ‘head appears on the coin’ and B be the event ‘3 on the die’. Check whether A and B are independent events or not." },
          { id: "5", text: "A die marked 1, 2, 3 in red and 4, 5, 6 in green is tossed. Let A be the event, ‘the number is even,’ and B be the event, ‘the number is red’. Are A and B independent?" },
          { id: "6", text: "Let E and F be events with P(E) = 3/5, P(F) = 3/10 and P (E ∩ F) = 1/5. Are E and F independent?" },
          { id: "7", text: "Given that the events A and B are such that P(A) = 1/2, P(A ∪ B) = 3/5 and P(B) = p. Find p if they are (i) mutually exclusive (ii) independent." },
          { id: "8", text: "Let A and B be independent events with P(A) = 0.3 and P(B) = 0.4. Find (i) P(A ∩ B) (ii) P(A ∪ B) (iii) P (A|B) (iv) P (B|A)" },
          { id: "9", text: "If A and B are two events such that P(A) = 1/4, P (B) = 1/2 and P(A ∩ B) = 1/8, find P (not A and not B)." },
          { id: "10", text: "Events A and B are such that P (A) = 1/2, P(B) = 7/12 and P(not A or not B) = 1/4. State whether A and B are independent ?" },
          { id: "11", text: "Given two independent events A and B such that P(A) = 0.3, P(B) = 0.6. Find (i) P(A and B) (ii) P(A and not B) (iii) P(A or B) (iv) P(neither A nor B)" },
          { id: "12", text: "A die is tossed thrice. Find the probability of getting an odd number at least once." },
          { id: "13", text: "Two balls are drawn at random with replacement from a box containing 10 black and 8 red balls. Find the probability that (i) both balls are red. (ii) first ball is black and second is red. (iii) one of them is black and other is red." },
          { id: "14", text: "Probability of solving specific problem independently by A and B are 1/2 and 1/3 respectively. If both try to solve the problem independently, find the probability that (i) the problem is solved (ii) exactly one of them solves the problem." },
          { id: "15", text: "One card is drawn at random from a well shuffled deck of 52 cards. In which of the following cases are the events E and F independent ? (i) E : ‘the card drawn is a spade’ F : ‘the card drawn is an ace’ (ii) E : ‘the card drawn is black’ F : ‘the card drawn is a king’ (iii) E : ‘the card drawn is a king or queen’ F : ‘the card drawn is a queen or jack’." },
          { id: "16", text: "In a hostel, 60% of the students read Hindi newspaper, 40% read English newspaper and 20% read both Hindi and English newspapers. A student is selected at random. (a) Find the probability that she reads neither Hindi nor English newspapers. (b) If she reads Hindi newspaper, find the probability that she reads English newspaper. (c) If she reads English newspaper, find the probability that she reads Hindi newspaper." },
          { id: "17", text: "The probability of obtaining an even prime number on each die, when a pair of dice is rolled is\n(A) 0\n(B) 1/3\n(C) 1/12\n(D) 1/36" },
          { id: "18", text: "Two events A and B will be independent, if\n(A) A and B are mutually exclusive\n(B) P(A'B') = [1 – P(A)] [1 – P(B)]\n(C) P(A) = P(B)\n(D) P(A) + P(B) = 1" }
        ]
      }
    },
    {
      section_title: "13.5 Bayes' Theorem",
      content: "Bayes' Theorem formula and its application.",
      exercises: {
        title: "EXERCISE 13.3",
        questions: [
          { id: "1", text: "An urn contains 5 red and 5 black balls. A ball is drawn at random, its colour is noted and is returned to the urn. Moreover, 2 additional balls of the colour drawn are put in the urn and then a ball is drawn at random. What is the probability that the second ball is red?" },
          { id: "2", text: "A bag contains 4 red and 4 black balls, another bag contains 2 red and 6 black balls. One of the two bags is selected at random and a ball is drawn from the bag which is found to be red. Find the probability that the ball is drawn from the first bag." },
          { id: "3", text: "Of the students in a college, it is known that 60% reside in hostel and 40% are day scholars (not residing in hostel). Previous year results report that 30% of all students who reside in hostel attain A grade and 20% of day scholars attain A grade in their annual examination. At the end of the year, one student is chosen at random from the college and he has an A grade, what is the probability that the student is a hostlier?" },
          { id: "4", text: "In answering a question on a multiple choice test, a student either knows the answer or guesses. Let 3/4 be the probability that he knows the answer and 1/4 be the probability that he guesses. Assuming that a student who guesses at the answer will be correct with probability 1/4. What is the probability that the student knows the answer given that he answered it correctly?" },
          { id: "5", text: "A laboratory blood test is 99% effective in detecting a certain disease when it is in fact, present. However, the test also yields a false positive result for 0.5% of the healthy person tested (i.e. if a healthy person is tested, then, with probability 0.005, the test will imply he has the disease). If 0.1 percent of the population actually has the disease, what is the probability that a person has the disease given that his test result is positive ?" },
          { id: "6", text: "There are three coins. One is a two headed coin (having head on both faces), another is a biased coin that comes up heads 75% of the time and third is an unbiased coin. One of the three coins is chosen at random and tossed, it shows heads, what is the probability that it was the two headed coin ?" },
          { id: "7", text: "An insurance company insured 2000 scooter drivers, 4000 car drivers and 6000 truck drivers. The probability of an accidents are 0.01, 0.03 and 0.15 respectively. One of the insured persons meets with an accident. What is the probability that he is a scooter driver?" },
          { id: "8", text: "A factory has two machines A and B. Past record shows that machine A produced 60% of the items of output and machine B produced 40% of the items. Further, 2% of the items produced by machine A and 1% produced by machine B were defective. All the items are put into one stockpile and then one item is chosen at random from this and is found to be defective. What is the probability that it was produced by machine B?" },
          { id: "9", text: "Two groups are competing for the position on the Board of directors of a corporation. The probabilities that the first and the second groups will win are 0.6 and 0.4 respectively. Further, if the first group wins, the probability of introducing a new product is 0.7 and the corresponding probability is 0.3 if the second group wins. Find the probability that the new product introduced was by the second group." },
          { id: "10", text: "Suppose a girl throws a die. If she gets a 5 or 6, she tosses a coin three times and notes the number of heads. If she gets 1, 2, 3 or 4, she tosses a coin once and notes whether a head or tail is obtained. If she obtained exactly one head, what is the probability that she threw 1, 2, 3 or 4 with the die?" },
          { id: "11", text: "A manufacturer has three machine operators A, B and C. The first operator A produces 1% defective items, where as the other two operators B and C produce 5% and 7% defective items respectively. A is on the job for 50% of the time, B is on the job for 30% of the time and C is on the job for 20% of the time. A defective item is produced, what is the probability that it was produced by A?" },
          { id: "12", text: "A card from a pack of 52 cards is lost. From the remaining cards of the pack, two cards are drawn and are found to be both diamonds. Find the probability of the lost card being a diamond." },
          { id: "13", text: "Probability that A speaks truth is 4/5. A coin is tossed. A reports that a head appears. The probability that actually there was head is\n(A) 4/5\n(B) 1/2\n(C) 1/5\n(D) 2/5" },
          { id: "14", text: "If A and B are two events such that A ⊂ B and P(B) ≠ 0, then which of the following is correct?\n(A) P(A|B) = P(B)/P(A)\n(B) P(A|B) < P(A)\n(C) P(A|B) ≥ P(A)\n(D) None of these" }
        ]
      }
    },
    {
      section_title: "13.6 Random Variables and its Probability Distributions",
      content: "Random variable, Probability distribution, Mean, Variance.",
      exercises: {
        title: "EXERCISE 13.4",
        questions: [
          { id: "1", text: "State which of the following are not the probability distributions of a random variable. Give reasons for your answer." },
          { id: "2", text: "An urn contains 5 red and 2 black balls. Two balls are randomly drawn. Let X represent the number of black balls. What are the possible values of X? Is X a random variable ?" },
          { id: "3", text: "Let X represent the difference between the number of heads and the number of tails obtained when a coin is tossed 6 times. What are possible values of X?" },
          { id: "4", text: "Find the probability distribution of (i) number of heads in two tosses of a coin. (ii) number of tails in the simultaneous tosses of three coins. (iii) number of heads in four tosses of a coin." },
          { id: "5", text: "Find the probability distribution of the number of successes in two tosses of a die, where a success is defined as (i) number greater than 4 (ii) six appears on at least one die" },
          { id: "6", text: "From a lot of 30 bulbs which include 6 defectives, a sample of 4 bulbs is drawn at random with replacement. Find the probability distribution of the number of defective bulbs." },
          { id: "7", text: "A coin is biased so that the head is 3 times as likely to occur as tail. If the coin is tossed twice, find the probability distribution of number of tails." },
          { id: "8", text: "A random variable X has the following probability distribution: X: 0 1 2 3 4 5 6 7; P(X): 0 k 2k 2k 3k k² 2k² 7k²+k. Determine (i) k (ii) P(X < 3) (iii) P(X > 6) (iv) P(0 < X < 3)" },
          { id: "9", text: "The random variable X has a probability distribution P(X) of the following form, where k is some number : P(X) = { k if x=0; 2k if x=1; 3k if x=2; 0 otherwise }. (a) Determine the value of k. (b) Find P (X < 2), P (X ≤ 2), P(X ≥ 2)." },
          { id: "10", text: "Find the mean number of heads in three tosses of a fair coin." },
          { id: "11", text: "Two dice are thrown simultaneously. If X denotes the number of sixes, find the expectation of X." },
          { id: "12", text: "Two numbers are selected at random (without replacement) from the first six positive integers. Let X denote the larger of the two numbers obtained. Find E(X)." },
          { id: "13", text: "Let X denote the sum of the numbers obtained when two fair dice are rolled. Find the variance and standard deviation of X." },
          { id: "14", text: "A class has 15 students whose ages are 14, 17, 15, 14, 21, 17, 19, 20, 16, 18, 20, 17, 16, 19 and 20 years. One student is selected in such a manner that each has the same chance of being chosen and the age X of the selected student is recorded. What is the probability distribution of the random variable X? Find mean, variance and standard deviation of X." },
          { id: "15", text: "In a meeting, 70% of the members favour and 30% oppose a certain proposal. A member is selected at random and we take X = 0 if he opposed, and X = 1 if he is in favour. Find E(X) and Var (X)." },
          { id: "16", text: "The mean of the numbers obtained on throwing a die having written 1 on three faces, 2 on two faces and 5 on one face is\n(A) 1\n(B) 2\n(C) 5\n(D) 8/3" },
          { id: "17", text: "Suppose that two cards are drawn at random from a deck of cards. Let X be the number of aces obtained. Then the value of E(X) is\n(A) 37/221\n(B) 5/13\n(C) 1/13\n(D) 2/13" }
        ]
      }
    },
    {
      section_title: "13.7 Bernoulli Trials and Binomial Distribution",
      content: "Bernoulli trials and Binomial distribution B(n, p).",
      exercises: {
        title: "EXERCISE 13.5",
        questions: [
          { id: "1", text: "A die is thrown 6 times. If ‘getting an odd number’ is a success, what is the probability of (i) 5 successes? (ii) at least 5 successes? (iii) at most 5 successes?" },
          { id: "2", text: "A pair of dice is thrown 4 times. If getting a doublet is considered a success, find the probability of two successes." },
          { id: "3", text: "There are 5% defective items in a large bulk of items. What is the probability that a sample of 10 items will include not more than one defective item?" },
          { id: "4", text: "Five cards are drawn successively with replacement from a well-shuffled deck of 52 cards. What is the probability that (i) all the five cards are spades? (ii) only 3 cards are spades? (iii) none is a spade?" },
          { id: "5", text: "The probability that a bulb produced by a factory will fuse after 150 days of use is 0.05. Find the probability that out of 5 such bulbs (i) none (ii) not more than one (iii) more than one (iv) at least one will fuse after 150 days of use." },
          { id: "6", text: "A bag consists of 10 balls each marked with one of the digits 0 to 9. If four balls are drawn successively with replacement from the bag, what is the probability that none is marked with the digit 0?" },
          { id: "7", text: "In an examination, 20 questions of true-false type are asked. Suppose a student tosses a fair coin to determine his answer to each question. If the coin falls heads, he answers 'true'; if it falls tails, he answers 'false'. Find the probability that he answers at least 12 questions correctly." },
          { id: "8", text: "Suppose X has a binomial distribution B(6, 1/2). Show that X = 3 is the most likely outcome." },
          { id: "9", text: "On a multiple choice examination with three possible answers for each of the five questions, what is the probability that a candidate would get four or more correct answers just by guessing ?" },
          { id: "10", text: "A person buys a lottery ticket in 50 lotteries, in each of which his chance of winning a prize is 1/100. What is the probability that he will win a prize (a) at least once (b) exactly once (c) at least twice?" },
          { id: "11", text: "Find the probability of getting 5 exactly twice in 7 throws of a die." },
          { id: "12", text: "Find the probability of throwing at most 2 sixes in 6 throws of a single die." },
          { id: "13", text: "It is known that 10% of certain articles manufactured are defective. What is the probability that in a random sample of 12 such articles, 9 are defective?" },
          { id: "14", text: "In a box containing 100 bulbs, 10 are defective. The probability that out of a sample of 5 bulbs, none is defective is\n(A) 10⁻¹\n(B) (1/2)⁵\n(C) (9/10)⁵\n(D) 9/10" },
          { id: "15", text: "The probability that a student is not a swimmer is 1/5. Then the probability that out of five students, four are swimmers is\n(A) ⁵C₄ (4/5)⁴ (1/5)\n(B) (4/5)⁴ (1/5)\n(C) ⁵C₁ (1/5) (4/5)⁴\n(D) None of these" }
        ]
      }
    },
    {
      section_title: "Miscellaneous Examples",
      content: "Miscellaneous examples on Probability.",
      exercises: {
        title: "Miscellaneous Exercise on Chapter 13",
        questions: [
          { id: "1", text: "A and B are two events such that P (A) ≠ 0. Find P(B|A), if (i) A is a subset of B (ii) A ∩ B = φ" },
          { id: "2", text: "A couple has two children, (i) Find the probability that both children are males, if it is known that at least one of the children is male. (ii) Find the probability that both children are females, if it is known that the elder child is a female." },
          { id: "3", text: "Suppose that 5% of men and 0.25% of women have grey hair. A grey haired person is selected at random. What is the probability of this person being male? Assume that there are equal number of males and females." },
          { id: "4", text: "Suppose that 90% of people are right-handed. What is the probability that at most 6 of a random sample of 10 people are right-handed?" },
          { id: "5", text: "An urn contains 25 balls of which 10 balls bear a mark 'X' and the remaining 15 bear a mark 'Y'. A ball is drawn at random from the urn, its mark is noted down and it is replaced. If 6 balls are drawn in this way, find the probability that (i) all will bear 'X' mark. (ii) not more than 2 will bear 'Y' mark. (iii) at least one ball will bear 'Y' mark. (iv) the number of balls with 'X' mark and 'Y' mark will be equal." },
          { id: "6", text: "In a hurdle race, a player has to cross 10 hurdles. The probability that he will clear each hurdle is 5/6. What is the probability that he will knock down fewer than 2 hurdles?" },
          { id: "7", text: "A die is thrown again and again until three sixes are obtained. Find the probability of obtaining the third six in the sixth throw of the die." },
          { id: "8", text: "If a leap year is selected at random, what is the chance that it will contain 53 tuesdays?" },
          { id: "9", text: "An experiment succeeds twice as often as it fails. Find the probability that in the next six trials, there will be atleast 4 successes." },
          { id: "10", text: "How many times must a man toss a fair coin so that the probability of having at least one head is more than 90%?" },
          { id: "11", text: "In a game, a man wins a rupee for a six and loses a rupee for any other number when a fair die is thrown. The man decided to throw a die thrice but to quit as and when he gets a six. Find the expected value of the amount he wins / loses." },
          { id: "12", text: "Suppose we have four boxes A,B,C and D containing coloured marbles as given below: A: 1R, 6W, 3B; B: 6R, 2W, 2B; C: 8R, 1W, 1B; D: 0R, 6W, 4B. One of the boxes has been selected at random and a single marble is drawn from it. If the marble is red, what is the probability that it was drawn from box A?, box B?, box C?" },
          { id: "13", text: "Assume that the chances of a patient having a heart attack is 40%. It is also assumed that a meditation and yoga course reduce the risk of heart attack by 30% and prescription of certain drug reduces its chances by 25%. At a time a patient can choose any one of the two options with equal probabilities. It is given that after going through one of the two options the patient selected at random suffers a heart attack. Find the probability that the patient followed a course of meditation and yoga?" },
          { id: "14", text: "If each element of a second order determinant is either zero or one, what is the probability that the value of the determinant is positive? (Assume that the individual entries of the determinant are chosen independently, each value being assumed with probability 1/2)." },
          { id: "15", text: "An electronic assembly consists of two subsystems, say, A and B. From previous testing procedures, the following probabilities are assumed to be known: P(A fails) = 0.2, P(B fails alone) = 0.15, P(A and B fail) = 0.15. Evaluate the following probabilities (i) P(A fails|B has failed) (ii) P(A fails alone)" },
          { id: "16", text: "Bag I contains 3 red and 4 black balls and Bag II contains 4 red and 5 black balls. One ball is transferred from Bag I to Bag II and then a ball is drawn from Bag II. The ball so drawn is found to be red in colour. Find the probability that the transferred ball is black." },
          { id: "17", text: "If A and B are two events such that P(A) ≠ 0 and P(B | A) = 1, then\n(A) A ⊂ B\n(B) B ⊂ A\n(C) B = φ\n(D) A = φ" },
          { id: "18", text: "If P(A|B) > P(A), then which of the following is correct :\n(A) P(B|A) < P(B)\n(B) P(A ∩ B) < P(A) . P(B)\n(C) P(B|A) > P(B)\n(D) P(B|A) = P(B)" },
          { id: "19", text: "If A and B are any two events such that P(A) + P(B) – P(A and B) = P(A), then\n(A) P(B|A) = 1\n(B) P(A|B) = 1\n(C) P(B|A) = 0\n(D) P(A|B) = 0" }
        ]
      }
    }
  ]
};
